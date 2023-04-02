<script lang="ts">
  export let src: string;
  export let title: string;
</script>

<div class="relative xl:mt-10" style="padding-bottom: 56.25%">
	<iframe
	  src={src}
	  title={title}
	  class="absolute inset-0 w-full h-full"
	  allowfullscreen
	  frameborder="0"
	  scrolling="no"
	  referrerpolicy="no-referrer"
	></iframe>
</div>
  