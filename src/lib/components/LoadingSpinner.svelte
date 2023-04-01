<script lang="ts">
	import { ConicGradient, type ConicStop } from '@skeletonlabs/skeleton';

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];
</script>

<div class="grid h-screen place-items-center">
	<ConicGradient stops={conicStops} spin>Redirecting to Episode 1 ...</ConicGradient>
</div>

<style>
</style>
