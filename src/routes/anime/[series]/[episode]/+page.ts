import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {

	const episodeResult = await fetch(`/api/anime/watch/${params.series}-episode-${params.episode}`);
	const seriesResult = await fetch(`/api/anime/${params.series}`);
	const result =  episodeResult.json();
	const series = seriesResult.json();
	return {
		result,
		series: series,
		episode: params.episode,
	}
}