import {Component, OnInit} from '@angular/core';
import {GenreService} from "../../services";
import {IGenre} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenre[];

  constructor(private genreService: GenreService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({genresObj}) => {
      this.genreService.getAll(genresObj).subscribe(value => {
        return this.genres = value.genres;
      })
    })
  }
}
