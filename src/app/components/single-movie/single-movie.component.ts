import {Component, Input, OnInit} from '@angular/core';
import {IMovie, ISingleMovie} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services";

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  movieDetails: ISingleMovie;
  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedValue: number = 0;
  isMouseover = true;

  @Input()
  singleMovie: IMovie;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.selectedValue = this.singleMovie.vote_average;
  }

  getDetails(): void {
    this.router.navigate([`/movie/${this.singleMovie.id}`], {relativeTo: this.activatedRoute})
  }


  countStar(star: number): void {
    this.isMouseover = false;
    this.selectedValue = star;
  }

  addClass(star: number): void {
    if (this.isMouseover) {
      this.selectedValue = star;
    }
  }

  removeClass(): void {
    if (this.isMouseover) {
      this.selectedValue = 0;
    }
  }
}
