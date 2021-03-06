import todoList from "../cmps/todo-list.js";
import { boardService } from "../services/board-service.js";
import listCompose from "../cmps/list-compose.js";
import userProfile from "../cmps/user-profile.js";

export default {
    template: `
    <section v-if="board" class="todo-app app-main">
        <router-view></router-view>
        <div class="board-nav-container">
            <h2>Board</h2>            
            <h2>{{filteredBoard.boardName}}</h2>
        </div>
        <div class="board-lists">
            <todo-list @addTodo="addTodo" v-for="(list, idx) in filteredBoard.lists" :list="list" :listIdx="idx"></todo-list>
            <div v-if="isListComposeOn" class="list-compose-container">
                <list-compose @closeListCompose="isListComposeOn=false" 
                class="list-compose">
                </list-compose>
            </div>
            <div v-else @click="openNewList" class="list-add-btn">
                <h4 ><span class='material-icons'>add</span>Add another list</h4>
            </div>
        </div>
        <user-profile v-if="isUserProfileOn">
        </user-profile>
    </section>
    `,
    components: {
        todoList,
        listCompose,
        userProfile
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
        },
        filteredBoard() {
            if (!this.filterBy) return this.board
            const filteredLists = this.board.lists.map(list => {
                const filteredTodos = list.todos.filter(todo => todo.txt.toLowerCase().includes(this.filterBy.txt.toLowerCase()))
                console.log('list', list);
                console.log('filteredTodos', filteredTodos);
                console.log('filterBy', this.filterBy);
                console.log({ listName: list.listName, todos: filteredTodos });
                return { listName: list.listName, todos: filteredTodos }
            })
            console.log('filteredLists', filteredLists);
            return { boardName: this.board.boardName, lists: filteredLists }
        },
        filterBy() {
            console.log('filterBy()', this.$store.getters.filterBy);
            return this.$store.getters.filterBy
        },
        isUserProfileOn() {
            return this.$store.getters.isUserProfileOn
        }
    },
    methods: {
        addTodo(listIdx) {
            console.log('addTodo(), listIdx', listIdx);
            const todoToEdit = boardService.getEmptyTodo()
            console.log('todoToEdit:', todoToEdit);
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