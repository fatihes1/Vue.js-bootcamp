import { createApp } from 'vue'
import App from './App.vue'
// Stil dosyalasının içeri aktarılması
import "@/assets/style.css";
import store from "./store";

const app = createApp(App)
// Store dosyasını uygulama ile bağlanması (vuex)
app.use(store);
app.mount('#app')
