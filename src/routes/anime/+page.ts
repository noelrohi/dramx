import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const pages = [1, 2]; // modify this if want more data
  const results = [];

  for (const page of pages) {
    const response = await fetch(`/api/anime/recent?page=${page}`);
    const data = await response.json();
    results.push(...data.results);
  }

  return {
    recents: {
      results
    },
    topAiring: await fetch('/api/anime/top-airing').then(res => res.json()),
  };
};