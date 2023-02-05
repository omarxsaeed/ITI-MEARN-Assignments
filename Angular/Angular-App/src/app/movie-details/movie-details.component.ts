import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../Services/movies.service';
import { IGenre, IMovie } from '../SharedClassesandtypes/Movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  private movieID: number = 0;
  currMovie: IMovie = {} as IMovie;
  genreList: IGenre[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.movieID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.moviesService.getMovieByID(this.movieID).subscribe((movie) => {
      this.currMovie = movie;
    });

    this.moviesService.getMovieGenre().subscribe((movieGenres) => {
      this.genreList = movieGenres;
      console.log(this.genreList);
    });
  }
}
