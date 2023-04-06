import bind from "bind-decorator";

import { Request, Response } from "express";
import { Movie, MediaType } from "../../../src/definitions/Movie";
import { MovieDB } from "../../services/MovieDB";

const filterName = ["sex", "magic mike"];

export class MediaController {
  private filterMedia(media: Movie[]): Movie[] {
    return media
      .filter((m) => !m.adult)
      .filter((m) => !filterName.find((fn) => m.name?.toLowerCase().includes(fn)))
      .filter((m) => !filterName.find((fn) => m.title?.toLowerCase().includes(fn)))
      .filter((m) => {
        return m.original_language === "en";
      });
  }

  @bind
  public async getMedia(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const mediaType = req.params.mediaType as MediaType;
      const movieService = new MovieDB();
      const media = await movieService.getMedia(mediaType, Number(id));
      res.status(200).json({ media });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ success: false, error: "INTERNAL_ERROR" });
    }
  }

  @bind
  public async getAllTrending(req: Request, res: Response): Promise<void> {
    try {
      const movieService = new MovieDB();
      const media = await movieService.getTrending();
      res.status(200).json({ media: this.filterMedia(media) });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ success: false, error: "INTERNAL_ERROR" });
    }
  }

  @bind
  public async getTrendingMovies(req: Request, res: Response): Promise<void> {
    try {
      const movieService = new MovieDB();
      const media = await movieService.getTrendingMovies();
      res.status(200).json({ media: this.filterMedia(media) });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ success: false, error: "INTERNAL_ERROR" });
    }
  }

  @bind
  public async getTrendingTv(req: Request, res: Response): Promise<void> {
    try {
      const movieService = new MovieDB();
      const media = await movieService.getTrendingTv();
      res.status(200).json({ media: this.filterMedia(media) });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ success: false, error: "INTERNAL_ERROR" });
    }
  }
}
