import { createStore } from "vuex";
import contact from "./modules/contact";
import taskmanager from "./modules/taskmanager";

const store = createStore({
    state: {
        mainName: "FatihTech"
    },
    mutations: {

    },
    modules: {
        musteri: contact,
        taskmanager // bu satır = taskmanager: taskmanager
    }
});

export default store;