import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  movieId = 0;
  ngOnInit(): void {

    this.movieId = +this.route.snapshot.paramMap.get('id');

  }

}
