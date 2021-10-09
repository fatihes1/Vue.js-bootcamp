<template>
  <app-header />
  <div class="flex flex-row">
      <side-bar />
  </div>
</template>

<script>
import sideBar from "@/components/Account/sideBar";
export default {
    components :  {
        sideBar
    },
    data() {
        return {
            bookmarkList: []
        };
    },
    created() {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
            console.log(bookmark_list_response);
            this.bookmarkList = bookmark_list_response?.data || [];
        })
    }
}
</script>

<style>

</style>