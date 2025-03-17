import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonFabButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add, homeOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonIcon, IonTabButton, IonTabBar, IonTabs, CommonModule, FormsModule]
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons({ homeOutline, add, personOutline });
  }

  ngOnInit() {
  }

}
