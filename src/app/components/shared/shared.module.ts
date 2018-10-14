import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { InstructionComponent } from './model/instruction/instruction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    TitleHeaderComponent,
    InstructionComponent
  ],
  exports: [
    // common modules.
    FormsModule,
    ReactiveFormsModule,


    TitleHeaderComponent,
    InstructionComponent
  ]
})
export class SharedModule { }
