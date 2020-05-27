import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'filterMovie'
})
export class FilterMoviePipe implements PipeTransform {

  transform(listOfMovies: Movie[], movieSearchFilter:string): unknown {
    if (!listOfMovies || !listOfMovies.length) return [];
    if (!movieSearchFilter) return listOfMovies;

    return (listOfMovies
    .filter(movie => movie.title.toLowerCase()
    .indexOf(movieSearchFilter.toLowerCase()) >= 0
    
    || movie.director.toLowerCase()
    .indexOf(movieSearchFilter.toLowerCase()) >= 0

    ||
    +movieSearchFilter == movie.year

    
    ));


    //return null;
  }

}
