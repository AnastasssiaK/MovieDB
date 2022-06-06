import {Component, Input, OnInit, Output} from '@angular/core';
import {IMovie, IMovies} from "../../interfaces";
import {MovieService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList: IMovies;
  movies: IMovie[];
  movieTitle: any;
  page: number = 1;
  itemsPerPage: number;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.movieService.getAll(page).subscribe(value => {
        this.movieList = value
        this.movies  = this.movieList.results
        this.page = this.movieList.page;
      })
    })
  }

  Search() {
    if (this.movieTitle === "") {
      this.ngOnInit()
    } else {
      this.movies = this.movies.filter(res => {
        return res.title.toLowerCase().match(this.movieTitle.toLocaleLowerCase())
      })
    }
  }

  prev() {
    if (this.movieList.page > 1) {
      this.router.navigate([''], {queryParams: {page: this.movieList.page - 1}, queryParamsHandling: 'merge'});
    }
  }

  next() {
    this.router.navigate([''], {queryParams: { page: this.movieList.page + 1},  queryParamsHandling: 'merge'})
  }
}
