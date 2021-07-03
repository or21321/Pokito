import { todoService } from "../services/todo-service.js";

export default {
    props: ['todoId', 'listIdx'],
    template: `
    <section class="todo-compose">
        <!-- <div> -->
            <textarea v-model="todoToEdit.txt" id="" cols="38" rows="3" placeholder="Enter a title for this card..."></textarea>
        <!-- </div> -->
        <div class="compose-features">
            <button @click="add">Add card</button>
            <button @click="cancel" class="material-icons">close</button>
        </div>
    </section>
    `,
    data() {
        return {
            todoToEdit: todoService.getEmptyTodo()
            // todoToEdit: todoService.getById(this.todoId, this.listIdx) || todoService.getEmptyTodo()
        }
    },
    created() {
        console.log('todo-compose created!');
    },
    computed: {
    },
    methods: {
        add() {
            console.log('add()', this.todoToEdit);
            this.$store.commit({ type: 'addTodoToList', todo: this.todoToEdit, listIdx: this.listIdx })
            this.$emit('closeCompose')
        },
        cancel() {
            console.log('cancel()');
            this.$emit('closeCompose')
        }
    }
}