import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistingComponent } from './booklisting/booklisting.component';
import { BookauthoringComponent } from './bookauthoring/bookauthoring.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path:'', component: BooklistingComponent},
  {path:'author', component: BookauthoringComponent},
  {path:'/details/id', component: BookComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }