import todoList from "../cmps/todo-list.js";
import { todoService } from "../services/todo-service.js";

export default {
    template: `
    <section class="todo-app app-main">
        <router-view></router-view>
        <div class="board-nav-container">
            <h2>Board</h2>            
            <h2>{{board.boardName}}</h2>
        </div>
        <!-- <todo-list v-for="todo in todos" :todo="todo" :key="todo._id">
            <todo-preview></todo-preview>
        </todo-list> -->
        <div class="board-lists">
            <todo-list @addTodo="addTodo" v-for="(list, idx) in board.lists" :list="list" :listIdx="idx"></todo-list>
        </div>
    </section>
    `,
    components: {
        todoList
    },
    created() {
        console.log('todo-app created!', this.board);
    },
    data() {
        return {
            // boards: todoService.query(),
            // selectedBoardIdx: 0,
        }
    },
    computed: { 
        board() {
            // return this.$store.state.boards
            return this.$store.getters.boardForDisplay
        }
    },
    methods: {  
        addTodo(listIdx) {  
            console.log('addTodo(), listIdx', listIdx);
            const todoToEdit = todoService.getEmptyTodo()
            console.log('todoToEdit:', todoToEdit);
            // this.$store.commit({type: 'addTodo', })
        }
    }
}