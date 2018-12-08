import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { COMPONENTS } from './components';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS]
})
export class SharedModule {}
