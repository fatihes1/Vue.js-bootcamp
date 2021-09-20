<template>
  <li class="d-flex justify-content-between align-items-center">
    <span>{{ item.text }}</span>
    <button @click="deleteItem(item)" class="sm red">Sil</button>
  </li>
</template>
<script>
export default {
  // Parent comp. üzerinden gelen 'item' ve ana comp. üzerinden provide edilen 'deleteItem' işlevinin inject edilmesi
  props: ["item"],
  inject: ["deleteItem"]
};
</script>