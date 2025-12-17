import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { PlantService } from '../../services/plant.service';
import { FavoritesService } from '../../services/favorites.service';
import { Plant } from '../../models/plant.model';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './plant-list.page.html',
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
    // filter
    this.route.queryParams.subscribe(params => {
      const filter = params['filter'];

      if (filter === 'low-light') {
        this.plants = this.plantService.getLowLight();
      } else if (filter === 'easy-water') {
        this.plants = this.plantService.getEasyWater();
      } else {
        this.plants = this.plantService.getAll();
      }
    });

    // favorites
    const ids = await this.favorites.getPlantIds();
    this.favoriteIds = new Set(ids);
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
