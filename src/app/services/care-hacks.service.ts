import { Injectable } from '@angular/core';
import { CARE_HACKS } from '../../assets/data/care-hacks';
import { CareHack } from '../models/care-hacks.model';

@Injectable({ providedIn: 'root' })
export class CareHacksService {

  getAll(): CareHack[] {
    return CARE_HACKS;
  }

  getById(id: number): CareHack | undefined {
    return CARE_HACKS.find(h => h.id === id);
  }
}
