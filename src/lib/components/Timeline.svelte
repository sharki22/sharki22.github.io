<script lang="ts">
	interface TimelineItem {
		year: string;
		title: string;
		subtitle: string;
		description: string;
	}

	let { items }: { items: TimelineItem[] } = $props();
</script>

<div class="timeline">
	{#each items as item, i (item.title)}
		<div class="timeline-item" style="animation-delay: {i * 100}ms">
			<div class="timeline-dot"></div>
			<div class="timeline-content">
				<span class="timeline-year">{item.year}</span>
				<h3 class="timeline-title">{item.title}</h3>
				<p class="timeline-subtitle">{item.subtitle}</p>
				<p class="timeline-desc">{item.description}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.timeline {
		position: relative;
		padding-left: 2rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 7px;
		top: 8px;
		bottom: 8px;
		width: 2px;
		background: var(--border);
	}

	.timeline-item {
		position: relative;
		padding-bottom: 2rem;
		animation: fade-up 0.5s ease-out both;
	}

	.timeline-item:last-child {
		padding-bottom: 0;
	}

	.timeline-dot {
		position: absolute;
		left: -2rem;
		top: 6px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--accent-gradient);
		border: 3px solid var(--bg);
		box-shadow: 0 0 0 2px var(--accent-1);
	}

	.timeline-content {
		background: var(--bg-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 1.25rem;
		transition: all 0.2s;
	}

	.timeline-content:hover {
		border-color: var(--accent-1);
		box-shadow: var(--shadow);
	}

	.timeline-year {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--accent-1);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.timeline-title {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0.25rem 0 0.125rem;
	}

	.timeline-subtitle {
		font-size: 0.875rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}

	.timeline-desc {
		font-size: 0.875rem;
		color: var(--text-muted);
		line-height: 1.6;
	}
</style>
