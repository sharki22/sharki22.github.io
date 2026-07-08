<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { skillCategories } from '$lib/data/skills';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { resolve } from '$app/paths';

	let displayText = $state('');
	const fullText = "Hey, I'm Sharki";
	let charIndex = $state(0);
	let showCursor = $state(true);

	$effect(() => {
		const typing = setInterval(() => {
			if (charIndex < fullText.length) {
				displayText = fullText.slice(0, charIndex + 1);
				charIndex++;
			} else {
				clearInterval(typing);
			}
		}, 60);

		const cursor = setInterval(() => {
			showCursor = !showCursor;
		}, 530);

		return () => {
			clearInterval(typing);
			clearInterval(cursor);
		};
	});
</script>

<div class="page">
	<section class="hero">
		<div class="hero-bg"></div>
		<div class="hero-content">
			<p class="hero-greeting animate-fade-up">Welcome to my corner of the web</p>
			<h1 class="hero-title animate-fade-up" style="animation-delay: 100ms">
				{displayText}<span class="cursor" class:cursor--hidden={!showCursor}>|</span>
			</h1>
			<p class="hero-subtitle animate-fade-up" style="animation-delay: 200ms">
				CS Student &middot; Dev &middot; Open-Source Hobbyist
			</p>
			<p class="hero-desc animate-fade-up" style="animation-delay: 300ms">
				Building things for the fun of it. Coffee-fueled code, occasional brilliance, and a healthy
				dose of procrastination.
			</p>
			<div class="hero-actions animate-fade-up" style="animation-delay: 400ms">
				<a href={resolve('/projects')} class="btn btn--primary">
					View Projects
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg
					>
				</a>
				<a href={resolve('/about')} class="btn btn--ghost"> About Me </a>
			</div>
			<div class="hero-socials animate-fade-up" style="animation-delay: 500ms">
				<a
					href="https://github.com/sharki22"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
						><path
							d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
						/></svg
					>
				</a>
			</div>
		</div>
	</section>

	<section class="skills-section">
		<h2 class="section-title">
			<span class="gradient-text">Skills & Technologies</span>
		</h2>
		<div class="skills-grid stagger">
			{#each skillCategories as cat (cat.name)}
				<div class="skill-card">
					<div class="skill-card-header">
						<span class="skill-card-icon">{cat.icon}</span>
						<h3 class="skill-card-name">{cat.name}</h3>
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

	<section class="projects-section">
		<div class="section-header">
			<h2 class="section-title">
				<span class="gradient-text">Featured Projects</span>
			</h2>
			<a href={resolve('/projects')} class="btn btn--ghost btn--sm">
				View all
				<svg
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg
				>
			</a>
		</div>
		<div class="projects-grid">
			{#each projects.slice(0, 3) as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<section class="contact-section" id="contact">
		<div class="contact-card glass">
			<h2 class="contact-title">Let's Connect</h2>
			<p class="contact-desc">
				Whether you want to collaborate, chat about tech, or just say hi — I'm always open to a
				conversation.
			</p>
			<div class="contact-links">
				<a
					href="https://github.com/sharki22"
					target="_blank"
					rel="noopener noreferrer"
					class="contact-link"
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
						><path
							d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
						/></svg
					>
					GitHub
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	.hero {
		position: relative;
		min-height: calc(100vh - 6rem);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem 0;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse at 50% 0%, var(--glow) 0%, transparent 60%);
		pointer-events: none;
	}

	.hero-content {
		position: relative;
		max-width: 640px;
		text-align: center;
	}

	.hero-greeting {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--accent-1);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 1rem;
	}

	.hero-title {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.1;
		margin-bottom: 1rem;
		font-family: var(--font-mono);
	}

	.cursor {
		color: var(--accent-1);
		font-weight: 300;
		transition: opacity 0.1s;
	}

	.cursor--hidden {
		opacity: 0;
	}

	.hero-subtitle {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin-bottom: 0.75rem;
		font-weight: 500;
	}

	.hero-desc {
		font-size: 1rem;
		color: var(--text-muted);
		line-height: 1.7;
		margin-bottom: 2rem;
		max-width: 480px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-actions {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		margin-bottom: 2.5rem;
	}

	.hero-socials {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
		color: var(--text-muted);
	}

	.hero-socials a {
		color: var(--text-secondary);
		transition: all 0.2s;
		display: flex;
		align-items: center;
	}

	.hero-socials a:hover {
		color: var(--accent-1);
		transform: translateY(-2px);
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		border-radius: var(--radius-sm);
		font-size: 0.9375rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s;
	}

	.btn--primary {
		background: var(--accent-gradient);
		color: #fff;
		box-shadow: 0 4px 14px var(--glow);
	}

	.btn--primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px var(--glow);
		opacity: 1;
	}

	.btn--ghost {
		color: var(--text-secondary);
		border: 1px solid var(--border);
	}

	.btn--ghost:hover {
		color: var(--text);
		border-color: var(--text-muted);
		opacity: 1;
	}

	.btn--sm {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}

	.skills-section {
		padding: 4rem 0;
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
		transition: all 0.2s;
	}

	.skill-card:hover {
		border-color: var(--accent-1);
		box-shadow: var(--shadow);
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
		transition: all 0.2s;
	}

	.skill-tag:hover {
		background: var(--glow);
		color: var(--accent-1);
	}

	.skill-tag-icon {
		width: 14px;
		height: 14px;
		display: inline-block;
		vertical-align: middle;
	}

	.projects-section {
		padding: 4rem 0;
	}

	.section-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.section-header .section-title {
		margin-bottom: 0;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1rem;
	}

	.contact-section {
		padding: 4rem 0 2rem;
	}

	.contact-card {
		max-width: 520px;
		margin: 0 auto;
		padding: 3rem 2.5rem;
		border-radius: var(--radius-xl);
		text-align: center;
	}

	.contact-title {
		font-size: 1.75rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.contact-desc {
		font-size: 0.9375rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.contact-links {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.contact-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.625rem 1.25rem;
		border-radius: var(--radius-sm);
		background: var(--bg-muted);
		color: var(--text-secondary);
		font-size: 0.9375rem;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.2s;
	}

	.contact-link:hover {
		background: var(--glow);
		color: var(--accent-1);
		opacity: 1;
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.contact-card {
			padding: 2rem 1.5rem;
		}
	}
</style>
