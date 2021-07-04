import { boardService } from "../services/board-service.js";

export default {
    template: `
    <section v-if="todo" class='todo-details app-main'>
        <div class="todo-details-header">
            <span class="material-icons">web</span><textarea v-model="todo.txt" id="" cols="20" rows="2"></textarea>
            <router-link to="/todo-app">X</router-link>
        </div>
        <!-- <p>{{todo.txt}}</p> -->
        <!-- <p>{{todo.txt}}</p> -->
    </section>
    `,
    created() {
        console.log('todo-details created!');
        // this.$store.commit({type:'setTodoForDisplay', })
        this.loadTodo()
    },
    destroyed() {   
        this.saveTodoTxt()
    },
    data() {
        return {
            todo: null
        }
    },
    computed: {
        todoId() {
            return this.$route.params.todoId
        },
        todo() {    
            return this.$store.getters.todoForDisplay
        }
    },
    methods: {
        loadTodo() {
            const {todo, listIdx} = this.$store.dispatch({type: 'loadTodoForDisplay', todoId: this.todoId})
            this.todo = todo
            this.listIdx = listIdx
            // this.$store.getters.getTodoForDisplay
        },
        saveTodoTxt() { 
            console.log('saveTodoTxt()');
            this.$store.commit({type: 'editTodoTxt', todoId: this.todo._id, listIdx: this.listIdx, todo: this.todo})
        }
    },
    // watch: {
    //     '$route.params.todoId'(id) {
    //         console.log('Changed to', id);
    //         this.loadBug();
    //     }
    // }
}