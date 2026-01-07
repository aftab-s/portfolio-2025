# Portfolio (portfolio-2026)

A modern, responsive developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

This repository contains the source for a single-page portfolio site featuring horizontally-scrolling carousels for projects, certifications, and photos, a compact photobook/lightbox, and a responsive Hero and About sections.

---

## Quick Links

- Project root: `portfolio-2025`
- Main entry: `src/main.jsx`
- App component: `src/App.jsx`
- Important components: `src/components` (Hero, AboutMe, Roadmap, Benefits, BeyondWork, Services, Header, Footer)

---

## Prerequisites

- Node.js >= 18 (recommended)
- npm (or yarn/pnpm)

---

## Install

```bash
cd portfolio-2025
npm install
```

---

## Development

Run the Vite dev server (hot reload):

```bash
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

---

## Build & Preview

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The build output is written to the `dist/` directory.

---

## Available Scripts

- `npm run dev` - start dev server
- `npm run build` - build production
- `npm run preview` - preview built app
- (If present) `npm run lint` / `npm run format` - lint/format helpers

---

## Project Structure (high level)

- `index.html` - Vite entry
- `src/`
	- `main.jsx` - app bootstrap
	- `App.jsx` - app layout
	- `index.css`, `tailwind.config.js`, `postcss.config.js` - styling
	- `assets/` - images and grouped assets (projects, about, photos, socials, etc.)
	- `components/` - React components (Hero, AboutMe, Roadmap, Benefits, BeyondWork, Services, Header, Footer, etc.)
	- `constants/` - data lists for projects, certifications, socials, etc.
	- `lib/utils.js` - small helper functions

---

## How to Add Content

- Projects: update `src/constants/index.js` (roadmap/projects array) and add images to `src/assets/projects` (or the assets folder used). Each project entry supports `title`, `subtitle`, `text`, `tech`, `imageUrl`, and `githubUrl`.
- Certifications: update `src/constants/index.js` (benefits array) and add icons/images to `src/assets/certifications`.
- Photos (Beyond Work): place images in `src/assets/beyond-work` and add entries if required; the component duplicates the list for infinite scroll logic.

Tips:
- Keep asset imports consistent with the `/src/assets` index (see `src/assets/index.js`).
- Use relative imports in `constants` if adding new images directly.

---

## Design & Styling Notes

- Tailwind CSS used for all styling; configuration in `tailwind.config.js`.
- Custom design tokens: colors like `color-1` (purple #AC6AFF), `color-5`, and neutrals `n-1..n-8` are used across components.
- Sections follow a repeating pattern: small monospace section label, gradient underline, heading with gradient accent.
- Cards use `rounded-2xl` and a subtle border with gradient/hovers.
- Animations via Framer Motion for entrance/hover/smooth interactions.

---

## Contact Form

- The site uses Formspree (or similar) for the contact form. Check `src/components/Footer.jsx` for the form endpoint/handler and the configured form id.

---

## Accessibility & Responsiveness

- Components are mobile-first and include responsive classes (`sm`, `md`, `lg`, `xl`).
- Carousels are accessible by keyboard in lightbox mode; arrow keys and Esc are supported in the photobook lightbox.

---

## Deployment

You can deploy to Vercel, Netlify, or any static host that supports a single-page app. Typical settings:

- Build command: `npm run build`
- Publish directory: `dist`

For Vercel, the default detected framework will usually work; ensure the build command and output directory match above.

---

## Troubleshooting

- If styles are missing after build, ensure `tailwind.config.js` includes all source paths under `content`.
- If images are broken, confirm the import paths in `src/assets/index.js` and the `constants` arrays.
- If dev server does not start, ensure Node version and that `node_modules` installed successfully.

---

## Contributing

- Fork, make a feature branch, and open a PR. Keep changes small and focused.
- Add new UI components to `src/components` and update `src/constants` for content-driven pieces.
- For layout or design changes, update Tailwind utility usage and `tailwind.config.js` if new tokens are required.

---

## Useful Commands (copy/paste)

```bash
# install deps
npm install

# dev server
npm run dev

# build
npm run build

# preview production build
npm run preview
```

---

## License

Include your license information here (e.g., MIT) or leave it blank if private.


---

If you'd like, I can also:
- Add a short CONTRIBUTING.md or PR template
- Add example entries showing how to add a new project/cert/photo with code snippets
- Add a minimal deployment guide for Vercel/Netlify with screenshots
