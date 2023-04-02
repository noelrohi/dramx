<script lang="ts">
	import { goto } from '$app/navigation';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let episodeId = data.episodes[0].id.split('-episode-')[0]
	onMount(async () => {
		goto(`/anime/${episodeId}/1`)
	});
</script>

<LoadingSpinner />