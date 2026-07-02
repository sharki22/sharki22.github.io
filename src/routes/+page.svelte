<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<main>
	<h1>sveltekit-gh-pages</h1>
	<p>Deployed to GitHub Pages.</p>
	<button onclick={() => goto(resolve('/about'))}>About </button>
</main>
