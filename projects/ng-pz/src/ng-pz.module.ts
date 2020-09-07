import { NgModule } from '@angular/core';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { TagComponent } from './components/tag/tag.component';



@NgModule({
  declarations: [
    SelectComponent,
    InputComponent,
    TagComponent
  ],
  imports: [
  ],
  exports: [
    SelectComponent,
    InputComponent,
    TagComponent
  ]
})
export class NgPzModule { }
