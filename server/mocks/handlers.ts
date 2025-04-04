import { http, HttpResponse } from "msw";
import fs from "fs";
import path from "path";
import allTrending from "./data/all.json";
import moviesTrending from "./data/movies.json";
import tvTrending from "./data/tv.json";

const { MOVIE_DB_API_BASE_URL } = process.env;

export const handlers = [
  //Mock a bad api key here
  http.get(`${MOVIE_DB_API_BASE_URL}*`, ({ request }) => {
    const authHeader = request.headers.get("Authorization");
    if (authHeader?.match("undefined")) {
      return new Response("Invalid API key: You must be granted a valid key.", {
        status: 401,
      });
    }
  }),
  http.get(`${MOVIE_DB_API_BASE_URL}trending/all/week`, () => {
    return HttpResponse.json(allTrending);
  }),
  http.get(`${MOVIE_DB_API_BASE_URL}trending/movie/week`, () => {
    return HttpResponse.json(moviesTrending);
  }),
  http.get(`${MOVIE_DB_API_BASE_URL}trending/tv/week`, () => {
    return HttpResponse.json(tvTrending);
  }),
  http.get(`${MOVIE_DB_API_BASE_URL}movie/:id`, ({ params }) => {
    const { id } = params;
    const filePath = path.resolve(__dirname, `./data/movie/${id}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return HttpResponse.json(data);
  }),
  http.get(`${MOVIE_DB_API_BASE_URL}tv/:id`, ({ params }) => {
    const { id } = params;
    const filePath = path.resolve(__dirname, `./data/tv/${id}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return HttpResponse.json(data);
  }),
];
