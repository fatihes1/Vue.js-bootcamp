# Bölüm05 : Vue.js v3 ile Routing Yapımı, Vue-Router Kullanımı

## :clipboard: Notlar 
- Birden fazla sayfa içeren projelerde sayfalar arası geçiş için kullanılan paket **vue-router**'dır.

- Dokümanına `Vue3 -> document -> ecosystem -> Vue-router` üzerinden ulaşılabilir.

- Halihazırdaki bir projeye `npm install vue-router@4` ile indirilip, dahil edilir.

- `src` dizini altında `views` alt dizini oluşturulur ve bu dizin içerisinde sayfalar `Home.vue`, `About.vue`, `Details.vue` şeklinde oluşturulur.

- `src` dizini altında `router.js` dosyası oluşturulur ve içerisinde;
```
import { cretateRouter, createWebHashHistory } from "vue-router";
const routes = [
{
name: "HomePage",
path: "/",
// HomePage olarak tanımlanan route için Home.vue view dosyasının içeri aktarılması
component: () => import("@/views/Home")
},
{
name: "AboutPage",
path: "/hakkimda",
// AboutPage olarak tanımlanan route için About.vue view dosyasının içeri aktarılması
component: () => import("@/views/About")
},

];


// tanımlanan route'lar ve history değeri için değişkenin belirlenmesi ile router'ın oluşturulması
const router = createRouter({
routes,
history: createWebHashHistory()
});
// export keyword'ü ile dışarı aktarılması
export default router;
```

Şeklinde her view `routes` değişkeni içerisinde bir `name` değeri verilerek tanımlanır ve dışarı sunulur.

-  Dışarı aktarılan bu dosya `main.js` içerisinde `import  router  from  "./router";` kod satırı ile içeri aktarılır ve sonrasında `app.use(router);` söz dizimi ile uygulamaya bağlanır.

- `App.vue` (3 component'in de çağrıldığı parent component) içerisinde `<a>` taginin `href` özelliğine link atanabilir ancak bunun yerine `<router-link>` kullanılır. `App.vue` içerisinde bir yönlendirmeyi `<router-link  class="nav-link"  active-class="active"  to="/hakkimda">Hakkımda</router-link>` şeklinde atarız. Yönlendirmelere (**routes**) tanımlı olan component'lerin de görüntülenebilmesi için `<template>` tagleri içerisinde `<router-view></router-view>` söz dizimi kullanılmak zorundadır.

- `<router-link>` sayesinde sayfalar arası geçişte yükleme işlemi olmaz. Bu da sayfalar arası geçişi hızlı hale getirir.

- `<router-link>` tagleri normal HTML tagleri gibi class, style özellikleri alabilir.

- `router.js` dosyasında gelen `id` bilgisi ile yönlendirilme oluşması durumunda aşağıdaki gibi bir tanımlama yapılabilir:
```
{
name: "DetailPage",
path: "/detay/:userID",
// DetailPage olarak tanımlanan route için Details.vue view dosyasının içeri aktarılması
component: () => import("@/views/Details")
}
```

- `routes` içerisinde her yönlendirmeye `name` özelliği eklenme sebebi; bazı sayfalara girildiğinde sayfanın route değerini (PATH) yerine `name` özelliği ile kontrolünün daha kolay bir şekilde yapılabiliyor olmasıdır. (Örneğin kullanıcı sisteme giriş yapmasına rağmen `login` sayfasına girmeye çalışırsa kullanıcıyı ana sayfaya yönlendirmek için bu name özellikleri kullanılır.)
- `Home.vue` dosyasında (Home sayfasında) kullanıcıdan girdi alınan bir input alanı olsun ve kullanıcının buraya girdiği değer ile birlikte bu değeri `details` yönlendirmesi için parametre olacak şekilde yönlendirme yapalım.
-- İlk işlem şüphesiz ki input elementine `@keydown.enter="goDetail"` ataması yapıp sonrasında aynı vue dosyası içerisinde `<script>` tagleri arasında bulunan `methods` alanına `goDetail` adlı bir işlev tanımlamak olacaktır.
-- Bu işlevin içeriği şu şekilde olacaktır;
```
goToDetails(event) {
	this.$router.push({
	// yönlendirilecek sayfanın name değer,
	name: "DetailPage",
	params: {
		// parametre değeri olarak input alanından gelen event değerinden
		// input alanına yazılan değer alınır (v-model gibi)
		userID: event.target.value
		},
	});
}
```
- Eğer ki **axios** (HTTP istekleri için kullanılan paket), birçok yerde içeri aktarılıp kullanılıyorsa bunun yerine bir kere `main.js` içerisinde plugin (eklenti) gibi import edilebilir. Bunun için `main.js` içerisinde `import axios from "axios"` eklemesi yapılır ve `const app`ile değişkenin oluşturulduğu yer ile `app.mount` ile uygulamaya bağlandığı yer arasında `app.config.gloabalProperties.$appAxios = axios` ile uygulamaya eklenti olarak bağlanır.

- axios ile `POST`/ `GET` gibi sorgular atarken ger zaman URL değerini girmek yerine `src` dizini altında `utils` adında bir alt dizin oluşturulup sonrasında içerisine `appAxios.js` dosyası oluşturulur ve dosya içeriği;
```
import axios from "axios";
// axios ile istek atarken her seferinde uzun link girmek yerine appAxios oluşturuyoruz.
export const appAxios = axios.create({
	baseURL: "http://localhost:3000",
	withCredentials: false,
	headers: {
	tokenX: "myToken",
	"Content-Type": "application/json"
	}
});
```
şeklinde genel tanımlamalar belirtilebilir. Bu işlemden sonra ise `main.js` içerisindeki tanımlama artık `import  {  appAxios  }  from  "./utils/appAxios";` ile import edilir ve uygulamaya bağlama söz dizimi ise `app.config.globalProperties.$appAxios  =  appAxios;` şeklinde olması gerekir.

_**Kaynak kodları ve yorum satırlarını da inceleyebilirsiniz.**_
