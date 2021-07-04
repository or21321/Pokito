import { userService } from "../services/user-service.js"

export const userStore = {
    state: {
        isUserProfileOn: false,
        loggedinUser: null
    },
    getters: {
        isUserProfileOn(state) {
            return state.isUserProfileOn
        },
        loggedinUser(state) {
            return state.loggedinUser
        }
    },
    mutations: {
        toggleUserProfileModal(state) {
            state.isUserProfileOn = !state.isUserProfileOn
        },
        setLoggedinUser(state, {loggedinUser}) {    
            state.loggedinUser = loggedinUser
        }
    },
    actions: {
        toggleUserProfileModal({ commit }, payload) {
            commit(payload)
        },
        loadLoggedinUser(context) {
            console.log('loadLoggedinUser()');
            userService.query()
                .then(users => {
                    console.log('.then users', users);
                    context.commit({ type: 'setLoggedinUser', loggedinUser: users[0]})
                })
        }
    }
}