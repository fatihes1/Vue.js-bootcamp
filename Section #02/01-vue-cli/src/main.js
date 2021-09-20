import { createApp } from 'vue'
import App from './App.vue'
// Style dosyasının içeri aktarılması
import "@/assets/style.css";
// Header componenti burada tanımladıktan sonra her yerde kullanılabilir.
// App.vue componenti içerisinde components: alanında tanımlamaya gerek duyulmaz
import appHeader from "@/components/appHeader";

// Uygulama oluşturulması
const app = createApp(App);

// Componentin uygulamaya eklenmesi
app.component("app-header", appHeader);

// id değeri app olan alana uygulamanın bağlanması
app.mount('#app')
