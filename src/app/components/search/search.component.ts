import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {IMovie, IMovies} from "../../interfaces";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieList: IMovies;
  movies: IMovie[];

  constructor(private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({query}) => {
      this.movieService.getMovieBySearch(query).subscribe(value => {
        this.movieList = value;
        this.movies = this.movieList.results;
      });
    });
  }

}
