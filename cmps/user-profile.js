// import { userService } from "../services/user-service.js";
// import { userStore } from "../store/user-store.js";
// import Avatar from '../node_modules/vue-avatar/src/index'
// import Avatar from '../node_modules/vue-avatar/src/index.js'

export default {
    template: `
    <section v-if="loggedinUser" class="user-profile">
        <h3>Profile</h3>
        <div class="user-info">
            <div>
                <textarea @keyup="setUserPrefs" cols="20" rows="1" v-model="loggedinUser.name"></textarea>
                <!-- <input type="text" placeholder="loggedinUser.name" v-model="loggedinUser.name"> -->
                <!-- <input type="text" placeholder="loggedinUser.name" v-model="loggedinUser.name"> -->
            </div>
            <div>
                <div class="user-pref">
                    <input @change="setUserPrefs"  type="color" v-model="loggedinUser.clr">
                    <span class="tooltip-text" style="font-size: 14px">Color</span>
                </div>
                <div class="user-pref">
                    <input @change="setUserPrefs" type="color" v-model="loggedinUser.bcg">
                    <span class="tooltip-text" style="font-size: 14px">Background-Color</span>
                </div>
                <div class="avatar">
                    <img :src="avatarUrl">
                </div>
            </div>
        </div>
        <button @click="close" class="close-btn">
            X
        </button>
    </section>
    `,
    components: {
        // Avatar
    },
    created() {
        console.log('user-profile created!');
        this.loadLoggedinUser()
        // this.avatarUrl = this.generateAvatar(this.loggedinUser.bcg, this.loggedinUser.clr, this.loggedinUser.name)
    },
    computed: {
        loggedinUser() {
            return JSON.parse(JSON.stringify(this.$store.getters.loggedinUser))
        },
        data() {
            return {
                // canvas: null,
                // ctx: null
                avatarUrl: null
            }
        },
        avatarUrl() {   
            return this.$store.getters.avatarUrl
        }
    },
    methods: {
        // generateAvatar(backgroundColor, foregroundColor, name) {
            // const nameInitials = name.split(' ').map(str => str.charAt[0].toUpperCase())
            // console.log('nameInitials', nameInitials);
            // console.log('name', name.split(' ').map(str => str.charAt(0).toUpperCase()).join(''));
            // const nameInitials = name.split(' ').map(str => str.charAt(0).toUpperCase()).join('')
            // const canvas = document.createElement("canvas");
            // const context = canvas.getContext("2d");
    
            // canvas.width = 50;
            // canvas.height = 50;
            // Draw background
            // context.fillStyle = backgroundColor;
            // context.fillRect(0, 0, canvas.width, canvas.height);
            // Draw text
            // context.strokeStyle = foregroundColor;
            // context.font = "bold 18px Segoe-UI";
            // context.textAlign = "center";
            // context.textBaseline = "middle";
            // context.fillText(nameInitials, canvas.width / 2, canvas.height / 2);
            // context.strokeText(nameInitials, canvas.width / 2, canvas.height / 2)
            // console.log('canvas.toDataURL("image/png")', canvas.toDataURL("image/png"));
            // this.$store.dispatch({type: 'setAvatarUrl', avatarUrl: canvas.toDataURL("image/png")})
            // this.avatarUrl = canvas.toDataURL("image/png");
        // },
        loadLoggedinUser() {
            this.$store.dispatch({ type: 'loadLoggedinUser' })
        },
        close() {
            this.$store.dispatch({ type: 'toggleUserProfileModal' })
        },
        setUserPrefs() {
            console.log('setName()', this.loggedinUser.name);
            this.$store.dispatch({ type: 'setUserPrefs', user: JSON.parse(JSON.stringify(this.loggedinUser)) })
        }
    },
    watch: {
        'loggedinUser': {
            handler() {
                console.log('HANDLER');
                this.generateAvatar(this.loggedinUser.bcg, this.loggedinUser.clr, this.loggedinUser.name)
            }
        }
    }
}

