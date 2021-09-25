<template>
  <div class="form-area card border p-2">
    <!-- bookmark için gerekli verilerin v-model yardımıyla inputlardan alınması  -->
    <div class="mb-3">
      <label for="title" class="form-label">Başlık</label>
      <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="fatihtech..." />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input type="text" v-model="userData.url" class="form-control" id="url" placeholder="https://..." />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <textarea class="form-control" v-model="userData.description" placeholder="Burası da açıklama alanı.." id="description" rows="3"></textarea>
    </div>

    <div class="d-flex justify-content-end align-items-center">
      <!-- iptal butonuna router yardımı ile HomePage sayfasına yönlendirme işlemi  -->
      <button class="btn btn-sm btn-secondary me-1" @click="$router.push({ name: 'HomePage' })">İptal</button>
      <!-- butonun click eventini onSave adlı bir methoda atanması (aşağıda tanımlanan)  -->
      <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // inputlardan alınan verileri userData nesnesi içerisinde tutmak için verinin tanımlanması
      userData: {
        title: null,
        url: null,
        description: null
      }
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      // bookmarks'a post request ile kullanıcı bilgilierinin atılması
      this.$appAxios.post("/bookmarks", this.userData).then(save_response => {
        console.log("save_response", save_response);
        // aşağıda tanımlanan reset data ile input alanları kaydet tuşuna bastıktan sonra sıfırlanır
        this.resetData();
        // kaydetme işleminden sonra HomePage yönlendirmesi
        this.$router.push("/");
      });
    },
    resetData() {
      // tüm input alanlarının değerini null yaparak boş göstermek için method tanımlanması
      Object.keys(this.userData).forEach(key => (this.userData[key] = null));
    }
  }
};
</script>