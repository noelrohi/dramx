<script>
	/**
	 * @type {{ image: string; id: string; title: string; episodeNumber: number }}
	 */
	export let data;
</script>

<div class="card">
	<header class="card-header">
		<div class="items-center">
			<div>
				<a href={`/anime/${data.id}/${data.episodeNumber}`}>
					<img src={data.image} alt={data.id} class="h-48 w-48 object-cover" />
				</a>
				<p class="line-clamp-2 font-bold">
					{data.title}
				</p>
			</div>
			<div class="py-6 font-thin">
				Episode {data.episodeNumber}
			</div>
		</div>
	</header>
</div>

<style>
</style>
