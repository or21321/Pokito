import { boardService } from "../services/board-service.js";

export default {
    template: `
    <section v-if="todo" class='todo-details app-main'>
        <div class="todo-details-header">
            <span class="material-icons">web</span><textarea v-model="todoCopy.txt" id="" cols="20" rows="2"></textarea>
            <router-link class="close-btn" to="/todo-app">X</router-link>
        </div>
    </section>
    `,
    created() {
        console.log('todo-details created!', this.todo);
        this.loadTodo()
        console.log(this.todo);
    },
    destroyed() {  
        this.saveTodoTxt()
    },
    data() {
        return {
           
        }
    },
    computed: {
        todoId() {
            return this.$route.params.todoId
        },
        todo() {    
            return this.$store.getters.todoForDisplay
        },
        listIdx() { 
            return this.$store.getters.currDisplayedTodoListIdx
        },
        todoCopy() {    
            return JSON.parse(JSON.stringify(this.todo))
        }
    },
    methods: {
        loadTodo() {
            this.$store.dispatch({type: 'loadTodoForDisplay', todoId: this.todoId})
            // const {todo, listIdx} = this.$store.dispatch({type: 'loadTodoForDisplay', todoId: this.todoId})
            // this.todo = todo
            // this.listIdx = listIdx
        },
        saveTodoTxt() { 
            console.log('saveTodoTxt()')
            this.$store.dispatch({type: 'editTodoTxt', todoId: this.todo._id, todo: this.todoCopy})
        }
    },
}