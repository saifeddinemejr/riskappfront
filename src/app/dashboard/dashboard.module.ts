import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from './dash/dash.component';
import { AddincidentComponent } from './add_incident/addincident.component';


@NgModule({
  declarations: [
    DashComponent,
    AddincidentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {



}
