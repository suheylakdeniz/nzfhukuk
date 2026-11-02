// The ten practice areas. `kept` holds the lines carried over from the old nzfhukuk.com pages;
// everything else is new draft copy, listed for review in docs/avukat-onay-listesi.md.

export const services = [
  {
    slug: 'sigorta-hukuku',
    name: 'Sigorta Hukuku',
    primary: true,
    short: 'Poliçe incelemesi, sigorta şirketleriyle müzakere, tahkim ve dava süreçleri.',
    alt: 'Direksiyon başında bir sürücünün elleri',
    intro: [
      'Sigorta uyuşmazlıkları çoğu zaman bir hasar ya da kaza sonrasında, poliçenin ne kadarını karşıladığı sorusuyla başlar. Teminat, istisna ve muafiyet hükümleri okunmadan atılan bir adım, sonraki aşamaları zorlaştırabilir.',
      'Poliçeyi, hasar dosyasını ve şirketle yapılan yazışmaları birlikte inceliyor; şirkete başvuru, Sigorta Tahkim Komisyonu ya da dava yollarından hangisinin dosyaya uygun olduğunu açıkça anlatıyoruz.',
    ],
    kept: [
      'Sigorta poliçelerinin incelenmesi ve yorumlanması',
      'Sigorta şirketleri ile müzakereler ve dava süreçleri',
      'Sigorta tazminat talepleri ve uyuşmazlıklarının çözümü',
    ],
    more: [
      'Sigorta Tahkim Komisyonu başvuruları',
      'Trafik kazası kaynaklı tazminat ve değer kaybı talepleri',
    ],
    process: [
      [
        'Belgeleri toplama',
        'Poliçe, hasar dosyası, ekspertiz raporu ve yazışmalar bir araya getirilir.',
      ],
      [
        'Şirkete yazılı başvuru',
        'Talep, dayanaklarıyla birlikte sigorta şirketine yazılı olarak iletilir.',
      ],
      ['Yol seçimi', 'Şirketin yanıtına göre tahkim ya da dava seçenekleri karşılaştırılır.'],
      ['Sonuçlandırma', 'Süreç yürütülür; karar ve ödeme aşamaları takip edilir.'],
    ],
    faq: [
      [
        'Tahkime gitmeden önce sigorta şirketine başvurmak gerekiyor mu?',
        'Evet. Talebin önce yazılı olarak şirkete iletilmesi gerekir. Şirket on beş iş günü içinde yazılı yanıt vermezse ya da talebi kısmen veya tamamen reddederse Komisyon başvurusu gündeme gelir.',
      ],
      [
        'Her sigorta şirketi için tahkim yolu açık mı?',
        'Şirketin tahkim sistemine üye olması aranır. Zorunlu sigortalardan doğan uyuşmazlıklarda ise şirket üye olmasa da hak sahipleri tahkimden yararlanabilir (5684 sayılı Kanun m. 30).',
      ],
      [
        'Hakem ne kadar sürede karar verir?',
        'Kanuna göre hakemler görevlendirildikleri tarihten itibaren en geç dört ay içinde karar vermek zorundadır. Bu süre tarafların açık ve yazılı onayıyla uzatılabilir.',
      ],
    ],
    lawyers: ['fahriye', 'zeynep'],
    posts: ['sigorta-tahkimine-basvuru'],
  },
  {
    slug: 'is-hukuku',
    name: 'İş Hukuku',
    primary: true,
    short: 'İş kazaları, işçi ve işveren uyuşmazlıkları, sözleşme ve fesih süreçleri.',
    alt: 'Yukarıdan görülen bir şantiye ve çalışan işçiler',
    intro: [
      'İş ilişkisi sözleşmeyle başlar, bazen fesih ya da bir iş kazasıyla sınanır. İşçi için de işveren için de en sık sorun, sürelerin kısa olması ve belgelerin zamanında toplanmamasıdır.',
      'İşçi ve işveren tarafında; sözleşmelerin hazırlanmasından arabuluculuk görüşmelerine ve iş mahkemesindeki davalara kadar süreci birlikte yürütüyoruz.',
    ],
    kept: [
      'İş kazaları ve tazminat davaları',
      'İşçi ve işveren arasındaki anlaşmazlıkların çözümü',
      'İş sözleşmeleri ve fesih süreçleri',
    ],
    more: [
      'İşe iade başvuruları',
      'Kıdem, ihbar, fazla mesai ve diğer işçilik alacakları',
      'İşverenlere yönelik sözleşme ve fesih danışmanlığı',
    ],
    process: [
      ['İlk değerlendirme', 'Sözleşme, bordro, fesih bildirimi ve yazışmalar incelenir.'],
      ['Sürelerin belirlenmesi', 'Hak düşürücü süreler ve zamanaşımı önce netleştirilir.'],
      ['Arabuluculuk', 'Dava şartı olan uyuşmazlıklarda görüşmelere hazırlanılır ve katılınır.'],
      ['Dava ve takip', 'Anlaşma olmazsa iş mahkemesinde dava yürütülür.'],
    ],
    faq: [
      [
        'Dava açmadan önce arabulucuya gitmek zorunlu mu?',
        'İşçi ve işveren alacakları, tazminatları ve işe iade taleplerinde evet. İş kazası veya meslek hastalığından doğan maddi ve manevi tazminat davaları ise bu zorunluluğun dışındadır (7036 sayılı Kanun m. 3).',
      ],
      [
        'İşten çıkarıldım. İşe iade için ne kadar sürem var?',
        'Fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulmalıdır. Anlaşma sağlanamazsa son tutanaktan itibaren iki hafta içinde dava açılabilir (4857 sayılı Kanun m. 20).',
      ],
      [
        'İş kazasını kim bildirir?',
        'İşveren, kazayı kolluğa derhal, Sosyal Güvenlik Kurumuna ise en geç kazadan sonraki üç iş günü içinde bildirmekle yükümlüdür (5510 sayılı Kanun m. 13).',
      ],
    ],
    lawyers: ['fahriye', 'neslihan'],
    posts: ['is-kazasi-sonrasi-ilk-adimlar', 'ise-iade-ve-kidem-tazminati'],
  },
  {
    slug: 'arabuluculuk',
    name: 'Arabuluculuk',
    primary: true,
    short: 'Ticari, işçi-işveren, aile ve diğer uyuşmazlıklarda dostane çözüm süreci.',
    alt: 'Boş bir toplantı masası ve geniş pencereler',
    intro: [
      'Arabuluculuk, tarafların tarafsız bir arabulucu eşliğinde kendi çözümlerini bulduğu bir süreçtir. Bazı uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak zorunludur; diğerlerinde taraflar isterse bu yola gidebilir.',
      'Sürecin ne anlama geldiğini, görüşmede neyin konuşulabileceğini ve anlaşma belgesinin sonuçlarını baştan açıkça anlatıyoruz.',
    ],
    kept: [
      'Arabulucu avukatımız ile arabuluculuk hizmetleri',
      'Ticari uyuşmazlıkların arabuluculuk ile çözümü',
      'Aile arabuluculuğu ve diğer uyuşmazlıkların dostane çözümü',
    ],
    more: [
      'Dava şartı arabuluculuk görüşmelerine hazırlık ve katılım',
      'Anlaşma belgesinin hazırlanması ve icra edilebilirlik şerhi',
    ],
    process: [
      ['Başvuru', 'Uyuşmazlığın konusu belirlenir, yetkili arabuluculuk bürosuna başvurulur.'],
      ['Davet', 'Arabulucu tarafları ilk toplantıya davet eder.'],
      ['Görüşmeler', 'Taraflar gizlilik içinde seçenekleri görüşür.'],
      ['Son tutanak', 'Anlaşma belgesi ya da anlaşılamadığını gösteren son tutanak düzenlenir.'],
    ],
    faq: [
      [
        'Hangi uyuşmazlıklarda arabuluculuk dava şartıdır?',
        'Başlıcaları işçi-işveren uyuşmazlıkları, konusu para olan ticari alacak ve tazminat talepleri, tüketici uyuşmazlıkları, kira ilişkileri, paylaştırma ve ortaklığın giderilmesi, kat mülkiyeti ve komşu hakkı uyuşmazlıklarıdır. İstisnalar ilgili kanunlarda sayılmıştır.',
      ],
      [
        'Süreç ne kadar sürer?',
        'Genel kural, arabulucunun başvuruyu görevlendirmeden itibaren üç hafta içinde sonuçlandırmasıdır; zorunlu hâllerde en fazla bir hafta uzatılabilir (6325 sayılı Kanun m. 18/A). Ticari uyuşmazlıklarda süre altı hafta, uzatma iki haftadır (TTK m. 5/A).',
      ],
      [
        'İlk toplantıya katılmazsam ne olur?',
        'Geçerli bir mazeret olmadan katılmayan taraf son tutanakta belirtilir. Bu taraf davada haklı çıksa bile karşı tarafın ödemekle yükümlü olduğu yargılama giderlerinin yarısından sorumlu olur ve lehine, tarifedeki vekâlet ücretinin yarısına hükmedilir (6325 sayılı Kanun m. 18/A).',
      ],
      [
        'Aile uyuşmazlıkları arabuluculuğa elverişli mi?',
        'Tarafların serbestçe tasarruf edebileceği konularda elverişlidir. Aile içi şiddet iddiası içeren uyuşmazlıklar kanun gereği arabuluculuğa elverişli değildir (6325 sayılı Kanun m. 1).',
      ],
    ],
    lawyers: ['fahriye'],
    posts: ['dava-sarti-arabuluculuk-nedir'],
  },
  {
    slug: 'saglik-hukuku',
    name: 'Sağlık Hukuku',
    short: 'Hasta hakları, tıbbi müdahaleden doğan sorumluluk ve sağlık kurumları.',
    alt: 'Boş ve aydınlık bir ameliyathane',
    intro: [
      'Sağlık hukuku; hasta ile hekim ve sağlık kurumu arasındaki ilişkiyi, aydınlatılmış onamı, tıbbi kayıtları ve bir müdahaleden doğan sorumluluğu kapsar.',
      'Hem hastaların hem de sağlık alanında çalışanların karşılaştığı uyuşmazlıklarda dosyayı tıbbi kayıtlardan başlayarak ele alıyoruz.',
    ],
    kept: [],
    more: [
      'Tıbbi müdahaleden doğan maddi ve manevi tazminat talepleri',
      'Hasta hakları ve aydınlatılmış onam süreçleri',
      'Sağlık kuruluşları ve çalışanları için sözleşme danışmanlığı',
    ],
    process: [
      ['Kayıtların istenmesi', 'Tıbbi dosya, epikriz ve onam formları temin edilir.'],
      ['Olayın değerlendirilmesi', 'Süreç zaman çizelgesiyle ve belgeler üzerinden incelenir.'],
      [
        'Yolun belirlenmesi',
        'Kurumun niteliğine göre başvuru yolu ve görevli yargı yeri belirlenir.',
      ],
      ['Takip', 'Başvuru, bilirkişi ve dava aşamaları yürütülür.'],
    ],
    faq: [
      [
        'Kendi tıbbi kayıtlarımı alabilir miyim?',
        'Hasta, kendisine ait kayıtları doğrudan veya temsilcisi aracılığıyla inceleyebilir ve örneğini isteyebilir. İlk adım çoğu zaman bu kayıtların eksiksiz alınmasıdır.',
      ],
      [
        'Özel ve kamu hastanesi için yol aynı mı?',
        'Hayır. Özel sağlık kuruluşlarına karşı talepler adli yargıda, kamu hastanelerindeki hizmet kusuruna dayanan talepler ise kural olarak idari yargıda ileri sürülür. Süreler de farklıdır.',
      ],
    ],
    lawyers: ['fahriye'],
    posts: [],
  },
  {
    slug: 'kvkk',
    name: 'Kişisel Verilerin Korunması',
    nav: 'KVKK',
    short: 'Şirketler için KVKK uyumu, aydınlatma metinleri ve veri ihlali süreçleri.',
    alt: 'Veri merkezinde kablolarla dolu sunucu dolapları',
    intro: [
      'Müşteri, çalışan ya da ziyaretçi verisi işleyen hemen her işletme 6698 sayılı Kanun kapsamındadır. Uyum tek bir belgeyle değil, şirketin veriyi gerçekte nasıl kullandığını doğru tarif ederek sağlanır.',
      'Mevcut süreçleri birlikte çıkarıyor, belgeleri bu gerçek akışa göre hazırlıyor ve ilgili kişi başvurularıyla Kurul süreçlerinde destek veriyoruz.',
    ],
    kept: [],
    more: [
      'Kişisel veri envanteri ve uyum yol haritası',
      'Aydınlatma metinleri, açık rıza ve sözleşme hükümleri',
      'VERBİS kayıt yükümlülüğünün değerlendirilmesi',
      'İlgili kişi başvuruları ve veri ihlali bildirimleri',
    ],
    process: [
      ['Veri akışını çıkarma', 'Hangi verinin neden, nerede ve kimde tutulduğu belirlenir.'],
      ['Boşluk analizi', 'Mevcut durum Kanun ve Kurul kararlarıyla karşılaştırılır.'],
      ['Belgeler ve tedbirler', 'Metinler hazırlanır, teknik ve idari tedbirler listelenir.'],
      ['Süreklilik', 'Başvuru ve ihlal süreçleri için izlenecek yol yazılı hale getirilir.'],
    ],
    faq: [
      [
        'İlgili kişi başvurusuna ne kadar sürede yanıt verilmeli?',
        'Veri sorumlusu, başvuruyu talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde sonuçlandırır (6698 sayılı Kanun m. 13).',
      ],
      [
        'VERBİS kaydı her şirket için zorunlu mu?',
        'Kanun kaydı genel kural olarak öngörür, Kurul ise objektif ölçütlerle istisna getirebilir. Eşikler Kurul kararlarıyla değiştiğinden güncel durum şirket özelinde kontrol edilmelidir.',
      ],
      [
        'VERBİS istisnası uyum yükümlülüğünü kaldırır mı?',
        'Hayır. Kayıttan istisna olmak; aydınlatma, veri güvenliği ve ilgili kişi başvuruları gibi diğer yükümlülükleri ortadan kaldırmaz.',
      ],
    ],
    lawyers: ['neslihan'],
    posts: ['kvkk-sirketlerin-temel-yukumlulukleri'],
  },
  {
    slug: 'ticaret-ve-sirketler-hukuku',
    name: 'Ticaret ve Şirketler Hukuku',
    nav: 'Ticaret ve Şirketler',
    short: 'Şirket kuruluşu, sözleşmeler, ortaklık ilişkileri ve ticari uyuşmazlıklar.',
    alt: 'Aşağıdan görülen cam kaplı iş kuleleri',
    intro: [
      'Şirketlerin günlük hukuki ihtiyaçları kuruluşla bitmez: sözleşmeler, ortaklar arası ilişkiler, genel kurul kararları ve ticari alacaklar düzenli bir takip gerektirir.',
      'Şirket avukatlığı deneyimimizle, iş süreçlerini anlayarak sözleşme ve kurumsal işlemlerde danışmanlık veriyor, uyuşmazlıkları arabuluculuk ve dava aşamalarında yürütüyoruz.',
    ],
    kept: [],
    more: [
      'Şirket kuruluşu, tür değişikliği ve esas sözleşme işlemleri',
      'Ticari sözleşmelerin hazırlanması ve incelenmesi',
      'Genel kurul ve ortaklık ilişkilerine dair danışmanlık',
      'Ticari alacak takibi ve uyuşmazlık çözümü',
    ],
    process: [
      ['İhtiyacı anlama', 'Şirketin yapısı, iş modeli ve mevcut belgeleri incelenir.'],
      ['Risklerin belirlenmesi', 'Sözleşme ve kurumsal işlemlerdeki riskler açıkça listelenir.'],
      ['Hazırlık', 'Sözleşme, karar ve başvuru metinleri hazırlanır.'],
      ['Takip', 'Tescil, ihtar, arabuluculuk ve dava adımları izlenir.'],
    ],
    faq: [
      [
        'Ticari alacak davasından önce arabuluculuk gerekir mi?',
        'Konusu bir miktar para olan ticari alacak, tazminat, itirazın iptali, menfi tespit ve istirdat davalarında, dava açılmadan önce arabulucuya başvurulması dava şartıdır (TTK m. 5/A).',
      ],
      [
        'Limited mi, anonim şirket mi kurmalıyım?',
        'Ortak sayısı, sermaye ihtiyacı, devir kolaylığı ve yönetim yapısı gibi etkenlere göre değişir. Tek bir doğru yanıt yoktur; karar işin planına göre verilmelidir.',
      ],
    ],
    lawyers: ['zeynep', 'neslihan'],
    posts: [],
  },
  {
    slug: 'medeni-hukuk',
    name: 'Medeni Hukuk',
    short: 'Miras, kişiler hukuku, eşya ve borç ilişkilerinden doğan uyuşmazlıklar.',
    alt: 'Bir belgeyi imzalayan el',
    intro: [
      'Medeni hukuk; kişilerin günlük yaşamındaki miras, mülkiyet, vesayet ve sözleşme ilişkilerini kapsar. Bu dosyalarda çoğu zaman aile ya da uzun süreli ilişkiler söz konusu olduğundan, doğru sırayla atılan adımlar önem taşır.',
      'Hak ve yükümlülükleri sade bir dille anlatıyor, uzlaşma imkânını ve dava seçeneğini birlikte değerlendiriyoruz.',
    ],
    kept: [],
    more: [
      'Miras paylaşımı, mirasın reddi ve tenkis davaları',
      'Ortaklığın giderilmesi süreçleri',
      'Vesayet ve kişiler hukukuna ilişkin başvurular',
      'Sözleşmelerden doğan alacak ve tazminat talepleri',
    ],
    process: [
      ['Dinleme', 'Olay, taraflar ve beklentiler netleştirilir.'],
      ['Belgeler', 'Nüfus, tapu, veraset ve sözleşme kayıtları toplanır.'],
      ['Seçenekler', 'Uzlaşma ve dava yolları, süreleriyle karşılaştırılır.'],
      ['Yürütme', 'Seçilen yol için başvuru ve takip yapılır.'],
    ],
    faq: [
      [
        'Mirası reddetmek için ne kadar sürem var?',
        'Yasal ve atanmış mirasçılar için ret süresi kural olarak üç aydır. Sürenin başlangıcı mirasçının durumuna göre değişir (Türk Medeni Kanunu m. 606).',
      ],
      [
        'Ortaklığın giderilmesi davasından önce arabulucuya gitmek gerekir mi?',
        'Evet. Taşınır ve taşınmazların paylaştırılması ve ortaklığın giderilmesi uyuşmazlıklarında arabulucuya başvurmak dava şartıdır (6325 sayılı Kanun m. 18/B).',
      ],
    ],
    lawyers: ['zeynep'],
    posts: [],
  },
  {
    slug: 'aile-hukuku',
    name: 'Aile Hukuku',
    short: 'Boşanma, velayet, nafaka, mal rejimi ve koruma tedbirleri.',
    alt: 'Gün batımında sahilde el ele duran bir ailenin silueti',
    intro: [
      'Aile hukuku dosyaları kişisel ve çoğu zaman yıpratıcıdır. Bu nedenle ilk görüşmede amacımız, seçenekleri ve olası sonuçları sakin ve anlaşılır biçimde önünüze koymaktır.',
      'Anlaşmalı ya da çekişmeli boşanma, çocukla ilgili düzenlemeler ve mal paylaşımı konularını gizlilik içinde yürütüyoruz.',
    ],
    kept: [],
    more: [
      'Anlaşmalı ve çekişmeli boşanma davaları',
      'Velayet, kişisel ilişki ve nafaka düzenlemeleri',
      'Mal rejiminin tasfiyesi',
      '6284 sayılı Kanun kapsamında koruma tedbirleri',
    ],
    process: [
      ['Gizli ön görüşme', 'Durum, öncelikler ve çocuklarla ilgili konular konuşulur.'],
      ['Seçenekler', 'Anlaşma ve dava ihtimalleri sonuçlarıyla birlikte değerlendirilir.'],
      ['Protokol ya da dava', 'Protokol veya dava dilekçesi hazırlanır.'],
      ['Takip', 'Duruşma, karar ve sonrası işlemler yürütülür.'],
    ],
    faq: [
      [
        'Anlaşmalı boşanmanın şartları nelerdir?',
        'Evliliğin en az bir yıl sürmüş olması, eşlerin birlikte başvurması ya da birinin diğerinin davasını kabul etmesi, hâkimin tarafları bizzat dinlemesi ve düzenlemeyi uygun bulması aranır (Türk Medeni Kanunu m. 166).',
      ],
      [
        'Velayet kararı sonradan değişebilir mi?',
        'Yeni olgular gerektirdiğinde hâkim, kendiliğinden ya da anne veya babadan birinin istemi üzerine gerekli önlemleri alır (Türk Medeni Kanunu m. 183). Ölçüt her zaman çocuğun yararıdır.',
      ],
      [
        'Şiddet gördüğümde dava sonucunu beklemek zorunda mıyım?',
        'Hayır. 6284 sayılı Kanun kapsamındaki koruma tedbirleri için boşanma davası şartı aranmaz. Acil durumda 112 aranabilir, kolluğa ya da aile mahkemesine doğrudan başvurulabilir.',
      ],
    ],
    lawyers: [],
    posts: [],
  },
  {
    slug: 'ceza-hukuku',
    name: 'Ceza Hukuku',
    short: 'Soruşturma ve kovuşturma aşamalarında müdafilik ve mağdur vekilliği.',
    alt: 'Terazi tutan Adalet heykeli',
    intro: [
      'Ceza dosyalarında ilk ifade ve ilk başvuru aşaması, sonraki süreci doğrudan etkileyebilir. Süreler kısadır; bu yüzden erken aşamada hukuki destek almak önemlidir.',
      'Şüpheli ve sanıklar için müdafi, suçtan zarar görenler için vekil olarak soruşturma ve kovuşturma aşamalarını yürütüyoruz.',
    ],
    kept: [],
    more: [
      'Soruşturma aşamasında ifade ve sorguda hazır bulunma',
      'Kovuşturma aşamasında müdafilik',
      'Mağdur ve katılan vekilliği, şikâyet başvuruları',
      'Kanun yollarına başvuru',
    ],
    process: [
      ['Acil değerlendirme', 'Dosyanın aşaması ve yaklaşan süreler belirlenir.'],
      ['Dosya incelemesi', 'Kısıtlılık yoksa soruşturma dosyası incelenir.'],
      ['Savunma ya da başvuru', 'Beyan, dilekçe ve delil talepleri hazırlanır.'],
      ['Kanun yolları', 'Karara karşı itiraz, istinaf ve diğer yollar değerlendirilir.'],
    ],
    faq: [
      [
        'İfadeye avukatımla gidebilir miyim?',
        'Evet. Şüpheli ya da sanığa, müdafi seçme hakkı ve müdafiin ifade veya sorguda hazır bulunabileceği bildirilir. Seçecek durumda değilse istemi üzerine baro görevlendirme yapar (Ceza Muhakemesi Kanunu m. 147).',
      ],
      [
        'Şikâyet için bir süre var mı?',
        'Şikâyete bağlı suçlarda süre, fiilin ve failin öğrenildiği tarihten itibaren altı aydır; hakaret suçunda ayrıca fiilden itibaren iki yıllık üst sınır vardır (Türk Ceza Kanunu m. 73).',
      ],
    ],
    lawyers: [],
    posts: [],
  },
  {
    slug: 'gayrimenkul-hukuku',
    name: 'Gayrimenkul Hukuku',
    short: 'Tapu, kira, kat mülkiyeti ve taşınmaz satışlarından doğan uyuşmazlıklar.',
    alt: 'Ahşap masa üzerinde küçük bir ev maketi ve anahtar',
    intro: [
      'Taşınmaz işlemleri yüksek değerli ve şekil şartlarına bağlıdır. Satın alma öncesinde yapılan bir tapu incelemesi ya da kira sözleşmesindeki net bir hüküm, ileride çıkacak birçok sorunu önleyebilir.',
      'Alım satım, kira ve kat mülkiyeti ilişkilerinde danışmanlık veriyor; uyuşmazlık çıktığında arabuluculuk ve dava aşamalarını yürütüyoruz.',
    ],
    kept: [],
    more: [
      'Tapu iptali ve tescil davaları',
      'Kira sözleşmeleri, tespit, uyarlama ve tahliye süreçleri',
      'Kat mülkiyeti ve komşu hakkı uyuşmazlıkları',
      'Taşınmaz alım satımı öncesi inceleme',
    ],
    process: [
      ['Taşınmaz kayıtları', 'Tapu, imar ve sözleşme kayıtları incelenir.'],
      ['Risk değerlendirmesi', 'Şerh, ipotek ve kullanım durumları kontrol edilir.'],
      ['Görüşme ve arabuluculuk', 'Gereken dosyalarda arabulucu görüşmeleri yürütülür.'],
      ['Dava ve icra', 'Anlaşma olmazsa dava ve icra işlemleri takip edilir.'],
    ],
    faq: [
      [
        'Kira uyuşmazlığında önce arabulucuya gitmek gerekir mi?',
        'Kira ilişkisinden doğan uyuşmazlıklarda arabulucuya başvurmak dava şartıdır. İlamsız icra yoluyla tahliyeye ilişkin hükümler bunun dışındadır (6325 sayılı Kanun m. 18/B).',
      ],
      [
        'Noterde yapılan taşınmaz satış sözleşmesi yeterli mi?',
        'Taşınmaz satışı için resmî şekil aranır ve mülkiyet tapu siciline tescille geçer. Noterde yapılan satış vaadi sözleşmesi ise tek başına mülkiyeti geçirmez (Türk Borçlar Kanunu m. 237).',
      ],
    ],
    lawyers: [],
    posts: [],
  },
]

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))
