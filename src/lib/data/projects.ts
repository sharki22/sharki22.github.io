export interface Project {
	title: string;
	description: string;
	tags: string[];
	href: string;
	icon: string;
	stars?: number;
	lang?: string;
}

export const projects: Project[] = [
	{
		title: 'refetch',
		description:
			'A modern, interactive System Information TUI written in C++. Features a real-time 3D Gaussian surface plot alongside comprehensive system metrics — OS, kernel, CPU, RAM, uptime. Built with FTXUI for a colorful, mouse-interactive terminal dashboard.',
		tags: ['C++', 'CMake', 'FTXUI', 'TUI'],
		href: 'https://github.com/sharki22/refetch',
		icon: '⚡',
		lang: 'C++'
	},
	{
		title: 'Huffman Archiver',
		description:
			'A desktop GUI application for file compression using the classic Huffman coding algorithm. Implements binary tree construction, prefix codes, and bit-level I/O. Built with C++ and a cross-platform UI framework.',
		tags: ['C++', 'Qt', 'Algorithms', 'GUI'],
		href: '#',
		icon: '🗜️',
		lang: 'C++'
	},
	{
		title: 'Lexical Analyzer',
		description:
			'A GUI-based lexical analysis tool that tokenizes source code using deterministic finite automata (DFA). Supports regex-based token patterns and produces token stream output. Built as a university compiler design project.',
		tags: ['C++', 'Qt', 'Automata', 'Compiler'],
		href: '#',
		icon: '📝',
		lang: 'C++'
	},
	{
		title: 'sharki22.github.io',
		description:
			'Personal portfolio website built with SvelteKit 2 + Svelte 5 (runes). Fully static, deployed on GitHub Pages. Features dark mode, bento-grid skills, project showcase, and a silly clicker game.',
		tags: ['Svelte', 'TypeScript', 'Vite', 'CSS'],
		href: 'https://github.com/sharki22/sharki22.github.io',
		icon: '🌐',
		lang: 'Svelte'
	},
	{
		title: 'nerdi',
		description:
			'A vim-like terminal text editor written in Rust. Modal editing, syntax highlighting, and a minimal UI. Built for speed and simplicity — because sometimes you just want to edit files without the bloat.',
		tags: ['Rust', 'TUI', 'Editor'],
		href: '#',
		icon: '✏️',
		lang: 'Rust'
	},
	{
		title: 'Odysseus',
		description:
			'A password manager and generator with both CLI and GUI interfaces. Stores credentials locally with encryption, generates strong random passwords, and provides a smooth cross-platform experience.',
		tags: ['C#', '.NET', 'CLI', 'GUI'],
		href: '#',
		icon: '🔐',
		lang: 'C#'
	}
];
