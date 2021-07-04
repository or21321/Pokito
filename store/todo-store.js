import { boardService } from "../services/board-service.js";

export const todoStore = {
    state: {
        boards: [],
        selectedBoardIdx: 0,
        todoForDisplay: null,
        currDisplayedTodoListIdx: null
    },
    getters: {
        boardForDisplay(state) {
            // console.log('boardForDisplay', state.boards[state.selectedBoardIdx]);
            return state.boards[state.selectedBoardIdx]
        },
        todoForDisplay(state) {
            return state.todoForDisplay
        },
    },
    mutations: {
        setBoards(state, { boards }) {
            // console.log('setBoards()', boards);
            state.boards = boards
        },
        addTodoToList(state, payload) {
            console.log('addTodoToList() payload:', payload);
            const { listIdx, todo } = payload
            state.boards[state.selectedBoardIdx].lists[listIdx].todos.push(todo);
            // state.boards[state.selectedBoardIdx].lists[listIdx].push(todo)
        },
        addList(state, payload) {
            console.log('from store addList payload', payload);
            state.boards[state.selectedBoardIdx].lists.push({ listName: payload.listName, todos: [] })
        },
        removeTodo(state, { todoId, listIdx }) {
            console.log(todoId);
            const todoIdx = state.boards[state.selectedBoardIdx].lists[listIdx].todos.findIndex(todo => todo._id === todoId)
            console.log('todoIdx', todoIdx);
            console.log('listIdx', listIdx);
            if (todoIdx !== -1) state.boards[state.selectedBoardIdx].lists[listIdx].todos.splice(todoIdx, 1)
        },
        // saveBoard(state) {   
            //     console.log('saveBoard()');
            //     boardService.save(state.boards)
            // }
            setTodoForDisplay(state, { todo, listIdx }) {
                console.log('setTodoForDisplayIdxs()', todo, listIdx);
                state.todoForDisplay = todo
                state.currDisplayedTodoListIdx = listIdx
                
                // state.todoForDisplay = {todo: todo, listIdx: listIdx}
            },
            editTodoTxt(state, {todoIdx, todo}) {   
                console.log('editTodoTxt', todoIdx, todo);
                state.boards[state.selectedBoardIdx].lists[state.currDisplayedTodoListIdx].todos.splice(todoIdx, 1, todo)
            }
        },
        actions: {
        editTodoTxt(context, { todoId, todo }) {
            console.log('todoId', todoId);
            console.log('todo', todo);
            const todoIdx = context.state.boards[context.state.selectedBoardIdx].lists[context.state.currDisplayedTodoListIdx].todos.findIndex(todo => todo._id === todoId)
           
            context.commit( {type: 'editTodoTxt', todoIdx, todo})

            boardService.save(context.state.boards)
            .then((boards) => {
                console.log('after save', boards);
            })
        },
        loadBoards(context) {
            // console.log('loadBoards()');
            // console.log('Context', context);
            return boardService.query()
                .then(boards => {
                    // console.log('boards', boards);
                    context.commit({ type: 'setBoards', boards: boards })
                    return boards;
                })
                .catch(err => {
                    console.log('Cannot load boards', err);
                    throw err;
                })
        },
        removeTodo(context, payload) {
            context.commit(payload)
            // context.commit({type: 'saveBoard'})
            boardService.save(context.state.boards)
                .then((boards) => {
                    console.log('after save', boards);
                })
        },
        addTodoToList(context, payload) {
            context.commit(payload)
            boardService.save(context.state.boards)
                .then((boards) => {
                    console.log('after save', boards);
                })
        },
        loadTodoForDisplay(context, { todoId }) {
            console.log('loadTodoForDisplay', todoId);

            let todo = null
            let listIdx = -1

            context.state.boards[context.state.selectedBoardIdx].lists.forEach(list => {
                if (todo) return
                listIdx++
                todo = list.todos.find(todo => todo._id === todoId)
            })
            console.log('todo', todo);
            context.commit({ type: 'setTodoForDisplay', todo, listIdx })
        },
        addList(context, payload) {
            console.log('from store addList payload', payload);
            context.commit(payload)
            boardService.save(context.state.boards)
                .then((boards) => {
                    console.log('after save', boards);
                })
        },
    },
}