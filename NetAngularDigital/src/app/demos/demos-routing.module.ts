import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { SubComponentComponent } from './demo1/sub-component/sub-component.component';

const routes: Routes = [
  {
    path: '',
    component: Demo1Component,
    children: [
      {
        path: 'subroute',
        component: SubComponentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
