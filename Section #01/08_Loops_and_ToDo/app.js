const app = Vue.createApp({
    data() {
      return {
        // Yapılacakları tutacak olan liste ve örnek veriler
        // Her bir todo bir nesne olarak atandı
        todoList: [
          { id: 1, text: "Vue Bootcamp Hafta 1", completed: false },
          { id: 2, text: "Vue Bootcamp Hafta 2", completed: false },
          { id: 3, text: "Vue Bootcamp Hafta 3", completed: false },
          { id: 4, text: "Vue Bootcamp Hafta 4", completed: false },
          { id: 5, text: "Vue Bootcamp Hafta 5", completed: false },
          { id: 6, text: "Vue Bootcamp Hafta 6", completed: false },
          { id: 7, text: "Vue Bootcamp Hafta 7", completed: false },
        ],
      };
    },
    methods: {
      // butona girilen değeri todo olarak listeye ekler
      // Benzersiz bir id değeri için data modülünü kullanır
      // Başlangıçta tamamlanmamış olacak yani checkbox için checked durumu olmadan
      addTodo(event) {
        this.todoList.push({
          id: new Date().getTime(),
          text: event.target.value,
          completed: false,
        });
        // Girdi alanını tekrar sıfırlar
        event.target.value = "";
      },
      // Silinmesi istenen değere göre filtreleme yapıp yeni 'todoList' ataması 
      removeItem(todoItem) {
        this.todoList = this.todoList.filter((todo) => todo !== todoItem);
      },
    },
    // Tamamlanmış ve tamamlanmamış görevlerin değerini filtreleme ile verecek olan değişkenler
    computed: {
      completedItemCount() {
        return this.todoList.filter((t) => t.completed).length;
      },
      unCompletedItemCount() {
        return this.todoList.filter((t) => !t.completed).length;
      },
    },
  }).mount("#app");