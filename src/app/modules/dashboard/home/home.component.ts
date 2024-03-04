import { Component } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { FieldsService } from '../../../services/fields/fields.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterOutlet,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isSmallScreen = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private $router: Router,
    public fields: FieldsService,
  ) {
    const user = sessionStorage.getItem(btoa('user:login'));
    if (user) {
      this.fields.user = JSON.parse(atob(user));
    } else {
      this.$router.navigate(['/iniciar-sesion']);
    }
  }

  public logout() {
    sessionStorage.clear();
    this.$router.navigate(['/iniciar-sesion']);
  }

}
