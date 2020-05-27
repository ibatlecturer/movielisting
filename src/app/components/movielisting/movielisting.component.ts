import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieserviceService } from 'src/app/services/movieservice.service';

@Component({
  selector: 'app-movielisting',
  templateUrl: './movielisting.component.html',
  styleUrls: ['./movielisting.component.css']
})
export class MovielistingComponent implements OnInit {

  movies: Movie[] = [];
  constructor(private movieService: MovieserviceService) { }

  ngOnInit(): void {

    this.getMovieListing();
  }

  getMovieListing() {

    this.movieService.getListOfMovies().subscribe(movies => this.movies = movies);

  }

}
