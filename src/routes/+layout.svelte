<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="container mx-auto h-dvh w-full">
	<main class="p-8">
		{@render children()}
	</main>
</div>
