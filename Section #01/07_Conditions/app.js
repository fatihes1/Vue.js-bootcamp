const app = Vue.createApp({
    data() {
        return {
            showContainer: false,
            counter: 0
        };
    },
    computed: {
        // Counter değerinin değişimine göre arka planı değiştirecek computed ifadesi
        // HTML üzerinde sayaçın bulundupu h3 tagine class binding ile bağlandı.
        counterBoxClass() {
            return {
                "bg-success text-white": this.counter > 0,
                "bg-danger text-white": this.counter < 0
            };
        }
    }
}).mount('#app');