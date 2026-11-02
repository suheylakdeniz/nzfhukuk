// Small enhancements only: every link and page works without this file, except the form, which
// falls back to a plain mailto post.

const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// Mobile menu
const toggle = document.querySelector('.menu-toggle')
const mobileNav = document.getElementById('mobil-menu')
const label = toggle?.querySelector('.menu-toggle-label')

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open))
  mobileNav.hidden = !open
  label.textContent = open ? 'Kapat' : 'Menü'
  document.documentElement.classList.toggle('menu-open', open)
}

toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'))
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setMenu(false)
    toggle.focus()
  }
})

// Reveal on scroll
const revealed = document.querySelectorAll('[data-reveal]')
if (motionOk && 'IntersectionObserver' in window) {
  const seen = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          seen.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  )
  for (const el of revealed) seen.observe(el)
} else {
  for (const el of revealed) el.classList.add('is-in')
}

// Home page: the picture beside the list follows the row under the pointer or focus
const previews = document.querySelectorAll('[data-preview-img]')
function showPreview(index) {
  for (const p of previews) p.classList.toggle('is-active', p.dataset.previewImg === index)
}
for (const row of document.querySelectorAll('[data-preview]')) {
  row.addEventListener('pointerenter', () => showPreview(row.dataset.preview))
  row.addEventListener('focus', () => showPreview(row.dataset.preview))
}

// Contact form: compose a mailto with a readable body, and prefill the topic from ?konu=
const form = document.getElementById('iletisim-formu')
if (form) {
  const topic = form.elements.Konu
  const wanted = new URLSearchParams(window.location.search).get('konu')
  if (wanted && [...topic.options].some((o) => o.value === wanted)) topic.value = wanted

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = form.elements['Ad soyad'].value.trim()
    const topicText = topic.value ? topic.selectedOptions[0].textContent : 'Genel'
    const body = [
      form.elements.Mesaj.value.trim(),
      '',
      '---',
      `Ad soyad: ${name}`,
      `E-posta: ${form.elements['E-posta'].value.trim()}`,
      `Telefon: ${form.elements.Telefon.value.trim() || 'belirtilmedi'}`,
      `Konu: ${topicText}`,
    ].join('\n')
    const subject = `Görüşme talebi: ${topicText} (${name})`
    window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    document.getElementById('form-sonuc').hidden = false
  })
}
