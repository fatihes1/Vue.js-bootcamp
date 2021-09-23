<template>
  <ul>
      <!-- store.js içerisinde bulunan getter işlevi ile getirilen 'woodItems' değerlerini yazdırır -->
      <li v-for="(item, index) in woodItems" :key="index">
          {{item.title}}
      </li>
  </ul>
</template>

<script>
// mapGetters işlevinin vuex'ten içeri aktarılması
import {mapGetters} from "vuex";
export default {
    computed: {
        // mapGetter işlevimim 'spread syntax' yardımıyla çağrılması
        ...mapGetters({
            woodItems: "_woodItems",
            activeUser: "_activeUser"
        })
    }
}
</script>
