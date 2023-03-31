import type { PageLoad } from "./$types";

export const load: PageLoad = async ({fetch}) => {

    const recents = await fetch('/api/anime/recent');
    const topAiring = await fetch('/api/anime/top-airing');
    return {
        recents: recents.json(),
        topAiring: topAiring.json(),
    }
};