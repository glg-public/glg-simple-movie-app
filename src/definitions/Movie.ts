export enum MediaType {
  TV = "tv",
  MOVIE = "movie",
}

export interface Movie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  first_air_date?: string;
  release_date?: string;
  genre_ids: number[];
  media_type: MediaType;
  name?: string;
  title?: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
