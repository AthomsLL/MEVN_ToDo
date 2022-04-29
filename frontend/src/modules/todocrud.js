import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const urlAPI = 'http://localhost:3000/todos'

const getTodos = () => {

    const route = useRoute();
    const router = useRouter();

    const state = ref({
        newAuthor: '',
        newTodoItem: '',
        todos: {},
        author: '',
        todo: '',
        todoId: route.params.id
    })

    const todoId = state.value.todoId


    const getAllTodos = () => {
        try {
             axios.get(urlAPI)
            .then(response => response.data)
            .then(data => {
                state.value.todos = data
            })
        } 
        catch(error) {
            console.log(error)
        }
    }

    const getOneTodo = () => {
        try {
             axios.get(`${urlAPI}/get/${todoId}`)
            .then(response => response.data)
            .then(data => {
                state.value.author = data.author,
                state.value.todo = data.todo
            });
        }
        catch(error) {
            console.log(error)
        }
    }

    const newTodo = () => {
        axios.post(`${urlAPI}/new`, {
            author: state.value.newAuthor,
            todo: state.value.newTodoItem
        })
        .then( 
            getAllTodos()
        )
        .catch(error => {
            console.log(error)
        })
    }

    const deleteTodo = (id) => {
        axios.delete(`${urlAPI}/delete/${id}`)
        .then(
            getAllTodos()
        )
        .catch(error => {
            console.log(error)
        })
    }

    const editTodo = () => {
        axios.put(`${urlAPI}/update/${todoId}`, { 
            author: state.value.newAuthor,
            todo: state.value.newTodoItem
        })
        .then(() => console.log('Informations mises à jour avec succès !'))
        .catch(error => {
            console.log(error)
        })
        router.push('/todos')
    }

    return {
        state,
        getAllTodos,
        getOneTodo,
        newTodo,
        deleteTodo,
        editTodo
    }
}

export default getTodos