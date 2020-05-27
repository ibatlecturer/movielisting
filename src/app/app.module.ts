import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovielistingComponent } from './components/movielisting/movielisting.component';

import {FormsModule} from '@angular/forms';
import { FilterMoviePipe } from './pipes/filter-movie.pipe';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistingComponent,
    FilterMoviePipe,
    MovieDetailComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
