import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './plant-list.page.html',
})
export class PlantListPage {
  plants: Plant[] = [];

  constructor(
    private plantService: PlantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const filter = params['filter'];
      if (filter === 'low-light') {
        this.plants = this.plantService.getLowLight();
      } else if (filter === 'easy-water') {
        this.plants = this.plantService.getEasyWater();
      } else {
        this.plants = this.plantService.getAll();
      }
    });
  }

  openDetail(id: number) {
    this.router.navigate(['/plant', id]);
  }
}
