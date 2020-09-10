import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { InputDirective } from './input.directive';



@NgModule({
  declarations: [InputComponent, InputDirective],
  imports: [
    CommonModule
  ],
  exports: [ InputComponent ]
})
export class InputModule { }
