import { todoService } from "../services/todo-service.js";

export default {
    template: `
    <section v-if="todo" class='todo-details app-main'>
        <!-- <h2>{{}}</h2> -->
        <p>{{todo.txt}}</p>
    </section>
    `,
    created() {
        console.log('todo-details created!');
    },
    data() {
        return {
            todo: null
        }
    },
    methods: {
        loadTodo() {
            const id = this.$route.params.todoId
            todoService.getById(id)
                .then(todo => {
                    this.todo = todo
                })
        }
    },
    watch: {
        '$route.params.todoId'(id) {
            console.log('Changed to', id);
            this.loadBug();
        }
    }
}