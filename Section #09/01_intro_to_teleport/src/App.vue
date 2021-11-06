<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- Belirtilen bir lokasyona ( bu örnek için index.html içerisindeki id değeri #modal-area olan div). Bir içeriği göstermek için kullanılır.
  Bu işlemin yapılmasındaki en büyük sebep ekleyeceğimiz bölüm eklenilen comp.'in css dosyalarından etkilenebilir.
  Kısaca teleport bir hedefe (bölüme) HTML basmak için kullanılır.  -->
  <teleport to='#modal-area'>
    <h3>Teleport</h3>
  </teleport>

  <teleport to='#modal-area'>
    <img alt="Vue logo" src="./assets/logo.png" />  
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </teleport>
</template>

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
