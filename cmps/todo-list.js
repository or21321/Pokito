import todoPreview from "./todo-preview.js";

export default {
    props: ['list'],
    template: `
    <ul class="todo-list">
        <h4>{{list.listName}}</h4>
        <todo-preview v-for="todo in list.todos" :key="todo._id"
         :todo="todo" @remove="removeTodo" @edit="editTodo" />
         <div class="todo-compose-btn">
             <span class="material-icons">add</span> Add a card
         </div>
    </ul>
    `,
    components: {
        todoPreview
    },
    created() {
        console.log('todo-list created! list:', this.list);
    },
    data() {
        return {

        }
    },
    methods: {
        removeTodo() {
            console.log('removeTodo() from list');
        },
        editTodo() {
            console.log('editTodo from list');
        },
    },
}