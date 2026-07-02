<script>
	let { children } = $props();
	import { resolve } from '$app/paths';
</script>

<h1>Sharky</h1>
<nav>
	<a href={resolve('/')}>Home</a>
	<a href={resolve('/about')}>About</a>
</nav>

{@render children()}
