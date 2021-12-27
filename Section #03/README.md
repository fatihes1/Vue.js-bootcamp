# Bölüm03 : Provide ve Inject, Dinamik ve Asenkron Componentler, Axios ile HTTP İstekleri


## :clipboard: Notlar 
- Parent component'ten, child component'e bir listeypi `props` olarak gönderip sonrasında listelenebilir. Ancak childe component üzerinde direkt olarak etkileşime (`push` ile ekleme yapmak gibi) geçemeyiz. Çünkü bu liste verisi parent component içerisinde tanımlıdır. Liste üzerinde etkileşime geçmek için childe component'ten, parent component'e **custom event** ile erişmek gerekir. 
-- Child component üzerinden bir elemente `@click="$emit('new-item', new Date().getTime())"` gibi bir custom event sistemi kullanılmalıdır. Bu kodda o anki tarihi listeye eklemek istediğimiz varsayarak devam edelim.
-- Bu eylemden sonra parent component'in `<template>` tagleri arasında child component'i çağırdığımız elementte `@new-item="userList.push($event)"` gibi bir tanımlama ekleriz. Bu tanımlamada `new-item` child componentten yollanan isim, `userList` parent componentin `data()` bölümünde tanımlı değişken, `push` listeye eleman eklemek için kullanılan işlev ve `$event` custom event ile gelen veriyi temsil eder.

- Child component üzerinde `<script>` tagleri arasında bulunan `export default` alanında şu iki tanımlama yapılmalıdır:
-- `props: ["userList"]`, parent component'ten gelen veri
-- `emits : ["new-item"]`, parent component'e gönderilen veri
-- Bu iki tanımlama opsiyoneldir, ancak kodun okunurluğu açısından olması (eklenmesi) daha sağlıklıdır.

<hr>

- Parent component'te (`App.vue` olarak düşünelim.) aşağıdaki tanımlamayı yapalım;
```
<Modal>
	<template #title>...</template>
	<template #content>...</template>
</Modal>
```
-- Child component'te (`Modal.vue` olarak düşünelim.) aşağıdaki tanımlama ile parent componentteki gerekli alan gösterilir:
```
<template>
	<div>
		<slot name="title" />
	</div>
	<div>
		<slot name="content" />
	</div>
</template>
```
- Daha somut örnek için `01_compoenent-slots` dizinine göz atabilirsiniz.

<hr>

- `02_dynamic_components` dizinini göz atarak aşağıdaki notları daha anlamlı hale getirebilirsiniz.

- `/components/` dizini altında `Red.vue, Green.vue, Blue.vue` olmak üzere üç adet component bulunur. Bu component'leri `App.vue` dosyası içerisinde aşağıdaki kod satırları ile içeri aktarılmıştır:
```
import Red from "@/components/Red";
import Green from "@/components/Green";
import Blue from "@/components/Blue";
```

- Bu üç component'ten sadece birinin çalışması için `data()` içerisinde `activeComponent: "Red"` değişken tanımlaması yapılır. `<template>` tagleri içerisinde componentlerin çağrıldığı yerlere birer tane buton ekleyerek ve butona `@click = activeComponent: "COMPONENTIN_RENGI"` gibi bir tanımlama ile butona basıldıkça değişen `activeComp` değeri ile sadece bir component'in çalışması sağlanabilir. Ancak bu ne kadar verimli olacaktır?

- Yukarıdaki senaryo yerine `<component :is="activeComponent" />` tanımlaması yapılır. Böylelikle butonlar sabit kalır ve 3 ayrı component'i template içerisinde çağırma işlemine gerek kalmamış olur.

-  `<component> ` etiketleri `props` ve `slot`'ları destekler.

- Component'ler arası geçiş yapılırken component'ler yok edilir ve her geri yüklenişinde tekrar `mount` işleminden geçer. DOM tarafından silinmez ancak lifecycle-hooks'tan dolayı veriler gider. Bu yüzden component'lerin birinde kullanıcıdan veri alınma gibi bir durum varsa bu verinin korunması için `<component>` tagi `<keep-alive>` etiketleri ile sarılmalıdır.

- Bu işlem yerine lifecycle-hooks tarafından tanımlanan `activated()` ve `deactivated()` işlevleri de kullanılabilir.

<hr>

- Bu kısımdaki kodları ve notları daha anlamlı kılmak için `03_http_request` dizinini inceleyebilirsiniz.

- Axios isteklerini kullanabilmek için bir database'e ihtiyaç vardır. Bunun yerine şimdilik bir fake API olan `json-server` kullanılabilir.

- `npm install -g json-server` komutu ile fake API kurulur.

- Vue.js üzerinden doğrudan veritabanına istek atılamaz. Arada bir servis olması gereklidir.

- Proje dizini içerisinde `db.json` adında bir dosya oluşturulur. (json-server'ın çalışması için, dokümanını inceleyebilirsiniz.) Sonrasında içerisine `{ items = [] }` tanımlaması eklenir ve kaydedilir.

- Axios'u kullanabilmek için projeye `npm install --save axios` ile dahil ederiz. Dahil etme işleminden sonra json-server'ı ayağa kaldırmak için `json-server --watch db.json` komutu kullanılır.

- İstek atılacak component'te (bu kaynak kod için `App.vue` dosyası içerisinde), `<script>` tagleri içerisinde `import  axios  from  "axios";` söz dizimi ile `axios` içeri aktarılır.

- Bir input elementinde `@keydown.enter = "onSave"` gibi bir kod parçası olması, enter tuşuna basıldığında belirtilen methodun çalışmasını sağlar. (Click eventinde olduğu gibi.)

- `App.vue` dosyasının içerisinde `onSave` işlevi şu şekilde kullanılabilir:
```
methods : {
	onSave(e) {
		axios.post("http:localhost:3000/items",
				{
					title : e.target.value,
					created_at : new Date(),
					complated : false
				}).then(save_response => {
					console.log("save_response");
					this.itemList.push(save_response);
				});
	},
},
```

- Sonrasında bir GET isteği ile `items` verilerini çekip yazdırmak istediğimizi düşünürsek ve bunu sayfa açıldığı an yapmamız gerekiyorsa lifecyce-hook'larını kullanabiliriz.
```
mounted() {
	axios.get("http:localhost:3000/items").then(item_response => {
		this.itemList = items_response || [] // Boş gelirse hata almamak için
	})
}
```

- Burada `this.itemList` değeri `data()` içerisinde tanımlı `itemList` değişkenini referans eder.

- Bir buton element'i oluşturduğumuzu ve bu element ile veritabanından veri silmek istediğimizi varsayalım. Bu işlem için;
-- Butona `@click="onDelete(item)"` ataması yapılır.
-- `methods` içerisinde `onDelete` adında bir işlev tanımlanmalıdır. İşlev basitçe aşağıdaki kod örneği gibi olabilir.
```
onDelete(item) {
	axios.delete("http:localhost:3000/items").then(del_response => {
		this.itemList = this.itemList.filter(i => i.id !== item.id)
	})
}

// Bu aşamada filtreleme işlemi ile yapılmıştır.
```

- `localhost:3000/items` URL değeri yerine projede kullanılan **End-Point** bağlantı değeri olarak değiştirilmelidir.

***Kaynak kodları ve yorum satırlarını da inceleyebilirsiniz.***

