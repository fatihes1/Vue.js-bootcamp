<script setup>
// import Input from "./components/Forms/Input.vue";
// import Select from "./components/Forms/Select.vue";
// import Label from "./components/Forms/Label.vue";

//* Componentleri yukarıdaki gibi tek tek import etmek yerine components dizininde oluşturulan
//* form-components.js dosyası ile namespaced olarak kullanabiliriz

//* form-components.js içerisinde tanımlı tüm componentler Form adı altında gelir ve nokta ile erişilebilir hale gelir 
import * as Form from "./components/form-components";

//* Bu tarz kullanımda artık componentlere yalın ismi ile erişmek yerine
//* Nokta kullanarak bulunduğu di
</script>

<template>
  <!-- <Label>
    Başlık
    <Input />
  </Label>
  <Label>
    Kategori
    <Select />
  </Label> -->
  <Form.Label>
    Başlık
    <Form.Input />
  </Form.Label>
  <Form.Label>
    Kategori
    <Form.Select />
  </Form.Label>
</template>