<template>
  <div class="container">
     <!-- İçeri aktarılan componentin template içerisinde çağrılması -->
    <UserSection />
  </div>
</template>

<script>
// Tanımlı componentin içeri aktarılması
import UserSection from "@/components/UserSection";
export default {
  components: {
    // İçeri aktarılan componentin kullanılmak için tanımlanması
    UserSection
  },
  data() {
    return {
      // Kullanılacak verinin tanımlanması
      provideData: {
        userList: ["Fatih", "Refik", "Yiğit", "Yılmaz"]
      }
    };
  },
  methods: {
    //Kullanılacak methodun tanımlanması
    newItem(item) {
      this.provideData.userList.push(item);
    }
  },
  provide() {
    return {
      // Provide edilip child componentler tarafından inject edilebilir hale getirilmesi
      userList: this.provideData.userList,
      newItem: this.newItem
    };
  }
};
</script>