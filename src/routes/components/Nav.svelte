<script lang="ts">
	import { page } from '$app/stores';
	import { ASSETS_BASE } from '$lib/data/paths';

	const links = [
		{ href: '/', label: 'Home', icon: '◈' },
		{ href: '/projects', label: 'Projects', icon: '⊞' },
		{ href: '/about', label: 'About', icon: '◉' },
		{ href: '/clicker', label: 'Clicker', icon: '⚄' },
	];

	let mobileOpen = $state(false);

	function isActive(href: string) {
		const p = $page.url.pathname;
		if (href === '/') return p === '/';
		return p.startsWith(href);
	}
</script>

<nav class="nav" class:nav--open={mobileOpen}>
	<div class="nav-header">
		<a href="/" class="nav-logo" aria-label="Home">
			<img src="{ASSETS_BASE}/logo.png" alt="Sharki22" class="nav-logo-icon" />
			<span class="nav-logo-text">sharki22</span>
		</a>
		<button class="nav-close" onclick={() => (mobileOpen = false)} aria-label="Close menu">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
		</button>
	</div>

	<div class="nav-links">
		{#each links as link}
			<a
				href={link.href}
				class="nav-link"
				class:nav-link--active={isActive(link.href)}
				onclick={() => (mobileOpen = false)}
			>
				<span class="nav-link-icon">{link.icon}</span>
				<span class="nav-link-label">{link.label}</span>
			</a>
		{/each}
	</div>

	<div class="nav-footer">
		<span class="nav-footer-text">Built with Svelte</span>
	</div>
</nav>

<button class="menu-btn" onclick={() => (mobileOpen = true)} aria-label="Open menu">
	<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
</button>

{#if mobileOpen}
	<div class="nav-overlay" onclick={() => (mobileOpen = false)} role="presentation"></div>
{/if}

<style>
	.nav {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: var(--nav-w);
		background: var(--bg-surface);
		border-right: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		z-index: 100;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 1.25rem 0.5rem;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		color: var(--text);
		text-decoration: none;
	}

	.nav-logo-icon {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		object-fit: cover;
	}

	.nav-logo-text {
		font-size: 1.1rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.nav-close {
		display: none;
		color: var(--text-secondary);
		padding: 4px;
		border-radius: var(--radius-sm);
		transition: background 0.2s;
	}

	.nav-close:hover {
		background: var(--bg-muted);
	}

	.nav-links {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 1rem 0.75rem;
		overflow-y: auto;
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.625rem 0.875rem;
		border-radius: var(--radius-sm);
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.9375rem;
		font-weight: 500;
		transition: all 0.2s;
		position: relative;
	}

	.nav-link:hover {
		background: var(--bg-muted);
		color: var(--text);
	}

	.nav-link--active {
		background: var(--glow);
		color: var(--accent-1);
		font-weight: 600;
	}

	.nav-link--active::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 3px;
		height: 20px;
		background: var(--accent-gradient);
		border-radius: 0 2px 2px 0;
	}

	.nav-link-icon {
		font-size: 1.1rem;
		width: 1.5rem;
		text-align: center;
		flex-shrink: 0;
	}

	.nav-link-label {
		line-height: 1;
	}

	.nav-footer {
		padding: 0.75rem 1.25rem;
		border-top: 1px solid var(--border);
	}

	.nav-footer-text {
		font-size: 0.75rem;
		color: var(--text-muted);
	}

	.menu-btn {
		display: none;
		position: fixed;
		top: 0.75rem;
		left: 0.75rem;
		z-index: 99;
		padding: 0.5rem;
		border-radius: var(--radius-sm);
		color: var(--text);
		background: var(--nav-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--nav-border);
		box-shadow: var(--shadow);
	}

	.menu-btn:hover {
		background: var(--bg-muted);
	}

	.nav-overlay {
		display: none;
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 99;
		backdrop-filter: blur(4px);
	}

	@media (max-width: 768px) {
		.nav {
			transform: translateX(-100%);
		}

		.nav--open {
			transform: translateX(0);
		}

		.nav-close {
			display: block;
		}

		.menu-btn {
			display: block;
		}

		.nav-overlay {
			display: block;
		}
	}
</style>
