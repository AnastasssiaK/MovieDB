import {Component, Input, OnInit} from '@angular/core';
import {ISingleMovie} from "../../interfaces";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  movieDetails: ISingleMovie;
  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedValue: number = 0;
  isMouseover = true;

  @Input()
  vote: number;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedValue = this.vote;
  }

  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
  }

  addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
    }
  }

  removeClass() {
    if (this.isMouseover) {
      this.selectedValue = 0;
    }
  }

}
