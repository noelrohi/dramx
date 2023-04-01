import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {

	const res = await fetch(`/api/anime/${params.series}`);
	return res.json();
};
