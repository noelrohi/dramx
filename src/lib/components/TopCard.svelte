<script>
	/**
	 * @type {{ image: string; id: string; title: string; genres: string[] }}
	 */
	export let data;
</script>

<div class="card !bg-transparent">
	<header class="card-header">
		<div class="grid grid-cols-2">
			<a href={`/anime/${data.id}`}
				><img src={data.image} alt={data.id} class="h-24 w-24 object-cover" /></a
			>
			<p class="line-clamp-3">{data.title}</p>
		</div>
		<div class="p-1">
			<div class="line-clamp-3 hover:line-clamp-none">
				{#each data.genres as genre}
					<span class="badge variant-filled text-xs">{genre}</span>
				{/each}
			</div>
		</div>
	</header>
</div>

<style>
</style>
