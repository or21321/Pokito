import todoList from "../cmps/todo-list.js";
import { boardService } from "../services/board-service.js";
import listCompose from "../cmps/list-compose.js";

export default {
    template: `
    <section v-if="board" class="todo-app app-main">
        <router-view></router-view>
        <div class="board-nav-container">
            <h2>Board</h2>            
            <h2>{{board.boardName}}</h2>
        </div>
        <div class="board-lists">
            <todo-list @addTodo="addTodo" v-for="(list, idx) in board.lists" :list="list" :listIdx="idx"></todo-list>
            <div v-if="isListComposeOn" class="list-compose-container">
                <list-compose @closeListCompose="isListComposeOn=false" 
                class="list-compose">
                </list-compose>
            </div>
            <div v-else @click="openNewList" class="list-add-btn">
                <h4 ><span class='material-icons'>add</span>Add another list</h4>
            </div>
        </div>
    </section>
    `,
    components: {
        todoList,
        listCompose
    },
    created() {
        this.$store.dispatch({ type: 'loadBoards' })
    },
    mounted() { 
        console.log('todo-app mounted!');
    },
    data() {
        return {
            isListComposeOn: false
        }
    },
    computed: {
        board() {
            return this.$store.getters.boardForDisplay
        }
    },
    methods: {
        addTodo(listIdx) {
            console.log('addTodo(), listIdx', listIdx);
            const todoToEdit = boardService.getEmptyTodo()
            console.log('todoToEdit:', todoToEdit);
            // this.$store.commit({type: 'addTodo', })
        },
        openNewList() {
            console.log('openNewList()');
            this.isListComposeOn = true
        },
        removeTodo(todoId) {
            this.$store.dispatch({ type: 'removeProduct', productId })
                .then(() => {
                    showMsg('Product was succesfully removed')
                })
                .catch((err) => {
                    showMsg('Cannot remove product, try again later', 'danger')
                })
        }
    }
}