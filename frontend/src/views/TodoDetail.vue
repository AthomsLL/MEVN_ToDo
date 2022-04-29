<template>
    <div>
        <h1>Editing a ToDo</h1>

        <div>
            Author : <h4>{{ state.author }}</h4>
            Todo Item : <h4>{{ state.todo }}</h4>
        </div>

        <hr>

        <input type="text" placeholder="Author" v-model="state.newAuthor">
        <span> Test: {{ state.newAuthor }}</span>
        <br>
        <input type="text" placeholder="Todo" v-model="state.newTodoItem">
        <span> Test: {{ state.newTodoItem }}</span>
        <br>
        <button @click="editTodo()">Update Item</button>

        <hr>
    </div>
</template>
    
<script>
import todocrud from '../modules/todocrud'
import { onMounted } from 'vue'

export default {
    setup() {
        const { editTodo, getOneTodo, state } = todocrud()

        onMounted(() => {
            getOneTodo()
        })

        return { editTodo, getOneTodo, state }
    }
}
</script>

<style>

</style>