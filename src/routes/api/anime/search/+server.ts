import type { RequestHandler } from '@sveltejs/kit';
import { ANIME_API } from '$env/static/private';

//search anime by name
//example: .../api/anime/search?q=blue lock
// or: .../api/anime/search?q=blue lock?page=2
export const GET: RequestHandler = async ({ url }) => {
	try {
		const query = url.searchParams.get('q');
		const page = url.searchParams.get('page') ?? 1;
		const data = await fetch(`${ANIME_API}${query}?page=${page}`).then((res) => res.json());
        if(!data) throw new Error('No data')
		return new Response(JSON.stringify(data, null, 4));
        
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({message: "Something went wrong" }), {
			status: 404
		});
	}
};
