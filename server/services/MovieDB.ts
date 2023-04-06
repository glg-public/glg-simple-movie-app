import axios, { AxiosInstance } from "axios";
import { MediaType, Movie } from "../../src/definitions/Movie";

const { MOVIE_API } = process.env;

const MOVIE_DB_API = "https://api.themoviedb.org/3/";

export class MovieDB {
  private apiInstance: AxiosInstance;
  constructor() {
    this.apiInstance = axios.create({
      headers: { "Content-Type": " application/json;charset=utf-8", Authorization: `Bearer ${MOVIE_API}` },
      baseURL: MOVIE_DB_API,
    });
  }

  public async getMedia(mediaType: MediaType, movieId: number): Promise<Movie> {
    const response = await this.apiInstance.get(`${mediaType}/${movieId}`);
    return response.data;
  }

  public async getTrending(): Promise<Movie[]> {
    const response = await this.apiInstance.get(`trending/all/week`);
    return response.data.results;
  }

  public async getTrendingMovies(): Promise<Movie[]> {
    const response = await this.apiInstance.get(`trending/movie/week`);
    return response.data.results;
  }

  public async getTrendingTv(): Promise<Movie[]> {
    const response = await this.apiInstance.get(`trending/tv/week`);
    return response.data.results;
  }
}
