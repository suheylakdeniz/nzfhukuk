# nzfhukuk — working notes for Claude Code

GitHub repo `suheylakdeniz/nzfhukuk`; the local folder is `~/hukukSitesi`. A design proposal for
the law firm NZF Hukuk at `nzfhukuk.suheylakdeniz.com`, served by the Cloudflare Worker
`suheylakdeniz-nzfhukuk`. It is a demo: the real site `nzfhukuk.com` is not touched.

No framework. `src/` holds the content (`site.mjs`, `services.mjs`, `posts.mjs`) and
`tools/build.mjs` writes the pages into `public/`. The output is committed, so Cloudflare deploys
plain files with no build step. `public/styles.css` and `public/site.js` are hand-written; the
HTML under `public/` is generated, do not edit it.

**Hosting:** this site's log is `docs/hosting.md` (what is done, what is next). The general
procedure is in the hub repo, `/Users/suheyl/suheylakdeniz.com/docs/website-playbook.md`. Read both
before touching Cloudflare. Update the log when a step is done; new pitfalls go into the playbook.

## Rules

- Nothing paid. No secret in the repo or in page code. No cookies, trackers or third-party requests.
- Copy is honest: no counts, testimonials or claims the firm has not made. Placeholders are labelled
  on the page (`örnek`, `eklenecek`). Never invent a court decision for the Yazılar section.
- New legal claims go on `docs/avukat-onay-listesi.md`, with whether the statute text was checked.
- Turkish for every user-facing string. Every link and button must go somewhere real.
- The site stays `noindex` with the demo strip until the firm takes it over.
- `pnpm lint` (Biome) must pass.

## Commands

`pnpm install` · `pnpm build` · `pnpm lint` · `pnpm dev` (http://localhost:8787) · adding a post:
`docs/yeni-yazi-ekleme.md`. Deploys happen on push to `main` through Cloudflare Workers Builds
(`npx wrangler deploy`).
