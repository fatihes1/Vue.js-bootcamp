# Vue.js 3 Bootcamp

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)


![vuesplash 3e416f3](https://user-images.githubusercontent.com/54971670/147597071-9e1acf99-6408-49f1-8c86-52263c5588ab.png)

## :mag_right: İçerik

 - [ ] Bölümler ve içerisindeki dosyalara dair açıklama gelecek.

## :clipboard: Notlar 
### :books: Microsoft Learn Vue Bölümü Genel Notlar
- Vue.js işleme sırasında sayfanın sırası önemlidir. `HTML` sayfası tamamen yüklenene kadar **document object model**'ine (**DOM**) uygulamanızı ekleyemezsiniz. Bu nedenle, diğer tüm HTML öğeleri tarayıcıya yüklendikten sonra sayfanın en altında Vue uygulamasını (CDN) içeri aktarın. DOM'un içeriğini veya yapısını değiştirmeyi amaçlayan harici bir komut dosyasını çağırmadan önce HTML sayfasının yüklenmesine izin vermek genellikle daha iyi bir fikirdir.

- Javascript adlandırma kuralları, sınıf (`class`) nesnelerine uygulanır. Bu nedenle, sınıf adında kısa çizgi kullanılıyor ise, özelliği eklerken tırnak içinde tanımlamak ve kullanmak gerekir. Örneğin `data()` içerisinde tanımlanan bir css değerini `"center-text" : true` şekline CSS sınıf adı tırnak içininde olacak şekilde tanımlamak gerekir.

- Aşağıdaki koda bir göz atalım. Bu kodda `data()` içerisindeki `classObject` değişkeni içerisinde değeri `true` olan CSS değerleri bağlı olduğu `<div>` elementine etki eder. Aşağıdaki kodda iki CSS değeri de div elementinin sınıf (class) değeri olarak atanır.
```
<template>
	<div :class="classObject>Hello Vue! </div>
</template> 
<script>
export default {
	data() {
		return {
			classObject : { centered : true, active :true }
		}
	}
}
</script>
```

- Veriler değiştirilir ise, Vue.js ekranın uygun kısımlarını yenileyebilmelidir. Bir listeyle çalışırken, tüm listeyi güncellemek yerine tek tek ögeler güncellenmelidir. Vue.js'in tek bir ögeyi bulabilmesini sağlamak için görüntülenen değere/elemente `key` (anahtar) değeri verilmelidir. Anahtar değerinin verinin bir parçası (verinin id değeri gibi) olması şart değildir. Örneğin; `<li v-for="(name, index) in names" :key="index" ></div>` gibi.

- `v-model` yönergesi, bir HTML denetini ile ilişkili veriler arasında iki yönlü bir bağlama (**two-way binding**) oluşturur. Bu nedenle değer formda her güncellendiğinde, uygulamanın `state`'i içinde de güncellenir. `v-model` yönergesi; onay kutuları, metin kutuları ve hatta açılır listeleri (**dropdown list**) destekler. **ANCAK !** `v-bind` yönergesi, tek yönlü bir bağlam oluşturur. Bu nedenle kullanıcının formda yaptığı değişiklikler `state`'i değiştirmez yani bu değişiklikler saklanmaz.

- Bazen geçiş (toogle) bir boolean değer değildir. Bunun yerine `yes` ve `no` gibi seçenekler olabilir. Aşağıdaki kodda `<template>` içerisinde `input` elementinde yapılan tanımlamada olduğu gibi bur durum kontrol altında tutulabilir.
```
<template>
	<input  type="checkbox" v-model="benefitsSelected" true-value="yes" false-value="no" />
</template> 
<script>
export default {
	data() {
		return {
			benefitsSelected= 'yes',
		}
	}
}
</script>
```

- `import` ile bir kütüphane veya paketi içeri aktarırken `PascalCase` , HTML içerisinde `(<template>)` ise `kebab-case` kullanmak zorunlu olmasa da bir standarttır. Aşağıdaki kodu inceleyebilirsiniz:
```
<template>
	<product-display></ product-display>
</template> 
<script>
import ProducDisplay from "@/components/ProducDisplay.vue"
</script>
```

- `props` aracılığıyla iletilen değerler tek yönlü bir bağlamdır. Bir `props`'ta değişiklik yapılırsa, bu güncelleme verinin geldiği parent component'teki veriyi etkilemez.

- `$emit` işlevi ile olayları (events) yayarsınız (emit). Bir HTML denetiminin doğrudan oluşturdupu bir olayı yaymak için (bu işlem satır içinde yapılabilir) bir buton ve click event'i kullanabilirsiniz. `userUpdated` olayını yaymak için `<button @click="$emit('userUpdated')>Save<button>"` şeklinde kullanabilirsiniz.

- Yayılan (emit edilen) bir olayı nasıl yakalarız? Bir bileşen tarafından `emit` edilen bir olayı (event'i) dinlemek, normal HTML tarafından oluşturulan olay dinlemeye oldukça benzer. Genelde üst bileşen için bir yöntem oluşturulur ve sonrasında `@click` veya diğer olaylardaki gibi `@event-name` ile dinlenir ve yakalanır. Örneğin yukarıdaki örnekte oluşturulan `userUpdated` olayı için olay işleyicisi (**event handler**) eklemek için aşağıdaki kod gibi bir yöntem izlenebilir:
```
<template>
	<user-dialog @user-updated="handleUserUpdated"></user-dialog>
</template>

<script>
import UserDialog from "@/components/UserDialog.vue"
export default {
	methods : {
		handleUserUpdated() {
			... // do something with data
		}
	}
}
</script>
```

- Yukarıdaki örnekte emit gönderilirken `"userUpdated"` şeklinde gönderilmesine rağmen event handler içerisinde `user-dialog`  `(kabab-case syntax)` şeklinde kullanıldığına dikkat edin.


