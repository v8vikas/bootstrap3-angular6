import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { TitleHeaderComponent } from './title-header/title-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedTableComponent,
    TitleHeaderComponent
  ],
  exports: [
    SharedTableComponent,
    TitleHeaderComponent
  ]
})
export class SharedModule { }
