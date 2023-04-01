import type { RequestHandler } from '@sveltejs/kit';
import { ANIME_API } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch }) => {
	try {
		console.log(`${ANIME_API}top-airing`);
		const data = await fetch(`${ANIME_API}top-airing`).then((res) => res.json());
		if (!data) throw new Error('No data');
		return new Response(JSON.stringify(data, null, 4));
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({ message: 'Something went wrong' }), {
			status: 404
		});
	}
};
