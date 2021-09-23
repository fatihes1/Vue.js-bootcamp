<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
        <!-- Enter tuşuna basıldığı an onSave işlevini çalıştıracak input alanı -->
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave" />
    </div>
    <!-- itemsList içerisinde kayıt varsa çalışacak-->
    <ul v-if="itemsList.length > 0">
        <!-- itemsList içerindeki kayıtları for döngüsü ile yazdırır -->
      <li v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span>{{ item.title }}</span>
        <!-- Tıklandığında onDelete işlevini çalıştıracak olan buton -->
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <!-- itemsList içerisinde kayıt yoksa çalışacak-->
    <div v-else class="bg-blue text-white">
      Herhangi bir ürün yoktur..
    </div>
    <small class="mt-2 text-red d-flex justify-content-end align-items-center">{{ itemCount }} adet alınacak ürün vardır..</small>
  </div>
</template>

<script>
// axios'un içeri aktarılması
import axios from "axios";
export default {
  data() {
    return {
        // alınacak ürünler için tanımlanan boş array
      itemsList: []
    };
  },
  mounted() {
      // life-cycle hook sırasında mounted sırası geldiğinde db.json 
      //içerisindeki tüm dataları çekip bu değerleri itemsList'e atayan method
    axios.get("http://localhost:3000/items").then(items_response => {
      console.log("items_response :>> ", items_response);
      this.itemsList = items_response.data || [];
      console.log("this.itemsList :>> ", this.itemsList);
    });
  },
  methods: {
    onSave(e) {
        // yeni ürün yazılıp enter tuşuna basıldığında;
        // title: girilen input
        // id: o anki tarih bilgisi olarak alınır
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false
      };
      // axios kullanılarak yeni kayıt için http request atılır
      axios.post("http://localhost:3000/items", saveObject).then(save_response => {
        console.log(save_response);
        // dinamik olarak listeye eklenmesi için push ile diziye atılır
        this.itemsList.push(save_response.data);
        e.target.value = "";
        e.target.focus();
      });
    },
    // axios kullanılarak yeni kayıt için http request atılır
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response => {
        console.log(delete_response);
        // Dinamik şekilde listeden de silinmesi için filtreleme işlemi yapılır.
        this.itemsList = this.itemsList.filter(i => i.id !== item.id);
      });
    }
  },
  // Ürünleri içerisinde barındıran dizinin uzunluğunu izler
  computed: {
    itemCount() {
      return this.itemsList.length || 0;
    }
  }
};
</script>