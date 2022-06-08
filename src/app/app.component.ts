import {Component, HostBinding, Renderer2} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  template: '<div><router-outlet></router-outlet></div>',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public title = 'movieDB';
  // public darkModeUI = false;
  //
  // constructor() {}
  //
  // @HostBinding('class')
  // public get themeMode() {
  //   return this.darkModeUI ? 'dark-theme' : 'light-theme';
  // }
  //
  // // @ts-ignore
  // public getDarkThemeOn($event) {
  //   this.darkModeUI = $event;
  // }

}

