<template>
  <div class="card p-2">
    <div class="d-flex justify-content-end">
       <!-- NewBookmark sayfasına router ile yönlendirme atanması (butonun click event'ine)  -->
      <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'NewBookmark' })">+ Yeni Ekle</button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <!-- axios ile get request atılarak alınan değerlerin (bookmarkList) for döngüsü ile yazdırılması  -->
        <tr v-for="(bookmark, index) in bookmarkList" :key="bookmark.id">
          <td>{{ index + 1 }}</td>
          <td>{{ bookmark.title }}</td>
          <td>
            <a :href="bookmark.url" target="_blank"> {{ bookmark.url }} </a>
          </td>
          <td>
            {{ bookmark.description }}
          </td>
          <td>
            <!-- Silmek için butonun click event değerine method atanır ve param olarak bookmarkList içerisindeki bookmark'ı alır  -->
            <button @click="deleteBookmark(bookmark)" class="btn btn-sm btn-danger">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Boş bookmarkList verisinin tanımlanması
      bookmarkList: []
    };
  },
  created() {
    // axios ile get request ile kayıtlı olan bookmarkların alınması
    // gelen verinin bookmarkList'e atanması
    this.$appAxios.get("/bookmarks").then(bookmarks_list_response => {
      this.bookmarkList = bookmarks_list_response.data || [];
    });
  },
  methods: {
    deleteBookmark(bookmark) {
      // console.log("bookmark :>> ", bookmark);
      // axios ile delete request atılması ve butona tıklanan bookmark'ın id değeri ile istek atılması
      // sonrasında dinamik şekilde liste güncellenmesi için filtreleme uygulanması
      this.$appAxios.delete(`/bookmarks/${bookmark.id}`).then(delete_response => {
        console.log(delete_response);
        if (delete_response.status === 200) {
          this.bookmarkList = this.bookmarkList.filter(b => b.id !== bookmark.id);
        }
      });
    }
  }
};
</script>