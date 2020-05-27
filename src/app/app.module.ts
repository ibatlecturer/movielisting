import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovielistingComponent } from './components/movielisting/movielisting.component';

import {FormsModule} from '@angular/forms';
import { FilterMoviePipe } from './pipes/filter-movie.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovielistingComponent,
    FilterMoviePipe
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
