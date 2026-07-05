<script lang="ts">
	let count = $state(0);

	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}

	function reset() {
		count = 0;
	}
</script>

<svelte:head>
	<title>Clicker — Sharki22</title>
	<meta name="description" content="A silly little clicker game." />
</svelte:head>

<div class="page">
	<div class="clicker-page">
		<div class="clicker-card">
			<h1 class="clicker-title">Clicker</h1>
			<p class="clicker-subtitle">A totally serious productivity tool</p>

			<div class="clicker-display">
				<span class="clicker-label">Count</span>
				<span class="clicker-count" class:clicker-count--pop={count !== 0}>{count}</span>
			</div>

			<div class="clicker-actions">
				<button class="clicker-btn clicker-btn--plus" onclick={increment} aria-label="Increment">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg
					>
				</button>
				<button class="clicker-btn clicker-btn--minus" onclick={decrement} aria-label="Decrement">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg
					>
				</button>
				<button class="clicker-btn clicker-btn--reset" onclick={reset} aria-label="Reset">
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><polyline points="23 4 23 10 17 10" /><path
							d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
						/></svg
					>
				</button>
			</div>

			<p class="clicker-fact">
				{count === 0
					? 'Go ahead, click something...'
					: count === 1
						? 'You clicked once!'
						: count < 10
							? `Clicked ${count} times — you're getting the hang of it!`
							: count < 50
								? `${count} clicks! Are you OK?`
								: count < 100
									? `${count} clicks... touch some grass maybe?`
									: `${count} clicks. I'm genuinely concerned.`}
			</p>
		</div>
	</div>
</div>

<style>
	.clicker-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 6rem);
	}

	.clicker-card {
		background: var(--bg-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-xl);
		padding: 3rem 2.5rem;
		text-align: center;
		max-width: 420px;
		width: 100%;
		animation: fade-up 0.5s ease-out;
	}

	.clicker-title {
		font-size: 2rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		margin-bottom: 0.25rem;
	}

	.clicker-subtitle {
		font-size: 0.875rem;
		color: var(--text-muted);
		margin-bottom: 2rem;
	}

	.clicker-display {
		margin-bottom: 2rem;
	}

	.clicker-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-muted);
		display: block;
		margin-bottom: 0.25rem;
	}

	.clicker-count {
		font-size: 4rem;
		font-weight: 800;
		font-family: var(--font-mono);
		letter-spacing: -0.04em;
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		display: inline-block;
		transition: transform 0.15s;
	}

	.clicker-count--pop {
		animation: pop 0.2s ease-out;
	}

	@keyframes pop {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.15);
		}
		100% {
			transform: scale(1);
		}
	}

	.clicker-actions {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		margin-bottom: 1.5rem;
	}

	.clicker-btn {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s;
		color: #fff;
	}

	.clicker-btn--plus {
		background: var(--accent-gradient);
		box-shadow: 0 4px 14px var(--glow);
	}

	.clicker-btn--plus:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 20px var(--glow);
	}

	.clicker-btn--minus {
		background: var(--bg-muted);
		color: var(--text-secondary);
	}

	.clicker-btn--minus:hover {
		background: var(--border);
		transform: scale(1.1);
	}

	.clicker-btn--reset {
		background: transparent;
		color: var(--text-muted);
		border: 1px solid var(--border);
	}

	.clicker-btn--reset:hover {
		color: var(--text-secondary);
		border-color: var(--text-muted);
		transform: scale(1.1);
	}

	.clicker-fact {
		font-size: 0.875rem;
		color: var(--text-muted);
		min-height: 1.5rem;
	}
</style>
