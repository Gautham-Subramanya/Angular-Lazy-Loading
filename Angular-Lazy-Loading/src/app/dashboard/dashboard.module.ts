import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
// import { BookListingComponent } from './booklisting/BookListingComponent';
// import { BookAuthoringComponent } from './BookAuthoringComponent';
// import { BookComponent } from './BookComponent';
import { BooklistingComponent } from './booklisting/booklisting.component';
import { BookauthoringComponent } from './bookauthoring/bookauthoring.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [ BooklistingComponent, BookauthoringComponent, BookComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
