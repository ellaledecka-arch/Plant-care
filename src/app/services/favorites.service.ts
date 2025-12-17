import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  // 🔑 kľúče v perzistentnej pamäti
  private PLANTS_KEY = 'favorite_plants';
  private HACKS_KEY = 'favorite_hacks';

  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    await this.storage.create();
  }

  // =========================
  // 🌿 RASTLINY
  // =========================

  async getPlantIds(): Promise<number[]> {
    return (await this.storage.get(this.PLANTS_KEY)) ?? [];
  }

  async isPlantFavorite(id: number): Promise<boolean> {
    const ids = await this.getPlantIds();
    return ids.includes(id);
  }

  async togglePlant(id: number): Promise<boolean> {
    const ids = await this.getPlantIds();
    const exists = ids.includes(id);

    const updated = exists
      ? ids.filter(x => x !== id)
      : [...ids, id];

    await this.storage.set(this.PLANTS_KEY, updated);
    return !exists;
  }

  // =========================
  // 💡 CARE HACKS
  // =========================

  async getHackIds(): Promise<number[]> {
    return (await this.storage.get(this.HACKS_KEY)) ?? [];
  }

  async isHackFavorite(id: number): Promise<boolean> {
    const ids = await this.getHackIds();
    return ids.includes(id);
  }

  async toggleHack(id: number): Promise<boolean> {
    const ids = await this.getHackIds();
    const exists = ids.includes(id);

    const updated = exists
      ? ids.filter(x => x !== id)
      : [...ids, id];

    await this.storage.set(this.HACKS_KEY, updated);
    return !exists;
  }
}
