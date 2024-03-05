import { Injectable } from '@angular/core';
import { RequestClaroCo } from '../../models/claroCo/request-claro-co';
import { GenericHttpService } from '../genericHttp/generic-http.service';

@Injectable({
  providedIn: 'root'
})
export class ClaroCoService {

  constructor(
    private _http: GenericHttpService,
  ) { }

  public consultReportClaroCo(body: RequestClaroCo) {
    const URL = 'http://100.123.40.61:7225/adminotpcvclistas/api/ClaroCo/consultUser';
    return this._http.put(URL, body, { msg_process: 'Iniciando sesión', description_process: 'iniciar de sesión' });
  }

}
