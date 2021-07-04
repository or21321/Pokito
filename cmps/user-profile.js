// import { userService } from "../services/user-service.js";
// import { userStore } from "../store/user-store.js";

export default {
    template: `
    <section v-if="loggedinUser" class="user-profile">
        <h3>Profile</h3>
        <div class="user-info">
            <div>
                <textarea cols="20" rows="1" v-model="loggedinUser.name"></textarea>
                <!-- <input type="text" placeholder="loggedinUser.name" v-model="loggedinUser.name"> -->
                <!-- <input type="text" placeholder="loggedinUser.name" v-model="loggedinUser.name"> -->
            </div>
            <div>
                <!-- {{loggedinUser}} -->
                <div class="user-pref">
                    <input  type="color" v-model="loggedinUser.clr">
                    <span class="tooltip-text" style="font-size: 14px">Color</span>
                </div>
                <div class="user-pref">
                    <input type="color" v-model="loggedinUser.bcg">
                    <span class="tooltip-text" style="font-size: 14px">Background-Color</span>
                </div>
            </div>
        </div>
        <button @click="close" class="close-btn">
            X
        </button>
    </section>
    `,
    created() {
        console.log('user-profile created!');
        this.loadLoggedinUser()
    },
    computed: {
        loggedinUser() {
            return JSON.parse(JSON.stringify(this.$store.getters.loggedinUser))
        }
    },
    methods: {
        loadLoggedinUser() {
            this.$store.dispatch({ type: 'loadLoggedinUser' })
        },
        close() {
            this.$store.dispatch({ type: 'toggleUserProfileModal' })
        }
    },

}