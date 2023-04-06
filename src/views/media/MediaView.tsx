import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Button from "@mui/material/Button";

import { useStores } from "../../hooks/useStores";
import { Movie } from "../../definitions/Movie";
import { MediaController } from "./MediaController";

import { MediaComponent } from "./components/media/MediaComponent";

import "./Media.scss";

export const MediaView = observer(() => {
  const { mediaStore } = useStores();
  const { media } = mediaStore;

  const [contentType, setContentType] = useState<string>("all");
  const mediaController = new MediaController(mediaStore);

  useEffect(() => {
    (async () => {
      await mediaController.getAll();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNav = async (type: string) => {
    setContentType(type);
    switch (type) {
      case "all":
        await mediaController.getAll();
        break;
      case "movies":
        await mediaController.getMovies();
        break;
      case "tv":
        await mediaController.getTv();
        break;
      default:
        console.error(`Unknown type ${contentType}.`);
    }
  };

  return (
    <div>
      <div className="navigation">
        <Button
          size="small"
          variant="text"
          className={contentType === "all" ? "selected" : undefined}
          onClick={() => handleNav("all")}
        >
          All
        </Button>
        <Button
          size="small"
          variant="text"
          className={contentType === "movies" ? "selected" : undefined}
          onClick={() => handleNav("movies")}
        >
          Movies
        </Button>
        <Button
          size="small"
          variant="text"
          className={contentType === "tv" ? "selected" : undefined}
          onClick={() => handleNav("tv")}
        >
          TV Shows
        </Button>
      </div>
      <div id="media">
        {media.map((m: Movie, i) => (
          <MediaComponent movie={m} key={i} />
        ))}
      </div>
    </div>
  );
});
