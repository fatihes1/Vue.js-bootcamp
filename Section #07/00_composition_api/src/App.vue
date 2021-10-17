<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" v-model="title">  
    {{ titleLengthMessage }}
    <button @click="toggleIt">Toggle</button>
    <p v-if="show">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque inventore ab deleniti, eveniet nesciunt eos accusantium tempora blanditiis veritatis eligendi unde nihil aliquid odio culpa sunt ipsam a earum!
    </p>
    <hr />
    <button @click="counter++"> {{ counter }}  {{ oddOrEven }}</button>
    <hr />
    <input type="text" v-model="searchText">
    <p v-if="isTyping">Şu an yazıyor ...</p>
  </div>
</template>

<script>
import Counter from "./composables/Counter";
import Header from "./composables/Header";
import Toggle from "./composables/Toggle";
import Search from "./composables/Search";

export default {
  setup() {
    const { counter, oddOrEven }  = Counter();
    const { title, titleLengthMessage } = Header();
    const { show, toggleIt } = Toggle();
    const { searchText, isTyping } = Search();
    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping
    };
  }
}
</script>

