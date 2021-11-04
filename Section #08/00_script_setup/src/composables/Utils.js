import { ref, onMounted } from "vue";

export default function () {
    const title = ref("Başlık");
    const counter = ref(0)
    const inc = () => {
        counter.value++;
    };
    const alertMe = (info) => {
        console.log(info);
    };

    onMounted(() => {
        console.log("Mounted esnasında yapılacak işlevler bu alanda yer alır !");       
    });

    return { title, counter, inc, alertMe };
}