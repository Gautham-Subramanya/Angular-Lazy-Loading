import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistingComponent } from './booklisting/booklisting.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [BooklistingComponent, BookComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
