import axios, { AxiosInstance } from "axios";
import { MediaStore } from "./MediaStore";

const { VITE_SERVER } = import.meta.env;

export class MediaController {
  private apiInstance: AxiosInstance;

  constructor(private readonly mediaStore: MediaStore) {
    this.apiInstance = axios.create({
      baseURL: `${VITE_SERVER}/api/media`,
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
