import { ref, computed } from "vue";

export default function () {
    const title = ref("Bu bir setup başlıktır.");
    // const titleLengthMessage = computed(() => {
    //     return this.value.length + " adet karakter yazdınız.";
    // })
    const titleLengthMessage = computed(() => title.value.length + " adet karakter girildi.")
    return {title, titleLengthMessage};
}