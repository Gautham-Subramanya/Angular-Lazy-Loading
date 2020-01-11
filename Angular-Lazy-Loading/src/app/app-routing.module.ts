import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooklistingComponent } from './dashboard/booklisting/booklisting.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'books',
   loadChildren: () => import('./dashboard/dashboard.module').then(m=> m.DashboardModule)},
  {path:'customers', 
   loadChildren: () => import('./customer/customer.module').then(m=> m.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
