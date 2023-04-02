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

<Player {...vidPlayerData} />
<div class="pt-8">
	{data.series.title}<br>
	{data.series.description}
	<br>WWIIPPP
</div>
