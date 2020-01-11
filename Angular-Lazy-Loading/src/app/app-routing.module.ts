import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistingComponent } from './dashboard/booklisting/booklisting.component';
import { BookComponent } from './dashboard/book/book.component';

const routes: Routes = [
  {path:'', component: BooklistingComponent},
  {path:'books', component: BookComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
