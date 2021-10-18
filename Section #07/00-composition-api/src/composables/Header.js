import { ref, computed } from "vue";

export default function () {
    const title = ref("Bur bir setup başlık");
    // const titleLengthMessage = computed(() => {
    //     return title.value.length + " adet karakter yazıldı.";
    // });
    const titleLengthMessage = computed(() => title.value.length + " adet katakter yazıldı.");
    return { title, titleLengthMessage};
}