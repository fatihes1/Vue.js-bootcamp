<template>
  <div>
    // TodoList ve ResultBar componentleri
    <TodoList />
    // itemCount için binding işlemi ile inject olarak alınan provideData'ya bağlanıyor
    <ResultBar :itemCount="provideData.todoList.length" />
  </div>
</template>

<script>
// Componentlerin içeri aktarılması
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";
export default {
    // Ana comp. üzerinde provide edilen verinin 'inject' ile alınması
    inject: ["provideData"],
    props: {
      // Parent comp. üzerinden gelen datanın props ile alınması
        todoList: {
            type: Array,
            required: true
        }
    },
    // İçeri aktarılan componentlerin tanımlanması
    components: {
        TodoList,
        ResultBar
    }

}
</script>

<style>

</style>