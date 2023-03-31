<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import TopCard from '../../components/TopCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<AppShell slotSidebarRight="w-0 lg:w-64 shadow-lg">
	<svelte:fragment slot="sidebarRight">
        <div class="flex flex-col gap-2">
            {#each data.topAiring.results.reverse() as d}
                 <div><TopCard data={d} /></div>
            {/each}
        </div>
	</svelte:fragment>
</AppShell>

<style>
</style>
