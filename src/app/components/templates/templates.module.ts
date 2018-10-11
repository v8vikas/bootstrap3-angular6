import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './templates.component';
import { SharedModule } from '../shared/shared.module';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ServicesModule.forRoot()
  ],
  declarations: [TemplatesComponent],
  exports: [TemplatesComponent]
})
export class TemplatesModule { }
