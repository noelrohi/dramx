import type { RequestHandler } from '@sveltejs/kit';
import { ANIME_API } from '$env/static/private';
import axios from 'axios';

// get recent episodes
// params: page<int> optional
//example: .../api/anime/recent
export const GET: RequestHandler = async ({ url }) => {
	try {
        let page = url.searchParams.get('page');
        if(!page) page = '1';
		const { data } = await axios.get(`${ANIME_API}recent-episodes?page=${page}`);
        if(!data) throw new Error('No data')
		return new Response(JSON.stringify(data, null, 4));
        
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({message: "Something went wrong" }), {
			status: 404
		});
	}
};
