<template>
  <div class="container">
      <div class="d-flex justify-content-between align-items-center">
          <!-- Tıklandığında activeComponent değerini değiştiren butonlar -->
          <button class="red" @click="activeComponent= 'red'">Red</button>
          <button class="green" @click="activeComponent= 'green'">Green</button>
          <button class="blue" @click="activeComponent= 'blue'">Blue</button>
      </div>
      <!-- <Red msg="Red Component" v-if="activeComponent == 'Red'" class="mb-2" />
      <Green v-if="activeComponent == 'Green'" class="mb-2" />
      <Blue v-if="activeComponent == 'Blue'" class="mb-2" /> -->
      {{ activeComponent }}
      <!-- Sadece bir componentin aktif olarak çalışmasını sağlamak için keep-alive kullanılır -->
      <keep-alive>
          <component :is="activeComponent" msg="Red Component2">
              <h3 class="bg-green text-white">Green Component</h3>
          </component>
      </keep-alive>
  </div>
</template>

<script>
// Componentlerin içeri aktarılması
import Red from "@/components/Red";
import Green from "@/components/Green";
import Blue from "@/components/Blue";
export default {
    // İçeri aktarılan componentlerin tanımlanması
    components: {
        Red,
        Green,
        Blue
    },
    data() {
        return {
            // aktif olan componentin değerini tutacak olan değer
            activeComponent: "Red"
        };
    }

}
</script>

<style>

</style>