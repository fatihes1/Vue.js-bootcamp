// Vue ile app oluşturulması
const app = Vue.createApp({
    // verilerin (dataların) oluşturulması
    data() {
        return {
            // Input alanı girişte boş
            todoText: null,
            // 'todoList' boş bir array
            todoList: [],
        };
    },
    // methodların tanımlanması
    methods: {
        // tıklama olayı ile tetiklenen addTodo methodu
        addTodo() {
            // girdi alanındaki içeriği todoList dizisine ekler
            this.todoList.push(this.todoText);
        },
    },
}).mount("#app"); // template (html) içerisinde hangi id değerine sahip div için kullanılacağı