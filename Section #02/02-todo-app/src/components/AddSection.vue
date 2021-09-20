<template>
  <div>
    <label for="todoText"></label>
    // todo alan input alanı, inpu değeri v-model ile kaydediliyor ve enter tuşuna basıldığında props olarak parent component'ten alınan işlev çağrılıyor
    <input type="text" v-model="todoText" @keydown.enter="addNewTodo(todoText)" id="todoText" placeholder="Yapılacak bir şey giriniz..">
  </div>
</template>

<script>
export default {
    props: {
        // props ile parent comp. 'addNewTodo' işlevi alınıyor.
        addNewTodo: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            todoText: null
        };
    },
    methods : {
        // addNewTodo() {
        //     this.$emit("add-todo", this.todoText);
        //     this.todoText = null
        // }
    }
};
</script>

<style>

</style>