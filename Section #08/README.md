# Bölüm08 : Composition API Script Setup, Composables, defineEmits ve defineProps


## :clipboard: Notlar 

***Burada belirtilen kısımdaki notları pekiştirmek için `00-script-setup` dizinine göz atabilirsiniz.***

- `<script setup>` içerisindeki tanımlar otomatik olarak `export` edilir (dışarıya sunulur). Yeni code design şu şekilde olur:
```
<template>
	<h3>{{ title }}</h3>
</template>

<script setup>
	const title = "Script Setup Başlığı"
<script>
```
görüldüğü gibi dışarıya herhangi bir şey `return` etmek zorunda kalmayız.

- Değişkenlerde olduğu gibi `computed`, `watch` gibi işlevler için de aynı şekilde çalışmaktadır. `<script setup>` içerisinde bir component `import` anahtar kelimesi ile içeriye aktarıldığı an `return` edilmeye gerek duyulmadan `<template>` içerisinde kullanılabilir.

- Bir component'ten diğer componenet'e yollanan veri component içerisinde nasıl `props` olarak alınır? `props`'un alınacağı component içerisinde `const  props  =  defineProps({ counter:  Number });` şeklinde tanımlama yapmak yeterlidir. Bu kod satırında gönderilen veri `counter` değişkenidir.

- Alınan `props` component içerisinde `computed` içeri aktarıldıktan sonra rahatlıkla kullanılabilir. Örneğin; `const  result  =  computed(() => (props.counter  %  2  ===  0  ?  "Çift":  "Tek"));` bu kodda olduğu gibi.

- Yukarıdaki kodu göz önünde bulundurarak sayı çift oldukça `App.vue` dosyasında bir event (olay) yollamak istersek `computed` işlevini, `watch` işlevi ile izlemek yeterli olacaktır:
```
watch(result, (result) => { // result computed değişken ismi idi.
if(result === "Tek") emit("odd-event", true);
});
```
bu işlemin sorunsuz çalışması için script setup içerisinde `const  emit  =  defineEmits(["odd-event"])` tanımlaması yapılmak zorundadır.
Bu işlemden sonra `App.vue` içerisinde `<oddOrEven :counter="counter" @odd-event="alertMe" />` kodu template içerisinde kullanılmalıdır. `alertMe` adlı bir işlevi tetiklemesi beklenmiş. O halde `App.vue` içerisinde tanımlı olan bir `alertMe` işlevi olmalıdır. Bu tanımlama oldukça basittir: `const alertMe = (info) => {console.log(info);};`

- `<script setup>` , `beforeCreate`, `created`, `data()` yerine kullanılabilir.

- `name` ve `lastname` için input alanı ve haliyle bu input alanına bağlı `v-model` olduğunu düşünelim. `<scrip setup>` içerisinde bu değişkenlerin `const name = ref("")` şeklinde tanımlamamız gerektiğini önceki bölümlerde görmüştük. Peki bu değerleri izlemek için ne yapacağız? `watch([name, lastname], () => {...})` şeklinde bir tanımlama yeterli olacaktır. Ancak bu işlemi izlemek istediğimiz her bir değişken için yapmak projeye yük bindirecektir. Bu işlem `reactive` kullanmak oldukça mantıklıdır. `const state = reactive({ personel : { name : null, lastname: null},});` bu işlemden sonra template içerisindeki input alanlarına atanan `v-model` değerlerini `state.personal.name` gibi düzenlemek gerekecektir.
- Peki bu `reactive` nesne `watch` ile nasıl izlenir? Bu durum oldukça basit hale gelir: `watch( state.personal, (newPer, oldPer) => { ... } )` bu söz dizimi istediğimiz çözümü sağlayacaktır.

_**Kaynak kodları ve yorum satırlarını da inceleyebilirsiniz.**_
