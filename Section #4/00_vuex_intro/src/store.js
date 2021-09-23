import {createStore} from "vuex";

const store = createStore({
    // store içindeki state verileri
    state: {
        user: {
            name: "Fatih",
            lname: "Es",
            age: 22,
            address: {},
            password: 123213213,
            tc: 123213
        },
        theme: "dark",
        fullName: "Fatih Es",
        permisson: [1, 2, 3, 4, 5],
        userList: ["Fatih", "Yılmaz", "Yiğit", "Refik"],
        itemList: [
            {id:1, title: "Masa", type: "mobilya"},
            {id:2, title: "Sandalye", type: "mobilya"},
            {id:3, title: "Bilgisayar", type: "elektronik"},
            {id:4, title: "Klavye", type: "elektronik"},
            {id:5, title: "Bardak", type: "plastik"},
        ]
    },
    // senkron olarak çalışan mutation 
    mutations: {
        newItem(state, item) {
            state.itemList.push(item);
        }
    },
    // asenkron olarak çalışan actions
    actions: {
        newItem({ commit }, item) {
            console.log("item :>> ", item);
            setTimeout(() => {
                commit("newItem", item);
                // 1 sn. bekledikten sonra mutation içerisinde tanınmlı işlev çağrılır.
            }, 1000);
        }
    },
    // store içerisinde getter'ların çağrılması.
    // getterlar state içerisindeki veriyi döndürmek için kullanılabilir
    // aynı zamanda filtreleyerek de dönderilebilir.
    getters: {
        _woodItems: state => state.itemList.filter(i => i.type === "mobilya"),
        _activeUser(state) {
            const user = {
                ...state.user
            };
            delete user.password;
            return user;
        }
    }
});

export default store;