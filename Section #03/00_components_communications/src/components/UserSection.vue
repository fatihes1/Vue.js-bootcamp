<template>
  <!-- İçeri aktarılan componentlerin template içerisinde çağrılması -->
  <ListSection />
  <AddSection />
</template>
<script>
// Tanımlanan componentlerin içeri aktarılması
import ListSection from "@/components/ListSection";
import AddSection from "@/components/AddSection";
export default {
  // props: ["userList"],
  // emits: ["new-item"],
  
  // Kullanılacak componentlerin tanımlanması
  components: {
    ListSection,
    AddSection
  }
};
</script>