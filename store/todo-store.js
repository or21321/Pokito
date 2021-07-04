import { boardService } from "../services/board-service.js";

export const todoStore = {
    state: {
        boards: [],
        selectedBoardIdx: 0
        // selectedBoardIdx: null
    },
    getters: {
        boardForDisplay(state) {
            // console.log('boardForDisplay', state.boards[state.selectedBoardIdx]);
            return state.boards[state.selectedBoardIdx]
        },
        // todoForDisplay(context, { id }) {
        //     console.log('context', context);
        //     console.log('id', id);
        // },
    },
    mutations: {
        setBoards(state, {boards}) {
            // console.log('setBoards()', boards);
            state.boards = boards
        },
        addTodoToList(state, payload) {
            console.log('addTodoToList() payload:', payload);
            const { listIdx, todo } = payload
            state.boards[state.selectedBoardIdx].lists[listIdx].todos.push(todo);
            // state.boards[state.selectedBoardIdx].lists[listIdx].push(todo)
        },
        // addList(state, payload) {
        //     console.log('from store addList payload', payload);
        //     state.boards[state.selectedBoardIdx].lists.push({ listName: payload.listName, todos: [] })
        // },
        removeTodo(state, { todoId, listIdx }) {
            console.log(todoId);
            const todoIdx = state.boards[state.selectedBoardIdx].lists[listIdx].todos.findIndex(todo => todo._id === todoId)
            console.log('todoIdx', todoIdx);
            console.log('listIdx', listIdx);
            if (todoIdx !== -1) state.boards[state.selectedBoardIdx].lists[listIdx].todos.splice(todoIdx, 1)
        },
        // editTodoTxt(state, { todoId, listIdx, todo }) {
        //     console.log('todoId', todoId);
        //     console.log('listIdx', listIdx);
        //     const todoIdx = state.boards[state.selectedBoardIdx].lists[listIdx].todos.findIndex(todo => todo._id === todoId)
        //     console.log('todoIdx', todoIdx);
        //     state.boards[state.selectedBoardIdx].lists[listIdx].todos.splice(todoIdx, 1, todo)
        // },
        // saveBoard(state) {   
        //     console.log('saveBoard()');
        //     boardService.save(state.boards)
        // }
    },
    actions: {
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
        loadTodoForDisplay(context, {todoId}) {    
            console.log('getById', todoId);
        }
    },
}