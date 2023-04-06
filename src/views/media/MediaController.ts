import axios, { AxiosInstance } from "axios";
import { MediaStore } from "./MediaStore";

const { REACT_APP_SERVER } = process.env;

export class MediaController {
  private apiInstance: AxiosInstance;

  constructor(private readonly mediaStore: MediaStore) {
    this.apiInstance = axios.create({
      baseURL: `${REACT_APP_SERVER}/api/media`,
    });
  }

  public async getAll(): Promise<void> {
    const response = await this.apiInstance.get("trending");
    this.mediaStore.setDocuments(response.data.media);
  }
  public async getMovies(): Promise<void> {
    const response = await this.apiInstance.get("trending/movies");
    this.mediaStore.setDocuments(response.data.media);
  }
  public async getTv(): Promise<void> {
    const response = await this.apiInstance.get("trending/tv");
    this.mediaStore.setDocuments(response.data.media);
  }
}
