<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/kdrama" on:click={drawerClose}>Kdrama</a></li>
		<li><a href="/anime" on:click={drawerClose}>Anime</a></li>
	</ul>
</nav>