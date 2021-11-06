<template>
  <!-- eğer hata varsa (true ise) span tagleri arasında yazdırılır -->
  <span v-if="err" class="error">{{ err }}</span>
  <!-- hata olmaması durumunda ise default değerinbe sahip template yazdırılır -->
  <suspense v-else>
    <template #default>
      <div>
        <Users />
        <hr />
        <Todos />
      </div>
    </template>
    <!-- default template yüklenene kadar fallback template çalışır. -->
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<script setup>
// import Users from "./components/Users.vue";
// import Todos from "./components/Todos.vue";
// hataları yakalamak için onErrorCaptured, reaktif nesneler için ref, 
//asenkron komponenti için ise defineAsyncComponent içeri aktarılır 
import { onErrorCaptured, ref, defineAsyncComponent } from 'vue';
// hataları yakaladıktan sonra atanacak reaktif nesne 'err'
const err = ref(null);
// componentleri asenkron olarak içeri aktarmamızı sağlar
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"))
const Users = defineAsyncComponent(() => import("./components/Users.vue"))

// hataları yakalar ve err reaktif değişkene atar 
onErrorCaptured((e) => {
  err.value = e;
  return true;
})


</script>

<style>
.error{
  color: red;
  font-size: 40px;
}
</style>