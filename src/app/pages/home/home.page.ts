import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {

  topPlants: Plant[] = [];
  lowLightPlants: Plant[] = [];
  easyWaterPlants: Plant[] = [];

  constructor(
    private plantService: PlantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.topPlants = this.plantService.getTop();
    this.lowLightPlants = this.plantService.getLowLight();
    this.easyWaterPlants = this.plantService.getEasyWater();
  }

  openDetail(id: number) {
    this.router.navigate(['/plant', id]);
  }

  openCategory(type: string) {
    this.router.navigate(['/tabs/list'], {
      queryParams: { filter: type }
    });
  }
}
