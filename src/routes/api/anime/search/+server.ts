import type { RequestHandler } from '@sveltejs/kit';
import { ANIME_API } from '$env/static/private';
import axios from 'axios';

//search anime by name
//example: .../api/anime/search?q=blue lock
// or: .../api/anime/search?q=blue lock?page=2
export const GET: RequestHandler = async ({ url }) => {
	try {
		const query = url.searchParams.get('q');
		const page = url.searchParams.get('page') ?? 1;
		const { data } = await axios.get(`${ANIME_API}${query}?page=${page}`);
        if(!data) throw new Error('No data')
		return new Response(JSON.stringify(data, null, 4));
        
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({message: "Something went wrong" }), {
			status: 404
		});
	}
};
