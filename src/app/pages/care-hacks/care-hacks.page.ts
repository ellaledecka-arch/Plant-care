import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CareHacksService } from '../../services/care-hacks.service';
import { FavoritesService } from '../../services/favorites.service';
import { CareHack } from '../../models/care-hacks.model';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './care-hacks.page.html',
})
export class CareHacksPage {

  hacks: CareHack[] = [];
  favoriteIds = new Set<number>();

  constructor(
    private hacksService: CareHacksService,
    private favorites: FavoritesService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.hacks = this.hacksService.getAll();

    const ids = await this.favorites.getHackIds();
    this.favoriteIds = new Set(ids);
  }

  openDetail(id: number) {
    this.router.navigate(['/care-hack', id]);
  }

  async toggleFavorite(id: number) {
    const isFav = await this.favorites.toggleHack(id);

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
