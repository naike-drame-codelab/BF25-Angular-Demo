import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { Demo1Component } from './demo1/demo1.component';
import { SubComponentComponent } from './demo1/sub-component/sub-component.component';


@NgModule({
  declarations: [
    Demo1Component,
    SubComponentComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
