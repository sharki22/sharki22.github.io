import { ICONS_BASE } from './paths'

export interface SkillItem {
	name: string
	icon: string
}

export interface SkillCategory {
	name: string
	icon: string
	items: SkillItem[]
}

export const ICONS_BASE = '/icons'

export const skillIconMap: Record<string, string> = {
	Git: `${ICONS_BASE}/git.svg`,
	Linux: `${ICONS_BASE}/linux.svg`,
	Rust: `${ICONS_BASE}/rust.svg`,
	C: `${ICONS_BASE}/c.svg`,
	'C/C++': `${ICONS_BASE}/cplusplus.svg`,
	'C++': `${ICONS_BASE}/cplusplus.svg`,
	Python: `${ICONS_BASE}/python.svg`,
	TypeScript: `${ICONS_BASE}/typescript.svg`,
	JavaScript: `${ICONS_BASE}/nodejs.svg`,
	Svelte: `${ICONS_BASE}/svelte.svg`,
	Docker: `${ICONS_BASE}/docker.svg`,
	PostgreSQL: `${ICONS_BASE}/postgresql.svg`,
	MySQL: `${ICONS_BASE}/mysql.svg`,
	SQLite: `${ICONS_BASE}/sqlite.svg`,
	Arduino: `${ICONS_BASE}/arduino.svg`,
	CMake: `${ICONS_BASE}/cmake.svg`,
	Qt: `${ICONS_BASE}/qt.svg`,
	Vue: `${ICONS_BASE}/vuejs.svg`,
	'ASP.NET': `${ICONS_BASE}/dotnet.svg`,
	'Vue.js': `${ICONS_BASE}/vuejs.svg`,
	'C#': `${ICONS_BASE}/csharp.svg`,
	PyTorch: `${ICONS_BASE}/pytorch.svg`,
	'Raspberry Pi': `${ICONS_BASE}/raspberrypi.svg`,
	'.NET': `${ICONS_BASE}/dotnet.svg`,
	Node: `${ICONS_BASE}/nodejs.svg`,
	SFML: `${ICONS_BASE}/sfml.svg`,
	SDL3: `${ICONS_BASE}/sdl3.svg`,
	raylib: `${ICONS_BASE}/raylib.png`,
}

function sk(name: string): SkillItem {
	return { name, icon: skillIconMap[name] || '' }
}

export const skillCategories: SkillCategory[] = [
	{
		name: 'Languages',
		icon: '💻',
		items: ['Rust', 'C/C++', 'Python', 'C#', 'JavaScript', 'TypeScript'].map(sk),
	},
	{
		name: 'Frameworks',
		icon: '🧩',
		items: ['Qt', 'Svelte', 'Vue', 'ASP.NET', '.NET'].map(sk),
	},
	{
		name: 'Tools',
		icon: '🛠️',
		items: ['Git', 'Linux', 'CMake', 'Docker', 'Node'].map(sk),
	},
	{
		name: 'Databases',
		icon: '🗄️',
		items: ['MySQL', 'PostgreSQL', 'SQLite'].map(sk),
	},
	{
		name: 'Hardware',
		icon: '🔌',
		items: ['Arduino'].map(sk),
	},
	{
		name: 'Libraries',
		icon: '📚',
		items: ['PyTorch', 'SFML', 'SDL3', 'raylib'].map(sk),
	},
]

export const allSkills: SkillItem[] = [
	sk('Rust'),
	sk('C/C++'),
	sk('Python'),
	sk('TypeScript'),
	sk('Svelte'),
	sk('Git'),
	sk('Linux'),
	sk('Docker'),
	sk('PostgreSQL'),
	sk('Arduino'),
]
