<script lang="ts">
  export let src: string;
  export let title: string;
</script>

<div class="relative" style="padding-bottom: 62.25%">
	<iframe
	  src={src}
	  title={title}
	  class="absolute inset-y-4 w-full h-full xl:h-3/4 xl:w-3/4 xl:inset-x-44 "
	  allowfullscreen
	  frameborder="0"
	  scrolling="no"
	  referrerpolicy="no-referrer"
	></iframe>
</div>
  