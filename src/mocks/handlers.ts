import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`https://image.tmdb.org/t/p/w440_and_h660_face/:id`, async ({ params }) => {
    const buffer = await fetch(`/images/${params.id}`).then((response) => response.arrayBuffer());
    // Use the "HttpResponse.arrayBuffer()" shorthand method
    // to automatically infer the response body buffer's length.
    return HttpResponse.arrayBuffer(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  }),
];
