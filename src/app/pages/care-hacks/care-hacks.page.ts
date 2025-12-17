import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-care-hacks',
  templateUrl: './care-hacks.page.html',
  styleUrls: ['./care-hacks.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CareHacksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
