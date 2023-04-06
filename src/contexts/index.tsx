import React from "react";
import { MediaStore } from "../views/media/MediaStore";
import { MediaDetailStore } from "../views/mediaDetail/MediaDetailStore";

export const StoresContext = React.createContext({
  mediaStore: new MediaStore(),
  mediaDetailStore: new MediaDetailStore(),
});
