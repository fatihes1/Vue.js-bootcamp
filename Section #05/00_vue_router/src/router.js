// createRouter ve createWebHashHistory paketlerinin 'vue-router'dan içeri aktarılması
import { createRouter, createWebHashHistory } from "vue-router";

// route'ların (yönlendirmelerin) tanımlanması
const routes = [
    {
        name: "HomePage",
        path: "/",
        // HomePage olarak tanımlanan route için Home.vue view dosyasının içeri aktarılması
        component: () => import("@/views/Home")
    },
    {
        name: "AboutPage",
        path: "/hakkimda",
        // AboutPage olarak tanımlanan route için About.vue view dosyasının içeri aktarılması
        component: () => import("@/views/About")
    },
    {
        name: "DetailPage",
        path: "/detay/:userID",
        // DetailPage olarak tanımlanan route için Details.vue view dosyasının içeri aktarılması
        component: () => import("@/views/Details")
    }
];

// tanımlanan route'lar ve history değeri için değişkenin belirlenmesi ile router'ın oluşturulması
const router = createRouter({
    routes,
    history: createWebHashHistory()
});

// export keyword'ü ile dışarı aktarılması
export default router;