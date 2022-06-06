import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {ActivatedRoute} from "@angular/router";
import {ISingleMovie} from "../../interfaces";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: ISingleMovie;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
        this.movieService.getById(id).subscribe(value => this.movieDetails = value)
      }
    )
  }
}
