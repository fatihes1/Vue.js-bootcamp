# Bölüm06 : Bookmark App

## :bookmark_tabs: Bookmark App Nedir?
Bookmark App kullanıcıların bulduğu faydalı URL'leri kategorize ederek paylaştığı. Diğer kullanıcıların ise eklenilen bookmark'ları görüp isterse beğenip sonrasında beğendiği bookmarkları görebildiği isterlerse bookmarked yapıp kendilerince düzenleyebildiği bir real-time web uygulamasıdır.

## :rocket: Projeyi aşağıdaki adımları izleyerek ayağa kaldırabilirsiniz:

- İlk olarak `git clone https://github.com/fatihes1/Vue.js-bootcamp.git` komut satırı ile tüm bootcamp dosyalarına yerel bilgisayarında bir clone olarak erişebilirsiniz.

- Daha sonrasında proje dizinine gelmek için `cd Section\ #06/social-like` komut satırını kullanınız.

- İlk olarak node modullerine ihtiyacımız olacağı için `npm install` veya `yarn install` komutunu girerek `npm`'in `package.json` dosyası içerisindeki gereklilikleri kurmasını bekleyiniz. 

- Aynı dizin içerisinde yeni bir komut satırında (terminal) `json-server --watch db.json` komutu ile Fake API sunucumuz olan `json-server`'ı ayağa kaldırınız. `json-server` 3000 portu üzerinden çalışmaya başlayacaktır.

- Aynı dizin içerisinde yeni bir komut satırında (terminal)  `cd server` komutu ile `server` dizinine giriniz. Burada tekrar  `npm install`  veya `yarn install` komutu ile gereklilikleri kurmanız gerekmektedir. Gereksinimlerin kurulmasından sonra `yarn start` veya `npm start` ile real-time için gerekli olan server'ı ayağa kaldırmanız gerekecektir.

- Son aşama olarak ilk açtığınız terminal ekranında (proje dizininde olan `social-like`)  `yarn serve` veya `npm run serve` komutu ile projeyi tamamen ayağa kaldırmış olursunuz. Proje 8080 PORT'u üzerinden sunulacaktır.

<hr>

## :framed_picture: Proje Görselleri
Projenin genel görünümü ve kullanıcılar tarafından oluşturulmuş bookmark'lar bu şekilde görünmektedir. Sol kısımdaki kategorilere tıklayarak filtreleme yapılmış şekilde görünür.
![bir](https://user-images.githubusercontent.com/54971670/147669729-569550a1-e128-48bb-976e-83538f43db38.PNG)

Uygulamaya giriş yapma sayfası aşağıda göründüğü gibidir.
![dort](https://user-images.githubusercontent.com/54971670/147669732-8ecdcbe8-ff10-457c-b489-08c01d494491.PNG)

Sağ üstte bulunan drop-down (açılır) menüde aşağıdaki gibi seçenekler sunulmaktadır.
![iki](https://user-images.githubusercontent.com/54971670/147669735-9e3acc40-07ee-4c47-ab45-4b8adb3d0ba5.PNG)

Sağ üstte yeni ekle dedikten sonra gelen ekran aşağıdaki gibidir. Bookmark adı, URL, kategori ve açıklama eklenebilir. Açıklama ilk görselde listenen bookmark'ların en sağında yer alan açıklama butonun üzerine gelindiğinde otomatik olarak görünmektedir.
![üc](https://user-images.githubusercontent.com/54971670/147669736-b3e8d7b8-b16a-4164-8420-bd03cd3682ce.PNG)
