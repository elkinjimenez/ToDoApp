import { Injectable } from '@angular/core';
import { ResponseClaroCo } from '../../models/claroCo/response-claro-co';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  public user!: ResponseClaroCo;

  constructor() { }

}
