import type { RequestHandler } from '@sveltejs/kit';
import { ANIME_API } from '$env/static/private';

// get anime info
// example = .../api/anime/blue-lock
export const GET: RequestHandler = async ({ params }) => {
	try {
		const data = await fetch(`${ANIME_API}info/${params.slug}`).then((res) => res.json());
        if(!data) throw new Error('No data')
		return new Response(JSON.stringify(data, null, 4));
        
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({message: "Something went wrong" }), {
			status: 404
		});
	}
};
