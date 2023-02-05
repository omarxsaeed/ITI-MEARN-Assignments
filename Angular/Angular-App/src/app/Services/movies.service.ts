import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ICategory } from '../SharedClassesandtypes/category';
import { IMovie } from '../SharedClassesandtypes/Movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.httpClient.get<any>(
      'https://api.themoviedb.org/3/movie/popular?api_key=eb03df251074313f6e24c705f23a1cdc&language=en-US&page=1'
    );
  }

  getMovieByID(movieID: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=eb03df251074313f6e24c705f23a1cdc&language=en-US`
    );
  }

  getMovieByName(movieName: string) {}

  getMovieGenre(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=eb03df251074313f6e24c705f23a1cdc&language=en-US'
    );
  }
}
