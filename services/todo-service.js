import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

const KEY = 'todos';

export const todoService = {
    query,
    getById,
    remove,
    save,
    getEmptyTodo
}

// This is like the backend
var gTodos = _createTodos()

// TODO: support paging and filtering and sorting
function query() {
    const todos = JSON.parse(JSON.stringify(gTodos))
    return todos;
}

function getById(id) {
    return gTodos.find(todo => todo._id === id)
}

function remove(id) {
    const idx = gTodos.findIndex(todo => todo._id === id)
    gTodos.splice(idx, 1)
    storageService.store(KEY, gTodos)
}

function save(todo) {
    const todoToSave = JSON.parse(JSON.stringify(todo))
    const savedTodo = (todoToSave._id) ? _update(todoToSave) : _add(todoToSave)
    storageService.store(KEY, gTodos)
    return savedTodo;
}


function _add(todo) {
    todo._id = utilService.makeId()
    gTodos.push(todo)
    return todo
}

function _update(todo) {
    const idx = gTodos.findIndex(currTodo => currTodo._id === todo._id)
    gTodos.splice(idx, 1, todo)
    return todo
}

function getEmptyTodo() {
    return {
        _id: utilService.makeId(),
        txt: ''
    }
}

function _createTodos() {
    var boards = storageService.load(KEY)
    if (!boards || !boards.length) {
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
        storageService.store(KEY, boards)
    }
    return boards;
}
// Why does _ works here?   
function _createTodo(txt) {
    // const txt = txt
    return {
        _id: utilService.makeId(),
        txt
    }
}