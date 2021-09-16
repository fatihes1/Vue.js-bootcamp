// vue app tanımlaması
const app = Vue.createApp({
    data() {
        // input alanından gelecek değeri tutacak fullName verisinin tanımlanması
        return {
            fullName: "Es"
        };
    },
    methods: {
        // v-model kullanılmadan alınan değerin her harfe basılması ile tetiklenen update methodu
        updateValue(param) {
            this.fullName = param.targer.value
        }
    },
});
app.mount('#app'); // vue app'in etki edeceği div'in id değeri