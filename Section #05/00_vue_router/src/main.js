import { createApp } from 'vue'
import App from './App.vue'

// Oluşturulan router dosyasının 'router' olarak içeri aktarılması
import router from "./router";
// Stil dosyasının içeri aktarılması
import "@/assets/style.css";

const app =createApp(App)
// Uygulamaya 'use' keyword'ü ile router'ın eklenmesi
app.use(router);
app.mount('#app')
