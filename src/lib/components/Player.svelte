<script lang="ts">
  export let src: string;
  export let title: string;
</script>

<div class="flex flex-row justify-center content-center">
	<iframe
	  src={src}
	  title={title}
	  class="w-full lg:w-3/4 pt-2 aspect-video"
	  allowfullscreen
	  frameborder="0"
	  scrolling="no"
	  referrerpolicy="no-referrer"
	></iframe>
</div>
  