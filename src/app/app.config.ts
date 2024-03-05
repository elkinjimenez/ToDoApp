import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()),
  provideAnimationsAsync(),
  provideHttpClient(),
  importProvidersFrom(BlockUIModule.forRoot({ message: 'Hola' }))
  ]
};
