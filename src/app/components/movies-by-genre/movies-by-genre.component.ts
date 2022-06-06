import { Component, OnInit } from '@angular/core';

import {GenreService} from "../../services";
import {IMovie} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  movies: IMovie[];


  constructor(private genreService: GenreService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=> {
      this.genreService.getMovieByGenre(id).subscribe(({results}) => this.movies = results)
    })
  }

}
