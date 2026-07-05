<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { skillIconMap } from '$lib/data/skills';

	let { project }: { project: Project } = $props();

	let langIcon = $derived(project.lang ? skillIconMap[project.lang] || '' : '');
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a href={project.href} class="card" target="_blank" rel="noopener noreferrer">
	<div class="card-icon">{project.icon}</div>
	<div class="card-body">
		<h3 class="card-title">{project.title}</h3>
		<p class="card-desc">{project.description}</p>
	</div>
	<div class="card-tags">
		{#each project.tags as tag (tag)}
			<span class="card-tag">{tag}</span>
		{/each}
	</div>
	{#if langIcon}
		<img src={langIcon} alt={project.lang} class="card-lang" />
	{/if}
	<div class="card-arrow">
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
		</svg>
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1.5rem;
		background: var(--bg-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		text-decoration: none;
		color: var(--text);
		transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
	}

	.card::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: var(--accent-gradient);
		opacity: 0;
		transition: opacity 0.25s;
		pointer-events: none;
	}

	.card:hover {
		transform: translateY(-4px);
		border-color: transparent;
		box-shadow: var(--shadow-lg);
	}

	.card:hover::before {
		opacity: 0.03;
	}

	.card:hover .card-arrow {
		transform: translateX(3px) rotate(-45deg);
		opacity: 1;
	}

	.card-icon {
		font-size: 2rem;
		line-height: 1;
	}

	.card-body {
		flex: 1;
	}

	.card-title {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.375rem;
		letter-spacing: -0.01em;
	}

	.card-desc {
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.6;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		line-clamp: 3;
		overflow: hidden;
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}

	.card-tag {
		font-size: 0.75rem;
		padding: 0.25rem 0.625rem;
		border-radius: 100px;
		background: var(--glow);
		color: var(--accent-1);
		font-weight: 500;
	}

	.card-lang {
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		width: 20px;
		height: 20px;
		opacity: 0.5;
	}

	.card-arrow {
		position: absolute;
		top: 1.25rem;
		right: 3rem;
		color: var(--text-muted);
		transition: all 0.25s;
		opacity: 0;
	}
</style>
