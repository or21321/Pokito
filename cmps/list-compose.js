import { boardService } from "../services/board-service.js";

export default {
    // props: ['todoId', 'listIdx'],
    template: `
    <section class="list-compose">
        <!-- <div> -->
            <textarea v-model="listToCompose.listName" id="" cols="38" rows="3" placeholder="Enter list title..."></textarea>
        <!-- </div> -->
        <div class="compose-features">
            <button @click="add">Add list</button>
            <button @click="cancel" class="material-icons">close</button>
        </div>
    </section>
    `,
    data() {
        return {
            listToCompose: {    
                listName: null
            }
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
            // this.$store.commit({ type: 'addList', listName: this.listToCompose.listName })
            this.$store.dispatch({ type: 'addList', listName: this.listToCompose.listName })
            this.$emit('closeListCompose')
        },
        cancel() {
            console.log('cancel()');
            this.$emit('closeListCompose')
        }
    }
}