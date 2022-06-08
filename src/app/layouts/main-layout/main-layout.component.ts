import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  @Input() sidenavHandle: MatSidenav;
  private darkThemeIcon = 'nightlight_round';
  private lightThemeIcon = 'wb_sunny';
  public lightDarkToggleIcon = this.darkThemeIcon;

  constructor() {
  }

  ngOnInit(): void {
  }

  public doToggleLightDark(lightDarkToggle: MatSlideToggle) {
    document.getElementsByClassName('mainLayout')[0].classList.toggle('light-theme');
  }

}
