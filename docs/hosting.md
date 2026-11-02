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

- **2026-11-02, Faz 3-5:** Push edildi (`714cd19`). Cloudflare GitHub uygulamasına repo yetkisi verildi, Worker
  `suheylakdeniz-nzfhukuk` repodan oluşturuldu, ilk build yeşil. Faz 6-7 gerekmedi (tek repo, alt alan adı).
- **2026-11-02, Faz 10:** Dış doğrulama: Cloudflare IP, `/` ve alt sayfalar 200, `/olmayan/` 404, http → https 301,
  `x-robots-tag: noindex`, sertifika Google Trust Services (2027-01'e kadar), workers.dev 404.
- **2026-11-02, hub:** Vitrinde "Yakında" piramidi NZF Hukuk oldu, hub dokümanlarına satır eklendi.

## Şu an

- Hosting için bekleyen adım yok. Site yayında; sıradaki iş tasarım ve metin düzeltmeleri.

## Gelecek (sırayla)

1. Süheyl'in düzeltmeleri; her push `main` otomatik yayına girer.
2. Büro kabul ederse: `docs/avukat-onay-listesi.md`, alan adı geçişi ve yazı paneli ayrıca konuşulur.

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
