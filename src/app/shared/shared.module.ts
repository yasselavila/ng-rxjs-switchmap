import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENTS } from './components';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [CommonModule, RouterModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS]
})
export class SharedModule {}
