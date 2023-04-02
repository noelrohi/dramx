<script lang="ts">
	import Player from '$lib/components/Player.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data)
	let src = data.result.headers.Referer;
	let vidPlayerData = {
		src,
		title: data.series.title
	};
</script>
<div class="xl:mt-10">
	<Player {...vidPlayerData} />
	
</div>





  