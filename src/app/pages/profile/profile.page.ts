import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { happyOutline } from 'ionicons/icons';
import { Storage } from '@ionic/storage-angular';
import { Profile } from 'src/app/models/profile';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid, IonInput, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

  profile = {} as Profile;

  constructor(
    private storage: Storage,
    private util: UtilService,
  ) {
    addIcons({happyOutline});
  }

  ngOnInit() {
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create();
    this.profile = await this.storage.get('profile') || {} as Profile;
  }

  async saveProfile() {
    await this.storage.set('profile', this.profile);
    this.util.presentToast('Datos guardados correctamente.');
  }

}
