import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private KEY = 'favorites';

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async getIds(): Promise<number[]> {
    return (await this.storage.get(this.KEY)) ?? [];
  }

  async toggle(id: number): Promise<boolean> {
    const ids = await this.getIds();
    const exists = ids.includes(id);
    const updated = exists ? ids.filter(x => x !== id) : [...ids, id];
    await this.storage.set(this.KEY, updated);
    return !exists;
  }

  async isFavorite(id: number): Promise<boolean> {
    const ids = await this.getIds();
    return ids.includes(id);
  }
}
