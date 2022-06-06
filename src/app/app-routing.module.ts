import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {HomeComponent} from "./components/home/home.component";
import {GenresComponent} from "./components/genres/genres.component";
import {MoviesByGenreComponent} from "./components/movies-by-genre/movies-by-genre.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'movies', component: MoviesComponent},
      {path: 'movie/:id', component: MovieDetailsComponent},
      {path: 'genres', component: GenresComponent},
      {path: 'moviesByGenre/:id', component: MoviesByGenreComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
