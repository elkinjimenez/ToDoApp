import { ToastController } from '@ionic/angular/standalone';
import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import { checkmarkOutline, closeCircleOutline } from 'ionicons/icons';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private toastController: ToastController,
  ) {
    addIcons({ closeCircleOutline, checkmarkOutline })
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      icon: 'checkmark-outline',
      duration: 4000,
      position: 'top',
      mode: 'ios',
      color: 'primary',
      buttons: [
        {
          icon: 'close-circle-outline',
          role: 'cancel',
          handler: () => {
            console.log('Confirmed');
          }
        }
      ]
    });
    await toast.present();
  }
}
