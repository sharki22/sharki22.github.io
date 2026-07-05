export const ASSETS_BASE = ''
export const ICONS_BASE = `${ASSETS_BASE}/icons`

export function icon(name: string, ext = 'svg'): string {
	return `${ICONS_BASE}/${name}.${ext}`
}
