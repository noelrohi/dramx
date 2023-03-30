import type { RequestHandler } from '@sveltejs/kit';
import { ANIME_API } from '$env/static/private';
import axios from 'axios';

// watch anime episode
// example = .../api/anime/watch/blue-lock-episode-1
export const GET: RequestHandler = async ({ params }) => {
	try {
		const { data } = await axios.get(`${ANIME_API}watch/${params.episode}`);
        if(!data) throw new Error('No data')
		return new Response(JSON.stringify(data, null, 4));
        
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({message: "Something went wrong" }), {
			status: 404
		});
	}
};
