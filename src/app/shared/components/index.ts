import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';

export { NotFoundComponent, SearchBarComponent, SpinnerComponent };

export const COMPONENTS: Array<ModuleWithProviders | any> = [
  NotFoundComponent,
  SearchBarComponent,
  SpinnerComponent
];
