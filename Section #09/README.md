# Bölüm09 : Asenkron Componentler, Suspense, Teleport, NameSpaced Componentler


## :clipboard: Notlar 
_**Burada belirtilen kısımdaki notları pekiştirmek için  `00-intro-to-suspense`  dizinine göz atabilirsiniz.**_

- `components` dizini altında `Todos.vue` ve `Users.vue` olmak üzere iki tane component bulunur.

- `jsonplaceholder.typicode.com` adresindeki fake data API sayesinde isteklerde bulunabiliriz. `Todos.vue` içerisinde bulunan `fetch` işlevi verileri çekmektedir.

- Başta hiç değerimiz yok ancak veri çekilecek ve sonrasında verilerimiz olacak bu yüzden bize reaktif bir nesne lazım. Bu işlem için `import {ref} from "vue"` ile ref içeri aktarılır ve `const todoList = ref([])` şeklinde boş bir dizi olacak şekilde ayarlanır. Sonrasında `fetch` işleminden gelen veriler `todoList.value = json` ifadesi ile gelen veriyi değişkene atamış oluruz.

- `Todos.vue` için yapılan işlemlerin aynısı `Users.vue` için de atılan isteği değiştirerek yapabiliriz.

- Uzun süren bir istek (verilerin getirilmesi uzun sürebilir) ve sonrasında render edilip yazdırılan uzun bir `HTML` yapısı olsa site büyük oranda yavaşlar.

- Component'lerin içeri aktarılma işlemleri `mount` (lifecyle-hooks) evresinde yapılır.

- Bu sorunun önüne geçmek için **suspense** kullanılabilir. `App.vue` içerisinde `<suspense></suspense>` tagleri açılır. Bu tagler arasındaki componentler içinde asenkron istek barındırır ve bu istekler cevap alıp çözüldükten sonra ekrana basılır. Aşağıdaki kod örneğinde ilk `if` sebebi herhangi bir sorunla karşılaşılması durumunda kullanılır. `#default` gelmesini istediğimiz (görünmesini) component'lerdir. `#fallback` ise component'in işlevini yapıp yüklenmesi sürerken görüntülenir:
```
<!-- eğer hata varsa (true ise) span tagleri arasında yazdırılır -->
<span v-if="err" class="error">{{ err }}</span>
<!-- hata olmaması durumunda ise default değerinbe sahip template yazdırılır -->
<suspense v-else>
	<template #default>
		<div>
			<Users />
			<hr />
			<Todos />
		</div>
	</template>
	<!-- default template yüklenene kadar fallback template çalışır. -->
	<template #fallback>
		<div>Loading...</div>
	</template>
</suspense>
```
- Eğer birden fazla component suspense içerisinde `#default` olarak bekleniyorsa yukarıdaki gibi bu component'ler bir `<div>` tagi ile sarılmalıdır.

<hr>

_**Burada belirtilen kısımdaki notları pekiştirmek için  `01-intro-to-teleport`  dizinine göz atabilirsiniz.**_

- Belirli bir lokasyonda (bölümde) bir içeriği göstermeyi ve bir component'in başka bir elementin CSS'inden etkilenmemesini istediğimiz durumlarda bir hedefe `HTML` basmak için kullanılan yapılardır.

- `index.html` içerisinde `id` değeri `app` olan div altına `modal-area` id değerine sahip yeni bir `<div>` oluşturalım. `App.vue` içerisinde, `<template>` taglerinin içinde aşağıdaki gibi düzenleme yaparsak artık içerik yeni belirtilen div içerisinde görünür:
```
<teleport to='#modal-area'>
	<h3>Teleport</h3>-
</teleport>
<teleport to='#modal-area'>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + Vite" />
</teleport>
```
<hr>

_**Burada belirtilen kısımdaki notları pekiştirmek için  `02-namespaced-component`  dizinine göz atabilirsiniz.**_

- NameSpaced component'ler, nokta notasyonu ile bir component kullanmak için oldukça kullanışlıdır.

- `components` içerisinde alt dizin olarak Form klasörü olduğunu ve içinde `Input, Label ve Select` vue dosyaları olduğunu düşünelim.

- Bir component içerisinde çok sayıda component içeri aktarmamız gerekiyorsa bu işlem için (bu örnek için form klasöründen ilerliyoruz); Form klasörünün altında `form-components.js` dosyası oluşturup sonrasında içeriğini aşağıdaki gibi düzenleyelim;
```
export { default as Input } from "./Forms/Input.vue";
export { default as Label } from "./Forms/Label.vue";
export { default as Select } from "./Forms/Select.vue";
``` 
- Daha sonra bu component'lerin kullanılacağı parent component içerisinde `import * as From from "./components/form-component.js"` tanımlaması ile içeri aktarabiliriz. Bu işlemden sonra artık `<template>` kısmında bu component'leri `<Form.Input />` şeklinde kullanabiliriz. Bu geliştirme sürecinde kolaylık sağlayacaktır.

_**Kaynak kodları ve yorum satırlarını da inceleyebilirsiniz.**_
