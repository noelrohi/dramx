<script lang="ts">
  export let src: any;
  export let title: any;
</script>

<div class="ratio-16-9">
	<iframe
		{src}
    {title}
		scrolling="no"
		frameborder="0"
		allowfullscreen
		referrerpolicy="no-referrer"
		class="absolute inset-0 w-full h-full top-0 left-0"
	/>
</div>

<style>
	.ratio-16-9 {
		position: relative;
		padding-top: 56.25%; /* 16:9 ratio */
	}

	/* adjust the iframe size based on screen size */
	@media (min-width: 1024px) {
		/* for large screens */
		.ratio-16-9 {
			height: 0;
			max-width: 980px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media (max-width: 1023px) {
		/* for medium screens */
		.ratio-16-9 {
			height: 0;
			margin-left: auto;
			margin-right: auto;
			max-width: 100%;
			will-change: width, padding-top;
			overflow: hidden;
		}

		.ratio-16-9 iframe {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
		}
	}
</style>
