export default {
    props: ['todo'],
    template: `
        <router-link :to="'/todo-app/'+todo._id" class="todo-preview">
            {{todo.txt}}
            <!-- <button @click="remove" class="remove-todo">X</button>
            <button @click="edit" class="edit-todo">Edit</button> -->
        </router-link>
    `,
    created() {
        console.log('todo-preview created!', this.todo);
    },
    methods: {
        remove() {
            console.log('remove() from preview');
        },
        edit() {
            console.log('edit() from preview');
        },
    },
}