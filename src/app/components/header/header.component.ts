import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  form: FormGroup;
  // @Input() sidenavHandle: MatSidenav;
  // public title = 'movieDB';
  // private darkThemeIcon = 'nightlight_round';
  // private lightThemeIcon = 'wb_sunny';
  // public lightDarkToggleIcon = this.darkThemeIcon;
  // @Output() darkThemeOn: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private router: Router) {
    this._createForm();
  }

  _createForm(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.minLength(2), Validators.maxLength(30)])
    });
  }

  search(): void {
    // console.log(this.form.value.search);
      this.router.navigate(['/search/movie'], {queryParams: {query: this.form.value.search}});
    this.form.reset();
  }

  // public doToggleLightDark(toggle: MatSlideToggle) {
  //   // this.lightDarkToggleIcon = toggle.checked ?  this.darkThemeIcon : this.lightThemeIcon;
  //   // this.darkThemeOn.emit(!toggle.checked);
  // }
  public doToggleLightDark(lightDarkToggle: MatSlideToggle) {
    document.getElementsByClassName('header')[0].classList.toggle('light-theme');
  }
}
