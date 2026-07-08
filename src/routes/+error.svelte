<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>{$page.status === 404 ? '404 — Not Found' : 'Error'} — Sharki22</title>
</svelte:head>

<div class="error-page">
	<div class="error-content">
		<div class="error-code">
			{#if $page.status === 404}
				<span class="error-number">4</span>
				<span class="error-zero">0</span>
				<span class="error-number">4</span>
			{:else}
				<span class="error-number">{$page.status}</span>
			{/if}
		</div>
		<h1 class="error-title">
			{#if $page.status === 404}
				Page not found
			{:else}
				Something went wrong
			{/if}
		</h1>
		<p class="error-desc">
			{#if $page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else}
				An unexpected error occurred. Please try again later.
			{/if}
		</p>
		<a href={resolve('/')} class="error-btn">
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg
			>
			Go home
		</a>
	</div>
</div>

<style>
	.error-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 2rem;
		background: var(--bg);
	}

	.error-content {
		text-align: center;
		animation: fade-up 0.6s ease-out;
	}

	.error-code {
		font-size: 8rem;
		font-weight: 800;
		font-family: var(--font-mono);
		letter-spacing: -0.05em;
		line-height: 1;
		margin-bottom: 1rem;
		display: flex;
		justify-content: center;
		gap: 0.25rem;
	}

	.error-number {
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.error-zero {
		color: var(--text-muted);
		animation: float 3s ease-in-out infinite;
		display: inline-block;
	}

	.error-title {
		font-size: 1.75rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.error-desc {
		font-size: 1rem;
		color: var(--text-secondary);
		margin-bottom: 2rem;
	}

	.error-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		border-radius: var(--radius-sm);
		background: var(--accent-gradient);
		color: #fff;
		font-weight: 600;
		font-size: 0.9375rem;
		text-decoration: none;
		box-shadow: 0 4px 14px var(--glow);
		transition: all 0.2s;
	}

	.error-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px var(--glow);
		opacity: 1;
	}

	@media (max-width: 768px) {
		.error-code {
			font-size: 5rem;
		}
	}
</style>
