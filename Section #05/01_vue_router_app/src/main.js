import { createApp } from "vue";
import App from "./App.vue";
// router'iç içeri aktarılması
import router from "./router";
// import axios from "axios";

// axios'tan oluşturduğumuz appAxios'u içeri aktarıyoruz
import { appAxios } from "./utils/appAxios";
const app = createApp(App);

// router ile app'in bağlanması (use keyword'ü ile)
app.use(router);
// app.config.globalProperties.$axios = axios;
// Oluşturulan appAxios'un plugin gibi uygulamaya dahil edilmesi
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");