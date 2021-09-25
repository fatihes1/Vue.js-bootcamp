<template>
  <!-- Detay sayfasına gelirken beklenilen userID parametresinin yazdırılması -->
  <h1>{{ $route.params.userID }}</h1>
  <p>
      Açıklamalar burada yer alacaktır...
  </p>
  <!-- Detay sayfasına gönderilen query içerisindeki klan değeri  -->
  <p>{{ $route.query.klan }}</p>
  <!-- basıldığında goBack işlevini tetikleyen button  -->
  <button @click="goBack">Geri Dön</button>
</template>

<script>
export default {
    // life-cycle-hook işlevlerinden olan created'in tanımlanması
    // sayfa oluşturulduğunda console ekranına gelen route değerini yazdırır.
    created() {
        console.log(this.$route);
    },
    methods: {
        // goBack işlevinin tanımlanması
        goBack() {
            // router içerisinde "/" url'ini verir ve haliyle buraya yönlendirilmiş olur.
            this.$router.push("/");
        }
    }

};
</script>
