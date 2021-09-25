import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { // Route'ların tanımlanması ve gerekli componentlerin importu
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage.vue")
  },
  {
    name: "NewBookmark",
    path: "/new",
    component: () => import("@/views/NewBookmark.vue")
  }
];

// tanımlanan route'lar ile router oluşturulması
const router = createRouter({
  routes,
  history: createWebHashHistory()
});

// Router'ın yayınlanması (Kullanıma açık hale getirilmesi)
export default router;