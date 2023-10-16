import { Component, Output, EventEmitter } from '@angular/core';
import { Movies, movies } from 'src/app/models/Movies';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  search!: string;
  movies: Movies[] = [...movies];
  filteredMovieList: Movies[] = [...movies];

  onNotify(movie: Movies) {
    alert(`${movie.name} movie is on sale`);
  }

  filterMovies(text: string) {
    if (!text) {
      this.filteredMovieList = this.movies;
    }
    this.filteredMovieList = this.movies.filter(
      (movie) =>
        movie.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
