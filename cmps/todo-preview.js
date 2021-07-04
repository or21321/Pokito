import { showMsg } from "../services/event-bus-service.js";

export default {
    props: ['todo', 'listIdx'],
    template: `
        <router-link :to="'/todo-app/'+todo._id" class="todo-preview">
            {{todo.txt}}
            <!-- <button @click="remove" class="remove-todo">X</button>
            <button @click="edit" class="edit-todo">Edit</button> -->
            <span class="delete-preview-btn material-icons" @click.prevent="remove">delete</span>
        </router-link>
    `,
    created() {
        // console.log('todo-preview created!', this.todo);
    },
    methods: {
        remove() {
        this.$store.dispatch({type: 'removeTodo', todoId: this.todo._id, listIdx: this.listIdx})
            .then(() => {   
                showMsg('Todo removed successfully')
            })
        },
        edit() {
            console.log('edit() from preview');
        },
    },
}