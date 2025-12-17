import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './favorites.page.html',
})
export class FavoritesPage {
  plants: Plant[] = [];

  constructor(
    private favorites: FavoritesService,
    private plantService: PlantService,
    private router: Router
  ) {}

  async ionViewWillEnter() {
    const ids = await this.favorites.getIds();
    this.plants = ids
      .map(id => this.plantService.getAll().find(p => p.id === id))
      .filter(Boolean) as Plant[];
  }

  openDetail(id: number) {
    this.router.navigate(['/plant', id]);
  }
}
