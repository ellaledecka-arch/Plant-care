import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
//import { IonIcon } from '@ionic/angular/standalone'; 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, /*IonIcon*/],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {

  topPlants: Plant[] = [];

  lowLightPlants: Plant[] = [];
  brightLightPlants: Plant[] = [];
  directLightPlants: Plant[] = [];

  lowWaterPlants: Plant[] = [];
  mediumWaterPlants: Plant[] = [];
  highWaterPlants: Plant[] = [];

  constructor(
    private plantService: PlantService,
    private router: Router
  ) {}

  ngOnInit() {
    const plants = this.plantService.getAll();

    this.topPlants = this.plantService.getTop();

    this.lowLightPlants = plants.filter(p => p.light === 'low');
    this.brightLightPlants = plants.filter(p => p.light === 'bright');
    this.directLightPlants = plants.filter(p => p.light === 'direct');

    this.lowWaterPlants = plants.filter(p => p.water === 'low');
    this.mediumWaterPlants = plants.filter(p => p.water === 'medium');
    this.highWaterPlants = plants.filter(p => p.water === 'high');
  }

  openDetail(id: number) {
    this.router.navigate(['/plant', id]);
  }

  openCategory(type: 'light' | 'water', value: string) {
  this.router.navigate(['/tabs/list', type, value]);
}

}
