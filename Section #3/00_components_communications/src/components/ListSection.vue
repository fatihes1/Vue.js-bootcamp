<template>
  <ul>
    <!-- İçeri alınan verinin for döngüsü ile yazdırılması -->
    <li v-for="user in userList" :key="user">{{ user }}</li>
  </ul>
</template>
<script>
export default {
  // props: ["userList"],
  // Parent component içerisinde provide edilen verinin inject ile içeri aktarılması
  inject: ["userList"]
};
</script>