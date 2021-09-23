<template>
  <div class="container">
      <p> 
          <!-- store içerisindeki bir veriye doğrudan ulaşmak için bu yöntem kullanılır -->
          {{ $store.state.mainName }}
      </p>
      <hr />
      <p>
          {{ $store.state.musteri.contactName }}
      </p>
      <hr />
      <pre>
          {{ musteriADI }}
      </pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "App",
    // farklı modüllerde aynı ada sahib iki işlev olduğunda 
    // namespaced değeri true olarak atanır ve hangi modül olduğu belirtilir.
    created() {
        console.log(this.$store.getters["musteri/_contactName"]);
    },
    computed: {
        // Hangi modülün olduğunu mapGetters işlevine de belirtmek gerekir.
        ...mapGetters({
            musteriADI: "musteri/_contactName"
        })
    }
}
</script>

<style>

</style>