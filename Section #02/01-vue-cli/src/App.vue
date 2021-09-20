// Ana parent <component :is="componentId"></component>
<template>
  // Child componentin çağrılması
  <app-header />
  <div class="container">
    <h3>Bu bir Vue CLI Uygulaması</h3>
    <p>Bugün component ve Vue CLI Konuları ele alındı</p>
  // Child componentin çağrılması
    <counter-item />
    <counterItem />
  </div>
</template>

<script>
import CounterItem from "@/components/CounterItem";
export default {
  // Componentlerin tanımlanması
  components: {
    CounterItem,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
