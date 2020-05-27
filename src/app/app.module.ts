import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovielistingComponent } from './components/movielisting/movielisting.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
