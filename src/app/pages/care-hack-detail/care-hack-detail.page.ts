import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CareHacksService } from '../../services/care-hacks.service';
import { CareHack } from '../../models/care-hacks.model';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './care-hack-detail.page.html',
})
export class CareHackDetailPage {
  hack?: CareHack;

  constructor(
    private route: ActivatedRoute,
    private service: CareHacksService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hack = this.service.getById(id);
  }
}
