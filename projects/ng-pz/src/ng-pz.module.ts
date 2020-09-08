import { NgModule } from '@angular/core';
import { SelectModule } from './components/select/select.module';
import { InputModule } from './components/input/input.module';
import { TagModule } from './components/tag/tag.module';



@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    SelectModule,
    InputModule,
    TagModule
  ]
})
export class NgPzModule { }
