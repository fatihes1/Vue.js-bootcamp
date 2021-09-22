<template>
  <!-- inject edilen methodun click event'ine atanması -->
  <button @click="newItem(new Date().getTime())">Set Data</button>
</template>
<script>
export default {
  // Parent components içinde provide edilen methodun inject ile içeri alınması
  inject: ["newItem"]
};
</script>