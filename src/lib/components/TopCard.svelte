<script>
	/**
	 * @type {{ image: string; id: string; title: string; genres: string[] }}
	 */
	export let data;
</script>

<div class="card !bg-transparent">
	<header class="card-header">
		<div class="flex flex-row justify-center content-center">
			<img src={data.image} alt={data.id} class=" h-32 p-2" />
			<div>
				<p class="line-clamp-2 hover:line-clamp-none w-32">{data.title}</p>
				<div class="line-clamp-3 hover:line-clamp-none">
					{#each data.genres as genre}
						<span class="badge variant-filled text-xs">{genre}</span>
					{/each}
				</div>
                
			</div>
		</div>
	</header>
</div>

<style>
</style>
