// Vue app oluşturuldu
const app = Vue.createApp({
    data() {
      return {
          //Sayaçlar tanımlandı ve ilk değerleri atandı
        counter: 0,
        counter2: 0,
      };
    },
    //! İşlevler method alanında tanımlı iken birinin arttırılması bile diğeriinin tetiklenmesine neden olur
    //! Bunun sebebi DOM üzerindeki verilerden bir tanesi bile değişirse DOM'un tekrardan render edilmesidir.
    //! (watch & update)
    // methods: {
    //     getCounterResult() {
    //         console.log("Counter 1 Çalıştı");
    //         return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
    //       },
    //       getCounter2Result() {
    //         console.log("Counter 2 Çalıştı");
    //         return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
    //       },
    // },
    //! Ancak computed içerisinde tanımlanması ile reactivity kullanılır ve sadece değeri değişen syaaç tekrar render edilir
    computed: {
        // Sayaç değerinin 5'i geçtiği anda alert alanındaki değer değişir
      getCounterResult() {
        console.log("Counter 1 Çalıştı");
        return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
      },
      getCounter2Result() {
        console.log("Counter 2 Çalıştı");
        return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
      },
    },
    // diğer bir reactivity yapısı olan watch sayesinde spesifik olarak bir verinin izlenmesi sağlar. Yeni değeri ve bir önceki değerini saklar! 
    watch: {
      counter(newValue, oldValue) {
        console.log("Counter", oldValue, "=>", newValue);
      },
      getCounterResult(newValue, oldValue) {
        console.log("RESULT", oldValue, "=>", newValue);
      },
    },
    //   methods: {
    //     inc() {
    //       this.counter++;
    //     },
    //     dec() {
    //       this.counter--;
    //     },
    //   },
  }).mount("#app");