<template>
  <small class="mt-2 d-flex justify-content-end green">{{ itemCount }} adet todo bulunuyor.</small>
</template>

<script>
export default {
  // Parent comp. üzerinden gelen itemCount
    props: ["itemCount"]
}
</script>

<style>

</style>