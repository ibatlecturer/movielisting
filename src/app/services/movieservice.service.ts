import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  private moviesUrl = `http://college-movies.herokuapp.com/`;
  constructor(private http: HttpClient) { }

  getListOfMovies() : Observable<Movie[]> {

    return this.http.get<Movie[]>(this.moviesUrl);
  }
}
