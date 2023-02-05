import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';
import { IGenre, IMovie } from 'src/app/SharedClassesandtypes/Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  moviesList: IMovie[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe((moviesList) => {
      this.moviesList = moviesList.results;
      console.log(moviesList);
    });
  }
}
