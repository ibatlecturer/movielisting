import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieserviceService } from 'src/app/services/movieservice.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieserviceService) { }
  movieId = 0;
  movie: Movie;
  ngOnInit(): void {
    this.getMovieListing();
  }

  getMovieListing() {
    const movieId = +this.route.snapshot.paramMap.get('id');
    this.movieService.getListOfMovies().subscribe(movies => {

      this.movie = movies.find(movie => movie.id == movieId );

      console.log(this.movie.runningTimes.mon);
    
    });

  }
}
