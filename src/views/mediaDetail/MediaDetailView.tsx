import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import { useStores } from "../../hooks/useStores";
import { MediaDetailController } from "./MediaDetailController";

import "./MediaDetail.scss";

export const MediaDetailView = observer(() => {
  const { id, media_type } = useParams();

  const { mediaDetailStore } = useStores();
  const { media } = mediaDetailStore;

  const movieController = new MediaDetailController(mediaDetailStore);

  useEffect(() => {
    if (!id || !media_type) return;
    (async () => {
      await movieController.getMedia(media_type, id);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [media_type, id]);

  return (
    <div>
      {media ? (
        <div>
          <div className="navigation">
            <Link href="/">
              <Button size="small" variant="text">
                Back
              </Button>
            </Link>
          </div>
          <div id="mediaDetail">
            <div>
              <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${media.poster}`} alt="poster" />
            </div>
            <div className="details">
              <div className="title">{media.title || media.name}</div>
              <div className="date">{dayjs(media.release_date || media.first_air_date).format("MMM DD, YYYY")}</div>
              <div className="overview">{media.overview}</div>
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
});
