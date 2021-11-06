<template>
  <h3>Todos</h3>
  <ul>
      <li v-for="todo in todoList" :key="todo.id">
          {{ todo.title }}
      </li>
  </ul>
  <!-- isLoad değişkeni kullanılacak olsaydı (suspense yerine) ul tagine v-if="isLoad" değeri atanırdı -->
  <!-- <span v-else>Loading...</span> -->
</template>

<script setup>
// reaktif nesneler oluşturmak için ref içeri aktarılır
import { ref } from "vue";

// jsonplaceholder ile yapılacak istekten dönen verileri tutacak
// reaktif todoList değişkeni 
const todoList = ref([])

// suspense kullanılmasaydı isLoad olarak tanımlanan bir değişken ile veriler yüklenirken
// loading gibi yazıları çıkarmak için isLoad kullanılabilirdi
// const isLoad = ref(false)
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    todoList.value = json;
    // isLoad.value = true;
  });

</script>
