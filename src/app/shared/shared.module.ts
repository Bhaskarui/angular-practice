import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
