<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const allTags = [...new Set(projects.flatMap((p) => p.tags))];
	let activeFilter = $state<string | null>(null);

	let filtered = $derived(
		activeFilter ? projects.filter((p) => p.tags.includes(activeFilter!)) : projects
	);
</script>

<svelte:head>
	<title>Projects — Sharki22</title>
	<meta
		name="description"
		content="Projects by Sharki22 — a collection of software, tools, and experiments."
	/>
</svelte:head>

<div class="page">
	<div class="page-header">
		<h1 class="page-title">Projects</h1>
		<p class="page-desc">A collection of things I've built — some serious, some just for fun.</p>
	</div>

	<div class="filters">
		<button
			class="filter-btn"
			class:filter-btn--active={activeFilter === null}
			onclick={() => (activeFilter = null)}
		>
			All
		</button>
		{#each allTags as tag (tag)}
			<button
				class="filter-btn"
				class:filter-btn--active={activeFilter === tag}
				onclick={() => (activeFilter = tag)}
			>
				{tag}
			</button>
		{/each}
	</div>

	<div class="projects-grid">
		{#each filtered as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>

	{#if filtered.length === 0}
		<p class="empty">No projects found for this filter.</p>
	{/if}
</div>

<style>
	.page-header {
		margin-bottom: 2.5rem;
	}

	.page-title {
		font-size: 2.5rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		margin-bottom: 0.5rem;
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.page-desc {
		font-size: 1.0625rem;
		color: var(--text-secondary);
	}

	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 2rem;
	}

	.filter-btn {
		padding: 0.5rem 1rem;
		border-radius: 100px;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--text-secondary);
		background: var(--bg-surface);
		border: 1px solid var(--border);
		transition: all 0.2s;
	}

	.filter-btn:hover {
		border-color: var(--accent-1);
		color: var(--accent-1);
	}

	.filter-btn--active {
		background: var(--accent-gradient);
		color: #fff;
		border-color: transparent;
	}

	.filter-btn--active:hover {
		color: #fff;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		gap: 1rem;
	}

	.empty {
		text-align: center;
		color: var(--text-muted);
		padding: 4rem 0;
		font-size: 0.9375rem;
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
