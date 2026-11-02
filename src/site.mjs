// Facts about the firm. Everything marked `placeholder` is a stand-in for the demo.

export const site = {
  name: 'NZF Hukuk',
  url: 'https://nzfhukuk.suheylakdeniz.com',
  official: 'https://nzfhukuk.com/',
  email: 'info@nzfhukuk.com',
  phone: { display: '0312 000 00 00', placeholder: true },
  offices: [
    {
      city: 'Ankara',
      lines: ['Mustafa Kemal Mahallesi, Dumlupınar Bulvarı', 'No: 274, C2 Blok, No: 158', 'Ankara'],
      map: 'https://www.google.com/maps/search/?api=1&query=Mustafa+Kemal+Mahallesi+Dumlup%C4%B1nar+Bulvar%C4%B1+No%3A274+Ankara',
    },
    {
      city: 'İstanbul',
      lines: ['Adres bilgisi büro tarafından eklenecek'],
      placeholder: true,
    },
  ],
}

export const team = [
  {
    id: 'neslihan',
    letter: 'N',
    name: 'Av. Neslihan Kavak Güven',
    first: 'Neslihan',
    role: 'Avukat',
    bio: 'Marmara Üniversitesi Hukuk Fakültesi mezunudur ve 10 yıllık avukatlık deneyimine sahiptir. Özellikle şirket avukatlığı konusunda tecrübe edinmiştir.',
    focus: 'KVKK, İş Hukuku ve Şirketler Hukuku alanlarında çalışmaktadır.',
    areas: ['kvkk', 'is-hukuku', 'ticaret-ve-sirketler-hukuku'],
  },
  {
    id: 'zeynep',
    letter: 'Z',
    name: 'Av. Zeynep Melis Güzel',
    first: 'Zeynep',
    role: 'Avukat, Sigorta Hakemi',
    bio: 'Marmara Üniversitesi Hukuk Fakültesi mezunudur ve 10 yıllık avukatlık deneyimine sahiptir. Ayrıca sigorta hakemi olarak çalışmaktadır.',
    focus: 'Medeni Hukuk ve Ticaret Hukuku alanlarında çalışmaktadır.',
    areas: ['medeni-hukuk', 'ticaret-ve-sirketler-hukuku', 'sigorta-hukuku'],
  },
  {
    id: 'fahriye',
    letter: 'F',
    name: 'Arb. Av. Fahriye Yılmaz',
    first: 'Fahriye',
    role: 'Arabulucu, Avukat',
    bio: 'Marmara Üniversitesi Hukuk Fakültesi mezunudur ve 10 yıllık avukatlık deneyimine sahiptir. Şirket avukatlığı ve arabuluculuk konularında tecrübesi bulunmaktadır.',
    focus:
      'Sağlık Hukuku ve İş Hukuku sertifikalarına sahiptir; özellikle sigorta hukuku alanında çalışmaktadır.',
    areas: ['sigorta-hukuku', 'is-hukuku', 'arabuluculuk', 'saglik-hukuku'],
  },
]

export const teamById = Object.fromEntries(team.map((t) => [t.id, t]))

export const steps = [
  [
    'Ön görüşme',
    'Ne yaşandığını ve ne beklediğinizi dinliyoruz. Yüz yüze ya da çevrimiçi olabilir.',
  ],
  ['Dosya incelemesi', 'Belgeleri okuyor, süreleri ve yasal seçenekleri netleştiriyoruz.'],
  [
    'Yol haritası',
    'Olası yolları, maliyetleri ve riskleri yazılı ve anlaşılır biçimde paylaşıyoruz.',
  ],
  ['Süreç takibi', 'Her gelişmede sizi bilgilendiriyor, dosyayı sonuçlanana kadar yürütüyoruz.'],
]
