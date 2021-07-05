export default {
    template: `
    <section v-if="loggedinUser" class="user-profile">
        <h3>Profile</h3>
        <div class="user-info">
            <div class="user-pref">
                <textarea @keyup="setUserPrefs" cols="20" rows="1" v-model="loggedinUser.name"></textarea>
                <span class="tooltip-text" style="font-size: 14px">Full Name</span>
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
    },
    created() {
        console.log('user-profile created!');
        this.loadLoggedinUser()
    },
    computed: {
        loggedinUser() {
            return JSON.parse(JSON.stringify(this.$store.getters.loggedinUser))
        },
        data() {
            return {
                avatarUrl: null
            }
        },
        avatarUrl() {   
            return this.$store.getters.avatarUrl
        }
    },
    methods: {
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
    }
}

