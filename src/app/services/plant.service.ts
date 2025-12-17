import { Injectable } from '@angular/core';
import { Plant } from '../models/plant.model';
import { PLANTS } from '../../assets/data/plants';

@Injectable({ providedIn: 'root' })
export class PlantService {

  getAll(): Plant[] {
    return PLANTS;
  }

  getTop(): Plant[] {
    return PLANTS.slice(0, 5);
  }

  getLowLight(): Plant[] {
    return PLANTS.filter(p => p.light === 'low');
  }

  getEasyWater(): Plant[] {
    return PLANTS.filter(p => p.water === 'low');
  }
}
