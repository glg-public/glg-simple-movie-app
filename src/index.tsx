import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MediaView } from "./views/media/MediaView";
import { MediaDetailView } from "./views/mediaDetail/MediaDetailView";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MediaView />,
  },
  {
    path: "/:media_type/:id?",
    element: <MediaDetailView />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<RouterProvider router={router} />);
