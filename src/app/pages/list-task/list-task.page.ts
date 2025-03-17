import { Task } from './../../models/task';
import { addIcons } from 'ionicons';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonCheckbox, IonInput, IonModal, IonFabButton, IonIcon, IonToolbar, IonButtons, IonPopover, IonLabel } from '@ionic/angular/standalone';
import { saveOutline, chevronForwardOutline, trash, chevronForwardCircle, document, colorPalette, globe, addOutline, menu, ellipsisVertical, chevronDownCircle, radioButtonOnOutline } from 'ionicons/icons';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.page.html',
  styleUrls: ['./list-task.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonPopover,
    IonButtons,
    IonToolbar,
    IonIcon, IonFabButton, IonModal, IonInput,
    IonCheckbox, IonItem, IonList, IonContent,
    CommonModule, FormsModule]
})
export class ListTaskPage implements OnInit {

  @ViewChild('popover') popover!: HTMLIonPopoverElement;

  @ViewChild(IonModal) modal!: IonModal;

  isTrashed = false;

  isChecked = false;

  newTask = '';

  today = new Date();

  tasks: Task[] = [];

  constructor(
    private storage: Storage,
  ) {
    addIcons({ ellipsisVertical, radioButtonOnOutline, trash, chevronForwardOutline, chevronDownCircle, document, colorPalette, globe, menu, addOutline, chevronForwardCircle, saveOutline });
  }

  ngOnInit() {
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create();
    this.loadStorage();
  }

  private async loadStorage() {
    const tasks = await this.storage.get('tasks');
    this.tasks = tasks || [];
  }

  trash(id: number) {
    console.log('trash', id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  async addTask() {
    this.tasks.push({ id: this.tasks.length + 1, title: this.newTask, done: false });
    this.newTask = '';
    this.modal.dismiss();
    await this.storage.set('tasks', this.tasks);
  }

  checkAll() {
    this.isChecked = !this.isChecked;
    this.tasks.forEach((task, index) => {
      setTimeout(() => {
        task.done = this.isChecked;
      }, index * 100);
    });
  }

}
