import todoList from "../cmps/todo-list.js";
import { todoService } from "../services/todo-service.js";

export default {
    template: `
    <section class="todo-app app-main">
        <router-view></router-view>
        <div class="board-nav-container">
            <h2>Board</h2>            
            <h2>{{boards[selectedBoardIdx].boardName}}</h2>
        </div>
        <!-- <todo-list v-for="todo in todos" :todo="todo" :key="todo._id">
            <todo-preview></todo-preview>
        </todo-list> -->
        <div class="board-lists">
            <todo-list v-for="list in boards[0].lists" :list="list"></todo-list>
        </div>
    </section>
    `,
    components: {
        todoList
    },
    created() {
        console.log('todo-app created!', this.boards);
    },
    data() {
        return {
            boards: todoService.query(),
            selectedBoardIdx: 0,
        }
    },
}