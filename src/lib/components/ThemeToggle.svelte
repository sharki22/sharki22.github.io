<script lang="ts">
	let theme = $state<'light' | 'dark'>('light');

	function setTheme(t: 'light' | 'dark') {
		theme = t;
		document.documentElement.setAttribute('data-theme', t);
		try {
			localStorage.setItem('theme', t);
		} catch {
			/* empty */
		}
	}

	function toggle() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	$effect(() => {
		const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
		const prefersDark =
			typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initial =
			stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light';
		setTheme(initial);
	});
</script>

<button class="theme-toggle" onclick={toggle} aria-label="Toggle theme">
	{#if theme === 'light'}
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	{:else}
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle cx="12" cy="12" r="5" />
			<line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line
				x1="18.36"
				y1="18.36"
				x2="19.78"
				y2="19.78"
			/>
			<line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line
				x1="18.36"
				y1="5.64"
				x2="19.78"
				y2="4.22"
			/>
		</svg>
	{/if}
</button>

<style>
	.theme-toggle {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 90;
		padding: 0.5rem;
		border-radius: 50%;
		color: var(--text-secondary);
		background: var(--nav-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--nav-border);
		box-shadow: var(--shadow);
		transition: all 0.2s;
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.theme-toggle:hover {
		color: var(--text);
		background: var(--bg-muted);
		transform: scale(1.1);
	}

	.theme-toggle:active {
		transform: scale(0.95);
	}

	@media (max-width: 768px) {
		.theme-toggle {
			top: 0.75rem;
			right: 0.75rem;
		}
	}
</style>
