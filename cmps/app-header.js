import { debounce } from "../services/util.service.js"
// import {avatarUrl}

export default {
    template: `
    <section class="app-header">
        <nav>
            <button @click="toTodoApp" class="nav-icon material-icons">apps</button>
            <button @click="toHomepage" class="nav-icon material-icons">home</button>
            <!-- <div class="search-container"> -->
                <input class="search" v-on:keyup="filter" placeholder="Search" v-model="filterBy.txt" debounce="2000">
                <!-- <input class="search" @input="filter" placeholder="Search" v-model="filterBy.txt" debounce="2000"> -->
                <!-- <span class="material-icons">search</span> -->
            <!-- </div> -->
        </nav>
        <div class="logo">
           <span class="material-icons">space_dashboard</span> Pokito
        </div>
        <div class="header-features">
            <span @click="toggleUserProfile" class="material-icons">add</span>

            <div v-if="loggedinUser" class="avatar">
                <img :src="avatarUrl">
            </div>
        </div> 
        
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: null
            }
        }
    },
    created() {
        console.log(debounce)
        this.filter = debounce(this.filter, 1000)
        this.loadLoggedinUser()
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        avatarUrl() {
            return this.$store.getters.avatarUrl
        }
    },
    methods: {
        loadLoggedinUser() {
            this.$store.dispatch({ type: 'loadLoggedinUser' })
        },
        toHomepage() {
            this.$router.push('/')
        },
        toTodoApp() {
            this.$router.push('/todo-app')
        },
        filter() {
            console.log('FILTER', this.filterBy);
            this.$store.dispatch({ type: 'setFilter', filterBy: JSON.parse(JSON.stringify(this.filterBy)) })
        },
        toggleUserProfile() {
            this.$store.dispatch({ type: 'toggleUserProfileModal' })
        },
    }
}