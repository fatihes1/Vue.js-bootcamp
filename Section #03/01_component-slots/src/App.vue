<template>
  <Modal>
      <!-- title slotunun tanımlanması -->
      <template #title>
          <h3>Slot ile gelen title bilgisi</h3>
      </template>
      <!-- content slotunun tanımlanması -->
      <template v-slot:content>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus tempora cum necessitatibus quaerat 
          fuga eos quo quas facere. Similique quibusdam quos alias assumenda. Enim sit accusamus corrupti ut quis!
         </p>      
      </template>
    
      <template #default>
          Bu alan default olarak görünür.
      </template>
  </Modal>
</template>

<script>
// Componentlerin içeri aktarılması
import Modal from "@/components/Modal";
export default {
    // İçeri aktarılan componentlerin kullanılabilmesi için tanımlandığı alan
    components: {
        Modal
    },
    // onSave methodunu tetikleyen event çalıştığında çalışacak işlev
    methods: {
        onSave() {
            alert("Saved!");
        }
    }
}
</script>

<style>

</style>