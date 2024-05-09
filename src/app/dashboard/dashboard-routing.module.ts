import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AddincidentComponent } from './add_incident/addincident.component';

const routes: Routes = [
  {path:'',component:DashComponent},
  {path:'ajouter',component:AddincidentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
