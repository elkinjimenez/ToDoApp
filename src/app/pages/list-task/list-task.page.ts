import { addIcons } from 'ionicons';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonCheckbox, IonInput, IonModal, IonFabButton, IonIcon, IonToolbar, IonButtons, IonPopover, IonLabel } from '@ionic/angular/standalone';
import { saveOutline, chevronForwardOutline, trash, chevronForwardCircle, document, colorPalette, globe, addOutline, menu, ellipsisVertical, chevronDownCircle, radioButtonOnOutline } from 'ionicons/icons';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.page.html',
  styleUrls: ['./list-task.page.scss'],
  standalone: true,
  imports: [IonLabel, IonPopover,
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

  tasks: Task[] = []

  constructor(
  ) {
    addIcons({ ellipsisVertical, radioButtonOnOutline, trash, chevronForwardOutline, chevronDownCircle, document, colorPalette, globe, menu, addOutline, chevronForwardCircle, saveOutline });
  }

  ngOnInit() {
    this.testTasks();
  }

  testTasks() {
    this.tasks = [
      { id: 1, title: 'This is a first task', done: false },
      { id: 2, title: 'This is a second task', done: true },
      { id: 3, title: 'This is a third task', done: false },
      { id: 4, title: 'This is a fourth task', done: false },
      { id: 5, title: 'This is a fifth task', done: false },
      { id: 6, title: 'This is a sixth task', done: false },
    ];
  }

  trash(id: number) {
    console.log('trash', id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  addTask() {
    this.tasks.push({ id: this.tasks.length + 1, title: this.newTask, done: false });
    this.newTask = '';
    this.modal.dismiss();
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

interface Task {
  id: number;
  title: string;
  done: boolean;
}
