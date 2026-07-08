<script lang="ts">
	import Timeline from '$lib/components/Timeline.svelte';
	import { skillCategories } from '$lib/data/skills';
	import { ASSETS_BASE } from '$lib/data/paths';

	const timelineItems = [
		{
			year: '2024 — Present',
			title: 'University (3rd Course)',
			subtitle: 'Computer Science',
			description:
				'Pursuing a degree in Computer Science. Exploring MLs, AI, algorithms, low-level programming, and software design.'
		},
		{
			year: '2024',
			title: 'First Open-Source Contributions',
			subtitle: 'University projects & GitHub',
			description:
				'Started contributing to open-source and publishing university projects. Built a lexical analyzer and Huffman archiver. Gained experience with Git, CMake, and C++ tooling.'
		},
		{
			year: '2022',
			title: 'Started Programming',
			subtitle: 'Python',
			description:
				'Began my programming journey with Python. Experimented with small scripts, learned fundamental concepts, and fell in love with problem-solving.'
		}
	];
</script>

<svelte:head>
	<title>About — Sharki22</title>
	<meta
		name="description"
		content="About Sharki22 — CS student,developer, and open-source hobbyist."
	/>
</svelte:head>

<div class="page">
	<div class="about-hero">
		<div class="about-avatar">
			<img src="{ASSETS_BASE}/logo.png" alt="Sharki22" class="about-avatar-img" />
		</div>
		<div class="about-info">
			<h1 class="about-name">Sharki22 <span class="about-alias">(aka Kyrie)</span></h1>
			<p class="about-tagline">CS Student &middot; Dev &middot; Professional Procrastinator</p>
			<p class="about-bio">
				Hey there! I'm a 20-year-old computer science student who codes for fun, drinks way too much
				coffee, and occasionally builds something useful. I like tinkering with UIs, writing small
				tools, and figuring out how things work. When I'm not coding, I'm probably glued to a game
				or messing around with game dev.
			</p>
			<p class="about-bio">
				This site is my digital playground — a portfolio built with SvelteKit, deployed on GitHub
				Pages, and crafted with care (and caffeine).
			</p>
		</div>
	</div>

	<section class="about-section">
		<h2 class="section-title">
			<span class="gradient-text">Timeline</span>
		</h2>
		<Timeline items={timelineItems} />
	</section>

	<section class="about-section">
		<h2 class="section-title">
			<span class="gradient-text">Skills Breakdown</span>
		</h2>
		<div class="skills-grid">
			{#each skillCategories as cat (cat.name)}
				<div class="skill-card">
					<div class="skill-card-header">
						<span class="skill-card-icon">{cat.icon}</span>
						<h3 class="skill-card-name">{cat.name}</h3>
					</div>
					<div class="skill-bar">
						<div
							class="skill-bar-fill"
							style="width: {Math.min(cat.items.length * 15 + 20, 100)}%"
						></div>
					</div>
					<div class="skill-card-items">
						{#each cat.items as item (item.name)}
							<span class="skill-tag">
								{#if item.icon}
									<img src={item.icon} alt={item.name} class="skill-tag-icon" />
								{/if}
								{item.name}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	.about-hero {
		display: flex;
		gap: 2.5rem;
		align-items: flex-start;
		margin-bottom: 4rem;
	}

	.about-avatar {
		flex-shrink: 0;
		width: 120px;
		height: 120px;
		border-radius: var(--radius-xl);
		background: var(--accent-gradient);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8px 30px var(--glow);
		animation: float 4s ease-in-out infinite;
		overflow: hidden;
	}

	.about-avatar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}

	.about-name {
		font-size: 2rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		margin-bottom: 0.25rem;
	}

	.about-alias {
		font-size: 1.25rem;
		font-weight: 400;
		color: var(--text-muted);
	}

	.about-tagline {
		font-size: 1rem;
		color: var(--accent-1);
		font-weight: 500;
		margin-bottom: 1rem;
	}

	.about-bio {
		font-size: 0.9375rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 0.75rem;
		max-width: 560px;
	}

	.about-section {
		margin-bottom: 3rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
	}

	.skill-card {
		background: var(--bg-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 1.25rem;
	}

	.skill-card-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.skill-card-icon {
		font-size: 1.25rem;
	}

	.skill-card-name {
		font-size: 0.9375rem;
		font-weight: 600;
	}

	.skill-bar {
		height: 4px;
		background: var(--bg-muted);
		border-radius: 2px;
		margin-bottom: 0.75rem;
		overflow: hidden;
	}

	.skill-bar-fill {
		height: 100%;
		background: var(--accent-gradient);
		border-radius: 2px;
		transition: width 1s ease;
	}

	.skill-card-items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}

	.skill-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.8125rem;
		padding: 0.25rem 0.625rem;
		border-radius: 100px;
		background: var(--bg-muted);
		color: var(--text-secondary);
		font-weight: 500;
	}

	.skill-tag-icon {
		width: 14px;
		height: 14px;
		display: inline-block;
		vertical-align: middle;
	}

	@media (max-width: 768px) {
		.about-hero {
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 1.5rem;
		}

		.about-bio {
			max-width: 100%;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
