import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
//import { IonIcon } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PlantService } from '../../services/plant.service';
import { FavoritesService } from '../../services/favorites.service';
import { Plant } from '../../models/plant.model';

@Component({
  standalone: true,
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.page.html',
  styleUrls: ['./plant-detail.page.scss'],
  imports: [IonicModule, CommonModule, /*IonIcon*/],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlantDetailPage {
  plant?: Plant;
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService,
    private favorites: FavoritesService
  ) {}

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.plant = this.plantService.getAll().find(p => p.id === id);

    if (this.plant) {
      this.isFavorite = await this.favorites.isPlantFavorite(this.plant.id);
    }
  }

  async toggleFavorite() {
    if (!this.plant) return;
    this.isFavorite = await this.favorites.togglePlant(this.plant.id);
  }
}
