# Portfolio Website

A personal portfolio site built with [Astro](https://astro.build), featuring an About page, History (resume), Projects, and a topic-organized Blog.

## Setup

1. Clone and install: `npm install`
2. Run dev server: `npm run dev`
3. Build: `npm run build`

## Deploy to GitHub Pages

1. Create a repo and push this code
2. Go to **Settings → Pages → Source**: select **GitHub Actions**
3. Update `astro.config.mjs` with your `site` and `base` URLs
4. Push to `main` – the workflow builds and deploys automatically

## Resume

Place your LaTeX resume as `resume.tex` in the project root. The build converts it to HTML for the History page. [Pandoc](https://pandoc.org/installing.html) must be installed.
