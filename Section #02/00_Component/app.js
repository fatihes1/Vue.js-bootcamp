// 'app' adında bir vue uygulaması oluşturulması
const app = Vue.createApp({
    data() {
        return {};
    },
});

// bu uygulama için 'counter-item' adında component oluşturulması
app.component("counter-item", {
    data() {
        return {
            counter: 0,
        };
    },
    // Component'in HTML dosyalası template alanına yazılır
    template: `
      <div class="container-sm">
        <h3 class="mb-2">{{ counter }} </h3>
        <button @click="counter--" class="red sm">-</button>
        <button @click="counter++" class="green sm">+</button>
      </div>
    `,

});
// app isimli Vue uygulamasının #app id değerine sahip element'e bağlanması
app.mount("#app");