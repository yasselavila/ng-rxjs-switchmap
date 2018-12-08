import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found';
import { SearchBarComponent } from './search-bar/search-bar.component';

export { NotFoundComponent, SearchBarComponent };

export const COMPONENTS: Array<ModuleWithProviders | any> = [NotFoundComponent, SearchBarComponent];
