import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

import {IMovie, IMovies} from "../interfaces";
import {urls} from "../constants";
import {ISingleMovie} from "../interfaces/single-movie.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number = 1): Observable<IMovies> {
    return this.httpClient.get<IMovies>(urls.movies, {params: {page}})
  }

  getById(id: number): Observable<ISingleMovie> {
    return this.httpClient.get<ISingleMovie>(`${urls.movie}/${id}`)
  }

}
