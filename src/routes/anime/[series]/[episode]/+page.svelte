<script lang="ts">
	import Player from '$lib/components/Player.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data);
	let src: string = data.result.headers.Referer;
	let vidPlayerData = {
		src,
		title: data.series.title
	};

	let urls : number[] = data.series.episodes.map((e: { number: number }) => e.number);
	let currentEpisode: number = parseInt(data.episode);
	$: slicedUrls = urls.length < 100 ? urls : currentEpisode > 50 ? urls.slice(currentEpisode - 50, currentEpisode + 50) : currentEpisode == urls.length ? urls.slice(currentEpisode - 100, currentEpisode) : urls.slice(0, 100); 
</script>

<div class="container">
	<div class="space-y-4">
		<Player {...vidPlayerData} />

		<div class="w-full flex flex-col lg:px-44">
			<h5 class="mb-2 text-3xl font-bold">{data.series.title}</h5>
			<p class="mb-5 text-base sm:text-lg indent-8 line-clamp-4 hover:line-clamp-none">
				{data.series.description}
			</p>
			<div>
				{#each slicedUrls as num}
					<a href="/anime/{data.series.id}/{num}" class="badge badge-glass">{num}</a>
				{/each}
			</div>
		</div>
	</div>
</div>
