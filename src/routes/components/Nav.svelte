<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<nav class="NavBar">
	<button class="btn" onclick={() => goto(resolve('/'))}>Home </button>
	<button class="btn" onclick={() => goto(resolve('/projects'))}>Projects</button>
	<button class="btn" onclick={() => goto(resolve('/clicker'))}>clicker</button>
</nav>
