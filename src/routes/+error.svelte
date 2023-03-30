<script>
	import { page } from '$app/stores';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<h1 class="gradient-heading">{$page.status}: {$page.error?.message}</h1>
</div>

<style lang="postcss">
    .gradient-heading {
	@apply bg-clip-text text-transparent box-decoration-clone;
	/* Direction */
	@apply bg-gradient-to-br;
	/* Color Stops */
	@apply from-warning-100 via-warning-500 to-warning-900;
}
</style>