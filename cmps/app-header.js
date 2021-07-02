export default {
    template: `
    <section class="app-header">
        <nav>
            <button @click="toTodoApp" class="nav-icon material-icons">apps</button>
            <button @click="toHomepage" class="nav-icon material-icons">home</button>
            <!-- <router-link class="nav-icon material-icons">home</router-link> -->
        </nav>
        <div class="logo">
           <span class="material-icons">space_dashboard</span> Pokito
        </div>
        <div class="header-features">
            <span class="material-icons">add</span>
            <!-- <router-link to="/">Home</router-link>
            <router-link to="/todo-app">Todos-app</router-link> --> 
            <!-- <router-link></router-link> -->
        </div> 
    </section>
    `,
    methods: {  
        toHomepage() {  
            this.$router.push('/')
        },
        toTodoApp() {   
            this.$router.push('/todo-app')
        }
    }
}