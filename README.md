# SME-Excellence Website

Astro + Tailwind website with editable content support for non-technical users using Decap CMS.

## Project Structure

```text
sme-excellence/
├── public/
│   └── admin/
│       ├── index.html
│       └── config.yml
├── src/
│   ├── content/
│   │   ├── config.ts
│   │   └── site/
│   │       └── content.json
│   └── pages/
└── package.json
```

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start Astro development server |
| `npm run cms:proxy` | Start local Decap CMS proxy server |
| `npm run cms:proxy:stop` | Stop local Decap CMS proxy (frees port 8081) |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |

## Content Editing (Non-Technical)

### Local editing flow

1. Start the website:

	```bash
	npm run dev
	```

2. In another terminal, start CMS proxy:

	```bash
	npm run cms:proxy
	```

	If you see `EADDRINUSE` on port `8081`, stop the previous proxy process and run again:

	```bash
	npm run cms:proxy:stop
	npm run cms:proxy
	```

3. Open:

	- Website: `http://localhost:4321`
	- Admin UI: `http://localhost:4321/cms/`

4. Edit fields in **Website Content** and save/publish.

### Troubleshooting 404 on CMS

If `http://localhost:4321/cms/` shows `404 Not Found`, restart from the correct folder:

```bash
cd /home/robert/MY\ PROJECTS/SME-Excellence/sme-excellence
npm run cms:proxy:stop
npm run dev
```

In a second terminal:

```bash
cd /home/robert/MY\ PROJECTS/SME-Excellence/sme-excellence
npm run cms:proxy
```

### Where content is stored

All editable text is in:

- `src/content/site/content.json`

Schema validation is defined in:

- `src/content/config.ts`

## Production setup note

`public/admin/config.yml` currently uses `git-gateway` with `local_backend: true` for local editing.

For production/editor login, connect an auth-capable backend (for example Netlify Identity + Git Gateway, or switch to a supported Git provider backend in Decap config).
