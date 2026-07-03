<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<nav class="NavBar">
	<ul>
		<li>
			<button class="btn" onclick={() => goto(resolve('/'))}>
				<span>Home</span>
			</button>
		</li>
		<li>
			<button class="btn" onclick={() => goto(resolve('/projects'))}>
				<span>Projects</span>
			</button>
		</li>
		<li>
			<button class="btn" onclick={() => goto(resolve('/clicker'))}>
				<span>Clicker</span>
			</button>
		</li>
	</ul>
</nav>

<style>
	.NavBar {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 240px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		padding: 2rem 0;
		box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	.NavBar ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.btn {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.875rem 1.5rem;
		border: none;
		background: transparent;
		color: rgba(255, 255, 255, 0.8);
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		text-align: left;
		border-left: 3px solid transparent;
		text-decoration: none;
	}

	.btn:hover {
		background: rgba(255, 255, 255, 0.1);
		color: white;
		border-left-color: rgba(255, 255, 255, 0.5);
		transform: translateX(5px);
	}

	.btn:active {
		background: rgba(255, 255, 255, 0.2);
		color: white;
		border-left-color: white;
		font-weight: 600;
		backdrop-filter: blur(10px);
	}
	span {
		font-size: 0.95rem;
		letter-spacing: 0.3px;
	}

	@media (max-width: 768px) {
		.NavBar {
			width: 100%;
			height: auto;
			bottom: auto;
			padding: 0.5rem 0;
			background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
		}

		.NavBar ul {
			flex-direction: row;
			justify-content: center;
			padding: 0 1rem;
		}

		.btn {
			border-left: none;
			border-bottom: 3px solid transparent;
			padding: 0.75rem 1rem;
			justify-content: center;
		}

		.btn:hover {
			transform: translateY(-3px);
			border-left-color: transparent;
			border-bottom-color: rgba(255, 255, 255, 0.5);
		}
	}

	:global(body) {
		margin-left: 260px;
	}

	@media (max-width: 768px) {
		:global(body) {
			margin-left: 0;
			margin-top: 70px;
		}
	}
</style>
