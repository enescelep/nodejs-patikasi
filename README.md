# Ödev 1 - Node.JS Komut Satırı Kullanımı

Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

- π (PI) sayısı için Math nesnesini kullanınız. Bilgi için [tıklayınız](https://www.w3schools.com/js/js_math.asp)
- Konsol çıktısında Template String ${expression} yapısını kullanınız.
- Sonucu virgülden sonra 2 rakam gösterek gerçekleştiriniz. Bilgi için [tıklayınız](https://www.w3schools.com/jsref/jsref_tofixed.asp)

# Ödev 2 - Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

- Postları dizin içerisinde bulunan nesneler şeklinde oluşturalım.
- Post nesnesi şablonu {title: 'Post Başlık 1', detail: 'Post Detay 1'} olarak düşünülebilir.
- Promise ve Async - Await yöntemleri ile ayrı ayrı yapalım.



# Ödev 3 - Daire Modüler Dosyası

Daire alan : **circleArea** ve daire çevre : **circleCircumference** fonksiyonları içeren ve konsola sonuçları yazdıran **circle.js** dosyası oluşturunuz.

- module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
- require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
# Ödev 4 - FS File System Modülü
### Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
- employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
- Bu veriyi okuyalım. (READ)
- Bu veriyi güncelleyelim.
- Dosyayı silelim.

# Ödev 5 - Kendi Web Sunucumuzu yazalım.
#### Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.
- createServer metodunu kullanacağız.
- index, hakkimda ve iletisim sayfaları oluşturalım.
- Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
- port numarası olarak 5000'i kullanalım.

# Ödev 6 - Koa.js ile web sunucumuzu yazalım.
#### Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

- Koa paketini indirelim.
- index, hakkimda ve iletisim sayfaları oluşturalım.
- Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
- port numarası olarak 3000'i kullanalım.