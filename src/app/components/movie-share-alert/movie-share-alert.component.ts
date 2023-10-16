import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies } from 'src/app/models/Movies';

@Component({
  selector: 'app-movie-share-alert',
  templateUrl: './movie-share-alert.component.html',
  styleUrls: ['./movie-share-alert.component.css'],
})
export class MovieShareAlertComponent {
  @Input() movie: Movies | undefined;
  @Output() notifyMe: EventEmitter<Movies> = new EventEmitter();

  notify(movie: Movies) {
    this.notifyMe.emit(movie);
  }
}
