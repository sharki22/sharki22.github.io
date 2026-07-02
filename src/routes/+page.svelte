<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<main>
	<h1>Sharky</h1>
	<p></p>
	<button onclick={() => goto(resolve('/projects'))}>Projects i'm working on </button>
</main>

<style>
</style>
