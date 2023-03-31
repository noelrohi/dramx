<script lang="ts">
	import { AppShell, Paginator } from '@skeletonlabs/skeleton';
	import TopCard from '$lib/components/TopCard.svelte';
	import type { PageData } from './$types';
	import RecentRelease from '$lib/components/RecentRelease.svelte';
	import Search from '$lib/components/Search.svelte';

	export let data: PageData;
	// console.log(data.recents);

	// PaginatorSettings
	const recents = data.recents.results;
	const topAiring = data.topAiring.results;
	let page = {
		offset: 0,
		limit: 4,
		size: recents.length,
		amounts: [4, 8, 16]
	};

	$: paginatedSource = recents.slice(
		page.offset * page.limit, // start
		page.offset * page.limit + page.limit // end
	);
</script>

<AppShell slotSidebarRight="w-0 lg:w-64 shadow-lg">
	<svelte:fragment slot="sidebarRight">
		<div class="flex flex-col gap-2 overflow-x-visible max-h-64">
			{#each topAiring.reverse() as d}
				<div>
					<TopCard data={d} />
				</div>
			{/each}
		</div>
	</svelte:fragment>
	<div class="px-6 md:px-20 py-6">
		<div class="space-y-4">
			<Search />
			<h1>Recent Releases</h1>
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
				{#each paginatedSource as r}
					<RecentRelease data={r} />
				{/each}
			</div>
			<Paginator bind:settings={page} />
		</div>
	</div>
</AppShell>

<style>
</style>
