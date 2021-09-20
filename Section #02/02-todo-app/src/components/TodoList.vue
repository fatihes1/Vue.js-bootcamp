<template>
  <ul>
    <TodoListItem v-for="todoItem in provideData.todoList" :key="todoItem.id" :item="todoItem" />
  </ul>
</template>
<script>
// Component'in içeri aktarılması
import TodoListItem from "@/components/TodoListItem";
export default {
  // props: ["myData"],
  // Ana component üzerinden proive edilen içerisinde todoList bulunduran verinin inject edilmesi
  inject: ["provideData"],
  //   data(){
  //       return {
  //           myData : ""
  //       }
  //   },
  //   props: {
  //     myData: {
  //       type: String,
  //       required: false,
  //       default: ""
  //     }
  //   },
  // İçeri aktarılan componentlerin dahil edilmesi
  components: {
    TodoListItem
  }
};
</script>