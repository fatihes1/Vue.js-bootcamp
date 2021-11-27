<template>
  <app-header />
  <div class="flex flex-row">
      <side-bar />
  </div>
</template>

<script setup>
import sideBar from "@/components/Account/sideBar";
import { ref, inject } from "vue";
const appAxios = inject("appAxios");
const bookmarkList = ref([]);

appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
    console.log(bookmark_list_response);
    bookmarkList.value = bookmark_list_response?.data || [];
})


</script>

