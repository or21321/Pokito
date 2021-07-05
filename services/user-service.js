import { storageService } from "./async-storage-service.js"
import { utilService } from "./util.service.js"

export const userService = {
    query,
    save
}

const KEY = 'users'

_createUsers()

function query() {
    return storageService.query(KEY)
        .then(users => {
            console.log('query()', users);
            return users;
        })
}

function _createUsers() {
    console.log('_createUsers');
    storageService.query(KEY)
        .then(users => {
            if (!users || !users.length) {
                users = [
                    _createUser('Or Hadar')
                ]

            }
            localStorage.setItem(KEY, JSON.stringify(users))
        })
}

function _createUser(name, clr = 'black', bcg = '#ffffff') {
    return { name, clr, bcg, _id: utilService.makeId() }
}

function save(user) {
    return storageService.putUser(KEY, user)
}