<script lang="ts">
	import '../app.css';
	import Nav from './components/Nav.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { browser } from '$app/environment';

	let { children } = $props();

	const title = $derived('Sharki22');
	const description =
		'Personal portfolio of Sharki22 — a university student, Rust enthusiast, and open-source hobbyist.';
	const url = 'https://sharki22.github.io';
</script>

<svelte:head>
	<title>Sharki22 — Portfolio</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Sharki22" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Sharki22" />
	<meta name="twitter:description" content={description} />
	<link rel="canonical" href={url} />
</svelte:head>

<Nav />
<ThemeToggle />

<main class="main">
	{@render children()}
</main>

{#if browser}
	<script>
		document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + 'px');
	</script>
{/if}

<style>
	.main {
		margin-left: var(--nav-w);
		min-height: 100vh;
		position: relative;
		z-index: 1;
	}

	@media (max-width: 768px) {
		.main {
			margin-left: 0;
		}
	}
</style>
