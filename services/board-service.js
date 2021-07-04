import { storageService } from './async-storage-service.js'
import { utilService } from './util.service.js'

const KEY = 'boards';

export const boardService = {
    query,
    getById,
    // remove,
    save,
    getEmptyTodo
}

_createBoard()

// This is like the backend
// var gBoards = storageService.load(KEY) || _createBoards()

// TODO: support paging and filtering and sorting
function query() {
    // const boards = JSON.parse(JSON.stringify(gBoards))
    console.log('query()');
    return storageService.query(KEY)
        .then(boards => {
            return boards;
        })
}
// function query() {
//     // const boards = JSON.parse(JSON.stringify(gBoards))
//     console.log('query()');
//     return storageService.query(KEY)
//         .then(boards => {
//             console.log('boards', boards);
//             return boards;
//         })
// }

function getById(id, selectedBoardIdx) {
    // console.log('gBoards', gBoards);
    let todo = null
    let listIdx = -1
    query()[selectedBoardIdx].lists.forEach(list => {
        if (todo) return
        listIdx++
        todo = list.todos.find(todo => todo._id === id)
    })
    return { todo, listIdx }
}

// function remove(id) {
//     const idx = gTodos.findIndex(todo => todo._id === id)
//     gTodos.splice(idx, 1)
//     storageService.store(KEY, gTodos)
// }

// function save(todo) {
//     const todoToSave = JSON.parse(JSON.stringify(todo))
//     const savedTodo = (todoToSave._id) ? _update(todoToSave) : _add(todoToSave)
//     storageService.store(KEY, gTodos)
//     return savedTodo;
// }

function save(boards) {
    const boardsToSave = JSON.parse(JSON.stringify(boards))
    return storageService.putBoards(KEY, boardsToSave)
        .then((savedBoards) => {
            console.log('savedBoards', savedBoards);
            return boardsToSave;
        })
}


// function _add(todo) {
//     todo._id = utilService.makeId()
//     gTodos.push(todo)
//     return todo
// }

// function _update(todo) {
//     const idx = gTodos.findIndex(currTodo => currTodo._id === todo._id)
//     gTodos.splice(idx, 1, todo)
//     return todo
// }

function getEmptyTodo() {
    return {
        _id: utilService.makeId(),
        txt: ''
    }
}

function _createBoard() {
    storageService.query(KEY)
        .then(boards => {
            const boardsListsTodos = boards[0].lists.some(list => { 
                return list.todos.length > 0
            })
            if (!boards || !boardsListsTodos) {
                boards = [
                    {
                        boardName: 'Sprint 3',
                        lists: [
                            {
                                listName: 'To Do',
                                todos:
                                    [
                                        _createTodo('Make a great hoempage'), _createTodo('Add some style to header, fix background-color difference'),
                                        _createTodo('Show unread emails count on top'), _createTodo('Go through pdf to make sure you got everything done')
                                    ]
                            },
                            {
                                listName: 'Doing',
                                todos:
                                    [
                                        _createTodo('Make pixel-perfect email-compose'), _createTodo('Make pixel-perfect email-compose button'),
                                    ]
                            },
                            {
                                listName: 'Done',
                                todos:
                                    [
                                        _createTodo('Create user-msg component with success / error msgs'), _createTodo('Sort emails by date / title'),
                                        _createTodo('make search filter by subject & read or unread'), _createTodo('edit email-features to work onclick, and add the additional features you need to work with them.'),
                                    ]
                            }
                        ]
                    }
                ]
                // storageService.post(KEY, boards)
                // localStorage.setItem(KEY, JSON.stringify(boards))
                storageService.putBoards(KEY, boards)
            }
            return boards;
        })
}
// Why does _ works here?   
function _createTodo(txt) {
    // const txt = txt
    return {
        _id: utilService.makeId(),
        txt
    }
}