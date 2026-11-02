// Writes the static pages under public/ from src/. The output is committed, so Cloudflare deploys
// plain files with no build step. Run `pnpm build` after changing anything in src/.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { categories, postBySlug, sortedPosts } from '../src/posts.mjs'
import { serviceBySlug, services } from '../src/services.mjs'
import { site, steps, team, teamById } from '../src/site.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public')
const svg = (name) =>
  readFileSync(join(pub, 'assets', name), 'utf8')
    .trim()
    .replace(' xmlns="http://www.w3.org/2000/svg"', '')

const esc = (s) =>
  String(s).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')

const dateTr = (iso) =>
  new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(`${iso}T12:00:00`),
  )

const pad = (n) => String(n).padStart(2, '0')
const areaUrl = (slug) => `/calisma-alanlari/${slug}/`
const postUrl = (slug) => `/yazilar/${slug}/`
const contactFor = (slug) => `/iletisim/?konu=${slug}`
const arrow =
  '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>'

const img = (name, alt, { sizes = '100vw', eager = false, cls = '' } = {}) =>
  `<img${cls ? ` class="${cls}"` : ''} src="/assets/img/${name}-1800.jpg" srcset="/assets/img/${name}-900.jpg 900w, /assets/img/${name}-1800.jpg 1800w" sizes="${sizes}" alt="${esc(alt)}" width="1800" height="1200"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async" />`

const btn = (href, label, kind = 'solid') =>
  `<a class="btn btn-${kind}" href="${href}"><span>${label}</span>${arrow}</a>`

const nav = [
  ['/calisma-alanlari/', 'Çalışma Alanları'],
  ['/hakkimizda/', 'Hakkımızda'],
  ['/yazilar/', 'Yazılar'],
  ['/iletisim/', 'İletişim'],
]

function layout({ title, description, path, body, section }) {
  const links = nav
    .map(([href, label]) => {
      const current = section === href ? ' aria-current="page"' : ''
      return `<a href="${href}"${current}>${label}</a>`
    })
    .join('\n          ')
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="robots" content="noindex" />
    <meta name="theme-color" content="#f5f0e6" />
    <link rel="canonical" href="${site.url}${path}" />
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
    <link rel="preload" href="/assets/fonts/bodoni-moda-latin-standard-normal.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/assets/fonts/hanken-grotesk-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="stylesheet" href="/styles.css" />
    <script>document.documentElement.classList.add('js')</script>
    <script src="/site.js" defer></script>
  </head>
  <body>
    <a class="skip" href="#icerik">İçeriğe geç</a>
    <p class="demo-strip">Bu sayfa NZF Hukuk için hazırlanmış bir tasarım önerisidir. Resmî site: <a href="${site.official}">nzfhukuk.com</a></p>
    <header class="site-header">
      <div class="wrap header-row">
        <a class="brand" href="/" aria-label="NZF Hukuk ana sayfa">
          ${svg('logo-mark.svg')}
          <span class="brand-sub">Avukatlık<br />Arabuluculuk</span>
        </a>
        <nav class="main-nav" aria-label="Ana menü">
          ${links}
        </nav>
        <a class="btn btn-solid btn-small header-cta" href="/iletisim/"><span>Görüşme talep edin</span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobil-menu">
          <span class="menu-toggle-label">Menü</span>
        </button>
      </div>
      <nav class="mobile-nav" id="mobil-menu" aria-label="Mobil menü" hidden>
        ${nav.map(([href, label], i) => `<a href="${href}"><small>${pad(i + 1)}</small>${label}</a>`).join('\n        ')}
        <a class="mobile-mail" href="mailto:${site.email}">${site.email}</a>
      </nav>
    </header>
    <main id="icerik">
${body}
    </main>
    ${footer()}
  </body>
</html>
`
}

function footer() {
  return `<footer class="site-footer">
      <div class="wrap footer-grid">
        <div class="footer-brand">
          <a href="/" class="footer-logo" aria-label="NZF Hukuk ana sayfa">${svg('logo.svg')}</a>
          <p>Ankara ve İstanbul’da avukatlık ve arabuluculuk.</p>
        </div>
        <div>
          <h2>Çalışma Alanları</h2>
          <ul>
            ${services.map((s) => `<li><a href="${areaUrl(s.slug)}">${s.nav ?? s.name}</a></li>`).join('\n            ')}
          </ul>
        </div>
        <div>
          <h2>Büro</h2>
          <ul>
            <li><a href="/hakkimizda/">Hakkımızda</a></li>
            <li><a href="/hakkimizda/#ekip">Ekibimiz</a></li>
            <li><a href="/yazilar/">Yazılar</a></li>
            <li><a href="/iletisim/">İletişim</a></li>
          </ul>
        </div>
        <div>
          <h2>İletişim</h2>
          <ul>
            <li><a href="mailto:${site.email}">${site.email}</a></li>
            <li><span>${site.phone.display}</span> <span class="chip chip-dark">örnek numara</span></li>
            <li><a href="${site.offices[0].map}">Ankara ofisi, haritada aç</a></li>
          </ul>
        </div>
      </div>
      <div class="wrap footer-legal">
        <p>Bu sitedeki içerikler genel bilgilendirme amaçlıdır, hukuki danışmanlık yerine geçmez.</p>
        <ul>
          <li><a href="/kvkk-aydinlatma/">KVKK Aydınlatma Metni</a></li>
          <li><a href="/yasal-uyari/">Yasal Uyarı</a></li>
          <li><span>© 2026 NZF Hukuk</span></li>
          <li><a href="https://suheylakdeniz.com/">Tasarım: Süheyl Akdeniz</a></li>
        </ul>
      </div>
    </footer>`
}

function postCard(p, { big = false } = {}) {
  return `<article class="post-card${big ? ' post-card-big' : ''}" data-reveal>
          <a href="${postUrl(p.slug)}">
            <div class="post-card-img">${img(p.image, p.alt, { sizes: big ? '(max-width: 900px) 100vw, 50vw' : '(max-width: 900px) 100vw, 25vw' })}</div>
            <p class="meta"><span class="meta-cat">${categories[p.category].name}</span>${p.sample ? '<span class="chip">örnek</span>' : ''}<time datetime="${p.date}">${dateTr(p.date)}</time></p>
            <h3>${p.title}</h3>
            <p class="post-card-sum">${p.summary}</p>
            <span class="more"><span>Yazıyı oku</span>${arrow}</span>
          </a>
        </article>`
}

function ctaBand(title, text, href = '/iletisim/', label = 'Görüşme talep edin') {
  return `<section class="cta-band">
        <div class="wrap cta-grid">
          <h2 data-reveal>${title}</h2>
          <div data-reveal>
            <p>${text}</p>
            ${btn(href, label, 'light')}
          </div>
        </div>
      </section>`
}

function home() {
  const rows = services
    .map(
      (s, i) => `<li>
              <a class="area-row" href="${areaUrl(s.slug)}" data-preview="${i}">
                <span class="area-no">${pad(i + 1)}</span>
                <span class="area-name">${s.name}</span>
                <span class="area-short">${s.short}</span>
                ${arrow}
              </a>
            </li>`,
    )
    .join('\n            ')
  const previews = services
    .map(
      (s, i) =>
        `<div class="preview${i === 0 ? ' is-active' : ''}" data-preview-img="${i}">${img(s.slug, s.alt, { sizes: '40vw' })}</div>`,
    )
    .join('\n            ')
  const letters = team
    .map(
      (t) => `<a class="letter-card" href="/hakkimizda/#${t.id}" data-reveal>
            <span class="letter" aria-hidden="true">${t.letter}</span>
            <span class="letter-name">${t.name}</span>
            <span class="letter-role">${t.role}</span>
            <span class="letter-focus">${t.focus}</span>
            <span class="more"><span>Profili gör</span>${arrow}</span>
          </a>`,
    )
    .join('\n          ')
  const stepsHtml = steps
    .map(
      ([t, d], i) => `<li data-reveal>
            <span class="step-no">${pad(i + 1)}</span>
            <h3>${t}</h3>
            <p>${d}</p>
          </li>`,
    )
    .join('\n          ')
  const latest = sortedPosts.slice(0, 3)
  return layout({
    title: 'NZF Hukuk · Avukatlık ve Arabuluculuk, Ankara ve İstanbul',
    description:
      'NZF Hukuk; sigorta, iş ve arabuluculuk başta olmak üzere on çalışma alanında Ankara ve İstanbul’da avukatlık ve hukuki danışmanlık hizmeti sunar.',
    path: '/',
    body: `      <section class="hero">
        <div class="wrap hero-grid">
          <div class="hero-text">
            <p class="eyebrow">Avukatlık · Arabuluculuk · Ankara ve İstanbul</p>
            <h1>Hukukta açık dil,<br />ölçülü adım.</h1>
            <p class="lead">NZF Hukuk; sigorta, iş ve arabuluculuk başta olmak üzere on çalışma alanında müvekkillerine güvenilir, etik ve profesyonel bir anlayışla hukuki destek sunar.</p>
            <div class="btn-row">
              ${btn('/iletisim/', 'Görüşme talep edin')}
              ${btn('/calisma-alanlari/', 'Çalışma alanları', 'line')}
            </div>
          </div>
          <div class="hero-img">${img('hero', 'Sise doğru yükselen, sivri köşeli modern bir bina', { sizes: '(max-width: 900px) 100vw, 45vw', eager: true })}</div>
        </div>
        <div class="wrap">
          <dl class="hero-facts">
            <div><dt>3</dt><dd>avukat</dd></div>
            <div><dt>10</dt><dd>çalışma alanı</dd></div>
            <div><dt>2</dt><dd>şehir: Ankara, İstanbul</dd></div>
            <div><dt>10</dt><dd>yıllık avukatlık deneyimi, kişi başı</dd></div>
          </dl>
        </div>
      </section>

      <section class="areas" aria-labelledby="alanlar-baslik">
        <div class="wrap">
          <div class="section-head" data-reveal>
            <p class="eyebrow">Çalışma Alanları</p>
            <h2 id="alanlar-baslik">Hangi konuda yardıma ihtiyacınız var?</h2>
          </div>
          <div class="areas-grid">
            <ol class="area-list">
            ${rows}
            </ol>
            <div class="preview-stack" aria-hidden="true">
            ${previews}
            </div>
          </div>
          <div class="section-foot">${btn('/calisma-alanlari/', 'Tüm alanları inceleyin', 'line')}</div>
        </div>
      </section>

      <section class="ink story" aria-labelledby="nzf-baslik">
        <div class="wrap">
          <div class="section-head" data-reveal>
            <p class="eyebrow">Adımız</p>
            <h2 id="nzf-baslik">Üç avukat, üç harf: N, Z, F.</h2>
            <p class="section-lead">NZF; büronun üç avukatı Neslihan, Zeynep ve Fahriye’nin adlarının baş harflerinden gelir. Her dosya, o konuda çalışan avukatla doğrudan yürür.</p>
          </div>
          <div class="letters">
          ${letters}
          </div>
        </div>
      </section>

      <section class="process" aria-labelledby="surec-baslik">
        <div class="wrap">
          <div class="section-head" data-reveal>
            <p class="eyebrow">Nasıl Çalışırız</p>
            <h2 id="surec-baslik">İlk görüşmeden sonuca, dört adım.</h2>
          </div>
          <ol class="steps">
          ${stepsHtml}
          </ol>
        </div>
      </section>

      <section class="writing" aria-labelledby="yazilar-baslik">
        <div class="wrap">
          <div class="section-head section-head-row" data-reveal>
            <div>
              <p class="eyebrow">Yazılar</p>
              <h2 id="yazilar-baslik">Yeni kararlar ve anlaşılır rehberler.</h2>
            </div>
            ${btn('/yazilar/', 'Tüm yazılar', 'line')}
          </div>
          <div class="post-grid post-grid-home">
        ${latest.map((p, i) => postCard(p, { big: i === 0 })).join('\n        ')}
          </div>
        </div>
      </section>

      ${ctaBand('Durumunuzu anlatın, birlikte bakalım.', `Bize <a href="mailto:${site.email}">${site.email}</a> adresinden ya da iletişim formundan yazabilirsiniz.`)}`,
  })
}

function areasIndex() {
  const cards = services
    .map(
      (
        s,
        i,
      ) => `<a class="area-card${s.primary ? ' area-card-big' : ''}" href="${areaUrl(s.slug)}" data-reveal>
            <div class="area-card-img">${img(s.slug, s.alt, { sizes: s.primary ? '(max-width: 900px) 100vw, 33vw' : '(max-width: 900px) 100vw, 25vw' })}</div>
            <span class="area-no">${pad(i + 1)}</span>
            <h2>${s.name}</h2>
            <p>${s.short}</p>
            <span class="more"><span>Detaylar</span>${arrow}</span>
          </a>`,
    )
    .join('\n          ')
  return layout({
    title: 'Çalışma Alanları · NZF Hukuk',
    description:
      'Sigorta, iş, arabuluculuk, sağlık, KVKK, ticaret ve şirketler, medeni, aile, ceza ve gayrimenkul hukuku.',
    path: '/calisma-alanlari/',
    section: '/calisma-alanlari/',
    body: `      <section class="page-head">
        <div class="wrap">
          <p class="eyebrow">Çalışma Alanları</p>
          <h1>On alan, tek bir yaklaşım.</h1>
          <p class="lead">Müvekkillerimize karşı sorumluluk bilinciyle hareket eder, haklarını savunmayı ve yasal çözümler sunmayı amaçlarız. İhtiyacınıza uygun hukuki destek için alanlardan birini seçin.</p>
        </div>
      </section>
      <section class="area-cards-section">
        <div class="wrap area-cards">
          ${cards}
        </div>
      </section>
      ${ctaBand('Konunuz burada yok mu?', 'Bize yazın. Konunun çalışma alanlarımıza girip girmediğini açıkça söyleyelim.')}`,
  })
}

function lawyerMini(t) {
  return `<a class="lawyer-mini" href="/hakkimizda/#${t.id}">
              <span class="lawyer-mini-letter" aria-hidden="true">${t.letter}</span>
              <span><strong>${t.name}</strong><small>${t.role}</small></span>
            </a>`
}

function areaPage(s, i) {
  const list = [...s.kept, ...s.more].map((x) => `<li>${x}</li>`).join('\n              ')
  const process = s.process
    .map(
      ([t, d], n) => `<li>
                <span class="step-no">${pad(n + 1)}</span>
                <h3>${t}</h3>
                <p>${d}</p>
              </li>`,
    )
    .join('\n              ')
  const faq = s.faq
    .map(
      ([q, a]) => `<details class="faq">
                <summary><span>${q}</span><span class="faq-icon" aria-hidden="true"></span></summary>
                <p>${a}</p>
              </details>`,
    )
    .join('\n              ')
  const lawyers = s.lawyers.length
    ? s.lawyers.map((id) => lawyerMini(teamById[id])).join('\n            ')
    : team.map(lawyerMini).join('\n            ')
  const related = s.posts.map((slug) => postBySlug[slug])
  const next = services[(i + 1) % services.length]
  const toc = [
    ['neler', 'Neler yapıyoruz'],
    ['surec', 'Süreç nasıl işler'],
    ['sorular', 'Sık sorulan sorular'],
    ['ekip', s.lawyers.length ? 'Bu alanda çalışanlar' : 'Ekibimiz'],
  ]
  if (related.length) toc.push(['ilgili', 'İlgili yazılar'])
  return layout({
    title: `${s.name} · NZF Hukuk`,
    description: s.short,
    path: areaUrl(s.slug),
    section: '/calisma-alanlari/',
    body: `      <section class="detail-head">
        <div class="wrap">
          <nav class="crumbs" aria-label="Sayfa konumu"><a href="/">Ana sayfa</a><span>/</span><a href="/calisma-alanlari/">Çalışma Alanları</a></nav>
          <div class="detail-title">
            <span class="area-no">${pad(i + 1)}</span>
            <h1>${s.name}</h1>
            <p class="lead">${s.short}</p>
          </div>
        </div>
        <div class="wrap detail-img">${img(s.slug, s.alt, { eager: true })}</div>
      </section>
      <section class="detail-body">
        <div class="wrap detail-grid">
          <aside class="detail-side">
            <nav aria-label="Bu sayfada">
              <h2>Bu sayfada</h2>
              <ul>
                ${toc.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('\n                ')}
              </ul>
            </nav>
            ${btn(contactFor(s.slug), 'Bu konuda yazın')}
          </aside>
          <div class="detail-main">
            <div class="prose-intro">
              ${s.intro.map((p) => `<p>${p}</p>`).join('\n              ')}
            </div>
            <section id="neler">
              <h2>Neler yapıyoruz</h2>
              <ul class="check-list">
              ${list}
              </ul>
            </section>
            <section id="surec">
              <h2>Süreç nasıl işler</h2>
              <ol class="steps steps-compact">
              ${process}
              </ol>
            </section>
            <section id="sorular">
              <h2>Sık sorulan sorular</h2>
              ${faq}
              <p class="fine">Bu yanıtlar genel bilgilendirme amaçlıdır. Somut durumunuz için bir avukata danışın.</p>
            </section>
            <section id="ekip">
              <h2>${s.lawyers.length ? 'Bu alanda çalışanlar' : 'Ekibimiz'}</h2>
              <div class="lawyer-minis">
            ${lawyers}
              </div>
            </section>
            ${
              related.length
                ? `<section id="ilgili">
              <h2>İlgili yazılar</h2>
              <ul class="related">
                ${related.map((p) => `<li><a href="${postUrl(p.slug)}"><span>${p.title}</span>${arrow}</a></li>`).join('\n                ')}
              </ul>
            </section>`
                : ''
            }
          </div>
        </div>
      </section>
      <section class="next-area">
        <a class="wrap next-link" href="${areaUrl(next.slug)}">
          <small>Sıradaki alan</small>
          <span>${next.name}</span>
          ${arrow}
        </a>
      </section>
      ${ctaBand(`${s.name} konusunda bir sorunuz mu var?`, 'Durumunuzu kısaca yazın, size dönüş yapalım. Formda konu sizin için hazır gelir.', contactFor(s.slug), 'Bu konuda yazın')}`,
  })
}

function about() {
  const people = team
    .map(
      (t) => `<article class="person" id="${t.id}" data-reveal>
            <div class="person-mark" aria-hidden="true"><span>${t.letter}</span></div>
            <div class="person-text">
              <p class="eyebrow">${t.role}</p>
              <h3>${t.name}</h3>
              <p>${t.bio}</p>
              <p>${t.focus}</p>
              <h4>Çalışma alanları</h4>
              <ul class="tag-list">
                ${t.areas.map((a) => `<li><a href="${areaUrl(a)}">${serviceBySlug[a].nav ?? serviceBySlug[a].name}</a></li>`).join('\n                ')}
              </ul>
            </div>
          </article>`,
    )
    .join('\n          ')
  return layout({
    title: 'Hakkımızda · NZF Hukuk',
    description:
      'NZF Hukuk’un kuruluş amacı ve ekibi: Neslihan Kavak Güven, Zeynep Melis Güzel, Fahriye Yılmaz.',
    path: '/hakkimizda/',
    section: '/hakkimizda/',
    body: `      <section class="page-head">
        <div class="wrap">
          <p class="eyebrow">Hakkımızda</p>
          <h1>Baş harflerimiz, adımız.</h1>
          <p class="lead">NZF Hukuk, kurulduğu günden bu yana müvekkillerine nitelikli hukuk hizmeti sunmayı amaçlayan bir hukuk bürosudur.</p>
        </div>
        <div class="wrap detail-img">${img('kutuphane', 'Raflarla çevrili eski bir kütüphane ve büstler', { eager: true })}</div>
      </section>
      <section class="about-mission">
        <div class="wrap two-col">
          <h2 data-reveal>Misyonumuz</h2>
          <div data-reveal>
            <p class="big-text">Güvenilir, etik ve profesyonel bir anlayışla hareket eden büromuz, müvekkillerine adil ve kaliteli hukuk hizmetleri sunmayı kendisine misyon edinmiştir.</p>
            <p>Sigorta Hukuku, İş Hukuku, Sağlık Hukuku, Özel Hukuk ve Aile Hukuku’nu da içeren geniş bir alanda hizmet veriyoruz. Avukatlarımız Ankara ve İstanbul’da çalışmaktadır.</p>
          </div>
        </div>
      </section>
      <section class="team" id="ekip" aria-labelledby="ekip-baslik">
        <div class="wrap">
          <div class="section-head" data-reveal>
            <p class="eyebrow">Ekibimiz</p>
            <h2 id="ekip-baslik">N, Z ve F.</h2>
          </div>
          ${people}
        </div>
      </section>
      ${ctaBand('Hangi avukatla görüşmeniz gerektiğinden emin değil misiniz?', 'Sorun değil. Konunuzu yazın, dosyanızı ilgili avukata biz yönlendirelim.')}`,
  })
}

function postsList(cat) {
  const list = cat ? sortedPosts.filter((p) => p.category === cat) : sortedPosts
  const used = Object.keys(categories).filter((c) => sortedPosts.some((p) => p.category === c))
  const tab = (href, label, active) =>
    `<a href="${href}"${active ? ' aria-current="page"' : ''}>${label}</a>`
  const tabs = [
    tab('/yazilar/', 'Tümü', !cat),
    ...used.map((c) => tab(`/yazilar/kategori/${c}/`, categories[c].plural, cat === c)),
  ].join('\n            ')
  const name = cat ? categories[cat].plural : 'Yazılar'
  return layout({
    title: `${name} · NZF Hukuk`,
    description: cat
      ? categories[cat].note
      : 'Yeni yargı kararları, mevzuat değişiklikleri ve anlaşılır rehberler.',
    path: cat ? `/yazilar/kategori/${cat}/` : '/yazilar/',
    section: '/yazilar/',
    body: `      <section class="page-head">
        <div class="wrap">
          <p class="eyebrow">Yazılar</p>
          <h1>${cat ? name : 'Yeni kararlar, anlaşılır rehberler.'}</h1>
          <p class="lead">${cat ? categories[cat].note : 'Yeni bir karar çıktığında ya da mevzuat değiştiğinde ne anlama geldiğini burada sade bir dille yazıyoruz.'}</p>
          <nav class="tabs" aria-label="Yazı kategorileri">
            ${tabs}
          </nav>
        </div>
      </section>
      <section class="post-list-section">
        <div class="wrap post-grid">
        ${list.map((p) => postCard(p)).join('\n        ')}
        </div>
      </section>`,
  })
}

function block([type, value]) {
  if (type === 'p') return `<p>${value}</p>`
  if (type === 'h2') return `<h2>${value}</h2>`
  if (type === 'ul' || type === 'ol')
    return `<${type}>${value.map((x) => `<li>${x}</li>`).join('')}</${type}>`
  if (type === 'facts')
    return `<dl class="facts">${value.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`
  throw new Error(`unknown block: ${type}`)
}

function words(p) {
  return p.body
    .flatMap(([, v]) => (Array.isArray(v) ? v.flat() : [v]))
    .join(' ')
    .split(/\s+/).length
}

function postPage(p) {
  const area = serviceBySlug[p.area]
  const others = sortedPosts.filter((o) => o.slug !== p.slug && !o.sample).slice(0, 2)
  return layout({
    title: `${p.title} · NZF Hukuk`,
    description: p.summary,
    path: postUrl(p.slug),
    section: '/yazilar/',
    body: `      <article class="post">
        <header class="post-head">
          <div class="wrap-narrow">
            <nav class="crumbs" aria-label="Sayfa konumu"><a href="/yazilar/">Yazılar</a><span>/</span><a href="/yazilar/kategori/${p.category}/">${categories[p.category].plural}</a></nav>
            <h1>${p.title}</h1>
            <p class="lead">${p.summary}</p>
            <p class="meta"><span class="meta-cat">${categories[p.category].name}</span>${p.sample ? '<span class="chip">örnek</span>' : ''}<time datetime="${p.date}">${dateTr(p.date)}</time><span>${p.author}</span><span>${Math.max(1, Math.round(words(p) / 200))} dk okuma</span></p>
          </div>
          <div class="wrap post-img">${img(p.image, p.alt, { eager: true })}</div>
        </header>
        <div class="wrap-narrow prose">
          ${p.body.map(block).join('\n          ')}
          <aside class="sources">
            <h2>Dayanaklar</h2>
            <ul>${p.sources.map((s) => `<li>${s}</li>`).join('')}</ul>
            <p>Bu yazı genel bilgilendirme amaçlıdır, hukuki danışmanlık yerine geçmez. Mevzuat ve uygulama değişebilir.</p>
          </aside>
          <div class="post-actions">
            ${btn(contactFor(p.area), `${area.nav ?? area.name} için yazın`)}
            ${btn(areaUrl(p.area), 'Çalışma alanını inceleyin', 'line')}
          </div>
        </div>
      </article>
      <section class="post-more">
        <div class="wrap">
          <h2>Diğer yazılar</h2>
          <div class="post-grid">
        ${others.map((o) => postCard(o)).join('\n        ')}
          </div>
        </div>
      </section>`,
  })
}

function contact() {
  const options = services
    .map((s) => `<option value="${s.slug}">${s.name}</option>`)
    .join('\n                ')
  const offices = site.offices
    .map(
      (o) => `<div class="office">
              <h3>${o.city}${o.placeholder ? ' <span class="chip">eklenecek</span>' : ''}</h3>
              <address>${o.lines.join('<br />')}</address>
              ${o.map ? `<a class="more" href="${o.map}"><span>Haritada aç</span>${arrow}</a>` : ''}
            </div>`,
    )
    .join('\n            ')
  return layout({
    title: 'İletişim · NZF Hukuk',
    description: 'NZF Hukuk Ankara ve İstanbul iletişim bilgileri ve görüşme talep formu.',
    path: '/iletisim/',
    section: '/iletisim/',
    body: `      <section class="page-head">
        <div class="wrap">
          <p class="eyebrow">İletişim</p>
          <h1>Konunuzu yazın, size dönelim.</h1>
        </div>
      </section>
      <section class="contact">
        <div class="wrap contact-grid">
          <form class="contact-form" id="iletisim-formu" action="mailto:${site.email}" method="post" enctype="text/plain" data-email="${site.email}">
            <div class="field">
              <label for="ad">Ad soyad</label>
              <input id="ad" name="Ad soyad" type="text" autocomplete="name" required />
            </div>
            <div class="field-row">
              <div class="field">
                <label for="eposta">E-posta</label>
                <input id="eposta" name="E-posta" type="email" autocomplete="email" required />
              </div>
              <div class="field">
                <label for="telefon">Telefon <small>(isteğe bağlı)</small></label>
                <input id="telefon" name="Telefon" type="tel" autocomplete="tel" />
              </div>
            </div>
            <div class="field">
              <label for="konu">Konu</label>
              <select id="konu" name="Konu">
                <option value="">Seçiniz</option>
                ${options}
                <option value="diger">Diğer</option>
              </select>
            </div>
            <div class="field">
              <label for="mesaj">Mesajınız</label>
              <textarea id="mesaj" name="Mesaj" rows="7" required></textarea>
              <p class="hint">Lütfen sağlık bilgisi ya da kimlik numarası gibi hassas verileri bu ilk mesajda paylaşmayın.</p>
            </div>
            <div class="check">
              <input id="kvkk" type="checkbox" required />
              <label for="kvkk"><a href="/kvkk-aydinlatma/">KVKK Aydınlatma Metni</a>’ni okudum.</label>
            </div>
            <button class="btn btn-solid" type="submit"><span>E-posta olarak hazırla</span>${arrow}</button>
            <p class="hint">Bu düğme e-posta uygulamanızı hazır bir mesajla açar. Gönderim sizin e-posta hesabınızdan yapılır; bu site verilerinizi saklamaz.</p>
            <div class="form-done" id="form-sonuc" role="status" hidden>
              <p><strong>E-posta uygulamanız açılmadı mı?</strong> Mesajınızı doğrudan <a href="mailto:${site.email}">${site.email}</a> adresine gönderebilirsiniz.</p>
            </div>
          </form>
          <div class="contact-side">
            <div class="office">
              <h3>E-posta</h3>
              <a class="big-link" href="mailto:${site.email}">${site.email}</a>
            </div>
            <div class="office">
              <h3>Telefon <span class="chip">örnek numara</span></h3>
              <p class="big-link">${site.phone.display}</p>
            </div>
            ${offices}
            <div class="contact-img">${img('ofis', 'Aydınlık ve geniş bir ofis koridoru', { sizes: '(max-width: 900px) 100vw, 35vw' })}</div>
          </div>
        </div>
      </section>`,
  })
}

function legal(path, title, description, html) {
  return layout({
    title: `${title} · NZF Hukuk`,
    description,
    path,
    body: `      <section class="page-head">
        <div class="wrap-narrow">
          <p class="eyebrow">Yasal</p>
          <h1 class="h1-small">${title}</h1>
        </div>
      </section>
      <div class="wrap-narrow prose legal">
${html}
      </div>`,
  })
}

const kvkkHtml = `        <p><strong>Taslak.</strong> Bu metin tasarım önerisi için hazırlanmıştır, yayına alınmadan önce büro tarafından kontrol edilmelidir.</p>
        <h2>Veri sorumlusu</h2>
        <p>Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 10. maddesi uyarınca NZF Hukuk tarafından hazırlanmıştır. Bize <a href="mailto:${site.email}">${site.email}</a> adresinden ulaşabilirsiniz.</p>
        <h2>Hangi verileri, nasıl alıyoruz?</h2>
        <p>Sitedeki form verilerinizi sunucuya göndermez, saklamaz. Formu doldurduğunuzda e-posta uygulamanız açılır; ad, e-posta, telefon ve mesaj bilgileriniz, siz gönderdiğinizde e-posta yoluyla bize ulaşır.</p>
        <p>Bu site çerez ve ziyaretçi takip aracı kullanmaz. Cloudflare altyapısı, siteyi sunmak ve güvenliğini sağlamak için teknik kayıtlar tutabilir.</p>
        <h2>Hangi amaçla ve hangi hukuki sebeple?</h2>
        <p>Verilerinizi talebinizi değerlendirmek ve size dönüş yapmak için işleriz. Hukuki sebep, bir sözleşmenin kurulmasıyla doğrudan ilgili olması ve meşru menfaatimizdir (Kanun m. 5/2).</p>
        <h2>Kimlere aktarılabilir?</h2>
        <p>Verileriniz yalnızca talebinizle ilgili avukatlarla paylaşılır; kanuni zorunluluk dışında üçüncü kişilere aktarılmaz. Kullandığımız e-posta hizmetinin sunucuları yurt dışında olabilir.</p>
        <h2>Haklarınız</h2>
        <p>Kanun’un 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, bilgi isteme, düzeltme, silme ve itiraz etme haklarına sahipsiniz. Başvurunuz en geç otuz gün içinde sonuçlandırılır (m. 13).</p>`

const legalHtml = `        <p>Bu sitedeki içerikler yalnızca genel bilgilendirme amacı taşır, hukuki görüş ya da danışmanlık niteliğinde değildir. Her somut olay kendi koşullarına göre değerlendirilmelidir.</p>
        <p>Siteyi ziyaret etmek ya da forma mesaj yazmak avukat-müvekkil ilişkisi kurmaz. Bu ilişki ancak taraflar arasında yapılacak avukatlık sözleşmesiyle doğar.</p>
        <p>Mevzuat ve yargı kararları değişebilir. Yazılarda belirtilen bilgiler yayım tarihindeki duruma göre yazılmıştır ve güncelliğini yitirmiş olabilir.</p>
        <p>Bu site reklam amacı taşımaz; büro, çalışma alanları ve avukatlar hakkında bilgi verir.</p>
        <p>Sitedeki fotoğraflar temsilîdir ve büroya, müvekkillere ya da gerçek bir dosyaya ait değildir.</p>`

function notFound() {
  return layout({
    title: 'Sayfa bulunamadı · NZF Hukuk',
    description: 'Aradığınız sayfa bulunamadı.',
    path: '/404',
    body: `      <section class="page-head not-found">
        <div class="wrap">
          <p class="eyebrow">404</p>
          <h1>Bu sayfa burada değil.</h1>
          <p class="lead">Adres değişmiş ya da hiç var olmamış olabilir.</p>
          <div class="btn-row">
            ${btn('/', 'Ana sayfaya dönün')}
            ${btn('/iletisim/', 'Bize yazın', 'line')}
          </div>
        </div>
      </section>`,
  })
}

const pages = {
  'index.html': home(),
  '404.html': notFound(),
  'calisma-alanlari/index.html': areasIndex(),
  'hakkimizda/index.html': about(),
  'yazilar/index.html': postsList(),
  'iletisim/index.html': contact(),
  'kvkk-aydinlatma/index.html': legal(
    '/kvkk-aydinlatma/',
    'KVKK Aydınlatma Metni',
    'NZF Hukuk kişisel verilerin korunması aydınlatma metni.',
    kvkkHtml,
  ),
  'yasal-uyari/index.html': legal(
    '/yasal-uyari/',
    'Yasal Uyarı',
    'NZF Hukuk web sitesi yasal uyarı metni.',
    legalHtml,
  ),
}

services.forEach((s, i) => {
  pages[`calisma-alanlari/${s.slug}/index.html`] = areaPage(s, i)
})
for (const c of Object.keys(categories)) {
  if (sortedPosts.some((p) => p.category === c)) {
    pages[`yazilar/kategori/${c}/index.html`] = postsList(c)
  }
}
for (const p of sortedPosts) pages[`yazilar/${p.slug}/index.html`] = postPage(p)

for (const [file, html] of Object.entries(pages)) {
  const out = join(pub, file)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
}
console.log(`${Object.keys(pages).length} sayfa yazıldı`)
