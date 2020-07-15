import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies : Movie[];
  valid: boolean = true;

  ngOnInit() {
  }

  getMovies ( year: number ) {
    this.movies = [];
    fetch( `https://jsonmock.hackerrank.com/api/movies?Year=${ year }`, { method: 'GET' } )
      .then( ( response ) => response.json() )
      .then( moviesResponse => {

        if ( moviesResponse.data.length === 0 ) {
          this.valid = false;
          return;
        };

        this.movies = moviesResponse.data;
        
      } );
  };

}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: number;
}
