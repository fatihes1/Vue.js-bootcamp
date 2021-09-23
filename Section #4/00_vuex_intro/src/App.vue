<template>
  <UserList />
  <NewUser />
</template>

<script>
// Componentlerin içeri aktarılması
import UserList from "@/components/UserList";
import NewUser from "@/components/NewUser";
export default {
  name: "App",
  // componentlerin kullanılması için tanımlanması gerekir.
  components: {
    UserList,
    NewUser
  }
}
</script>

<style>

</style>