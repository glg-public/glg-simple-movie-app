import axios, { AxiosInstance } from "axios";
import { MediaDetailStore } from "./MediaDetailStore";

const { VITE_SERVER } = import.meta.env;

export class MediaDetailController {
  private apiInstance: AxiosInstance;

  constructor(private readonly mediaDetailStore: MediaDetailStore) {
    this.apiInstance = axios.create({
      baseURL: `${VITE_SERVER}/api/media`,
    });
  }

  public async getMedia(media_type: string, id: string): Promise<void> {
    const response: any = this.apiInstance.get(`${media_type}/${id}`);
    this.mediaDetailStore.setDocument(response.data.media);
  }
}
