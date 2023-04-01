import type { RequestHandler } from '@sveltejs/kit';
import { ANIME_API } from '$env/static/private';

// watch anime episode
// example = .../api/anime/watch/blue-lock-episode-1
export const GET: RequestHandler = async ({ params }) => {
	try {
		const data = await fetch(`${ANIME_API}watch/${params.episode}`).then((res) => res.json());
		if (!data) throw new Error('No data');
		return new Response(JSON.stringify(data, null, 4));
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({ message: 'Something went wrong' }), {
			status: 404
		});
	}
};
