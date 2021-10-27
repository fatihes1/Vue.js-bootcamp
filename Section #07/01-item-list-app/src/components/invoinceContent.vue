<template>
    <section class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl">
      <contact-section :contact="state.contact" />
      <!-- {{ state.contact }} -->
      <div class="mt-5">
        <heading title="Fatura Kalemleri" />
        <invoice-items :items="state.items" :addInvoinceItem="addInvoinceItem" />
        
      </div>
      <!-- Summary -->
      <invoice-summary :items="state.items" />
      <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
      <div class="actionbar text-right my-5">
        <button @click="onSubmit" class="purple-button">Kaydet</button>
      </div>
    </section>
</template>
<script setup>
import invoiceItems from "./invoiceItems.vue"
import invoiceSummary from "./invoiceSummary.vue"
import contactSection from "./contactSection.vue"
import { provide, reactive, watch } from "vue"

const props = defineProps({ saveInvoince : Function, activeInvoice : [Object, null] })

const state = reactive({
  contact : {
    contact_name : null,
    email : null,
    city : null,
    country : null,
    zipcode : null,
    item: []
  },
  items : [],
});
const addInvoinceItem = () => {
  state.items.push({
    id : new Date().getTime(),
    name : null,
    qty : null,
    unit_price : 0.0,
    total_price : 0.0
  })
};
const deleteInvoinceItem = (invoinceItem) => {
  state.items = state.items.filter((i) => i.id !== invoinceItem.id);
};
provide("deleteInvoinceItem", deleteInvoinceItem);

const onSubmit = () => {
  props.saveInvoince({ ...state, created_at: new Date(), id : new Date().getTime() });
  state.contact = {
    contact_name : null,
    email : null,
    city : null,
    country : null,
    zipcode : null,
    item: []
  };
  state.items = [];
  
};

watch(() => props.activeInvoice, (activeInvoice) => {
  if (activeInvoice) {
    state.contact = {
      ...activeInvoice.contact
    };
    state.items = [...activeInvoice.items];
  }
  // console.log("activeInvoice :>>", activeInvoice);
})

</script>