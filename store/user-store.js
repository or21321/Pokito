import { userService } from "../services/user-service.js"

export const userStore = {
    state: {
        isUserProfileOn: false,
        loggedinUser: null,
        avatarUrl: null
    },
    getters: {
        isUserProfileOn(state) {
            return state.isUserProfileOn
        },
        loggedinUser(state) {
            return state.loggedinUser
        },
        // avatarUrl(state) {  
        //     return state.avatarUrl
        // },
        avatarUrl(state) {  
            const backgroundColor = state.loggedinUser.bcg
            const foregroundColor = state.loggedinUser.clr
            const name = state.loggedinUser.name
            // const nameInitials = name.split(' ').map(str => str.charAt[0].toUpperCase())
            // console.log('nameInitials', nameInitials);
            // console.log('name', name.split(' ').map(str => str.charAt(0).toUpperCase()).join(''));
            const nameInitials = name.split(' ').map(str => str.charAt(0).toUpperCase()).join('')
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
    
            canvas.width = 30;
            canvas.height = 30;
            // Draw background
            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
            // Draw text
            context.strokeStyle = foregroundColor;
            context.font = "bold 15px Segoe-UI";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(nameInitials, canvas.width / 2, canvas.height / 2);
            context.strokeText(nameInitials, canvas.width / 2, canvas.height / 2)
            console.log('canvas.toDataURL("image/png")', canvas.toDataURL("image/png"));
            // this.$store.dispatch({type: 'setAvatarUrl', avatarUrl: canvas.toDataURL("image/png")})
            return canvas.toDataURL("image/png");
        }
    },
    mutations: {
        toggleUserProfileModal(state) {
            state.isUserProfileOn = !state.isUserProfileOn
        },
        setLoggedinUser(state, {loggedinUser}) {    
            state.loggedinUser = loggedinUser
        },
        setUserPrefs(state, {user}){
            console.log('setUserPrefs MUTATE payload', user);
            userService.save(JSON.parse(JSON.stringify(user)))
                .then(user => { 
                    console.log('after saving user', user);
                    state.loggedinUser = user
                })
        },
        setAvatarUrl(state, {avatarUrl}) {  
            state.avatarUrl = avatarUrl
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
        },
        setUserPrefs(context, payload) {    
            context.commit(payload)
        },
        setAvatarUrl(context, payload) {    
            context.commit(payload)
        }
    }
}