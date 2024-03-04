import { MatButtonModule } from '@angular/material/button';
import { Component, Inject, inject } from '@angular/core';
import { MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
    MatIcon,
  ],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.css'
})
export class SnackBarComponent {

  snackBarRef = inject(MatSnackBarRef);

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

}
