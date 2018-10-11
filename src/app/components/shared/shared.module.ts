import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { InstructionComponent } from './model/instruction/instruction.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedTableComponent,
    TitleHeaderComponent,
    InstructionComponent
  ],
  exports: [
    SharedTableComponent,
    TitleHeaderComponent,
    InstructionComponent
  ]
})
export class SharedModule { }
