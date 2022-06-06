import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div><router-outlet></router-outlet></div>',
  styles: [' div {background: #191b1f; color: #61626b; margin: 0; height: 100%}'],
})
export class AppComponent {
  title = 'movieDB';
}
