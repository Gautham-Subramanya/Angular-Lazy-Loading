import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BooklistingComponent } from './dashboard/booklisting/booklisting.component';
import { BookComponent } from './dashboard/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistingComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
