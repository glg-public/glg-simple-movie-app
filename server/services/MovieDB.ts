import axios, { AxiosInstance } from "axios";
import { MediaType, Movie } from "../../src/definitions/Movie";

const { MOVIE_DB_API_KEY, MOVIE_DB_API_BASE_URL } = process.env;

export class MovieDB {
  private apiInstance: AxiosInstance;
  constructor() {
    this.apiInstance = axios.create({
      headers: { "Content-Type": " application/json;charset=utf-8", Authorization: `Bearer ${MOVIE_DB_API_KEY}` },
      baseURL: MOVIE_DB_API_BASE_URL,
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
