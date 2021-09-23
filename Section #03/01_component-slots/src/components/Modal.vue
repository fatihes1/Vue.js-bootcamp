<template>
  <div class="container">
    <div class="header">
        <!-- modal olarak yollanan title verisinin yazdırılması -->
        <slot name="title" />
    </div>
    <div class="content my-2">
        <!-- modal olarak yollanan content verisinin yazdırılması -->
        <slot name="content" />
    </div>
    <div class="footer text-right">
        <button class="mt-2">Kapat</button>
        <!-- props olarak alınan methodun click event'ine atanması -->
        <button @click="onSave" class="ml-2 green">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
    // Parent component üzerinden gelen verilerin props ile alınması
    // Bu sayede <template> içerisinde kullanılabilir hale gelir.
    props: ["title", "content", "onSave"]
}
</script>

<style>

</style>