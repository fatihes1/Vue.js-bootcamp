# Bölüm02 : Component Nedir? Componentler Arası İletişim, Vue CLI

## :pushpin: Parçala ve Fethet Yöntemi Nedir?
Parçala ve fethet (_divide and conquer_), problemi daha küçük alt problemlere (_sub-problems_) ayırıp (parçalama), her alt problemin çözülmesine ve daha sonra bütün çözümlerin birleştirilmesine dayanır.
`Header`, `Footer` gibi tekrar eden parçaları farklı bir dosya olarak kaydedilmesi ve sonrasında bu dosyaların diğer sayfalarda çağrılarak kullanılmasıdır. Böylelikle kod tekrarının önüne geçilir.
Vue için tekrar eden bu bölümleri `Component` olarak tanımlayabiliriz.
## :clipboard: Notlar 
- Component'ler yukarıda tanımlandığı gibi aynı zamanda kendi dünyasında çalışan birer küçük Vue uygulamarı (Apps) olarak düşünülebilir.

- Standart bir Vue uygulaması ihtiyacı olduğu her şeye sahiptir: `data()`, `methods`, `computed` gibi.
- Aşağıda listelenenler component  haline getirilip kullanılabilir :
-- Tekrar eden GUI (Graphical user interface- Grafiksel Kullanıcı Arayüzü) parçaları,
-- Çok fazla kod içeren GUI parçaları,
-- Template yapısına uygun projeler için tüm UI (User Interface) elementleri (form, button, slider, footer, navbar vb.),
-- Kendisine ait servis bağlantısı olan GUI parçaları
- Hiyerarşik yapıya sahip projelerde **parçala ve yönet**  yöntemi kullanmak faydalıdır.

- `appHeader` adında bir component'e sahip olduğumuzu düşünürsek. Bu component başka bir yerde iki şekilde çağrılabilir.
-- `<appHeader />`
-- `<appHeader></appHeader>`

- Bir `Vue.js` projesi çalıştırmak için (veya oluşturmak) `Node.js` ve `npm` kurulumları gereklidir. Bu kurulumlar yapıldıktan sonra
`npm install -g @clue/cli` **(sudo yetkisi gerektirebilir.)**
kurulumu yapılır ve sonrasında ise projeyi oluşturmak istenilen dizine gittikten sonra;
`vue create PROJECT_NAME` ile proje oluşturur. Dosya dizinindeki `01-vue-vli` böyle oluşturulmuştur.

- Uygun seçimleri manuel veya otomatik olarak seçebilirsiniz. Basit bir tutorial projesi olduğu için `01-vue-vli` projesinde `babel ve linter` seçildikten sonra vue versiyonu olarak `3x` seçilmiştir.
-- EsLint: Kodu belirli standartlara uygun halde yazılmasını sağlar.
-- Babel: Kodları tüm tarayıcılar için uygun hale getirir.
-- `src` dizini en çok kullanılacak olan dizindir.
-- `.vue` uzantılı dosyalar **Sinlge File Component** olarak tanımlanır.
-- **Component** dizininde oluşturulacak dosyalar üç parçadan oluşur: `<template>`, `<script>` ve `<style>`.  Vue 2'de template içerisinde yazılan `HTML` kodları kapsayıcı bir element ile sarılmış olmalıdır. Aksi takdirde hata verir. Bu durum Vue 3 ile çözülmüştür.
-- `.css` dosyalarını **assets** dizininde bulundururuz. Bu stil dosyası tüm proje genelinde kullanılacak ise `main.js` dosyası içerisinde `import  "@/assets/style.css";` olarak tanımlanabilir. Bu tanımlamadaki `@` gösterimi `src` dizinine denk gelmektedir.

- Component dizini içerisinde oluşturulan bir dosya (`.vue uzantılı`) App.vue dosyasında bulunan `<script>` etiketleri arasında içeri aktarılır. `CounterItem.vue` isimli bir dosyayı components dizininde tanımladığımızı düşünürsek bu dosya `App.vue` içerisinde `import  CounterItem  from  "@/components/CounterItem";` söz dizimi ile içeri aktarılır yani **import edilir**. Bu işlemden sonra **export default** içerisinde `components: { CounterItem}` olarak kullanıma hazır olur. Bu işlemden sonra yapılması gereken tek şey `<template>` etiketleri arasında `<counter-item></counter-item` veya `<counterItem />` kod satırı ile component dosyasını çağırmaktır.

- Bir component dosyası birden fazla dosya da çağrılıyorsa her seferinde diğer `.vue` uzantılı dosyasının `<script>` tagleri içerisinde import etmek yerine `main.js` içerisinde `import  counterItem from  "@/components/appHeader";` söz dizimi ile tanımlamalık yeterli olacaktır. `aap.js` içerisine aktarılan component dosyası `app.component("counter-item", counterItem)` olarak tanımlanmak zorundadır. (Kaynak kodlardaki `01-vue-cli` dizinini inceleyebilirsiniz.)

<hr>

- `02-todo-app` projesini oluşturmak için uygulanan aşamalara göz atalım notları daha iyi anlamak için kaynak kodlara göz atabilirsiniz :

- `vue create 02-todo-app` ile proje dosyaları oluşturulur ve `cd 02-todo-app` komut satırı ile proje dosyalarının dizinine erişilir.

- **Componentler**  kod tekrarını engelleyen içinde `HTML`, `CSS` ve `JS` yapıları bulunduran kod parçalarıdır. Yani belirli dinamiklere göre içeriğini değiştirebildiğiniz yapılar olarak düşünebilirsiniz.

- Component'ler arasında zaman zaman veri iletimi gerekecektir. Bunun için öncelikle **Parent Component** ve **Child Component**'in ne olduğunu açıklayalım. 
-- Parent Component: `<template>` tagleri arasında başka bir component'i çağıran yani içerisinde farklı comp. (component : comp.) bulunduran dosyalardır.
-- Child Component: Parent component içerisinde `import` anahtar kelimesi ile tanımlanan componentlerdir.

- Bu iki component çeşidini anladığımıza göre şu tanımlama yapılabilir. Parent component'ten, child component'e veri gönderirken `props`'lar kullanılır. Child component'ten, parent component'e veri iletimi sırasında ise `custom event` yapısı kullanılır.

- `App.vue` dosyası içerisinde adı `Example.vue` olan component'i `<template>` etiketleri arasında kullanırken; `<Example myData:"xx" />` ifadesi şeklinde kullanılırsa ve sonrasında `Example.vue` dosyasının `export default` alanında `props: ['myData']` olarak tanımlarsak artık Parent componentte bulunan `myData` verisi `Example.vue` component'i içerisinde de kullanılabilir hale gelir.

- Child component'ten, parent component'e veri gönderirken ise `$emit` anahtar kelimesi ile `event` yollanır; bu yönteme **Custom Event** adı verilir.

- Örneğin child component içerisinde `<template>` tagleri arasında tanımlı bir butona `@click = "sendData` işlevi atadığımızı düşünelim ve `<script>` tagleri içerisinde tanımlanabilecek `methods : { ... }` içerisinde `sendData() { this.$emit('test-event') }` tanımlaması yapalım. Parent component içerisinde child component'in çağrıldığı (`<template>`) taginde `@test-event="testEvent"` eklemesi yapalım ve sonrasında yine parent component'in `methods` alanında `testEvent() { alert() } ` tanımlaması yaptığımızı var sayalım. Bu işlemleri yaparsak child component içerisinde tanımlı olan butona bastığımızda tarayıcı penceresinde `alert` yani uyarı görüntülenecektir. Veri iletimi gerektiğinde ise parent component içerisinde tanımlanan method'un parentez içerisine parametre olarak bir veri beklediğini gösterebiliriz. Böylelikle child component üzerinde emit gönderilirken bir veri ile gönderilir.

<p align="center">
 
![Untitled Diagram drawio (1)](https://user-images.githubusercontent.com/54971670/147474024-ad0d2b9c-a902-4430-80e1-8db3fc73b6a1.png)

</p>

- İçeriden dışarıya doğru sırayla A, B ve C comonentlerimiz olduğunu varsayalım. (Yukarıdaki göreseldeki gibi.)  A component'i içerisindeki bir veriyi C (bu durumda parent comp.) component'ine nasıl aktarırız?
-- A component'i `(A.vue)` içerisindeki to-do silmek üzere atanan buton tagine`@click="$emit('delete-todo-item', item)"` eklemesi yaparız. Böylelikle veri B component'ine gitmiş olur.
-- B component'i içerisinde A componentinin çağrıldığı yerde `(<template> tagleri arasıdaki <A /> ile belirtilen yer)` , `@delete-todo-item="$emit('delete-todo-item', $event)"` eklemesi yaparız. Böylelikle A'dan B'ye veri gelmiş olur.
-- C omponent'i içerisinde C componentinin çağrıldığı yerde `(<template> tagleri arasıdaki <B /> ile belirtilen yer)`, `@delete-todo-item="deleteItem"` eklemesi yapılır ve C component'i içerisinde metodların tanımlandığı alanda;
```
deleteItem (todoItem) {
this.todoList = this.todoList.filter(t => t !== todoItem);
}
```
Böylelikle yapılacaklar listesinden child component'te seçilen (belirtilen) veri, parent component'te silinmiş (bu durum için filtrelenmiş) olur.

- Yukarıdaki görselde ki B component'inden, A component'ine bir fonksiyon gönderilebilir. B component'inde `addNewTodo` adlı bir method tanımlaması olduğunu varsayalım. B component'inin `<template>` tagleri arasında A component'inin çağrıldığı yere `:addNewTodo="addNewTodo"` eklemesi yaptıktan sonra A component'inin `<script>` tagleri arasında bulunan `export default` içerisinde;
 ```
 props: { 
addNewTodo : { type : Function, required: true},
}
```
tanımlaması yapmamız dahilinde bu fonksiyonu child component (A comp.) içerisinde kullanabiliriz.

- Parent - child component'ler arasında iç içe component sayısı arttıkça `props` ve `emit`'ler karmaşıklaşır. Aynı zamanda büyük ve gereksiz bir veri taşınmasına neden olur. Bu duruma alternatif çözüm: **Provide ve Inject** kullanımıdır. Ana (parent) component içerisinde paylaşılacak bilgi (data) `provide` edilir ve isteyen (ihtiyacı olan) component bu bilgiyi `inject` ile alır.

- Parent component içerisinde aynı `data()` tanımlaması gibi `proivde()`  tanımlaması yapılır. ve `return` değerine veri atanır. Örneğin ` return { todoList = this.todoList }`. Veriye ihtiyacı olan component dosyası `(.vue uzantılı dosya)` açılır ve `<script>` tagleri içerisindeki alana `inject : ["todoList]` tanımlaması yapılır. Böylelikle `props` ve `emit` işlemlerini daha az kullanmış oluruz ve yükü azaltmış oluruz.

***Kaynak kodları ve yorum satırlarını da inceleyebilirsiniz.***

