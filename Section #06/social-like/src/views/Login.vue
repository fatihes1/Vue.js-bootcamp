<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Giriş Yap</h3>
      <input type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
      <input type="password" placeholder="Şifre" class="input mb-3" />
      <button class="default-button">Giriş yap</button>
      <span class="text-center mt-3 text-sm">
        Üye değilim,
        <router-link :to="{ name : 'RegisterPage'}" class="text-red-900 hover:text-black">
          Üye olmak istiyorum!
        </router-link>
      </span>
    </div>
</template>