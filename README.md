# NZF Hukuk

NZF Hukuk için tasarım önerisi: https://nzfhukuk.suheylakdeniz.com (gerçek site: https://nzfhukuk.com)

Düz HTML, Cloudflare Worker. İçerik `src/`, üretilen sayfalar `public/`.

```
pnpm install
pnpm build
pnpm lint
pnpm dev
```

- `docs/avukat-onay-listesi.md`: büronun kontrol etmesi gerekenler
- `docs/yeni-yazi-ekleme.md`: Yazılar bölümüne yazı ekleme
- `docs/hosting.md`: yayın günlüğü
