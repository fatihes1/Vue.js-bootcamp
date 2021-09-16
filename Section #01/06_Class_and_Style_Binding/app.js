const app = Vue.createApp({
    data() {
      return {
        //* Buton ve input alanı alanı için gerekli verilerin tanımlanması
        showBorder: false,
        redBG: false,
        boxClass: "border red",
        bgColor: "",
      };
    },
    computed: {
      // Div alanının class tagleri
      boxClasses() {
        return { border: this.showBorder, red: this.redBG };
      },
    }

  }).mount('#app');
 