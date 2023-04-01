<script lang="ts">
	import { goto } from '$app/navigation';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	onMount(async () => {
		goto(`/anime/${data.id}/1`)
	});
</script>

<LoadingSpinner />