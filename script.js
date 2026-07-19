const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const fullTavsifById = {
  "bnf-453": `Müellifi Belirsiz, Ésope, Fransa Milli Kütüphanesi (Paris), SUP Turc 453
Fransa Millî Kütüphanesi’nin basılı kütüphane kataloğunda 453 numarada kayıtlıdır (Blochet, 1932: 358). Tamamı siyah bez ciltli olan nüsha, şemseli ve zencireklidir. İç ve dış ölçüleri, nüsha dijitalleştirilirken cetvel kullanılmadığı için tespit edilememiştir. Cildin dışı ve formaların arasında yıpranmalar mevcuttur. Yaprakları beyaz renktedir. Ia yüzünde Fransızca notlar bulunmaktadır. 1a yüzünde “ber-ṭarīḳ-i ṣavāba ibḳā oluna” ifadesi mevcut olup sayfanın altında “19 Avril 1882” tarihi bulunmaktadır. Bu tarihin eserin telif tarihi olup olmadığı hakkında kesin bir kanaate varılamamıştır. Nüshaya varak numarası verilmiş olup 64 varak olan nüshanın içinde farklı eserler mevcuttur. 1b-25a varakları arasında “Hāẕā Kitāb-ı Dānisten” başlığı altında meşhur “Kitâb-ı Dânisten” isimli lügat yer almakta olup derkenarda sözlük maddelerinin Latin harfleriyle Türkçe ve Fransızca karşılıkları yer almaktadır. 25b yaprağında 16 beyitlik mesnevi nazım biçimiyle yazılmış atasözlerinden oluşan bir şiir bulunmaktadır. 26a yaprağı boştur. 26b-27a yapraklarında sülüs, nesih, ta‘lîk ve dîvânî hat meşkleri mevcuttur. 28a-44a varakları arasında Ezop hikâyeleri vardır. 44b-50a varakları boştur. 50b-64b varakları arasında Fransız elçi ve konsolosları hakkında dîvânî yazı ile kaleme alınmış 7 ferman kopyası bulunmaktadır. 61a, 61b ve 64a yaprakları boştur.

Ezop hikâyeleri, nüsha içindeki ikinci eserdir. 28a yüzünde “Ḳarṭal ile tilkinüñ vaḳʿasıdır” başlığı altında eser başlamakta olup dibace, mukaddime, besmele, hamdele, salvele ve hatime bölümleri yer almaz. Bu meselin başlığının hemen altında hikâye anlatılmaktadır. 44a yüzünde son meselin tamamlanmasının akabinde üçgen biçiminde üç nokta ve altında “mim” harfi yer almıştır. Eserin müellif veya müstensihi belli olmayıp telif yahut istinsah tarihi ile ilgili bir bilgi yer almamaktadır. Eser, 16 varak olup tek sütunlu 25 satırdan oluşmaktadır. Nesih hat ile yazılıp reddadesi bulunmamaktadır. Nüshanın tamamında olduğu gibi bu eserde de sadece siyah mürekkep kullanılmıştır.`,
  "rylands-152": `Müellifi Belirsiz, Hikâyet-i Esepos, John Rylands Araştırma Enstitüsü ve Kütüphanesi (Manchester), Turkish MS 152
Kütüphane kataloğunda “Hikâyet-i Esepos” ismiyle kayıtlıdır (Schmidt, 2011: 256). Mukavva üzerine kırmızı sahtiyan derili cilt, yıpranmış durumdadır. Ön ve arka kapaklarda cildin üzerinde nohudi, koyu yeşil ve turuncu renkli gelgit biçimli ebru kağıt vardır. Mıklepli olan cilt, 155x110 mm ölçülerindedir. İç kapağında kurşun kalemle “Turkish Tales” hemen altında “2/6” yazılıdır. Ia yüzünde kurşun kalemle bir baykuş ve tavuk resmi bulunmaktadır. Ib yüzünde sadece, 1a yüzündeki mürekkepli kalemle Latin harfleriyle yazılmış “Michel Shaw” şeklindeki temellük kaydı olduğu düşünülen ifadenin mürekkebinin izi yer almaktadır. 1a yüzünde “Michel Shaw” ifadesinden başka kâğıdın farklı yerlerinde Arap harfleriyle “ṭıbb”, “ṭabîb/ḥabîb”, “aʿżā”, “o”, “efendi”, “efendim” yazılıdır. 2a-2b yüzleri aharsız olduğu için yazı mürekkebi dağılmıştır. 52b yüzü bir satır yazılarak arkasında kalan satırlar boş bırakılmış ve diğer sayfaya geçilmiştir; fakat bu durum hikâyenin akışında bir kesintiye sebep olmamıştır.

1b yüzünde Latin harfleriyle “Isipos Hycaiesy” ve altında Arap harfleriyle “Ḥikāyet-i Esepos” başlığı yer almıştır. 1+64+3 varak ve 9 satırdan oluşan eser, reddadeli olup yapraklarına numara verilmemiştir. Metin, 63b yüzünde sona ermekte olup sayfanın başında “Der-devlet-i ʿāliyye” yazılıdır. 64a yüzü boş iken 64b yüzünde kurşun kalemle yapılmış bıyıklı ve sarıklı bir insan resmi bulunmaktadır. 65a-65b yüzleri boş olup 66a yüzünde Arap harfleriyle “dürûd-ı muhabbet” yazılıdır. 66b yüzünün sağ üst köşesinde üzeri karalanmış bir şekilde “Jahre Horus (?)” yazıldığı tahmin edilmektedir. Bu yazı, katalogda “Salomon Moras (?)” şeklinde okunmuş ve temellük kaydı olarak yorumlanmıştır (Schmidt, 2011: 256). Nüshanın herhangi bir yerinde tarih, eserin istinsah tarihi veya müstensih adı geçmemektedir.

Arap harfli metin, siyah mürekkeple nesih hatla yazılmış olup derkenarda bazen kurşun kalemle fakat çoğunlukla açık kahverengi mürekkepli kalemle Arap harfleriyle Türkçe düzeltmeler, Latin harfleriyle İngilizce ve Fransızca notlar, mart ve nisan aylarına işaret eden tarihler yer almaktadır. Eserde bulunan başlıklar, siyah mürekkeple yazılmış olup Ezop’un hayatı anlatıldıktan sonra başlayan ilk hikâyeden önce boşluk bırakılmıştır. 4b yüzünde bulunan bu boşluğun farklı renkte bir mürekkeple başlık yazılması için bırakılmış olduğu tahmin edilmektedir. Benzer şekilde metin içinde boşluk bırakılan başlık yerleri mevcuttur.

Metinde “kef” harfinin “k”, “g” ve “n” seslerini birbirinden ayırt etmek için “g” ve “n” seslerinde keşide üzerine üç nokta konulmuştur. 2b yüzünde “salıvirin”, 3a’da “çevirmedin” ve 4a’da “eyledik” 8a’da “büyük” kelimelerinin sonunda bulunan “kef” harfleri, ta‘lîk hattın yazı özelliği olan hem içindeki kef işaretiyle hem de keşide çekilerek yazılmıştır. 2b yüzündeki “kimde” kelimesinin sonundaki “he” harfi de ta‘lîk hattın yazı özelliği olan “dal” harfinin sonuna bitiştirilerek yazılmıştır. Metindeki bazı “sîn” harfleri de ta‘lîk hattın özelliklerini taşımaktadır. Buradan hareketle metinde kullanılan yazı şekli nesih olmakla beraber yer yer ta‘lîk hattın özelliklerinin de taşındığı söylenebilir.

“Ḥikāyāt-ı Esepos” başlığı altında eserin başladığı 1b-5a yaprakları arasında Ezop’un hayatı ve hikâyelerini yazma macerası hakkında bilgi verilmiş olup eserin sebeb-i telif bölümünde “bu mes’eleleri naṣīḥat ve ḥiṣṣe alacaḳ ve ṭabīʿat ḥaẓẓ idecek kelimāt olduġı içün Türkce tercüme eyledik Esepos ḥakīmiñ mes’eleleridir ki zikr olunur” (4a-4b) ifadelerine yer verilmiştir. Bu ifadeden hareketle, bu hikâyelerin hangi dilde olduğu belirtilmeyen bir eserden Türkçeye tercüme edildiği ve tercüme edilme amacının bu eserde bulunan nasihat ve hisse alınacak ama aynı zamanda insanın hoşuna gidecek hikâyelerin bulunması olduğu anlaşılmaktadır. Verilen ifadelerden hareketle üzerinde durulan bir diğer konu, müstensihin diğer nüshalarda “meŝel” olarak yazılan kelimeyi “mes’ele” olarak değiştirmesidir. Bunun sebebi, müstensihin “mesel” kelimesini istinsah ettiği nüshadan yanlış okuması olabileceği gibi bu nüshaya yanlış yazıldığı ve doğrusunun “mes’ele” olduğunu düşünmesi de olabilir. Bir başka ihtimal olarak müstensihin “meŝel” kelimesini bilmemesi düşünülmekteyse de 3a yüzünde “ḍarb-ı meŝel” kelimesi geçmektedir. Son ihtimal olarak müstensihin “meŝel” kelimesinin “ḥikāye” ve “maṣal” anlamını bilmediği için bu kelimeyi “mesʾele” yaparak kendine göre metni düzelttiği anlamı çıkabilmektedir.`,
  "bodleian-2109": `Müellifi Belirsiz, Ḥikāyāt-ı Esepos, Bodleain Kütüphanesi (Oxford), Turkish MS 2109
Kütüphane kataloğunda “Hikâyât-ı Esepos” ismiyle ile kayıtlıdır. Sırtında “Fabule Esop. Turc.” yazılı yıpranmış kahverengi sahtiyan derili ve taraklı şal biçimli kırmızı, mavi, sarı, siyah renkli ebru kapaklı bir cildin içindedir. İç ve dış ölçüleri, nüsha dijitalleştirilirken cetvel kullanılmadığı için tespit edilememiştir. Nüshanın iç ve dışında herhangi bir yıpranma mevcut değildir. Yaprakları; nohudi, sarı, kırmızı ve yeşil renktedir. Esere varak numarası verilmiş olup eser, her bir yaprağı 7 satır olan tek sütunlu 85 varaktan oluşmaktadır. Yazısı, harekeli nesihtir. Eser reddadelidir; fakat 18, 23, 26, 29, 33, 47, 54, 63 ve 81 numaralı varaklarda reddade bulunmamaktadır. Müstensih yahut müellifi belli olmayan nüsha, tamamı mensur bir metin içermektedir.

Nüshanın Ia yüzünde “17 Apr. 1752” tarihi mevcut olup bu tarihin eserin telif tarihi olup olmadığı hakkında kesin bir kanaate varılamamıştır. 1a yüzünde ise “Fabula Esopica” şeklinde bir ibare bulunmaktadır. Eserde dibace veya mukaddime şeklinde bir başlık yer almayıp besmele, hamdele, salvele yahut sonunda hatime bölümleri bulunmamaktadır. 1b yüzünde kırmızı mürekkeple “Hikâyât-ı Esepos” başlığı altında eser başlamaktadır. Başlığın hemen üstünde kare biçimli “Tomas Vahan” yazılı bir mühür mevcuttur. Eser, siyah mürekkeple yazılmış olup metin içinde her hikâye sonunda “bu aña mis̱āldir” yahut “bundan murād” ifadelerinin “bu aña” ve “bundan” kelimeleri ve çoğunlukla “ḥikāye” ve bazen de “ḳıṣṣa” adlı başlıklar, sayfanın rengine göre kırmızı, sarı, beyaz ve yeşil mürekkeple yazılmıştır.

“Hikâyât-ı Esepos” başlığı altında eserin başladığı 1b-5a yaprakları arasında Ezop’un hayatı ve hikâyelerini yazma macerası hakkında bilgi verilmiş olup eserin sebeb-i telif bölümünde “bu mes̱eller naṣīḥat ve ḥiṣṣe alacaḳ ve ṭabīʿat ḥaẓẓ idecek kelimāt olduġı içün Türkce tercüme eyledik Esepos ḥakīmiñ mes̱elleridir” (5a) ifadelerine yer verilmiştir. Bu ifadeden hareketle, bu hikâyelerin hangi dilde olduğu belirtilmeyen bir eserden Türkçeye tercüme edildiği ve tercüme edilme amacının bu eserde bulunan nasihat ve hisse alınacak ama aynı zamanda insanın hoşuna gidecek hikâyelerin bulunması olduğu anlaşılmaktadır. Eser, 85a yüzünde tamamlandıktan sonra “temmeti’l-ḥikāyātü’l-ġarībe” ifadesi yer almıştır.`,
  "bodleian-303": `Müellifi Belirsiz, Ḥikāyāt-ı Esepos, Bodleain Kütüphanesi (Oxford), Turkish MS Ind. Inst. Turk 30/3
Kütüphane kataloğunda “Ḥikāyāt-ı Esepos” olarak kayıtlıdır. Nüsha içindeki üçüncü eser olup 66b-150b varakları arasında bulunmaktadır. 135x95 (100x64) mm. ölçülerindedir (Kut, 2003). Cildi kahverengi sahtiyan deri olup köşeleri yıpranmış durumdadır. İç kapağı kırmızı, yeşil ve sarı renkli taraklı şal biçiminde yıpranmış ebru kağıtlı mıklebi ve sertabı mevcuttur. Zencirek yerinde üç sıra çizgi olup cildin tamamında devam etmektedir.

Yaprakları nohudi renktedir. Müstensihi belli değildir. “Temmeti’l-ḥikāyātü’l-ġarībetü bi-luṭfi’llāh fï evāʾili Ramażān li-sene 1102” şeklindeki temmet kaydından h. 1102/m. 1691 yılının 29 Mayıs-7 Haziran tarih aralığında tamamlandığı anlaşılmaktadır.

Nesih hatla yazılan eser, 7 satırdan oluşmaktadır. Reddadelidir. Metinde okuyucuyu yanlış okumaktan men etmek, doğru okumaya sevk etmek için bazı kelimelerin üzerinde harekeler bulunmaktadır. “Kef” harfinin “nazal n” sesini verdiği yerlerde üzerine üç nokta konmuştur. “Ṣāḥib-i ʿaḳl” gibi tamlamalı ifadelerde “ṣāḥib-ʿaḳl” okunmaması için “be” harfinin altına esre konularak tamlama olduğu belirtilmiştir. “Ḥikāyāt-ı Esepos”, “Ḥikāye”, “vāḳıʿa”, “ḳıṣṣa” gibi başlıklar, Esepos’un adının geçtiği yerler, hikâyelerin bitiminde yer alan “bu aña miŝāldir” cümlesinin “bu aña” bölümü, “baʿdehū” gibi, “bundan murād” ifadelerinin “bundan” kısımları ile temmet kaydı yeşil mürekkeple, diğer bütün yazılar siyah mürekkeple yazılmıştır.

Nüshada bulunan ilk iki eser, görülememiştir. 66b-150b varakları arasında Ezop hikâyeleri, 151b-157a varakları arasında “Türkçe Tekellümāt” adlı bir eser mevcut olup yeşil mürekkeple “Evvelki Tekellümāt” (151b) ve kırmızı mürekkeple “İkinci Tekellümāt” (156a) başlıkları yer almıştır. 157a’dan sonraki varak boştur. Eser, yarım kalmış görünmektedir. 177a-177b-178a sayfalarında açık kahverengi mürekkeple İtalyanca ifadeler, sayılarla yapılmış işlemler, kırmızı renkle boyanmış daire, yarım daire, çeyrek ve ¾’ü boyanmış yarım daire bulunmaktadır. 176b yüzüne 176a yüzünde yazılı Arap harfli yazının siyah mürekkebinin izi geçmiştir. 177b yüzünün sol alt köşesine ters çevrilmiş şekilde Arap harfleriyle “bākï ḳaldı ʿaṣruñ (?)” ifadesi yazılıdır.`,
  "bnf-676": `Müellifi Belirsiz, Ḥikāyāt-ı Esepos, Fransa Milli Kütüphanesi (Paris), SUP Turc 676
Kütüphane kataloğunda Arap harfleriyle “Ḥikāyāt-ı Esepos” adıyla kayıtlıdır. Yine katalogda verilen bilgilere göre 150x105 mm. ölçülerindedir (Blochet, 1933: 30). Dijitalleştirilen görselinde cetvel bulunmadığı için bu bilgi teyit edilememiştir. Yine görsellerde nüshanın kapağı yer almadığı için cilt hakkında bilgi verilememektedir.

Varakların kenarından görünen kısımlarından hareketle siyah sahtiyan deri cildinin olduğu anlaşılmaktadır. Köşelerinde çok az yıpranma mevcuttur. Mıklepsizdir. Nüshaya 1a yüzünden itibaren varak numarası verilmiştir. Bu numaralara göre eser, 86 varaktan oluşur. 1a yüzünde Arap harfleriyle harekeli bir şekilde “Tomas Van” yazılıdır. Hemen altında biri siyah diğeri kırmızı kütüphane mührü mevcuttur. Eserin başladığı 1b yüzünde kırmızı mürekkeple yazılmış “Ḥikāyāt-ı Esepos” başlığının hemen üstünde Arap harfleriyle harekeli bir şekilde “Ŝümas Ḥarn” ifadesi bulunur. Çok açık bir nesih yazıyla ve harekeli bir biçimde yazılan eser, 7 satır ve tek sütunludur. Reddadelidir. “Ḥikāye”, “vaḳʿa”, “ḳıṣṣa” gibi başlıklar ve hikâye bitimlerindeki “bu aña miŝāldir” ifadesinin “bu aña” veya “bundan murād olunan budur ki” ifadesinin “bundan” kısmı; “imdi” gibi dikkat çekilmek istenen bölümler; kırmızı ve yeşil mürekkeple yazılmış, diğer kısımlarda siyah mürekkep kullanılmıştır. Yaprakları nohudi renkli olup bazı varakların derkenar bölümlerinde rutubet nedenli yıpranma ve sararmalar görülür. 58 ve 59 numaralı varaklardan şirazenin dağıldığı anlaşılmaktadır. 57b yüzünün sağ alt kısmına yakın derkenarında kırmızı renkli kütüphane mührü mevcuttur. 86a yüzündeki izlerden hareketle eserin başında olan iki mührün sonuna da bulunduğu söylenebilir. 86a yüzünde metnin tamamlanmasından sonra yeşil mürekkeple üç adet “temme” yazılarak eser sonlandırılmıştır. Nüshanın herhangi bir yerinde telif veya istinsah kaydı yahut müellif veya müstensih adı bulunmamaktadır.`,
  "leiden-1289": `Müellifi Belirsiz, Ḥikāyāt-ı Esepos, Leiden Üniversitesi Kütüphanesi (Leiden), UB Cod. Or. 1289
Kütüphane kataloğunda “Ḥikāyāt-ı Esepos” adıyla kayıtlıdır (Schmidt, 2012: 392). Katalogda beş farklı yerde geçmektedir. Bunlardan dördü; Johannes Heyman (1667–1737)’ın kütüphanesinde bulunması, onun tarafından İzmir’de istinsah edilmiş olması ve nüsha içinde bulunan sözlük ile ilgilidir (Schmidt, 2012: 168, 172, 176, 186). Eser, “Ḥikāyāt-ı Esepos” adıyla genel indeks bölümünde yer almıştır. Dijitalleştirilmiş görselinde cetvel kullanılmadığı için nüshanın ölçüleri bilinmemektedir. Eser, katalogda müstakil olarak ele alınmadığı için bu bilgi orada da yoktur.

Sırtı kiremit rengi sahtiyan derili ve kapakları aynı renkte mukavvadır. 1a yüzü boştur. Nüsha içinde yan yana iki farklı eser mevcuttur. Bunlardan biri 2a yüzünde “Ḥikāyāt-ı Esepos” başlığı altında yer alan Ezop masalları, diğeri ise 1b yüzünde bulunan Ezop masalları içinde geçen bazı kelimelerin İtalyanca karşılıklarını içeren sözlüktür. Her varağın bir yüzü masalları, diğer yüzü sözlüğü içermektedir.

Sözlükte masallar içinde yer alan Arapça, Farsça veya Türkçe kelimelerin Arap harfli yazımı, Latin harfli Türkçe transkripsiyonu ve Latin harfli İtalyanca karşılığı aynı satırda verilmiştir. Kelimelerin Arap ve Latin harfli karşılıklarının verilme sırası, düzenli değildir; bazı yüzlerde önce İtalyancası, sonra Latin harfli Türkçe transkripsiyonu ve sonunda Arap harfli şekli verilebilmektedir.

93 varaktan oluşan eser, 9 satır tek sütunlu olup reddadesizdir. Varaklara numara verilmemiştir. Bazı varaklar boş bırakılmış, bazıları kesilmiştir. “Ḥikāye”, “vaḳʿa”, “ḳıṣṣa” gibi başlıklar ve hikâye bitimlerindeki “bu aña temŝïldir” ifadesinin “bu aña” kısmı gibi dikkat çekilmek istenen bölümler; kırmızı mürekkeple, diğer bölümler siyah mürekkeple yazılmıştır. Yaprakları nohudi renktedir.

Masalların olduğu yüzler, aharlı olup Arap harfleriyle güzel bir ta‘lîk hat ile yazılmıştır. Forma sebebiyle masalların yer aldığı sayfalar; bir yaprakta a, diğer yaprakta b yüzüne denk gelmektedir. Mürekkebin dağılmasından hareketle sözlüğün yer aldığı kağıdın genellikle aharsız kısmına yazıldığı anlaşılmaktadır. Bazı sayfalarda ise aharlı bölüme yazılmıştır. Bir yaprakta sözlük müstakil bir yüzde olmayıp masal metninin derkenar kısımlarına yazılmıştır.

Eserin sonunda kırmızı mürekkeple “Temmetü’l-ḥikāyeti’l-ġarïbetü bi-luṭfi’llāhi teʿālā fï evāʾili ẕi’l-ḳaʿdeti’ş-şerïfeti li-sene erbaʿa ʿaşerete ve miʾeti ve elf fï medïne-i İzmïr” şeklinde bir temmet kaydı yer almıştır. Bu kayda göre eser, 19-28 Mart 1703 tarihleri arasında tamamlanmış olmalıdır. Hemen altında siyah mürekkeple “ḥumiyet ʿani’l-āfeti ve’t-tedmïr” ifadesi yer almıştır. Bu sayfanın arkasında “N.1289” yazılıdır.`,
  "rylands-135": `Müellifi Belirsiz, Receuil de fables turques, John Rylands Kütüphanesi (Manchester), Turkish MS 135
Kütüphane kataloğunda “Receuil de fables turques” adıyla kayıtlıdır. Sırtı bordo sahtiyan derili ve kapakları mukavva üzerine gelgit biçimli ebru kâğıt ile kaplıdır. Cildi yıpranmış ve rengi solmuştur. 195x130; 190x125 mm. ölçülerindedir. Nüshaya varak veya sayfa numarası verilmemiş olup 54 varak, 17 satır ve tek sütunludur. Nesih yazı ile yazılmıştır. Mesellerin başlıkları ve her meselin bitiminde “mes̱eliñ maʿnāsı budur ki, mes̱eliñ işāreti budur ki, mes̱eliñ maʿnā-yı netīcesi, mes̱el” gibi kıssadan çıkarılan hissenin bir cümle ile özetlendiği ifadelerden önceki alt başlıklar kırmızı mürekkeple yazılmıştır. Sayfalar, açık krem renktedir. Eser, kırmızı renkte cetvellenmiş bölüm içinde yazılıdır. Bazen yazı cetvelin dışına taşmıştır; fakat bunlar derkenar notu olmayıp eserin kendisidir. Nüsha reddadelidir; fakat sadece 51b yüzünde reddade bulunmamaktadır. 30. meselden sonra mesellerin başlığının kenarına mesel numarası eklenmiştir. Müellif veya müstensihi belli değildir.

Nüshanın iç kapağının Ia yüzünde kurşun kalemle başkası tarafından sonradan eklendiği anlaşılan “Receuil de fables turques” notu yer almıştır. Nüshada; dibace veya mukaddime şeklinde bir başlık yer almayıp besmele, hamdele, salvele yahut sonunda hatime bölümleri bulunmamaktadır. Nüshanın 1b yüzü ilk hikâyenin “Dilkü ile Erkecin Meselidir” şeklindeki başlığı ile başlamaktadır. Bu meselin başlığının hemen altında hikâye anlatılmaktadır. Eserin sonunda “temmetü’l-kitāb bi-ʿavnillāhi’l-meliki’l-vehhāb temme fî 25 R[ebīʿü’l-āḫir] sene 1174” ifadesi yer almıştır. Bu ifadeden hareketle metnin miladi 4 Aralık 1760 tarihinde tamamlandığı anlaşılmaktadır.`,
  "leiden-1589": `Müellifi Belirsiz, Emŝāl, Leiden Üniversitesi Kütüphanesi (Leiden), UB Cod. Or. 1589
Kütüphane kataloğunda “Emsâl” adıyla kayıtlıdır (Schmidt, 2012: 390). 226x165 mm. ölçülerinde olup sırtı sütlü kahverengi sahtiyan deridir. Dijitalleştirilmiş görselinde sadece üst (ön/sağ) kapağı mevcuttur. Bu kapağın koyu ve sütlü kahverengi tonlarında ebru kağıt ile kaplı mukavva üzerine kahverengi sahtiyan deri kapak yapıştırılmış surette olduğu görülmektedir. Kenarlarından ebru kaplı mukavvanın ve sırtla birleşen tarafta kesi izlerinin görülmesinden hareketle kahverengi deri ile kaplanmış değil, derinin yapıştırılmış olduğu anlaşılmaktadır. Bu kapak; beyzi şemseli, çiçek şeklinde salbekli; aynı çiçek şekilli köşebent ve zencireklidir. Ciltte mıklep bulunmamaktadır.

Ia yüzünde Latin harfleriyle kahverengi mürekkeple “Dictionnaire Arabe & Turc Msst. in hto.” yazılıdır. Ib yüzü boştur. 1a yüzünde Arap harfleriyle siyah mürekkeple “Kitāb-ı Emŝal ketebehû ve ṣāḥibehū Ḳardon et-Tercümān el-Fransavï fï medïneti Ṭrāblūse’ş-Şām sene 1159” şeklinde ferağ ve temellük kaydı olup hemen altında silinmiş bir mühür vardır. Bu kayıttan hareketle eserin adının “Kitâb-ı Emsâl”, yazarının ve sahibinin Fransız bir tercüman olan Cardonne olduğu, eseri Trablusşam’da h. 1159 yılında yazıldığı anlaşılmaktadır. Eserin bitiminden sonra 54a yüzünde “Temmetü’l-kitāb bi-ʿavnillāhi’l-meliki’l-vehhāb temme fï ġurreti Muḥarrem sene 1159” şeklindeki ferağ kaydından eserin hicri tarihle 1 Muharrem 1159, miladi tarih ile 24 Ocak 1746’da tamamlandığı anlaşılmaktadır.

Eser, cilt içinde bulunan iki eserden ilkidir. Diğer eser, kataloğa “Sefāret-nāme-i Fransa” olarak kaydedilmiştir (Schmidt, 2012: 397). 1b yüzünde kırmızı renkli “Dilkü ile Erkecin Meselidir” başlığı ile eser başlar. Varaklara numara verilmiş olup bu numaralara göre eser, 54 varaktır. Yapraklar nohudi renkte olup aharlıdır. Okunaklı bir nesih hat ile yazılmıştır. 16 satır ve tek sütunlu olan eser, reddadesizdir. Başlıklar ve “meselin remzi”, “meselin ma‘nâsı”, “meselin işâreti” gibi ifadeler ile bir masalın sonunda yer alan konu ile ilgili beyit (16b) kırmızı renkli mürekkeple yazılmış; diğer bütün yerlerde siyah mürekkep kullanılmıştır. Her masalın yanına denk gelen derkenar bölümüne masalın sıra numarası, kırmızı renkli mürekkeple yazılmıştır.

Nüshanın 59b-89b yaprakları arasında bulunan ikinci eser, 59b yüzündeki kırmızı renkli mürekkeple yazılmış “besmele”nin hemen altındaki “biñ yüz otuz iki senesinde Françeye giden ilçi Meḥemmed Efendi’nin taḳrïrleridir” başlığıyla başlamaktadır. Eser içinde başka bir başlık veya alt başlık yoktur. Başlık dışında kalan tüm yazılar, siyah mürekkeple açık bir nesih hat ile yazılmıştır. 16 satır ve tek sütunlu olup sadece 59b yüzünde reddade mevcuttur. Bazı yaprakların derkenar kısmında notlar bulunmaktadır. Yirmisekiz Mehmed Çelebi’nin Fransa Sefâret-nâme’sinin bir nüshası olduğu anlaşılan eserin sonunda ferağ kaydı yoktur. Bu sebeple tamamlanma tarihi bilinememektedir. Nüshanın 1a yüzündeki “Kitāb-ı Emŝal ketebehû ve ṣāḥibehū Ḳardon et-Tercümān el-Fransavï fï medïneti Ṭrāblūse’ş-Şām sene 1159” ifadesinden hareketle aynı kişi tarafından aynı yılda yazılmış olması ihtimal dâhilindedir.`,
  "british-7332": `Müellifi Belirsiz, Güzïde Meŝeller, British Library (Londra), OR 7332
Kütüphane kataloğunda yer almayan bu eserden ilk defa Günay Kut, “Yazmalar Arasında II” adlı yazısında “Güzïde Maṣallar” olarak bahsetmiştir. Kut’un verdiği bilgilere göre nüsha, 188x122 (155x85) mm. ölçülerindedir (Kut, 1988: 193). Sırtı kahverengi sahtiyan derili olup üzerinde yatay şekilde “OR 7332 BRIT. MUS. FABLES TURKISH” yazmaktadır. Sırtı ve kapakların köşeleri yıpranmış durumdadır. Cildin ön ve arka kapaklarına siyah renkte tarz-ı kadîm battal ebrulu kâğıt yapıştırılmıştır. İç kapağında eserin, E. J. W. Gibb tarafından British Museum’a verildiği ile ilgili Latince bir ifade mevcuttur. 1a yüzünde sarı renkli British Museum mührü, üzerinde siyah mürekkeple “Kitāb-ı Emŝāl”, sayfanın sol orta kısmında ise Hint-Arap rakamları yer almaktadır.

1b yüzünde kırmızı mürekkeple yazılan ve eserin başlığı olduğu anlaşılan “Meseller güzîde mesellerin takviyyeti adıyla” ifadesinden sonra eser başlamaktadır. Varaklara numara verilmiş olup bu numaralara göre eser, 51 varaktır. Yaprakları nohudi renklidir. Her bir sayfada 15 satır bulunmakta olup metin tek sütunludur. Bazı yapraklar reddadelidir; fakat büyük çoğunluğunda reddade bulunmamaktadır. Okunaklı bir nesih hat ile yazılmış olan eser, harekelidir. Hikâye başlıkları ve bu başlıklara ek olarak “miŝāl” başlıkları, “bu aña miŝāldir ki” şeklindeki hikâye sonlarındaki ibareler; dikkat çekilmek istenen noktalardaki “imdi”, “zïrā”, “ittifāḳ” gibi ifadeler kırmızı mürekkeple, diğer ifadeler siyah mürekkeple yazılmıştır. 51b yüzündeki son hikâyenin bitimiyle eser tamamlanmaktadır. Eser sonunda herhangi bir ferağ kaydı veya tarih bilgisi bulunmamaktadır. Eser üzerine bir neşir mevcuttur (Kesik & Delice, 2022).`,
  "gottingen-94": `Müellifi Belirsiz, Güzïde Meŝeller, Göttingen University Library (Göttingen), Cod. Ms Asch 94
Kütüphane kataloğuna “Güzïde Meŝeller” şeklinde kaydedilmiştir (Meyer, 1894: 49). 140x96 mm. ölçülerindedir. Kahverengi sahtiyan deri cildinin köşeleri yıpranmıştır. İç kapağın ilk varağı boştur. İkinci varağın b yüzünde Almanca bir şekilde Ezop’un Türkçe masalları ve babamızın Arapça bazı mektupları ifadeleri yazılmıştır. Bundan sonra on varak daha boştur. Sonraki varağın b yüzünde Latince ifadelerle nüsha içinde olan eserin Türkçe olup adının “Güzïde Meŝeller” olduğu belirtilmiş, eserin atasözleri ile ilgili olduğu bilgisi verilerek hicri 1191 yılında yazıldığına yer verilmiştir. Bir sonraki sayfada kütüphane mührü bulunmaktadır. Mührün bulunduğu yüz itibariyle esere varak numarası verilmiştir.

1b-4a yüzleri arasında “pronome” ve “verbe” başlıkları altında Arap harfli Türkçe zamir ve fiiller ve hemen altlarına İtalyanca karşılıkları yazılmıştır. Bir sonraki varak boştur. 5b yüzünde kırmızı mürekkeple yazılmış “Güzïde Meŝeller” başlığı altında eser başlamakta ve 63b yüzündeki hikâyenin tamamlanmasıyla sona ermektedir. Eserin sonunda yer alan kırmızı mürekkeple üç mim harfinin yanına kırmızı mürekkeple “sene” ve siyah mürekkeple “1191” yazılmıştır.

Güzel bir nesih hat ile kaleme alınan eser, harekelidir. Hikâyelerin başlıkları, “bu aña miŝāldir ki”, “imdi”, hikâyeden çıkarılacak “ikinci fāʾide”nin “ikinci” kısımları, kırmızı mürekkeple, diğer kısımlar siyah mürekkeple yazılmıştır. 11 satır, tek sütunlu olan eser, reddadelidir. Sayfaları nohudi renktedir. Cildi yıpranmasına rağmen sayfalarında bu durum söz konusu değildir; oldukça temizdir.

64a-66b yüzlerinde müsvedde suretinde Arapça dua kabîlinden yazılar mevcuttur. 66b-67a yüzlerinde Arap harfli Türkçe mektuplar bulunmaktadır. Bu mektuplardan sonra -muhtemelen nüshanın içinde bulunmuş ve kâğıdı nüshadakinden oldukça farklı olan- Arap harfli Türkçe bir mektup daha vardır, bu mektup da yazmanın dijital görselleri içine eklenmiştir. Akabinde gelen yirmi dört varak boş olup kitap bitmektedir.`,
  viguier: `3. Manuscrit de Viguier
Müellifi Belirsiz, Güzîde Meseller, Numinard (Québec)
Kanada’nın Québec şehrinde “Numinard” adlı bir sahafta bulunan nüshanın başlığı “Güzïde Meŝeller” şeklindedir. Sırtı koyu kahverengi sahtiyan deri olup yıpranmıştır. Ön ve arka kapağı mavi renkli tarzıkadim battal ebrulu kâğıt ile kaplanmıştır. İç kapak itibariyle üç varak boştur. Sonraki varakta Fransızca olarak nüshanın Latince ve Fransızcadan Türkçeye tercüme edilmiş masal koleksiyonu olduğu ve İstanbul’da 1721’de yazıldığı ifade edilmiştir. Müstensih hakkında bilgi verilmemiştir.

Nüshanın sayfalarına numara verilmiş olup eser, 175 sayfadır. 1 ve 2. sayfalar cetvellenmiş olup diğer sayfalar cetvellenmeyerek sadece çerçeve içine alınmıştır. 1 numaralı sayfada serlevha ve mihrabiye bulunmaktadır. Serlevha kısmı içinde kırmızı mürekkeple “Güzïde Meŝeller” başlığı yer almıştır. Başlığın hemen üstündeki mihrabiyede tığ biçimli beş çizgi mevcuttur. Başlıkların bazıları kırmızı mürekkeple, diğer bütün yazılar siyah mürekkeple yazılmıştır. Nesih hatla yazılan eser, 9 satır tek sütunlu olup reddadelidir. Yaprakları nohudi renktedir. Derkenar kısımlarında notlar yer almıştır. Bu notların içeriği; metne kelime ekleme veya kelimelerin üzerini çizerek metinden kelime çıkarma yahut metni düzenleme şeklindedir.

Eser, 175. sayfada son masalın bitimiyle tamamlanmıştır. Son sayfanın sağ alt köşesinde “li-seneti 1721 el-Mesîh” yazılıdır. Bu ifadeden hareketle eserin miladi 1721 tarihinde tamamlandığı anlaşılmaktadır. 175. sayfada eserin tamamlanmasından sonraki varak boştur. Sonraki sayfada İngilizce bir vakıf ve istishap kaydı mevcuttur. Bu kayda göre nüsha, 18 Ekim 1834’te T[homas] Amiot Esquire tarafından Quebec Edebiyat ve Tarih Derneği’ne sunulmuştur. Nüshanın son yaprağında Quebec Edebiyat ve Tarih Derneği’nin mührü mevcuttur.

Nüsha, uygun koşullarda saklanmadığı için tahrip olmuştur. Nüshanın derkenar kısmındaki notlar, esere müsvedde görünümü kazandırmaktadır. Bazı yüzlerin tamamında bütün kelimeler çizgilerle ayrılmıştır. Letellier, “Türk Dilinde Güzïde Meŝeller” adlı eserinin ön söz bölümünde ilk 82 masalı Viguier’in bıraktığı taslaktan yazdığını, diğerlerini Meninski ve Comidas’ın gramer kitaplarından eklediğini ifade etmiştir (Letellier, 1826: 15). “Güzïde Meŝeller” başlıklı British Library OR 7332 ve Göttingen Uni. Cod. Ms Asch 94 numaralı masallarının sonu “aña miŝāldir ki ḳaçan Allāh teʿālā bir kimesneyi sever her maṣlaḥatı ve muṣïbeti daḫi tebdïl ider meŝelleriñ āḫiri budur” şeklinde biterken bu nüshanın sonu “ḳaçan Allāh teʿālā bir kimesneyi sever her maṣlaḥatı daḫi tebdïl ider meŝelleriñ āḫiri budur” şeklinde tamamlanmaktadır. Hem “ve muṣïbeti” ibaresi bu nüshada yoktur hem nüshanın derkenar bölümünde “tebdïl” kelimesine işaret konarak “tedbïr” şeklinde düzeltme yapılmıştır hem de son cümle olan “meŝelleriñ āḫiri budur” ifadesinin üstü çizilmiştir.

Letellier’in 82. masalının son cümlesi “ḳaçan Allāhu Teʿālā bir kimseyi sever her maṣlaḥatı daḫi tedbïr ider” şeklindedir ve Letellier’in eserinde 82. masaldan sonra da masallar yer almıştır. Diğer nüshalardaki “tebdïl” kelimesi, Letellier’de bu nüshanın derkenarında yer aldığı şekliyle “tedbïr” olarak yazılmıştır ve ön sözünde de belirttiği üzere Meninski ve Comidas’tan eklemeler yaptığı için meseller sona ermediğinden “meŝelleriñ āḫiri budur” şeklindeki son ibareyi çıkarmıştır. Buradan hareketle, bu nüshanın Viguier’in bıraktığı taslak nüsha olduğu ve Letellier’in kendi hazırladığı nüshanın notlandırma kısmını bu nüshada yaptığı anlaşılmaktadır.`,
  "uppsala-42": `Müellifi Belirsiz, Güzîde Meseller, Uppsala Üniversitesi Kütüphanesi (Uppsala), Bj. 42
Kütüphane kataloğuna “Güzîde Meseller” şeklinde kaydedilmiştir (Tornberg, 1849: 73). 231x159 mm. ölçülerindedir. Sırtı ve kapakları açık kahverengi sahtiyan deriden yapılmıştır. Mıklepli ve sertaplıdır. Mıklep dâhil ön ve arka kapağın dışı; mavi renkli bülbül yuvası biçimli ebru kağıtla kaplıdır. İç kapağın sağ üst köşesinde kitabın 4 Haziran 1776’da İstanbul’dan satın alındığına dair Fransızca bir not yer almaktadır. 1a yüzünde “N.63 No. 50” ifadesinden başka bir yazı bulunmamaktadır.

1b-2a yüzleri yeşile yakın altın renginde cetvellenmiştir. Sadece bu iki yüzde cetvel mevcuttur. 1b yüzünde kırmızı mürekkeple yazılan “Güzîde Meseller” başlığı, basit denilebilecek bir serlevha içindedir; başlığın hemen üstünde cetvellerle aynı renkte mihrabiye ve uçlarında üç adet tığ fonksiyonunda çiçek ve yaprak benzeri süslemeler bulunmaktadır.

Eser, çok okunaklı bir nesih hat ile yazılmıştır. 9 satır tek sütundan oluşan eser, reddadelidir. Yaprakları nohudi renklidir. Varaklara numara verilmiş olup 84 varaktır. Hikâyelerin başlıkları, “miŝāl” şeklindeki başlıklar ve “bu aña miŝāldir ki” gibi hikâye sonunda hisse çıkarılacağını haber veren ifadeler kırmızı mürekkeple, diğer yazılar siyah mürekkeple yazılmıştır.

84b yüzünde masalların tamamlanmasından sonra “nemaḳahū ve ḥarrarahū eżʿafü’ż-żuʿafā Muḥammed Emïnü’l-Ḥāfıẓ li-kitābi’llāhi’l-mübïn nāle mā nāle yā ilāhe’l-ʿālemïn ġafara’llāhū lehū velivālideyhi ve aḥsene ileyhimā ve setri ʿuyūbihimā li-seneti tisʿa ve ŝemānïn ve miʾete ve elf mine’l-hicreti’l-Muṣṭafaviyye” şeklinde bir ferağ kaydı
2 +Atina’da 1d.
3 tedbïr 175d.
bulunmaktadır. Bu kayıttan hareketle eserin Hafız Muhammed Emin adlı bir müstensih tarafından h. 1189/ m. 1775-1776 yılında istinsah edildiği anlaşılmaktadır.`,
  "letellier-1826": `Viktor et-Tallie, Türk Dilinde Güzīde Mes̱eller, Paris: Bi-dāri’t-ṭıbāʿati dunde dupe, m. 1826/ h. 1241
Matbu olan nüsha, sol kapağından açıldığında “Choix de Fables Traduites en Turk” başlığı gelmektedir. Bu başlıktan sonra kitabın kapağı yer almış olup bu kapakta “L. Victor Letellier, Choix de fables Traduites en Turk par un effendi de Constantinople et publiées avec une version Française et un glossaire, Paris: Librairie orientale de Dondey-Dupré, 1826” bilgileri bulunmaktadır. Kapağın akabinde bir takdim yazısı ve ön söz mevcuttur. Ön sözden sonra “Fables Choisies” başlığı altında seçilmiş mesellerin anlatımı başlamıştır. Nüshanın soldan başlayan Fransızca bölümünde 1-100 sayfaları arasında meseller, 101-103 sayfaları arasında alfabetik fihrist, 107-205 sayfaları arasında madde başı Arap harfli Arapça, Farsça ve Türkçe olan kelimelerin, yanında Latin harfli telaffuzu ve Fransızca karşılığının yazıldığı bir Türkçe-Fransızca sözlük, 209-223 sayfaları arasında ilk meselin klasik şerh yöntemine benzer şekilde kelime ve eklerin Fransızca tahlili bulunmaktadır.

Nüsha, sağ kapağından açıldığında “Türk Dilinde Güzīde Mes̱eller” başlığı gelmektedir. Bu başlıktan sonra kitabın kapağı yer almış olup bu kapakta “Türk dilinde İstanbul’dan getürülmüş olan ve şimdiye dek baṣma olunmamış nüsḫadan ems̱al-i güzīdeniñ mecmūʿasıdır ki bir Françe tercümesiyle ṭabʿ ve tems̱īl olunmuşdur ʿalā yed-i eżʿafi’l-ʿibād Viḳṭor eṭ-Ṭallie, Fī Medīnet-i Paris: Bi-dāri’t-ṭıbāʿati dunde dupe, Sene 1826 ʿĪsevī Muṭābıḳu seneti 1241 Hicrī” bilgileri bulunmaktadır. Kapağın akabinde gelen sayfanın numarası 4 olup bu sayfada “Güzīde Mes̱eller” başlığı ve “Evvelki Mis̱āl” alt başlığı ile mesellerin anlatımı başlamıştır. Mesellerin anlatımı 99. sayfada tamamlandığında “temme’l-kitāb bi-ʿavni’l-meliki’l-vehhāb” ifadesi yer almıştır. 100-107 sayfaları arasında alfabetik fihrist, 109-113 sayfaları arasında ilk meselin satır altı Latin harfleriyle Türkçe telaffuzu ve altında Fransızca tercümesi ve 114-116 sayfaları arasında hata-savab cetveli bulunmaktadır.

Eser; 95 sayfa, 17 satır ve tek sütundan oluşmaktadır. Her sayfaya numara verilmiş olup reddadesi bulunmamaktadır. Matbu olan eserin yazı şekli, nesihe benzemekle beraber metni iki yana yaslamak mecburiyetinden dolayı bazı harfler, yayvanlaşmıştır. Bu da yazının ta‘lîk hatta benzeyen özellikler taşımasına sebep olmuştur.`,
  "tdk-a306": `Müellifi Belirsiz, Letâ’ifü’l-Hikâyât, Türk Dil Kurumu Kütüphanesi (Ankara), Yazma A/306
Kütüphane kataloğunda “Letâ’ifü’l-Hikâyât” adıyla kayıtlıdır. Katalogda verilen bilgilere göre 208x152-160x100 mm. ölçülerinde ve kedi filigranlıdır. Sırtı siyah meşin olup kapakları siyah pandizot bez ile kaplanmıştır. Katalogda eserin Kâtip Çelebi’ye ait olduğunun söylendiği, fakat bu bilginin doğruluğunun tespit edilemediği ifade edilmiştir.

Varaklarına numara verilen eser, 113 varaktan oluşmaktadır. Her varak, 15 satır ve tek sütunlu olup reddadelidir. Yaprakları nohudi renklidir. Eserin başlığı ve hikâyelerin başı kırmızı mürekkeple diğer yazılar siyah mürekkeple yazılmıştır. Bazı başlık yerleri muhtemelen sonradan doldurulmak üzere boş bırakılmış ve tamamlanmamıştır. Eserin istinsah tarihi ve müstensihi hakkında bilgi bulunmamaktadır. Eser, okunaklı bir rik‘a hat ile yazılmıştır. Eser, rik‘a hat ile yazıldığından ve bu yazının en erken örneklerinin 18. yüzyılın ikinci yarısından sonra görülmesinden ve aslında rik‘a yazının daha çok 19. yüzyılda kullanılmasından hareketle eserin istinsah tarihinin de bu tarihten sonra olduğu tahmin edilmektedir.

http://katalog.tdk.gov.tr/details?id=92727&materialType=YE (Erişim tarihi: 18.10.2023)

Eserin müstensihi hakkında bilgi yoktur; fakat eserin imla özellikleri müstensih hakkında bilgi vermektedir. Eser, okunaklı bir rik‘a hat ile yazılmış surettedir; fakat imla hatalarıyla dolu olduğunu söylemek yanlış olmaz. Nüshanın daha ilk yüzünde bile “ġarāʾib” yazılması gereken kelime “ḳarāʾib”, “ʿāḳil” yazılması gereken kelime “ʿāḳïl” yazılmıştır.

Nüshada sürekli ḫı (خ) ve ḥa (ح) harfleri, ḍat (ض) ve ẓı (ظ) harfleri birbirleriyle karıştırılmıştır. ṣad (ص) yerine ḍat (ض) veya çizgisi unutulduğu için ṭı (ط) harfi; Arapça ve Farsça kelimelerde gösterilmemesi gereken ünlü harfler, “ʿāḳïl” örneğinde olduğu gibi, mesela “lisān” kelimesi “lïsān” şeklinde okutucu harflerle yazılmıştır. Nüshada bazen kelime başında be (ب) ile ye (ﯾ) harfleri bazen dal (د) ve te (ت) harflerinin birbirinin yerine kullanılması ve bu durumun bazen Arapça Farsça kelimelerde de söz konusu olması, metnin okunmasının bir bulmaca çözümüne evrilmesine ve okuyanın aşağıdaki mısralarla Fuzûlî’yi çokça anmasına sebep olmuştur. Eserin imlasında bulunan hatalardan hareketle müstensihin medrese tahsili görmediği tahmin edilmektedir.

Kalem olsun eli ol kâtib-i bed-tahrîrün
Ki fesâd-ı rakamı sûrumuzu şûr eyler
Gâh bir harf sükûtıyla kılur nâsırı nâr
Gâh bir nokta kûsurıyla gözü kûr eyler (Kılınç, 2021: 185)`,
};

const nushaData = [
  {
    id: "bnf-453",
    etiket: "BnF Sup Turc 453",
    grup: "Ezop 1 / Kategori 1",
    kutuphane: "Fransa Milli Kütüphanesi (Paris)",
    raf: "SUP Turc 453",
    ozet:
      "Nüsha içinde Ezop hikayeleri 28a-44a varakları arasında yer alır. Eserin müellifi/müstensihi ve telif-istinsah tarihi belirtilmemiştir.",
    metin: `Fransa Milli Kütüphanesi’nin basılı kataloğunda 453 numarada kayıtlı nüsha, siyah bez ciltli, şemseli ve zencireklidir. Cildin iç ve dış ölçüleri dijitalleştirme sırasında cetvel kullanılmadığı için kesinleşmemiştir; formalar arasında yıpranmalar bulunmaktadır. Ia yüzünde Fransızca notlar ve “ber-tarik-i savaba ibka oluna” ifadesiyle birlikte “19 Avril 1882” tarihi yer alır.

Nüsha 64 varaktır ve içinde farklı eserler bulunur: 1b-25a arasında Kitab-ı Danisten lügat metni, 25b’de 16 beyitlik atasözleri şiiri, 26a boş, 26b-27a arasında hat meşkleri, 28a-44a arasında Ezop hikayeleri, 44b-50a boş, 50b-64b arasında ferman suretleri bulunur.

Ezop bölümü nüsha içindeki ikinci eserdir. 28a’da “Kartal ile tilkinün vakasıdır” başlığıyla başlar; dibace, mukaddime, besmele, hamdele, salvele ve hatime gibi bölümler yer almaz. 44a’da son meselden sonra üçgen biçimli üç nokta ve “mim” harfi yer alır. Eser 16 varak, tek sütun ve 25 satırdır; nesih hatla yazılmış, reddadesizdir ve tamamında siyah mürekkep kullanılmıştır.`,
    basSon:
      "Baş (28a): Ḳarṭal ile dilki dōst oldılar ve istediler ki bir yerde olalar ḳonşuluġla dōstluġı muḥkem etdiler imdi ḳarṭal bir yüksek aġaçdan yuva etdi. Son (44a): Mis̱āl oldur ki ʿāḳıbet kişi ḫūyundan kesilmeyüb ḫūyuyla cāʾib ü ḫāsir olduġın ḳomaz.",
  },
  {
    id: "rylands-152",
    etiket: "Rylands MS 152",
    grup: "Ezop 1 / Kategori 2",
    kutuphane: "John Rylands Kütüphanesi (Manchester)",
    raf: "Turkish MS 152",
    ozet: "Katalogda Hikayet-i Esepos adıyla kayıtlıdır; metinde sebeb-i telif vurgusu vardır.",
    metin: `Katalogda “Hikayet-i Esepos” adıyla kayıtlı bu nüsha, kırmızı sahtiyan deri ciltli, mıklepli ve 155x110 mm ölçülerindedir. İç kapakta “Turkish Tales” ve “2/6” notu, Ia’da çizimler ve “Michel Shaw” temellük izi, farklı yüzlerde Arap harfli çeşitli deneme notları bulunur. 2a-2b’nin aharsız yapısı sebebiyle mürekkep dağılmaları görülür.

Eser 1+64+3 varak, 9 satır düzeninde ve reddadelidir; varak numarası verilmemiştir. Metin 63b’de biter; 64b’de kurşun kalemle insan resmi, 65a-65b boş, 66a’da “dürud-ı muhabbet” notu, 66b’de silik temellük izi yer alır.

Metin nesih hatla siyah mürekkeple yazılmış; derkenarlarda Türkçe düzeltmeler, İngilizce-Fransızca notlar ve tarih kayıtları vardır. 1b-5a aralığında Ezop’un hayatı ve sebeb-i telif anlatılır. “Mesel” kelimesinin bu nüshada sıkça “mes’ele” biçiminde yazılması, istinsah pratiği ve okuyuş tercihleri açısından dikkat çekicidir.`,
    basSon:
      "Baş (1b): Esepos Kütahiyye sancaġına tābiʿ Amuriye-nām mevżiʿde ṭoġmuş-idi ve bir kimseniñ ḳulı idi ol ḳadar bed-çehre idi ki aña Esepos dediler. Son (63b): Bu aña mis̱āldir ki ʿāḳıbet kişiniñ eylik itdügi kişiden kendüye elem irişür. Sonudur, hitām etdim.",
  },
  {
    id: "bodleian-2109",
    etiket: "Bodleian MS 2109",
    grup: "Ezop 1 / Kategori 2",
    kutuphane: "Bodleian Kütüphanesi (Oxford)",
    raf: "Turkish MS 2109",
    ozet: "85 varaklık nüsha harekeli nesih ile yazılmıştır.",
    metin: `Bodleian Turkish MS 2109, “Hikayat-ı Esepos” adıyla kayıtlıdır. Nüsha yıpranmış kahverengi sahtiyan deri cilt içinde, taraklı şal biçimli ebru kapaklıdır. Ölçüler net tespit edilememiştir. Yapraklar nohudi, sarı, kırmızı ve yeşil tonlarındadır. Eser tek sütunlu 85 varak olup her varakta 7 satır bulunur.

Yazı harekeli nesihtir. Eser reddadelidir; ancak 18, 23, 26, 29, 33, 47, 54, 63 ve 81. varaklarda reddade eksiktir. Ia’da “17 Apr. 1752” tarihi ve 1a’da “Fabula Esopica” kaydı yer alır. 1b’de kırmızı mürekkeple başlık altında metin başlar; üstte “Tomas Vahan” mührü görülür.

Metinde hikaye sonu formülleri ve “hikaye/kıssa” gibi başlıklar sayfa rengine göre kırmızı, sarı, beyaz ve yeşil mürekkeple; ana metin siyah mürekkeple yazılmıştır. 1b-5a arasında Ezop’un hayatı ve sebeb-i telif yer alır; metin 85a’da “temmeti’l-hikayatü’l-garibe” ifadesiyle tamamlanır.`,
    basSon:
      "Baş (1b): Esepos Kütahiyye sancaġına tābiʿ Amuriye-nām mevżiʿde ṭoġmuş idi ve bir kimseniñ ḳulı idi ol ḳadar bed-çehre idi ki aña Esepos dediler. Son (85a): Bu aña mis̱āldir ki ʿāḳıbet kişi ḫūyundan kesilmeyüb ḫūyıyla ḫāʾib ü ḫāsir olduġın ḳomaz.",
  },
  {
    id: "bodleian-303",
    etiket: "Bodleian Turk 30/3",
    grup: "Ezop 1 / Kategori 2",
    kutuphane: "Bodleian Kütüphanesi (Oxford)",
    raf: "MS Ind. Inst. Turk 30/3",
    ozet: "Ezop metni 66b-150b varakları arasındadır.",
    metin: `Bodleian MS Ind. Inst. Turk 30/3, katalogda “Hikayat-ı Esepos” olarak kayıtlıdır. Nüsha içindeki üçüncü eser olarak 66b-150b varakları arasında yer alır. Cilt kahverengi sahtiyan deridir; köşeler yıpranmıştır. İç kapakta kırmızı-yeşil-sarı taraklı şal biçimli ebru, mıklep ve sertap vardır. Yapraklar nohudidir.

Eser 7 satır düzeninde nesih hatla yazılmış ve reddadelidir. Metinde doğru okumayı yönlendiren işaretlemeler, “kef” harfinin nazal n için noktalandırılması, tamlama okunuşlarını belirten hareke uygulamaları dikkat çeker. Başlıklar ve hikaye sonu formüllerindeki belirli unsurlar yeşil mürekkeple, ana metin siyahla yazılmıştır.

Temmet kaydı “evail-i Ramazan 1102” ifadesiyle h.1102/m.1691 tamamlanmasını gösterir. Ezop metninden sonra “Türkçe Tekellümat” metni ve çeşitli müsvedde notları bulunur; bazı yapraklar boş bırakılmış, nüsha kısmen yarım kalmış izlenimi vermektedir.`,
    basSon:
      "Baş (66b): Esepos Kütahiyye sancaġına tābiʿ Amuriye-nām mevżiʿde ṭoġmışdı ve bir kimseniñ ḳulı idi ol ḳadar bed-çehre idi ki aña Esepos dediler. Son (150b): Bu aña mis̱āldir ki ʿāḳıbet kişi ḫūyundan kesilmeyüb ḫūyıyla ḫāʾib ü ḫāsir olduġun ḳomaz.",
  },
  {
    id: "bnf-676",
    etiket: "BnF Sup Turc 676",
    grup: "Ezop 1 / Kategori 2",
    kutuphane: "Fransa Milli Kütüphanesi (Paris)",
    raf: "SUP Turc 676",
    ozet: "86 varaktan oluşur, telif ve müstensih bilgisi verilmez.",
    metin: `BnF SUP Turc 676, katalogda Arap harfleriyle “Hikayat-ı Esepos” adıyla kayıtlıdır. Katalog ölçüsü 150x105 mm verilmekle birlikte dijital görüntülerde cetvel olmadığı için teyit edilememiştir. Kapak görselleri bulunmadığından cilt bilgisi sınırlıdır; kenar izlerinden siyah sahtiyan deri anlaşıldığı belirtilir.

Nüsha 86 varaktır; 1a’dan itibaren numaralandırılmıştır. 1b’de kırmızı mürekkeple başlık, üstte Arap harfli kayıtlar yer alır. Eser 7 satır, tek sütun ve reddadeli düzendedir. “Hikaye/vaḳʿa/kıssa” başlıkları, hikaye sonu kalıplarının bazı bölümleri ve “imdi” gibi vurgular kırmızı-yeşil mürekkeple; ana metin siyah mürekkeple yazılmıştır.

Yapraklar nohudidir; derkenarlarda rutubet kaynaklı sararma ve yıpranmalar vardır. 58-59 varaklarında şiraze dağılması gözlenir. 86a’da metin sonrasında yeşil mürekkeple üç “temme” kaydı bulunur. Telif/istinsah tarihi ve müellif-müstensih adı verilmemiştir.`,
    basSon:
      "Baş (1b): Esepos Kütahiyye sancaġına tābiʿ Amuriye-nām mevżiʿde ṭoġmış idi ve bir kimseniñ ḳulı idi ol ḳadar bed-çehre idi ki aña Esepos didiler. Son (86a): Bu aña mis̱āldir ki ʿāḳıbet kişi ḫūyundan kesilmeyüb ḫūyıyla ḫāʾib ü ḫāsir olduġun ḳomaz.",
  },
  {
    id: "leiden-1289",
    etiket: "Leiden Cod. Or. 1289",
    grup: "Ezop 1 / Kategori 2",
    kutuphane: "Leiden Üniversitesi Kütüphanesi",
    raf: "UB Cod. Or. 1289",
    ozet: "Masal metniyle sözlük malzemesini bir arada taşır.",
    metin: `Leiden UB Cod. Or. 1289, “Hikayat-ı Esepos” adıyla kayıtlıdır ve katalogda Johannes Heyman ilişkili kayıtlar içinde anılır. Ölçüler dijital görüntülerden kesinleşmemiştir. Cilt sırtı kiremit rengi sahtiyan deridir; kapaklar aynı renk mukavvadır. 1a boştur.

Nüshada yan yana iki farklı metin bulunur: 2a’dan başlayan Ezop masalları ve 1b’deki sözlük katmanı. Sözlükte Arapça/Farsça/Türkçe kelimelerin Arap harfli yazımı, Latin harfli Türkçe transkripsiyonu ve İtalyanca karşılıkları verilmiştir. Sıralama her sayfada düzenli değildir.

Eser 93 varak, 9 satır, tek sütun ve reddadesizdir; varak numarası yoktur. Başlık ve hikaye sonu kalıplarının belirli kısımları kırmızı, diğer bölümler siyah mürekkeple yazılmıştır. Sonunda kırmızı mürekkeple temmet kaydı bulunur; metnin 19-28 Mart 1703 aralığında İzmir’de tamamlandığı anlaşılır.`,
    basSon:
      "Baş (2a): Esepos Kütahiyye sancaġına tābiʿ Amuriye-nām mevżiʿde ṭoġmışdı ve bir kimseniñ ḳulı idi ol ḳadar bed-çehre idi ki aña Esepos didiler. Son (92a): Bu aña tems̱ïldir ki ʿāḳıbet kişi ḫūyundan kesilmeyüb ḫūyı ile ḫāʾib ü ḫāsir oldıġın ḳomaz.",
  },
  {
    id: "rylands-135",
    etiket: "Rylands MS 135",
    grup: "Ezop 2 / Kategori 3",
    kutuphane: "John Rylands Kütüphanesi (Manchester)",
    raf: "Turkish MS 135",
    ozet: "Receuil de fables turques adıyla kayıtlıdır.",
    metin: `Rylands MS 135, katalogda “Receuil de fables turques” adıyla kayıtlıdır. Bordo sahtiyan sırtlı, mukavva üzerine ebru kapaklı cildi yıpranmıştır. 54 varak, 17 satır ve tek sütun düzenindedir; metin nesih yazıyla kaleme alınmıştır.

Mesel başlıkları ve hikaye sonu hisse cümlelerinden önce gelen alt başlıklar kırmızı mürekkeple yazılmıştır. Sayfalar açık krem renktedir; metin kırmızı cetvelli alan içinde ilerler, bazı satırlar cetvel dışına taşsa da derkenar notu değildir. Eser reddadelidir, yalnızca 51b’de reddade eksiktir.

Nüshada dibace/mukaddime bulunmaz; 1b’de “Dilkü ile Erkecin Meselidir” başlığıyla doğrudan hikayeye geçilir. Son kısımdaki “temmetü’l-kitab...” ifadesi metnin h.1174/m.1760’ta tamamlandığını gösterir.`,
    basSon:
      "Baş (1b): Dilkü ile erkec hem-rāh olub maʿan gezer iken bir gün ġāyet teşne olub bir yerde içecek ṣu bulmayıcaḳ nā-çārdan bir ḳuyunuñ içine vülūc iḳtiżā eyledi. Son (54a): Mes̱el: ʿĀḳil olan ādem ṭāliʿine aṣlā nāliş ü sitem ü şühūm itmemek gerekdir deyü naṣīḥat ider.",
  },
  {
    id: "leiden-1589",
    etiket: "Leiden Cod. Or. 1589",
    grup: "Ezop 2 / Kategori 3",
    kutuphane: "Leiden Üniversitesi Kütüphanesi",
    raf: "UB Cod. Or. 1589",
    ozet: "Kitab-i Emsal adıyla geçen nüsha 54 varaktır.",
    metin: `Leiden Cod. Or. 1589, katalogda “Emsal” adıyla kayıtlıdır. 226x165 mm ölçülerindeki cildin sırtı sütlü kahverengi sahtiyandır; kapakta ebru-mukavva üstüne deri yapıştırma tekniği görülür, mıklep yoktur. Ia’da Latin harfli notlar, 1a’da “Kitab-ı Emsal...” kaydı ve silik mühür yer alır.

Bu kayıtlardan eserin Cardonne tarafından Trablusşam’da h.1159’da yazıldığı; 54a’daki ferağ kaydından ise 1 Muharrem 1159 / 24 Ocak 1746’da tamamlandığı anlaşılır. Eser cilt içindeki iki metinden ilkidir; ikinci metin katalogda Sefaret-name-i Fransa olarak geçer.

Ana metin 54 varak, 16 satır, tek sütun ve reddadesizdir. Başlıklar ile “meselin remzi/ma’nası/işareti” gibi ifadeler kırmızı, ana gövde siyah mürekkeple yazılmıştır. Derkenarlarda kırmızı mürekkeple masal sıra numaraları bulunur.`,
    basSon:
      "Baş (1b): Dilkü ile erkec hem-rāh olub maʿan gezeriken bir gün ġāyet teşne olub bir yerde içecek ṣu bulmayıcaḳ nā-çārdan bir ḳuyu içine vülūc itmek iḳtiżā eyledi. Son (54a): Mes̱el: ʿĀḳil olan ādem ṭāliʿine aṣlā nāliş ü sitem ü sühūn itmemek gerekdir deyü naṣīḥat ider.",
  },
  {
    id: "british-7332",
    etiket: "British Lib. OR 7332",
    grup: "Ezop 3 / Kategori 4",
    kutuphane: "British Library (Londra)",
    raf: "OR 7332",
    ozet: "Guzide Meseller başlığıyla bilinen 51 varaklık nüshadır.",
    metin: `British Library OR 7332, “Güzide Meseller” geleneğinin önemli bir tanığıdır. Nüsha 188x122 mm civarında ölçülere sahip, kahverengi sahtiyan sırtlı ve ebru kapaklıdır; ciltte yıpranmalar mevcuttur. İç kapakta E. J. W. Gibb’in British Museum’a bağışına dair Latince kayıt bulunur.

1b’de kırmızı mürekkeple başlıkla metin başlar. Eser 51 varak, 15 satır, tek sütun düzenindedir; bazı varaklar reddadeli olsa da çoğunda reddade yoktur. Başlıklar, “misal” ibareleri ve kimi vurgu kelimeleri kırmızı; ana metin siyah mürekkeple yazılmıştır.

Son hikaye 51b’de tamamlanır. Nüshada açık bir ferağ kaydı veya net bir tarih bulunmaz; ancak metnin yapısı ve varyantları üzerine modern neşir çalışması mevcuttur.`,
    basSon:
      "Baş (1b): Ziyāde kāmil ve oḳumuş ve ʿilm ṣaḥibi Demustenus adlu bir ādem var idi. İttifāḳ bir pādişāh-ı ʿaẓīm Feylefos-nām ʿasker ile ol şehr üzerine gelmege ḳaṣd etdi. Son (51b): Bu aña miŝāldir ki ḳaçan Allāh teʿālā bir kimseyi sever her maṣlaḥatı ve muṣïbeti daḫi tebdïl ider meŝelleriñ āḫiri budur Allāha şükr.",
  },
  {
    id: "gottingen-94",
    etiket: "Göttingen Cod. Ms Asch 94",
    grup: "Ezop 3 / Kategori 4",
    kutuphane: "Göttingen Üniversitesi Kütüphanesi",
    raf: "Cod. Ms Asch 94",
    ozet: "Masallar 5b-63b arasında, 11 satır tek sütunda yer alır.",
    metin: `Göttingen Cod. Ms Asch 94, katalogda “Güzide Meseller” olarak kayıtlıdır; 140x96 mm ölçülerindedir. Kahverengi sahtiyan cildin köşeleri yıpranmıştır. İç kapakta boş varaklar, Almanca-Latince açıklama notları ve hicri 1191 tarihine işaret eden kayıtlar yer alır.

5b’de kırmızı mürekkeple başlıkla başlayan metin 63b’de tamamlanır. Eser 11 satır, tek sütun ve reddadeli düzendedir; başlıklar, “bu ana misaldir ki” ibaresinin belirli kısımları ve bazı vurgu kelimeleri kırmızı mürekkeple yazılmıştır. Ana metin siyah mürekkeple, temiz nesih hatla kaleme alınmıştır.

Sonraki varaklarda Arapça dua müsveddeleri, Türkçe mektup parçaları ve çok sayıda boş yaprak bulunur. Bu ek katmanlar nüshanın sadece okuma değil aynı zamanda not alma pratiği içinde de kullanıldığını düşündürür.`,
    basSon:
      "Baş (5b): Ziyāde kāmil ve oḳumuş ve ʿilm ṣaḥibi Demustenus adlu bir ādem var idi. İttifāḳ bir pādişāh-ı ʿaẓīm Feylesūf-nām ʿaskeriyle ol şehr üzerine gelmege ḳaṣd etdi. Son (63b): Bu aña miŝāldir ki ḳaçan Allāh teʿālā bir kimseyi sever her maṣlaḥatı ve muṣïbeti daḫi tebdïl ider meŝelleriñ āḫiri budur.",
  },
  {
    id: "viguier",
    etiket: "Manuscrit de Viguier",
    grup: "Ezop 3 / Kategori 4",
    kutuphane: "Numinard (Quebec)",
    raf: "Ozel koleksiyon",
    ozet: "175 sayfalık nüsha 1721 tarihli taslakla ilişkilendirilir.",
    metin: `Manuscrit de Viguier, Quebec’te Numinard koleksiyonunda bulunan ve 175 sayfadan oluşan bir nüshadır. Başlığı “Güzide Meseller”dir. Cilt koyu kahverengi sahtiyan sırtlı, mavi battal ebru kapaklıdır; ilk yapraklarda boş sayfalar ve Fransızca tanıtım notu bulunur. Bu not metnin 1721’de İstanbul’da yazıldığı bilgisini verir.

1. ve 2. sayfalar cetvelli, diğer sayfalar çerçeveli düzendedir. Serlevha, mihrabiye ve kırmızı mürekkepli başlık unsurları bulunur. Eser nesih hatla, 9 satır tek sütun ve reddadeli olarak yazılmıştır. Derkenar notları; ekleme, çıkarma ve düzeltme müdahaleleri içerir.

175. sayfada metin tamamlanır; sonrasında boş yaprak ve İngilizce vakıf-istishap kaydı görülür. Nüsha fiziksel olarak yıpranmış olsa da, özellikle Letellier neşriyle karşılaştırmada sunduğu derkenar düzeltmeleri sayesinde aktarım tarihi bakımından çok değerli bir çalışma tanığıdır.`,
    basSon:
      "Baş (1): Ziyāde kāmil ve oḳumuş ve ʿilm ṣaḥibi Demustenus adlu bir ādem var idi. İttifāḳ bir pādişāh-ı ʿaẓīm Filipos-nām ʿaskeriyle ol şehr üzerine gelmege ḳaṣd etdi. Son (175): Bu aña miŝāldir ki aña miŝāldir ki ḳaçan Allāh teʿālā bir kimesneyi sever her maṣlaḥatı daḫi tebdïl ider meŝelleriñ āḫiri budur.",
  },
  {
    id: "uppsala-42",
    etiket: "Uppsala Uni. Bj. 42",
    grup: "Ezop 3 / Kategori 4",
    kutuphane: "Uppsala Üniversitesi Kütüphanesi",
    raf: "Bj. 42",
    ozet: "84 varaklık ve mıklepli cilt yapısındaki nüshadır.",
    metin: `Uppsala Bj. 42, “Güzide Meseller” adıyla kataloglanır ve 231x159 mm ölçülerindedir. Cilt açık kahverengi sahtiyan deriden, mıklepli ve sertaplıdır; kapak dışında mavi ebru kağıt kullanılmıştır. İç kapakta eserin 4 Haziran 1776’da İstanbul’dan satın alındığına dair Fransızca not bulunur.

1b-2a yüzleri yeşile yakın altın renkli cetvellerle düzenlenmiştir. 1b’de kırmızı başlıklı serlevha ile metin başlar. Eser 84 varak, 9 satır, tek sütun ve reddadeli olarak yazılmıştır. Hikaye başlıkları ve hikaye sonu hisseyi haber veren kalıplar kırmızı, ana metin siyah mürekkeple kaleme alınmıştır.

84b sonundaki ferağ kaydı, metnin Hafız Muhammed Emin tarafından h.1189/m.1775-1776 döneminde istinsah edildiğini gösterir. Bu bilgi nüshanın tarihsel konumunu netleştirir.`,
    basSon:
      "Baş (1b): Ziyāde kāmil ve oḳumuş ve ʿilm ṣaḥibi Demustenus adlu bir ādem var idi. İttifāḳ bir pādişāh-ı ʿaẓīm Feylesūf-nām ʿaskeriyle ol şehr üzerine gelmege ḳaṣd etdi. Son (84a-84b): Bu aña miŝāldir ki ḳaçan Allāh teʿālā bir kimesneyi sever her maṣlaḥatı ve muṣïbeti daḫi tebdïl ider meŝelleriñ āḫiri budur.",
  },
  {
    id: "letellier-1826",
    etiket: "L. Victor Letellier",
    grup: "Ezop 3 / Kategori 5",
    kutuphane: "Paris baskısı",
    raf: "Choix de fables (1826)",
    ozet: "Matbu eser hem Fransızca hem Türkçe bölümlerle yayımlanmıştır.",
    metin: `Victor Letellier’in 1826 Paris baskısı, matbu Ezop geleneğinin Türkçe-Fransızca çift yönlü en kapsamlı örneklerinden biridir. Sol kapaktan açılan Fransızca bölümde meseller, alfabetik fihrist, Türkçe-Fransızca sözlük ve şerh niteliğinde çözümleme bölümleri yer alır.

Sağ kapaktan açılan Türkçe bölümde “Türk Dilinde Güzide Meseller” başlığı altında metin başlar; anlatı 99. sayfada “temme’l-kitab...” ifadesiyle tamamlanır. Bunu alfabetik fihrist, satır altı telaffuz-tercüme sayfaları ve hata-savab cetveli izler.

Eser 95 sayfa, 17 satır, tek sütun düzenindedir. Matbu nitelik nedeniyle harf formu yer yer yayvanlaşır; bu özellikler yazının nesih ile ta‘lik arası bir görünüme yaklaşmasına yol açar.`,
    basSon:
      "Baş (4): Ziyāde kāmil ve oḳumuş ve ʿilm ṣaḥibi Demustenus adlu bir ādem Atina’da var idi. İttifāḳ bir pādişāh-ı ʿaẓīm Filipus-nām ʿaskeriyle ol şehr üzerine gelmege ḳaṣd itdi. Son (99): Bu mes̱elden fāʾide budur ki niçe kimse çoḳ fāʾideye ṭamaʿ itmekle aṣl-ı mālını bitürür her ḥālde ḳanāʿat evlādır.",
  },
  {
    id: "tdk-a306",
    etiket: "TDK A 306",
    grup: "Ezop 4 / Kategori 6",
    kutuphane: "Türk Dil Kurumu Kütüphanesi (Ankara)",
    raf: "Yazma A/306",
    ozet: "Letaifü'l-Hikayat adıyla kayıtlı, 113 varaklık rik'a hatlı nüshadır.",
    metin: `TDK A/306, “Letaifü’l-Hikayat” adıyla kayıtlıdır. Katalog verisine göre 208x152-160x100 mm ölçülerinde, kedi filigranlı; siyah meşin sırtlı ve siyah pandizot kapaklıdır. Eserin Kâtip Çelebi’ye ait olduğu yönündeki kayıt kesinleşmemiştir.

Nüsha 113 varak, 15 satır, tek sütun ve reddadeli düzendedir. Yapraklar nohudi renktedir; başlık ve hikaye başları kırmızı, ana metin siyah mürekkeple yazılmıştır. Bazı başlıkların sonradan doldurulmak üzere boş bırakıldığı görülür. İstinsah tarihi ve müstensih adı yoktur.

Metin rik‘a hatla yazıldığı için geç dönem istinsah ihtimali güçlenir. Yazımda yoğun imla dalgalanmaları vardır: harf karışmaları, yanlış okutucu harf kullanımları ve Arapça-Farsça kelimelerde sık bozulmalar görülür. Bu özellikler, nüshayı filolojik ve paleografik açıdan ayrıca önemli kılar.`,
    basSon:
      "Baş/Son kaydı nüshada ayrıca verilmez; tanıtım metni ağırlıkla istinsah, imla ve paleografik özellikler üzerinden ilerler.",
  },
];

nushaData.forEach((item) => {
  if (fullTavsifById[item.id]) {
    item.metin = fullTavsifById[item.id];
  }
});

const matrixBody = document.getElementById("nushaMatrixBody");
const detailPanel = document.getElementById("nushaDetailPanel");
const detailEmpty = document.getElementById("nushaDetailEmpty");

if (matrixBody && detailPanel && detailEmpty) {
  const matrixColumns = [
    ["bnf-453"],
    ["rylands-152", "bodleian-2109", "bodleian-303", "bnf-676", "leiden-1289"],
    ["rylands-135", "leiden-1589"],
    ["british-7332", "gottingen-94", "viguier", "uppsala-42"],
    ["letellier-1826"],
    ["tdk-a306"],
  ];

  const maxRows = Math.max(...matrixColumns.map((col) => col.length));

  const getNusha = (id) => nushaData.find((item) => item.id === id);

  const openDetail = (id) => {
    const nusha = getNusha(id);
    if (!nusha) return;

    detailEmpty.hidden = true;
    detailPanel.hidden = false;
    detailPanel.innerHTML = `
      <div class="nusha-detail-head">
        <span class="nusha-chip">${nusha.grup}</span>
        <h3>${nusha.etiket}</h3>
      </div>
      <p><strong>Kütüphane:</strong> ${nusha.kutuphane}</p>
      <p><strong>Raf numarası:</strong> ${nusha.raf}</p>
      <div class="nusha-detail-full">
        <div class="nusha-tavsif-text">${nusha.metin}</div>
        <p><strong>Baş/Son bilgisi:</strong> ${nusha.basSon}</p>
      </div>
    `;

    matrixBody.querySelectorAll(".nusha-entry.is-active").forEach((btn) => {
      btn.classList.remove("is-active");
    });
    const activeButton = matrixBody.querySelector(`[data-id="${id}"]`);
    if (activeButton) activeButton.classList.add("is-active");

    detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  for (let row = 0; row < maxRows; row += 1) {
    const tr = document.createElement("tr");
    matrixColumns.forEach((column) => {
      const td = document.createElement("td");
      const id = column[row];
      if (id) {
        const nusha = getNusha(id);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "nusha-entry";
        button.dataset.id = id;
        button.textContent = nusha ? nusha.etiket : "";
        button.addEventListener("click", () => openDetail(id));
        td.appendChild(button);
      } else {
        td.className = "nusha-empty-cell";
        td.textContent = " ";
      }
      tr.appendChild(td);
    });
    matrixBody.appendChild(tr);
  }
}
