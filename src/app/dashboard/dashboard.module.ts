import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from './dash/dash.component';
import { AddincidentComponent } from './add_incident/addincident.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {IncidentListComponent} from "../incident-list/incident-list.component";


@NgModule({
  declarations: [
    DashComponent,
    AddincidentComponent,
    IncidentListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
    , FormsModule]
})
export class DashboardModule {



}
