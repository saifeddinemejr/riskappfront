import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { EditIncidentListComponent } from './edit-incident-list/edit-incident-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path: 'dashboard/incidentlist',
    component: IncidentListComponent
  },
  {
    path: 'dashboard/editIncident/:id',
    component: EditIncidentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
