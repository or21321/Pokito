import todoCompose from "./todo-compose.js";
import todoPreview from "./todo-preview.js";

export default {
    props: ['list', 'listIdx'],
    template: `
    <ul class="todo-list">
        <h4>{{list.listName}}</h4>
        <todo-preview v-for="todo in list.todos" :key="todo._id"
         :todo="todo" @remove="removeTodo" @edit="editTodo" />
         <todo-compose v-if="isTodoComposeOn" :listIdx="listIdx" @closeCompose="isTodoComposeOn=false"/>
         <div v-else @click="addTodo" class="todo-compose-btn">
             <span class="material-icons">add</span> Add a card
         </div>
    </ul>
    `,
    components: {
        todoPreview,
        todoCompose
    },
    created() {
        console.log('todo-list created! list:', this.list);
        console.log('todo-list created! listIdx:', this.listIdx);
    },
    data() {
        return {
            todoToEdit: null,
            isTodoComposeOn: false
        }
    },
    methods: {
        removeTodo() {
            console.log('removeTodo() from list');
        },
        editTodo() {
            console.log('editTodo from list');
        },
        addTodo() { 
            console.log('addTodo()');
            this.isTodoComposeOn = !this.isTodoComposeOn
            // this.$emit('addTodo', this.listIdx)
        }
    },
}