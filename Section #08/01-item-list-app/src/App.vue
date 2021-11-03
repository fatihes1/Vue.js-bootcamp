<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <app-sidebar :invoices="invoinceList" :editInvoince="editInvoince" />
    <invoice-content :saveInvoince="saveInvoince" :activeInvoice="state.activeInvoice" />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import appSidebar from "./components/appSidebar.vue"
import invoiceContent from "./components/invoinceContent.vue"
const invoinceList = ref([]);

//* for active invoice 
const state = reactive({ activeInvoice : null });

const saveInvoince = (invoince) => {
  invoinceList.value.push(invoince);
};
const editInvoince = (invoince) => {
  // console.log(invoince)
  state.activeInvoice = invoince;
  console.log("Stat : Active :>> ", state.activeInvoice);
}

</script>
