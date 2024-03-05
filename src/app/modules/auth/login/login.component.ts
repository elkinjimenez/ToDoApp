import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ClaroCoService } from '../../../services/claro-co/claro-co.service';
import { RequestClaroCo } from '../../../models/claroCo/request-claro-co';
import { ResponseGeneral } from '../../../models/response-general';
import { FieldsService } from '../../../services/fields/fields.service';
import { ResponseClaroCo } from '../../../models/claroCo/response-claro-co';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public hide = true;

  public formAuth: FormGroup;

  constructor(
    private fb: FormBuilder,
    private $router: Router,
    private _auth: ClaroCoService,
    private fields: FieldsService,
  ) {
    this.formAuth = this.fb.group({
      user: ['ECM8776G', [
        Validators.required,
        Validators.minLength(4)
      ]],
      password: ['HitsC$023#', [
        Validators.required,
        Validators.minLength(4),
      ]]
    });
  }

  public consultUserClaroCo() {
    const body = {
      user: this.formAuth.controls.user.value,
      password: this.formAuth.controls.password.value,
    } as RequestClaroCo;
    this._auth.consultReportClaroCo(body).subscribe(
      (resp: ResponseGeneral) => {
        console.log('Resp: ', resp);
        if (resp && resp.isValid && resp.data && !resp.data.errorMessage) {
          this.fields.user = resp.data as ResponseClaroCo;
          sessionStorage.setItem(btoa('user:login'), btoa(JSON.stringify(this.fields.user)));
          this.$router.navigate(['/panel']);
        } else {
          alert(resp?.description ? resp.description : 'Falla al autenticarse, por favor intente de nuevo.');
        }
      }
    )
  }

}
