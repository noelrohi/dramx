import type { RequestHandler } from '@sveltejs/kit';
import { ANIME_API } from '$env/static/private';
import axios from 'axios';

// get anime info
// example = .../api/anime/blue-lock
export const GET: RequestHandler = async ({ params }) => {
	try {
		const { data } = await axios.get(`${ANIME_API}info/${params.slug}`);
        if(!data) throw new Error('No data')
		return new Response(JSON.stringify(data, null, 4));
        
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({message: "Something went wrong" }), {
			status: 404
		});
	}
};
