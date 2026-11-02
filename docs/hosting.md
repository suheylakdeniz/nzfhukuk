# nzfhukuk.suheylakdeniz.com — site günlüğü

Rehber: hub repo `suheylakdeniz/suheylakdeniz.com`, `docs/website-playbook.md`
(yerelde `/Users/suheyl/suheylakdeniz.com/docs/website-playbook.md`). Son güncelleme: 2026-11-02.
Yeni oturumda: "rehberi ve bu günlüğü oku, kalan adımlardan devam et."

## Kimlik

| | |
|---|---|
| Alan adı | `nzfhukuk.suheylakdeniz.com` (alt alan adı; zone zaten Active, Faz 1 ve 7 atlanır) |
| Kayıtçı | Natro (`suheylakdeniz.com`) |
| E-posta sağlayıcı | yok; form ziyaretçinin e-posta uygulamasını `info@nzfhukuk.com` için açar |
| Repo | `suheylakdeniz/nzfhukuk` (yerel `~/hukukSitesi`) |
| Worker | `suheylakdeniz-nzfhukuk` → kök → `nzfhukuk.suheylakdeniz.com` |
| Cloudflare | `suheylakdeniz` hesabı, Free |

NZF Hukuk için tasarım önerisi. Gerçek site `nzfhukuk.com` (WordPress.com) **değişmedi, dokunulmayacak.**
Demo `noindex` ile yayınlanır, üstünde "tasarım önerisi" şeridi vardır.

## Geçmiş (yapıldı)

- **2026-11-02, iskelet + Faz 2:** Site yazıldı: 26 sayfa (`src/` + `tools/build.mjs` → `public/`), çıktı repoda.
  `pnpm lint` temiz. Yerel `wrangler dev` üzerinde bağlantı, taşma, kontrast, menü ve form testleri geçti.

## Şu an

- Faz 3 push: Süheyl'in yerel gözden geçirmesi ve onayı bekleniyor.

## Gelecek (sırayla)

1. Faz 3: push (`main`).
2. Faz 0 hatırlatması: Cloudflare GitHub uygulamasına `nzfhukuk` reposu yetkisi (`github.com/settings/installations`).
3. Faz 4: Worker'ı repodan oluştur. Ad `suheylakdeniz-nzfhukuk`, Build command boş, Deploy `npx wrangler deploy`,
   Non-production `npx wrangler versions upload`.
4. Faz 5: Alan adını doğrula. Faz 6 ve 7 gerekmez.
5. Faz 8: workers.dev anahtarlarını kapat.
6. Faz 10: dış doğrulama.
7. Hub: `web/public/tomb/tomb.js` ve `web/public/index.html` içinde "Yakında" yerine NZF Hukuk; `docs/hosting.md`
   ve `website-playbook.md` tablosu güncellenir. **Site canlıya çıkmadan yapılmaz.**

## Doğrulama (bu site için)

```
dig +short nzfhukuk.suheylakdeniz.com @1.1.1.1
curl -sS -o /dev/null -w "%{http_code}\n" https://nzfhukuk.suheylakdeniz.com/
curl -sS -o /dev/null -w "%{http_code}\n" https://nzfhukuk.suheylakdeniz.com/olmayan/
curl -sS -o /dev/null -w "%{http_code} -> %{redirect_url}\n" http://nzfhukuk.suheylakdeniz.com/
curl -sSI https://nzfhukuk.suheylakdeniz.com/ | grep -i x-robots-tag
```

## Notlar ve kararlar

- Worker adı `suheylakdeniz-nzfhukuk` = Cloudflare proje adı; değiştirilmez.
- Cloudflare'de build yok; `public/` repoda hazır gelir. `src/` değişince `pnpm build` çalıştırılıp çıktı da commit edilir.
- Çerez ve takip yok; fontlar kendi sunucumuzdan.
- Büroya gidecek kontrol listesi: `docs/avukat-onay-listesi.md`.
