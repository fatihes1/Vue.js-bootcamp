# Bölüm04 : Vuex 4 ile State Managment, Neden Vuex Kullanılır? Persistent State Nedir?

## :clipboard: Notlar 

***Bu kısımdaki notları pekiştirmek için `00_vuex_intro` dizininde bulunan kodlara göz atabilirsiniz.***

- Vue ile proje oluştururken `vue create PROJECT_NAME` komutunda sonra bir dizi opsiyon karşımıza geliyordu. (2. Bölümde değinmiştik.) Bu opsiyonları manuel olarak seçerken `Vuex` seçilmesi durumunda proje klasör yapısı buna uygun şekilde oluşturulacaktır.

- **Vuex** neden kullanılır? Uygulama seviyesinde  bütün sayfalarla component bilgilerinin paylaşılması istenilen durumlarda kullanılabilir. Vue3 dokümanında `documents -> ecosystem -> vuex` üzerinden incelenebilir. Kurulumu için komut ekranında (terminal) `npm install vuex@next --save` komutu kullanılmalıdır.

- Vuex **global** bir obje üzerinde işlemler yapar. Bu yüzden `src` dizini altında `store.js` adında bir dosya oluştururuz. Bu dosya içerisinde bulunan bilgileri `state` olarak adlandırıyoruz. 

- Bu dosyayı `main.js` dosyası içerisinde aşağıdaki gibi projeye dahil ederiz:
```
import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";

const app = createApp(App)
// Store dosyasını uygulama ile bağlanması (vuex)
app.use(store);
app.mount('#app')
```

- Bu işlemden sonra bir component içerisinde store içerisinde bulunan veriye ulaşmak için `console.log(this.$store)` örnekte olduğu gibi `this` anahtar kelimesi  ve `$` sembolü bir arada kullanılır. (Plugin olarak geldiği için)

- Yukarıda console ifadesi `result` objesi olarak dönecektir. Bu yüzden spesifik bir veriye erişmek için `this.$store.state.person` şeklinde kullanmalıyız. Eğer store üzerinde bulunan bir veriyi `<template>` tagleri arasında göstermek istiyorsak `this` anahtar kelimesi kullanılmaz.

- Bir butona tıklandığında store içerisinde bulunan bir veriyi (bu örnek için `fullName` değeri olsun.) değiştirmek istersek ilk olarak butona `@click="updateName"` ataması yapılır ve sonrası `<script>` tagleri içerisinde method tanımladığımız alanda `updateName` isimli bir işlev tanımlarız. Bu işlevin gövdesinde ise `this.$store.state.fullName = this.inputName` buradaki `inputName` değeri `data()` içerisinde tanımlı olan ve butonun içinde olduğu form gruptaki input alanında `v-model` ile bağlanan değerdir.

- Bu şekilde elbette güncellenebilir ancak bu doğru bir yaklaşım değildir. Belirli bir standart elde etmek ve belli başlı bilgileri filtrelemek için `state` değerlerini direkt olarak kullanmak yerinme `getter` ile kullanmak önemlidir.

- Örneğin `store.js` içerisinde tahta ile yapılan mobilyaları getirmek için bir `getter ` tanımlamak için:
```
getters: {
	_woodItems : state => state.itemList.filter(i => i.type == "mobikya),
}
```
tanımlaması yapılabilir.

- `getter` değeri de tanımladı şimdi bunu bir component içerisinde göstermek istiyoruz. `<template>` tagleri arasında bir for loop ile `$store.getters._woodItems` yazılabilir ancak bu biraz garip duracaktır. Bu işlem yerine component'in `<script>` tagleri arasında bir `computed` tanımlaması yapılabilir.
```
computed: {
	mobilyalar() {
		return this.$store.getters_woodItems
	},
}
```
şeklinde tanımlayarak `<tenplate>` içerisinde `mobilyalar` değişkeni ile kullanabiliriz.

- Ancak zaten veri getiren bir işlevi tekrar bir `getters` ile sarmak anlamsız olacaktır. Bunun yerine **vuex** tarafından sunulan `mapGetters` kullanılabilir. Projeye dahil etmek için `import {mapGetters} from  "vuex";` söz dizimi `<script>` tagleri içerisine yazılır. Aynı `getters` tanımlamasında olduğu gibi `computed ` içerisinde kullanılır. Belirgin olması açısından `store.js` içerisinde `getter` değişken isimlerini alt çizgi (`_`) ile başlatabiliriz.
```
computed: {
	...mapGetters({
		woodItems : "_woordItems",
	})
}
```
- Buradaki kullanılan 3 nokta (...) `spread syntax` olarak adlandırılır.

- **Vuex** yani kaynak kodlarda bulunan `store.js` sayesinde component'ler arası iletişimde kullanılan `props` ve  `emits`'e olan bağımlılık azalmıştır.

- `store.js` dosyası içerisinde `mutations` tanımlayarak anlık olarak güncelleme (silme/ekleme) sağlar. Peki nasıl kullanılır?
```
mutations: {
	newItem(state, item) {
	state.itemList.push(item);
	}
},
```
- Bu işlemden sonra oluşturulan `mutation`'ın çağrılması gereken component içerisinde tanımlı olan methotta `this.$store.commit("newItem",eklenecek_data_objecesi)` söz dizimini kullanarak çalışır.

- `mutation` veritabanı işlemlerinde gecikme olması durumunda sorun çıkarabilir. Bu yüzden aynı görevi yapan `actions` kullanılabilir. `mutation` ile aynıdır tek fark ise `actions`'un asenkron olmasıdır.

```
// Store.js içerisinde;
actions: {
	newItem({ commit }, item) {
		console.log("item :>> ", item);
	setTimeout(() => {
		commit("newItem", item);
	  // 1 sn. bekledikten sonra mutation içerisinde tanınmlı işlev çağrılır.
	}, 1000);
	}
},
```
ve 
```
// Kullanılacak component'in tanımlı olan methodu içerisinde
const  userData  = {id:  new  Date().getTime(), title:  "Raf"+new  Date().getTime(), type:  "mobilya"};

// dispatch asenkron (actions için) olur ve setTimeout gibi bekleme işlevi oluşturulabilir
this.$store.dispatch("newItem", userData);
```
şeklinde kullanılır.

<hr>

***Bu kısımdaki notları pekiştirmek için `01_vuex_modules` dizininde bulunan kodlara göz atabilirsiniz.***

- Vuexi projeye (daha önceden oluşturulmuş) dahil etmek için `npm install vuex@next --save` kullanılır.

- `src` dizini altında `store` adında bir klasör oluşturulur ve içerisine `index.js` dosyası tanımlanır. `index.js` dosyası içerisinde:
```
import  {  createStore  }  from  "vuex";
const store = createStore({
	state: {}
});

export default store;
```
şeklinde basitçe bir kod başlangıçta vuex'i projeye eklemek için yeterlidir. Bu işlemden sonra yukarıda da belirtildiği gibi `main.js` içerisinde `import  store  from  "./store";` ile dahil edilip sonrasında uygulama (app) ile bağlamak için `app.use(store);` kod satırı uygun yerde (createApp ile mount arasında) kullanılır.

- Store klasörü içerisinde **"modules"** adında bir klasör daha oluşturup içerisinde `contact.js` ve `taskmanager.` adında iki javaScript dosyası oluşturulur. Bu dosyalar içerisinde direkt olarak `export default` anahtar kelimesi ile bilgiler dışarıya sunulur (export edilir). 

- Bu iki dosya oluşturulduktan sonra `src/store/index.js` dosyasında oluşturulan iki dosya tanımlanmalıdır. İlke olarak `import` anahtar kelimesi ile dizinden import edilir. Örneğin `contact.js` dosyası için içeri aktarma işlemi `import  contact  from  "./modules/contact";` kod satırı ile yapılır.

- İçeri aktarılan bu iki dosya `store` değişkeni içerisinde `state` gibi oluşturulan yeni bir `modules` değeri içerisinde tutulur.

- Modules içerisinde bulunan `.js` dosyalarında aynı isimli işlevler ve veriler bulunabilir. Bu durumda karmaşa çıkarır. Bu durumun önüne geçmek için modules içerisinde bulunan `js` dosyalarının `export default` değerleri içerisine `namespaced : true,` eklemesi yapılır.

- Böylelikle, bu işlev ve bilgilere erişirken `index.js` dosyası içerisinde o modülün **register** olmuş isimlerini kullanırız. 

_**Kaynak kodları ve yorum satırlarını da inceleyebilirsiniz.**_
