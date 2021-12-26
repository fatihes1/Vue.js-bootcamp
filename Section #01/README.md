# Bölüm01 : # Vue.js Nedir? DOM, Event, Attribute Binding, VDom, Style, Koşullar, Döngüler

## :pushpin: Vue.js Nedir?
- Vue.js (Kısaca Vue) bir `JavaScript` Framework'üdür.
- Hızlı ve kolayca reaktif ve interaktif **Web arayüz**leri oluşturmamızı sağlar.
- Diğer monolitik çerçevelerden farklı olarak, Vue, sıfırdan kademeli olarak kabul edilebilir olacak şekilde tasarlanmıştır. Çekirdek kitaplık yalnızca görünüm katmanına odaklanır ve diğer kitaplıklar veya mevcut projelerle alınması ve entegre edilmesi kolaydır. Öte yandan, Vue, modern araçlar ve destek kitaplıkları ile birlikte kullanıldığında, karmaşık Tek Sayfa (Single-Page) Uygulamalarına mükemmel bir şekilde güç sağlayabilir
## :clipboard: Notlar 
- "`{{title}}`" gibi [string interpolation](https://en.wikipedia.org/wiki/String_interpolation)'lar ancak ve ancak açma kapama tagleri (etiketleri) arasında kullanılabilir. Yani `data()``üzerinde tanımlı olan bir URL link a etiketinin href özelliğine string interpolation ile atanamaz.
- Eğer ki `URL` bağlantı değeri `data()` üzerinden dinamik olarak çekilmesi gerekiyorsa `<a v-bind:href="URL" />` olarak kullanılmalıdır (attribute içerisinde `URL` değeri tanımlı olacak şekilde). Burada v-bind sayesinde `data()` içerisinde tanımlı olan değer bir tag özelliğine atanmış olur.
- Taglerdeki bir özelliği (attribute) bind etmek (bağlamak) için `v-bind:target`, `v-bind:alt`,`v-bind:href` gibi yazmak yerine `:target`, `:alt`, `:href` şeklinde özellik adının başına iki nokta konulması da oldukça yaygın bir kullanımdır.
- `<script>` tagleri arasında `data()` tanımlaması gibi `methods: { ... }` tanımlaması da yapılabilir. Aynı zamanda bu süslü parantezler içerisinde tanımlanan işlevlerin çalışması bir butona **event** olarak atanabilir. `changeTitle` adında bir işlev tanımladığımızı düşünelim bu işlevi bir butona event (olay) olarak atamak için: `v-on:click="changeTitle"` yazımı kullanılır.
- İşlevi bir parametre ihtiyacı duymadıkça event'a atanan işlevde parantez (`changeTitle()` gibi) kullanmaya gerek yoktur.
- `updateCoords` adlı bir işlev tanımlarsak ve parametre olarak event istersel oluşturulan bir kutuda koordinatları bir attr. (attribute) ile yapabiliriz = `@mousemove="updateCoords($event)"`
- Herhangi bir metodu string interpolation ile uygun yerde çağırabiliriz = `{{ changeTitle() }}`. Burada çağırırken işlev adından sonra parantez kullanıldığına dikkat edilmelidir.
- Directives (direktifler) : Bir elementin yapısını, davranışını, biçimini, şeklini değiştirebilen attr. parçasıdır. Tag içerisinde `v-...` olarak kullanılan yapılar direktiflerdir. (Örn: `v-on`, `v-bind`)
- String interpolation içerisinde tek satır `JavaScript` kodları yazılabilir. Örneğin; `{{ counter > 5 ? "Büyük" : "Küçük" }}, counter data üzerinde tanımlı bir değişken olmalı.`

align="center"> ![Untitled Diagram drawio](https://user-images.githubusercontent.com/54971670/147419911-ddec0252-2cf4-4912-b886-a2e4b22562b2.png) </div>
 
- Eğer DOM (Document Object Model) üzerindeki verilerden bir tanesi bile değişirse DOM tekrardan render edilir. (`watch & update`)
- Sayfamızda iki ayrı counter (sayaç) varken sadece birinde arttır dememiz (değeri güncellememiz) diğer sayacın da tekrar render edilmesine neden olur.
- `JavaScript`  kısmı hızlıdır ancak HTML kısmı yavaş kalır. Bunun nedeni nedir? Bu durum **Virtual DOM**'dan dolayı olmaktadır.
- Virtual DOM: Instance ile DOM arasında yer alır ve instance üzerinde değişiklik olması (`watch:` değişiklik var mı kontrolünü burada yapar.) virtual DOM'a etki eder. Bu işlemden sonra gerçek DOM ile arasında fark oluşacağı için DOM render edilir. (`update` kısmı burada yer alır.) -> **Reactivity** ile bu durum çözülebilir.
- `data()`, `methods` gibi bir diğer tanımımız `computed` olacaktır. **Computed** basitçe bir fonksiyon gibi çalışan değişkenler olarak düşünülebilir. `03_Counter_App` dizinindeki kaynak kodlarda `methods` içerisinde tanımlı olan `getCounterResult1 ve getCounterResult2` işlevlerini computed olarak tanımlarsak; her bir counter işlevi için computed sadece o alanı çalıştırır.
- Computed içerisinde tanımlı işlevlerin kullandığı değerler değiştiyse çalışır. (Aynı kaynak koddaki `this.data ve this.metin`)
- Diğer bir **reactivity** yapısı `watch`'tur. **Watch** spesifik olarak `data()`, `computed` gibi yerlerde bulunan değişkenleri izlememizi sağlar. Örneğin aynı kaynak kodda bulunan `counter` değişkeni için (data içerisinde tanımlı), 
`watch: {
counter(newValue, oldValue) 
{
console.log("Counter", oldValue, "=>", newValue);
},
` kod satırı counter değerinin eski ve yeni değerini console ekranına basacaktır.
- Vue.js'de Lifecycle (Hayat Döngüsü) şu şemadaki gibidir:
![lifecycle](https://user-images.githubusercontent.com/54971670/147420247-180dc466-6c28-48a1-9ff3-0281315304dc.png)
- Lifecycle Hooks üzerinde app (uygulama) çalışırken oluşan işlevleri (`mounted, created gibi`) kontrol etmek için `ddata(), methods{..}` tanımlamaları gibi yazarak tanımlar ve kullanırız: `beforeCreate{...}`
- Bir butona `@click` attr. olarak `showBorder=!showBorder` atamasını yaptığımızı ve `<script>` tagi içerisinde `data()`'da `showBorder:false` değerinin atandığını düşünelim. Bir div'in class attr. değerini `:class{border: showBorder` olarak set ettiğimizde bu değerin `true-false` olma durumuna göre border ekleyip-çıkaracaktır. (border kullanıcı tarafından tanımlanan bir CSS sınıfı olarak kabul edelim.) `06_Class_and_Style_Binding` dizinini inceleyebilirsiniz.
- Bu işlem aynı şekilde **computed** ile de yapılabilir: HTML içerisinde `:class=boxClasses` yapıp;
`computed: {
boxClasses() {
return { border: this.showBorder, red: this.redBG };
},
}` atamaları ile aynı işlemi yapmış oluruz.
- Client tarafında bazı elementleri duruma göre gösterip-gizlemek isteyebiliriz. Bu durumda **Conditions (koşullar)** kullanılır.
- `v-if, v-else` gibi değerler ile yapılan koşullar aynı seviyedeki etiketlere (tag) atanmalıdır. Örneğin `v-if` değeri bir `<h1>` tagine atanırken `v-else` bir `div`e atanması durumunda hata verecektir.
- `v-if="counter > 0"` ile `v-show="counter > 0"` aynı işlemi yaparlar. Aralarındaki **fark ise**; `if` keyword'ü ile yapıldığında sadece `ìf` şartını sağlayan kod satırı kaynak kodda görünürken, `show` ile yapıldığında yapılan tüm kontroller (`>0, ==0, <0 gibi`) kaynak kod üzerinde görünecektir. `show` için şartı sağlamayan elementlerin CSS değerinde `display=none` olur.
- Bir `array` veya `object` içerisindeki değeri döngü kullanarak tekrarlamak için `v-for="todo in todoList" :key="todo.id"` gibi bir söz dizim kullanılır.
- !! Computed paramatre alamaz.

***Kaynak kodları ve yorum satırlarına da bakabilirsiniz.***

