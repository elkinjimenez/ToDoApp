import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestClaroCo } from '../../models/claroCo/request-claro-co';
import { ResponseGeneral } from '../../models/response-general';

@Injectable({
  providedIn: 'root'
})
export class ClaroCoService {

  constructor(
    private _http: HttpClient,
  ) { }

  public consultReportClaroCo(body: RequestClaroCo) {
    const URL = 'http://100.123.40.61:7225/WSCodesCVC-web/webresources/codesCVC/consultUserClaroCo';
    return this._http.put<ResponseGeneral>(URL, body);
  }

}
