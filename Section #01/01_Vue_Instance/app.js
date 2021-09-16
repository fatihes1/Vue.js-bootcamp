const app = Vue.createApp({
    data() {
        return {
            title: "Vue.js Bootcamp #1",
            contet: "Lorem ipstum dolar sit amet..",
            // ve <a> tagine ait attribute tanımlamları için 'es' adında nesne
            es: {
                title: "Resume sayfama ulaşmak için tıklayınız.",
                target: "_blank",
                url: "https://fatihes1.github.io/",
                alt: "Resume website"
            },
            owner: "Fatih Es",
            // mousemove durumu için koordinantları tutacak değerler ve nesne
            coords: {
                x: 0,
                y:0
            },
        };
    },
    methods: {
        // başlık değiştirme işlevi
        changeTitle(paramTitle){
            this.title = paramTitle
        },
        // koordinantları alma işlevi
        updateCoords(message, event){
            // console.log(message, event.x, event.y)
            this.changeTitle(`${event.x},${event.y}`);
            this.coords = {
                x: event.x,
                y: event.y
            };
        },
    },
}).mount('#app') // app id değerine sahip div ile vue app'ini bağlama.