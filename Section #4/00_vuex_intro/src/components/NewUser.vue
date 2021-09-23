<template>
    <!-- click event'i olduğunda addItem methodunu çağıran buton -->
  <button @click="addItem">Yeni Item Ekle</button>
</template>

<script>
export default {
    methods: {
        // addItem methodu
        addItem() {
            // id değeri olarak anlık zamanı alıyor
            const userData = {id: new Date().getTime(), title: "Raf"+new Date().getTime(), type: "mobilya"};
            
            // commit senkron (mutation için) olarak o an uygular
            // this.$store.commit("newItem", userData);

            // dispatch asenkron (actions için) olur ve setTimeout gibi bekleme işlevi oluşturulabilir
            this.$store.dispatch("newItem", userData);

        }
    }
}
</script>
