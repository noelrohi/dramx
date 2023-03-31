<script lang="ts">
	import { Autocomplete, localStorageStore, type AutocompleteOption } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';
	const optionsStore: Writable<AutocompleteOption[]> = localStorageStore('optionsStore', []);
	let inputQuery = '';

	async function fetchQuery() {
		const data = await fetch(`/api/anime/search?q=${inputQuery}`).then((res) => res.json());
		if (data.results.length > 0) {
			const options = data.results.map((option: any) => ({
				label: option.title,
				value: option.title
			}));
			optionsStore.set(options);
		}
	}
	function onDemoSelection(event: any): void {
		inputQuery = event.detail.label;
	}

	$: if (inputQuery) fetchQuery();
	$: autocompClass = !inputQuery ? 'hidden' : 'block';
</script>

<div class="text-token w-full max-w-sm space-y-2">
	<input
		class="input"
		type="search"
		name="ac-demo"
		bind:value={inputQuery}
		placeholder="Search Anime Series"
	/>
	<!-- {JSON.stringify($optionsStore)} -->
	{#key $optionsStore}
		<Autocomplete
			bind:input={inputQuery}
			options={$optionsStore}
			class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto {autocompClass}"
			on:selection={onDemoSelection}
		/>
	{/key}
</div>

<style>
</style>
