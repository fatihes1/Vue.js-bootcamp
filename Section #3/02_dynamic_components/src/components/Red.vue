<template>
  <h3 class="bg-red text-white">{{msg}}</h3>
</template>

<script>
export default {
    props: ["msg"],
    mounted() {
      // Componentin life-cycle hook metodları
        console.log("Red mounted")
    }
}
</script>

<style>

</style>