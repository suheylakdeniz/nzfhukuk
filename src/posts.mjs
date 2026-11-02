// The Yazılar section. To publish, add one object to `posts` and run `pnpm build`; the list pages,
// category pages and home page pick it up. Newest date comes first, ties keep this order.
// All copy is draft; statutes were read on mevzuat.gov.tr on 2026-11-02.
// Body blocks: ['p', text] | ['h2', text] | ['ul', [items]] | ['ol', [items]] | ['facts', [[k, v]]]

export const categories = {
  rehber: {
    name: 'Rehber',
    plural: 'Rehberler',
    note: 'Sık karşılaşılan konularda adım adım anlatım.',
  },
  karar: {
    name: 'Karar Notu',
    plural: 'Karar Notları',
    note: 'Yeni yargı kararları ve uygulamaya etkileri.',
  },
  mevzuat: { name: 'Mevzuat', plural: 'Mevzuat', note: 'Kanun ve yönetmelik değişiklikleri.' },
}

const today = '2026-11-02'

export const posts = [
  {
    slug: 'is-kazasi-sonrasi-ilk-adimlar',
    title: 'İş kazası sonrası ilk adımlar',
    category: 'rehber',
    date: today,
    author: 'NZF Hukuk',
    area: 'is-hukuku',
    image: 'is-hukuku',
    alt: 'Yukarıdan görülen bir şantiye ve çalışan işçiler',
    summary:
      'Kazanın ardından ilk günlerde neyin bildirilmesi, hangi belgelerin saklanması gerektiği ve tazminat talebinin arabuluculuktan neden farklı işlediği.',
    body: [
      [
        'p',
        'İş kazası sonrasında öncelik her zaman sağlıktır. Bununla birlikte ilk günlerde tutulan kayıtlar, ileride SGK işlemleri ve tazminat talebi için dosyanın temelini oluşturur.',
      ],
      ['h2', 'İşveren neyi, ne zaman bildirmeli?'],
      [
        'p',
        '5510 sayılı Kanun’un 13. maddesine göre işveren, iş kazasını o yerdeki kolluk kuvvetlerine derhal, Sosyal Güvenlik Kurumuna ise en geç kazadan sonraki üç iş günü içinde bildirmek zorundadır. Bildirimin yapılıp yapılmadığını çalışan da takip etmelidir.',
      ],
      ['h2', 'Çalışan olarak neleri saklamalısınız?'],
      [
        'ul',
        [
          'Acil servis ve tedavi kayıtları, raporlar ve epikriz',
          'Kaza tutanağı ve varsa kolluk ifadeleri',
          'Olayı gören çalışma arkadaşlarının adları',
          'Olay yerinin fotoğrafları ve iş güvenliği eğitim belgeleri',
          'Ücret bordroları ve banka kayıtları',
        ],
      ],
      ['h2', 'SGK süreci ve tazminat talebi ayrı işler'],
      [
        'p',
        'SGK’nın sağladığı geçici iş göremezlik ödeneği ya da sürekli iş göremezlik geliri ile işverene karşı açılan maddi ve manevi tazminat davası birbirinden farklıdır. Sürekli iş göremezlik oranının belirlenmesi, maddi tazminat hesabında önemli bir veridir.',
      ],
      ['h2', 'Önce arabulucuya gitmek gerekiyor mu?'],
      [
        'p',
        'Hayır. İşçilik alacaklarının aksine, iş kazası veya meslek hastalığından kaynaklanan maddi ve manevi tazminat ile bunlarla ilgili tespit, itiraz ve rücu davalarında arabuluculuk dava şartı değildir (7036 sayılı Kanun m. 3/3).',
      ],
      ['h2', 'Süreler'],
      [
        'p',
        'İş kazasından doğan tazminat taleplerinde zamanaşımının başlangıcı ve süresi, olayın niteliğine ve maluliyetin kesinleşmesine göre değerlendirilir. Bu nedenle “nasıl olsa vaktim var” demeden, tedavi sürerken bile dosyanın gözden geçirilmesi yararlıdır.',
      ],
    ],
    sources: ['5510 sayılı Kanun m. 13', '7036 sayılı Kanun m. 3'],
  },
  {
    slug: 'ornek-karar-notu',
    title: 'Örnek karar notu: Yeni bir karar burada nasıl görünür?',
    sample: true,
    category: 'karar',
    date: today,
    author: 'NZF Hukuk',
    area: 'is-hukuku',
    image: 'kutuphane',
    alt: 'Raflarla çevrili eski bir kütüphane ve büstler',
    summary:
      'Bu bir şablondur, gerçek bir karar değildir. Büro yeni bir kararı değerlendirmek istediğinde yazı bu düzende yayımlanır.',
    body: [
      [
        'p',
        'Bu sayfa gerçek bir mahkeme kararını anlatmaz. Köşeli parantez içindeki alanlar, yazı yayımlanırken gerçek bilgilerle doldurulur.',
      ],
      [
        'facts',
        [
          ['Mahkeme', '[Mahkeme ve daire adı]'],
          ['Esas / Karar', '[Esas No.] / [Karar No.]'],
          ['Karar tarihi', '[Gün Ay Yıl]'],
          ['Konu', '[Bir cümleyle uyuşmazlık]'],
        ],
      ],
      ['h2', 'Olay'],
      [
        'p',
        '[Uyuşmazlığın nasıl doğduğu ve tarafların talepleri, hukuk bilmeyen bir okurun anlayacağı dille.]',
      ],
      ['h2', 'Mahkeme ne dedi?'],
      ['p', '[Kararın özü ve dayandığı temel gerekçe. Gerekirse karardan kısa bir alıntı.]'],
      ['h2', 'Uygulamada ne değişiyor?'],
      [
        'p',
        '[Kararın işçi, işveren, şirket ya da bireyler açısından anlamı. Önceki uygulamadan farkı.]',
      ],
      ['h2', 'Ne yapmalısınız?'],
      [
        'ul',
        [
          '[Bu karardan etkilenen kişi için ilk somut adım]',
          '[Kontrol edilmesi gereken süre ya da belge]',
        ],
      ],
    ],
    sources: ['[Kararın resmî kaynağı]'],
  },
  {
    slug: 'dava-sarti-arabuluculuk-nedir',
    title: 'Dava şartı arabuluculuk nedir?',
    category: 'rehber',
    date: today,
    author: 'NZF Hukuk',
    area: 'arabuluculuk',
    image: 'arabuluculuk',
    alt: 'Boş bir toplantı masası ve geniş pencereler',
    summary:
      'Hangi uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak gerekir, süreç nasıl işler ve ilk toplantıya katılmamanın sonucu nedir?',
    body: [
      [
        'p',
        'Dava şartı arabuluculuk, belirli uyuşmazlıklarda mahkemeye gitmeden önce arabulucuya başvurulmasının zorunlu olması anlamına gelir. Bu adım atlanırsa dava, dava şartı yokluğu nedeniyle usulden reddedilir.',
      ],
      ['h2', 'Hangi uyuşmazlıkları kapsar?'],
      [
        'ul',
        [
          'İşçi ve işveren alacakları, tazminatlar ve işe iade talepleri (7036 sayılı Kanun m. 3)',
          'Konusu bir miktar para olan ticari alacak, tazminat, itirazın iptali, menfi tespit ve istirdat davaları (TTK m. 5/A)',
          'Tüketici mahkemelerinde görülen uyuşmazlıklar; tüketici hakem heyetinin görev alanı gibi istisnalar dışında (6502 sayılı Kanun m. 73/A)',
          'Kira ilişkileri, paylaştırma ve ortaklığın giderilmesi, kat mülkiyeti ve komşu hakkı uyuşmazlıkları (6325 sayılı Kanun m. 18/B)',
        ],
      ],
      ['h2', 'Süreç adım adım'],
      [
        'ol',
        [
          'Yetkili arabuluculuk bürosuna başvurulur; arabulucu, liste üzerinden büro tarafından belirlenir ya da taraflar listedeki bir isimde anlaşabilir.',
          'Arabulucu tarafları ilk toplantıya davet eder.',
          'Görüşmeler gizlilik içinde yürütülür.',
          'Anlaşma sağlanırsa anlaşma belgesi, sağlanamazsa son tutanak düzenlenir.',
        ],
      ],
      ['h2', 'Ne kadar sürer?'],
      [
        'p',
        '6325 sayılı Kanun’un 18/A maddesine göre arabulucu, başvuruyu görevlendirildiği tarihten itibaren üç hafta içinde sonuçlandırır; süre zorunlu hâllerde en fazla bir hafta uzatılabilir. Ticari uyuşmazlıklarda TTK m. 5/A altı hafta ve iki haftalık uzatma öngörür.',
      ],
      ['h2', 'Katılmamanın sonucu'],
      [
        'p',
        'Geçerli bir mazeret göstermeden ilk toplantıya katılmayan taraf son tutanakta belirtilir. Bu taraf davada kısmen veya tamamen haklı çıksa bile karşı tarafın ödemekle yükümlü olduğu yargılama giderlerinin yarısından sorumlu olur ve lehine, tarifedeki vekâlet ücretinin yarısına hükmedilir (m. 18/A, 7531 sayılı Kanun ile değişik).',
      ],
      ['h2', 'Ücreti kim öder?'],
      [
        'p',
        'Görüşme yapılamaması ya da iki saatten kısa süren görüşmelerin anlaşmasız bitmesi hâlinde iki saatlik ücret tarifeye göre Adalet Bakanlığı bütçesinden karşılanır; iki saati aşan kısmı taraflar aksi kararlaştırılmadıkça eşit öder. Taraflar anlaşırsa ücret de aksi kararlaştırılmadıkça eşit olarak ödenir.',
      ],
    ],
    sources: [
      '6325 sayılı Kanun m. 18/A, 18/B',
      '7036 sayılı Kanun m. 3',
      'TTK m. 5/A',
      '6502 sayılı Kanun m. 73/A',
    ],
  },
  {
    slug: 'sigorta-tahkimine-basvuru',
    title: 'Sigorta tahkimine başvuru',
    category: 'rehber',
    date: today,
    author: 'NZF Hukuk',
    area: 'sigorta-hukuku',
    image: 'sigorta-hukuku',
    alt: 'Direksiyon başında bir sürücünün elleri',
    summary:
      'Sigorta şirketiyle uyuşmazlıkta tahkim yolunun şartları, önce yapılması gereken yazılı başvuru ve hakem kararına kadar süreç.',
    body: [
      [
        'p',
        'Sigorta Tahkim Komisyonu, sigorta ettiren ya da sözleşmeden yararlanan kişilerle sigorta kuruluşları arasındaki uyuşmazlıkları hakemler aracılığıyla çözmek için 5684 sayılı Kanun’un 30. maddesiyle kurulmuştur.',
      ],
      ['h2', 'Kimler başvurabilir?'],
      [
        'p',
        'Sigorta tahkim sistemine üye bir kuruluşla uyuşmazlığa düşen kişi, sözleşmede özel bir hüküm olmasa da tahkimden yararlanabilir. Zorunlu sigortalardan doğan uyuşmazlıklarda kuruluş üye olmasa bile hak sahipleri bu yola gidebilir.',
      ],
      ['h2', 'Önce şirkete yazılı başvuru'],
      [
        'p',
        'Komisyona gitmeden önce talebin yazılı olarak sigorta şirketine iletilmesi gerekir. Şirket on beş iş günü içinde yazılı yanıt vermezse ya da talebi kısmen veya tamamen reddederse başvuru yapılabilir. Bu yazışmayı ve teslim kaydını saklayın; dosyanın ilk belgesi budur.',
      ],
      ['h2', 'Dosyada neler olmalı?'],
      [
        'ul',
        [
          'Poliçe örneği ve hasar dosya numarası',
          'Şirkete yapılan yazılı başvuru ve yanıtı',
          'Kaza tespit tutanağı, ekspertiz raporu, fatura ve fotoğraflar',
          'Değer kaybı ya da bedensel zarar iddiası varsa buna dair rapor ve belgeler',
          'Başvuru formu ve başvuru ücreti dekontu',
        ],
      ],
      ['h2', 'Karar ne zaman çıkar?'],
      [
        'p',
        'Hakemler, görevlendirildikleri tarihten itibaren en geç dört ay içinde karar vermek zorundadır; bu süre tarafların açık ve yazılı onayıyla uzatılabilir. Karar, Komisyon müdürlüğünce en geç üç iş günü içinde taraflara bildirilir.',
      ],
      ['h2', 'Dikkat edilmesi gerekenler'],
      [
        'p',
        'Kararın kesinliği ve itiraz imkânı, uyuşmazlık tutarına bağlı parasal sınırlara göre değişir. Bu sınırlar ve motorlu araç sigortalarına ilişkin başvuru esasları Kurum düzenlemeleriyle güncellendiğinden, başvuru öncesinde güncel durum kontrol edilmelidir.',
      ],
    ],
    sources: ['5684 sayılı Kanun m. 30'],
  },
  {
    slug: 'ise-iade-ve-kidem-tazminati',
    title: 'İşe iade ve kıdem tazminatı',
    category: 'rehber',
    date: today,
    author: 'NZF Hukuk',
    area: 'is-hukuku',
    image: 'yazi',
    alt: 'Bir belgeyi inceleyen ve kalemle not alan eller',
    summary:
      'İş güvencesinin şartları, kısa süreler, işe başlatılmamanın sonuçları ve kıdem tazminatının temel kuralları.',
    body: [
      [
        'p',
        'İş sözleşmesi işveren tarafından feshedilen bir işçi için iki soru öne çıkar: Fesih geçerli mi, hangi alacaklar doğdu? İlk sorunun yanıtı iş güvencesiyle, ikincisi ise kıdem ve ihbar gibi alacaklarla ilgilidir.',
      ],
      ['h2', 'İş güvencesinin şartları'],
      [
        'ul',
        [
          'İşyerinde otuz veya daha fazla işçi çalışması',
          'En az altı aylık kıdem (yer altı işlerinde kıdem şartı aranmaz)',
          'Belirsiz süreli iş sözleşmesi',
          'İşletmenin bütününü yöneten işveren vekili konumunda olmamak',
        ],
      ],
      [
        'p',
        'Bu şartlar varsa işveren, fesih için geçerli bir sebebe dayanmak zorundadır (4857 sayılı Kanun m. 18).',
      ],
      ['h2', 'Süreler çok kısa'],
      [
        'ol',
        [
          'Fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulur.',
          'Anlaşma sağlanamazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılabilir.',
          'Feshin geçerli sebebe dayandığını ispat yükü işverendedir (4857 sayılı Kanun m. 20).',
        ],
      ],
      ['h2', 'Dava kazanılırsa'],
      [
        'p',
        'İşçi, kesinleşen kararın tebliğinden itibaren on iş günü içinde işverene başvurmalıdır. İşveren işçiyi bir ay içinde işe başlatmazsa en az dört, en çok sekiz aylık ücret tutarında tazminat ödemekle yükümlü olur. Ayrıca işçiye, çalıştırılmadığı süre için en çok dört aya kadar ücret ve diğer hakları ödenir (4857 sayılı Kanun m. 21).',
      ],
      ['h2', 'Kıdem tazminatı'],
      [
        'p',
        'En az bir yıl çalışmış işçinin sözleşmesi kanunda sayılan hâllerde sona ererse, her tam yıl için otuz günlük ücret tutarında kıdem tazminatı doğar; artan süreler de aynı oranda hesaba katılır. Hesapta giydirilmiş son ücret esas alınır ve yıllık tutar, dönemsel olarak açıklanan tavanı aşamaz. Güncel tavan için resmî duyurular kontrol edilmelidir.',
      ],
      [
        'p',
        'Kıdem tazminatında zamanaşımı beş yıldır (4857 sayılı Kanun Ek m. 3). Talebin kural olarak önce arabulucuya götürülmesi gerekir (7036 sayılı Kanun m. 3).',
      ],
    ],
    sources: [
      '4857 sayılı Kanun m. 18, 20, 21, Ek m. 3',
      '1475 sayılı Kanun m. 14',
      '7036 sayılı Kanun m. 3',
    ],
  },
  {
    slug: 'kvkk-sirketlerin-temel-yukumlulukleri',
    title: 'KVKK: Şirketlerin temel yükümlülükleri',
    category: 'rehber',
    date: today,
    author: 'NZF Hukuk',
    area: 'kvkk',
    image: 'kvkk',
    alt: 'Veri merkezinde kablolarla dolu sunucu dolapları',
    summary:
      'Aydınlatma, veri güvenliği, ilgili kişi başvuruları, VERBİS ve veri ihlali: bir işletmenin bilmesi gereken beş başlık.',
    body: [
      [
        'p',
        '6698 sayılı Kişisel Verilerin Korunması Kanunu, müşteri ya da çalışan verisi işleyen hemen her işletmeyi ilgilendirir. Uyumun özünde şu soru vardır: Hangi veriyi, hangi hukuki sebeple, ne kadar süreyle ve kimlerle paylaşarak işliyorsunuz?',
      ],
      ['h2', '1. Aydınlatma yükümlülüğü'],
      [
        'p',
        'Veri elde edilirken ilgili kişiye veri sorumlusunun kimliği, işleme amacı, verinin kimlere ve hangi amaçla aktarılabileceği, toplama yöntemi ve hukuki sebebi ile sahip olduğu haklar anlatılmalıdır (m. 10). Aydınlatma, açık rızadan ayrı bir yükümlülüktür.',
      ],
      ['h2', '2. Veri güvenliği'],
      [
        'p',
        'Veri sorumlusu, hukuka aykırı işlemeyi ve erişimi önlemek ve verinin muhafazasını sağlamak için gerekli teknik ve idari tedbirleri almak zorundadır (m. 12). Veri adına başkası işliyorsa, tedarikçiyle birlikte müştereken sorumluluk doğar. Bu nedenle tedarikçi sözleşmeleri de kapsamdadır.',
      ],
      ['h2', '3. İlgili kişi başvuruları'],
      [
        'p',
        'Kişiler verileri hakkında bilgi isteyebilir, düzeltme ya da silme talep edebilir (m. 11). Veri sorumlusu, başvuruyu en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırır (m. 13). Başvurunun şirket içinde kime ulaşacağı önceden belli olmalıdır.',
      ],
      ['h2', '4. VERBİS'],
      [
        'p',
        'Kanun, veri sorumlularının veri işlemeye başlamadan önce sicile kaydolmasını kural olarak öngörür, Kurul’a ise objektif ölçütlerle istisna getirme yetkisi verir (m. 16). Eşikler Kurul kararlarıyla değiştiği için güncel durum şirket özelinde kontrol edilmelidir. İstisna kapsamında olmak diğer yükümlülükleri kaldırmaz.',
      ],
      ['h2', '5. Veri ihlali'],
      [
        'p',
        'Veriler kanuni olmayan yollarla başkalarınca elde edilirse, durum en kısa sürede ilgili kişiye ve Kurul’a bildirilir (m. 12/5). Kurul, 2019/10 sayılı kararında “en kısa süre”yi yetmiş iki saat olarak yorumlamıştır. Bu yüzden ihlal anında kimin ne yapacağı önceden yazılı olmalıdır.',
      ],
      ['h2', 'Yurt dışına aktarım'],
      [
        'p',
        'Yurt dışına aktarım kuralları 2024 değişiklikleriyle yenilenmiştir (m. 9). Yurt dışında barındırılan yazılım ve bulut hizmetleri kullanılıyorsa, aktarımın hangi güvenceye dayandığı ayrıca değerlendirilmelidir.',
      ],
    ],
    sources: ['6698 sayılı Kanun m. 9, 10, 11, 12, 13, 16', 'KVK Kurulu 2019/10 sayılı Karar'],
  },
]

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]))

// Stable sort: same-day posts keep their order in the array.
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))
