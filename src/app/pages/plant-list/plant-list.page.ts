import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { PlantService } from '../../services/plant.service';
import { FavoritesService } from '../../services/favorites.service';
import { Plant } from '../../models/plant.model';

@Component({
  standalone: true,
  selector: 'app-plant-list',
  imports: [IonicModule, CommonModule],
  templateUrl: './plant-list.page.html',
  styleUrls: ['./plant-list.page.scss'],
})
export class PlantListPage {

  plants: Plant[] = [];
  favoriteIds = new Set<number>();

  constructor(
    private plantService: PlantService,
    private favorites: FavoritesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {

    // 🔹 načítanie favorites
    const ids = await this.favorites.getPlantIds();
    this.favoriteIds = new Set(ids);

    // 🔹 filtrovanie podľa route parametrov
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');   // light | water
      const value = params.get('value'); // low | medium | high | bright | direct

      const allPlants = this.plantService.getAll();

      if (type === 'light' && value) {
        this.plants = allPlants.filter(p => p.light === value);
      } 
      else if (type === 'water' && value) {
        this.plants = allPlants.filter(p => p.water === value);
      } 
      else {
        this.plants = allPlants;
      }
    });
  }

  openDetail(id: number) {
    this.router.navigate(['/plant', id]);
  }

  async toggleFavorite(id: number) {
    const isFav = await this.favorites.togglePlant(id);

    if (isFav) {
      this.favoriteIds.add(id);
    } else {
      this.favoriteIds.delete(id);
    }
  }

  isFavorite(id: number): boolean {
    return this.favoriteIds.has(id);
  }
}
