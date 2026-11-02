# Yazılar bölümüne yeni yazı ekleme

1. `src/posts.mjs` dosyasını açın, `posts` dizisine bir kayıt ekleyin:

   ```js
   {
     slug: 'yeni-karar-basligi',       // adres: /yazilar/yeni-karar-basligi/
     title: 'Yazının başlığı',
     category: 'karar',                // 'rehber', 'karar' ya da 'mevzuat'
     date: '2026-11-15',               // en yeni tarih en üstte görünür
     author: 'Av. Zeynep Melis Güzel',
     area: 'sigorta-hukuku',           // ilgili çalışma alanı (src/services.mjs)
     image: 'kutuphane',               // public/assets/img içindeki görsel
     alt: 'Görselin kısa açıklaması',
     summary: 'Liste sayfasında görünen bir iki cümle.',
     body: [
       ['p', 'Paragraf.'],
       ['h2', 'Ara başlık'],
       ['ul', ['Madde', 'Madde']],
       ['facts', [['Mahkeme', '...'], ['Esas / Karar', '...']]],
     ],
     sources: ['Kararın resmî kaynağı'],
   },
   ```

2. `pnpm build` çalıştırın, `public/` altındaki sayfalar yenilenir.
3. `pnpm lint` ve `pnpm dev` ile kontrol edip `main` dalına gönderin. Cloudflare yayına alır.

Liste sayfası, kategori sekmesi (`mevzuat` ilk yazıyla açılır) ve ana sayfa kendiliğinden güncellenir.

**Büro kullanırsa:** Avukatlardan bu adımları beklemek gerçekçi değil. Site gerçek kullanıma geçerse, kod yazmadan
tarayıcıdan yazı ekleyebilecekleri ücretsiz bir panel (örneğin Decap CMS) bağlanmalıdır. Demo için kurulmadı.
