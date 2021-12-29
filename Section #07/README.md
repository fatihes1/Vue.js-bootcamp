# Bölüm07 : Composition API Nedir? Setup, ref ve reactive, Vite Kullanımı, Script Setup

## :pushpin: Composition API Nedir?
Basit bir Vue bileşeni yazarken Options Api bize çok pratik gelir. Fakat zaman içerisinde bileşenin kodlarının artması ile kod okumak ve mantığı anlamak kendi yazdığımız bölümlerde bile zor hale gelir. Eğer takım halinde çalışıyorsak bunu anlamak daha da zorlaşır. Bunun nedeni ise Options Api’ı bizi reactive değişkenleri(data), metotları(methods), hesaplanan değerleri(computed) vb. bir yerde yazmaya zorlamasıdır.

 **Önemli yeni kavramlar**
1.  **reactive:**  Düz bir nesneyi reaktif bir nesneye dönüştürür.
2.  **ref:**  Bir özelliği reaktif hale getirmek için kullanıyoruz.
3.  **isRef:**  Bir özellik reaktif mi diye kontrol etmek için kullanıyoruz.
4.  **toRefs:**  Reaktif bir nesnenin özelliklerini birer reaktif özellik olarak alabilmemizi sağlar. Büyük reaktif nesneleri return ederken kullanışlıdır.

**Composition API'si** , kod okunabilirliğini ve yeniden kullanımını iyileştirmek için Vue bileşenleri oluşturmak için yeni bir yapıdır.



## :clipboard: Notlar 

***Burada belirtilen kısımdaki notları pekiştirmek için `00-composition-api` dizinine göz atabilirsiniz.***

- Karmaşık ve düzensiz olan **instance** yapısını **(Option API)** daha düzenli, okunması ve erişmesi kolay hale getiren düzene **composition API** denir.

- Option API'de verilerin hepsi reactivity'ye sahip gelmektedir. Bu framework'e bir yük bindirir.

- **Vite** ise bir **bundle server**'dır. Bir geliştirme sunucusuyla birlikte gelen bir derleme aracıdır ve kodu üretim için bir araya getirir. Vue CLI'a benzer ancak daha yalın ve daha hızlıdır. Vite, geliştirme sırasında geri bildirim döngüsünü süper hızlı getirir.

- Vite'ın çalışabilmesi için `node` sürümünün `(node --version)` 12 ve üstü olmalıdır. Vite ile proje oluşturmak için ise;
-- `npm init vite@latest` komutu kullanılır.
-- Bu komuttan sonra bir proje adı, framework ve `ts` / `js` gibi opsiyonlar sorar.
-- Proje dizini oluştuktan sonra `cd PROJECT_NAME` ile proje dizinine ulaşılır ve `npm install` komutu çalıştırılır.

- Vue CLI ile en büyük fark `public` içerisinde bulunan `index.html` artık `root` yani ana dizinde yer almasıdır.

- **Composition API** ile **Option API** bir arada (iç içe) kullanılabilir ve proje `npm run dev` komutu ile ayağa kaldırılır.

- `<script>` tagi içerisinde `export default` içerisinde bulunan `setup() {...}` işlevi, option API'da bulunan `data()`, `beforeCreate`, `created` methodlarının yerine kullanılır.

- `setup() {...}` içerisinde `const` anahtar kelimesi ile değişkenler üretilir. Daha sonrasında bu oluşturulan değişkenler `setup() {...}` içerisinde `return` anahtar kelimesi ile geri döndürülmelidir.

- Aşağıdaki kod satırını bakarak normalde input değiştikçe ekrana yazılan `title` değerinin değişmesini bekleriz. Ancak composition API'de artık sadece reaktif bir değişkene sahip olmak istediğimizde oluruz, option API'daki gibi değişkenler otomatik olarak reaktif olarak gelmez.
```
<template>
<input v-model="title">
<h3> {{ title }} </h3>
</template>

<script>
export default {
	setup() {
		cont title = "",
		return {
			title,
		}
	}
}
<script>
```
- Eğer ki inputtan girilen verinin `title` değerini otomatik olarak değişmesini (reaktif olmasını) istersek tanımlamayı buna göre yapmalıyız.
-- İlk işlem, `<script>` tagleri arasında `import {ref} from "vue"` ile raktiflik için gerekli olan işlevi çekeriz.
-- `setup()` içerisindeki title değişkeni `const title = ref("Başlık alanı")` şeklinde olmalıdır. Bu tanımlama sayesinde `title` değişkeni reaktif olarak ve değişime göre kendisini günceller.

- `setup()` içerisinde işlevleri tanımlarken de `const` anahtar kelimesi kullanılır. Örneğin; `const toggleIt = () => {...}` bir array function tanımlamasıdır.

- `setup()` alanı direkt olarak Js environment'i olduğu için değişkenlere ulaşırken `this` anahtar kelimesi kullanılmaz.

- `const` ile tanımlı bir obje (object) veri tipindeki değişkenin içerisini değiştirebiliriz, ancak direkt olarak obje yerine başka bir obje veya başka bir veri tipi değerine atama yapılamaz.

- `computed`, fonksiyon gibi çalışan değişkenler olarak yorumlanabilir. Composition API'da `computed`'da aynı yukarıda `ref` işlevi için olduğu gibi `vue`'dan içeri aktarılmalıdır. 

- `computed` olarak tanımlı bir değişken "ComputedRefImpl" gibi bir nesne döndürür bu yüzden computed değerini yazdırmak istersek değişkenin adını kullanıp sonrasında `.value` kullanılmalıdır.

- `watch` kullanımı için de aynı şekilde ilk olarak `import` anahtar kelimesi ile içeri aktarılmalıdır ve sonrasında `setup()` içerisinde gerekli tanımlama yapılabilir. Örneğin, `counter` adlı bir değişkeni izlemek istersek; `watch (counter, (newValue, oldValue) = {
console.log(oldValue," => ", newValue) })` şeklinde kullanılabilir.

<hr>

***Burada belirtilen kısımdaki notları pekiştirmek için `01-todo-list` dizinine göz atabilirsiniz.***

- Proje oluşturmak için (vite ile) gerekli adımlar uygulanır. Sırasıyla `npm init vite@latest` dedikten sonra proje adı, framework seçilir ve proje dizinine `cd` komutu ile geçtikten sonra `npm install` ile gereklilikler kurulur. `npm run dev` komutu ile proje 3000 nolu PORT üzerinden çalışmaya başlayacaktır.

- **reavtive** işlevi `ref` gibi çalışır ancak reaktif bir obje geri döndürür. Ref işlevi içerisine birden fazla veri tipi kabul ederken reactive içerisinde sadece obje tipine sahip değişkenler tutar. Direkt olarak option API'daki `data()` gibi düşünülebilir.

- Tek satır bir computed kodu var ise return anahtar kelimesinin kullanılması zorunlu değildir:
`const todoLength = computed(() => props.todoList.length)` gibi.

_**Kaynak kodları ve yorum satırlarını da inceleyebilirsiniz.**_
