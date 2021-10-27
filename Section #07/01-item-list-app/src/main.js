import { createApp } from 'vue'
import App from './App.vue'
import "./assets/index.css"
import appHeading from "./components/ui/appHeading.vue";
const app = createApp(App)

app.component("heading", appHeading);


app.mount('#app')
