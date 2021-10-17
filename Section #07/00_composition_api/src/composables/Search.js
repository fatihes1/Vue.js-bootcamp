import { ref, watchEffect } from "vue";

export default function() {
    const searchText = ref("");
    const isTyping = ref(false);
    // watch(searchText, () => {
    //     if(searchText.value.length > 0) {
    //         isTyping.value = true;
    //         setTimeout(() => {
    //             isTyping.value = false;
    //         }, 1000);
    //     }
    // })
    const stop = watchEffect((onValidate) => {
        if (searchText.value.length > 0) {
            isTyping.value = true;
            const typing = setTimeout(() => {
                isTyping.value = false;
                // stop();
            }, 1200);
            onValidate(() => clearTimeout(typing));
        }
    })
    return { searchText, isTyping};
}