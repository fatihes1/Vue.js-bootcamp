<template>
  <div>
      <h3 class="bg-blue text-white">
          Blue Component
      </h3>
      <input type="text" />
  </div>
</template>

<script>
export default {
    // Componentin life-cycle hook metodları
    mounted() {
        console.log("Blue mounted");
    },
    activated() {
        console.log("Blue activated");
    },
    deactivated() {
        console.log("Blue deactivated");
    }
}
</script>

<style>

</style>