<script lang="ts">
	import Nav from '../components/Nav.svelte';
	let count = $state(0);

	function increment() {
		count += 1;
	}
	function decrement() {
		count -= 1;
	}
</script>

<main>
	<Nav />
	<p>
		Clicked {count}
		{count === 1 ? 'time ' : 'times'}
	</p>
	<button type="button" onclick={increment}>+1</button>
	<button type="button" onclick={decrement}>-1</button>
</main>
