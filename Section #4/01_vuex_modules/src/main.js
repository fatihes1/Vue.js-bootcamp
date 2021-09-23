import { createApp } from 'vue'
import App from './App.vue'
// Style dosyasının içeri aktarılması
import "@/assets/style.css";
// store dosyasının import edilmesi
import store from "./store";

// Store dosyasının vue app ile bağlanması
const app = createApp(App)

app.use(store);
app.mount('#app')
