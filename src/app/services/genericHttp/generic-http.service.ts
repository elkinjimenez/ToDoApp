import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from '../../shared/utils/utils.service';
import { EMPTY, Observable, catchError, finalize, retry, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(
    public http: HttpClient,
    private utils: UtilsService,
  ) { }

  get(endPoint: string, infoService: InfoService): Observable<any> {
    this.utils.blockUI.start(infoService.msg_process + '. Por favor espere ...');
    return this.http.get(endPoint)
      .pipe(
        retry(3),
        catchError(err => {
          return this.onCatchError(err, infoService);
        }),
        finalize(() => {
          this.utils.blockUI.stop();
        })
      );
  }

  post(endPoint: string, body: any, infoService: InfoService): Observable<any> {
    this.utils.blockUI.start(infoService.msg_process + '. Por favor espere ...');
    return this.http.post(endPoint, body, httpOptions)
      .pipe(
        retry(3),
        catchError(err => {
          return this.onCatchError(err, infoService);
        }),
        finalize(() => {
          this.utils.blockUI.stop();
        })
      );
  }

  put(endPoint: string, body: any, infoService: InfoService): Observable<any> {
    this.utils.blockUI.start(infoService.msg_process + '. Por favor espere ...');
    return this.http.put(endPoint, body, httpOptions)
      .pipe(
        retry(3),
        catchError(err => {
          return this.onCatchError(err, infoService);
        }),
        finalize(() => {
          this.utils.blockUI.stop();
        })
      );
  }

  private onCatchError(response: { status: number; }, errors: InfoService): Observable<any> {

    if (errors.description_process === '') {
      errors.description_process = 'sin descripción';
    }

    let mensaje = '';
    mensaje = mensaje + 'Error  al ' + errors.description_process;
    if (response.status === 0) {
      mensaje = mensaje + ', no hay conexión con el servidor. Detalle: ' + errors.description_process;
      this.utils.openSnackBar(mensaje, 'WARN');
      return EMPTY;
    } else if (response.status === 400) {
      mensaje = mensaje + ', parámetro(s) erróneo(s) para el servicio. Detalle: ' + errors.description_process;
      this.utils.openSnackBar(mensaje, 'WARN');
      return EMPTY;
    } else if (response.status === 401) {
      this.utils.openSnackBar('Su sesión ha caducado');
    } else if (response.status === 403) {
      mensaje = mensaje + ', no se autorizado para acceder a este recurso. Detalle: ' + errors.description_process;
      this.utils.openSnackBar(mensaje, 'WARN');
      return EMPTY;
    } else if (response.status === 404) {
      mensaje = mensaje + ', recurso no encontrado. Detalle: ' + errors.description_process;
      this.utils.openSnackBar(mensaje, 'WARN');
      return EMPTY;
    } else if (response.status === 405) {
      mensaje = mensaje + ', método del servicio no corresponde. Detalle: ' + errors.description_process;
      this.utils.openSnackBar(mensaje, 'WARN');
      return EMPTY;
    } else if (response.status === 415) {
      mensaje = mensaje + ', error en el formato soportado para el servicio. Detalle: ' + errors.description_process;
      this.utils.openSnackBar(mensaje, 'WARN');
      return EMPTY;
    } else if (response.status === 500) {
      mensaje = mensaje + ', error del sistema: por favor contacte al administrador. Detalle: ' + errors.description_process;
      this.utils.openSnackBar(mensaje, 'WARN');
      return EMPTY;
    } else {
      mensaje = mensaje + ', error inesperado. Detalle: ' + errors.description_process;
      this.utils.openSnackBar(mensaje, 'WARN');
      return EMPTY;
    }
    return throwError(response);
  }

}

interface InfoService {
  msg_process: string
  description_process: string
}
