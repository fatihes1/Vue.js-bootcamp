<template>
    <!-- Home sayfası template alanı -->
  <h1>Home</h1>
  <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda labore in dicta accusamus hic nostrum distinctio excepturi nobis quod veritatis, unde obcaecati quibusdam iste facilis doloribus laudantium eaque sed.
  </p>
  <!-- detay sayfasının beklediği userID parametresini yazıp enter tuşu ile gidebileceğimiz bir input alanaı  -->
  <input type="text" @keydown.enter="goToDetails" />

</template>

<script>
export default {
    methods: {
        // yukarıdaki input için atanan methodun tanımlanması
        goToDetails(event) {
            this.$router.push({
                // yönlendirilecek sayfanın name değer
                name: "DetailPage",
                params: {
                    // parametre değeri olarak input alanından gelen event değerinden 
                    // input alanına yazılan değer alınır (v-model gibi)
                    userID: event.target.value
                },
                // Detay sayfasına yönlendirilirken query tanımlaması aşağıdaki gibidir
                query: {
                    type: "DetailAuth",
                    user: "fatihtech"
                }
            });
        }
    }
};
</script>
