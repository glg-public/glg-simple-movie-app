import { Router as ExpressRouter } from "express";

import { MediaController } from "./MediaController";

export class MediaRouter {
  public getRouter(): ExpressRouter {
    const controller = new MediaController();
    const router = ExpressRouter();
    router.get("/trending", controller.getAllTrending);
    router.get("/trending/movies", controller.getTrendingMovies);
    router.get("/trending/tv", controller.getTrendingTv);
    router.get("/:mediaType/:id", controller.getMedia);
    return router;
  }
}
