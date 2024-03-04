import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../../../shared/utils/utils.service';

@Component({
  selector: 'app-upload-cvc',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
  ],
  templateUrl: './upload-cvc.component.html',
  styleUrl: './upload-cvc.component.css'
})
export class UploadCVCComponent {

  public errorMsg: string = '';

  public contentFile: string | null | ArrayBuffer = null;

  constructor(
    private utils: UtilsService,
  ) { }

  onFileSelected(event: any) {
    this.contentFile = null;
    this.errorMsg = '';
    const file: File = event.target.files[0];
    console.log('Archivo seleccionado:', file);
    if (!file) {
      this.errorMsg = 'No se ha adjuntado archivo';
      return;
    } else if (!file.type.includes('csv')) {
      this.errorMsg = 'Formato de archivo inválido';
      return;
    } else if (file.size == 0) {
      this.errorMsg = 'El archivo se encuentra vacío';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const contenidoDelArchivo: string | null | ArrayBuffer = reader.result;
      if (contenidoDelArchivo && contenidoDelArchivo.toString().length > 0) {
        console.log(contenidoDelArchivo);
        this.contentFile = contenidoDelArchivo;
      } else {
        this.errorMsg = 'No se encuentra información válida dentro del archivo';
      }
    };
    reader.readAsText(file);
  }

}
