<template>
  <div class="container">
      <div class="mb-2">
          <!-- router-link ile route'lar için gerekli url'lerin tanımlanması -->
          <router-link class="nav-link" active-class="active" to="/">Anasayfa</router-link>
          <router-link class="nav-link" active-class="active" to="/hakkimda">Hakkımda</router-link>
          <router-link class="nav-link" active-class="active" to="/detay/123">Detay</router-link>
      </div>
       <!-- views içinde tanımlanan comp. dosyalarının görüntülenebilmesi için router-view çağrılır -->
      <router-view></router-view>
  </div>
</template>

<style>
/* Link butonlarının stil kodları */
.nav-link {
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid #fa6558;
  color: #fa6558;
  display: inline-block;
  margin-right: 5px;
  margin-top: 5px !important;
}
.active {
  background-color: #fa6558;
  color: #fff;
}
</style>