import type { RequestHandler } from '@sveltejs/kit';
import { ANIME_API } from '$env/static/private';
import axios from 'axios';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const { data } = await axios.get(`${ANIME_API}${params.id}`);
        if(!data) throw new Error('No data')
		return new Response(JSON.stringify(data));
        
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({message: "Something went wrong" }), {
			status: 404
		});
	}
};
