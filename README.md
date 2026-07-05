# sharki22.github.io

Личный сайт-портфолио, построенный на [SvelteKit](https://kit.svelte.dev/) с генерацией статики для GitHub Pages.

## Стек

- **Framework**: SvelteKit 2 + Svelte 5 (runes)
- **Build**: Vite
- **Language**: TypeScript
- **Deploy**: GitHub Actions → GitHub Pages

## Разработка

```bash
npm install
npm run dev
```

Сборка и превью:

```bash
npm run build
npm run preview
```

## Деплой

При пуше в **`main`** GitHub Actions автоматически собирает проект и деплоит на GitHub Pages.
