import {IGenre} from "./genre.interface";
import {ICountry} from "./country.interface";
import {ICompany} from "./company.interface";

export interface ISingleMovie {
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ICompany[];
  production_countries: ICountry[];
  release_date: string;
  runtime: number;
  status: string;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
}
