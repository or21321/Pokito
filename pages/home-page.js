// import { eventBusService, SHOW_MSG } from '../services/eventBus.service.js'
// import {productService} from '../services/product.service.js'

export default {
    template: `
        <section class="home-page app-main">
            <!-- <h1>{{user.fullName}}, Lets... State Management</h1>
            <h1>We have {{productsCount}} Products!</h1> -->
            <!-- <h2>
                Count {{countForDisplay}}
                <button @click="inc(1)">+1</button>
                <button @click="inc(10)">+10</button>
                <button @click="incLater(1)">+1 Later</button>
            </h2>
            <img src="img/logo.png"/> -->
            <h2>Welcome to your new todos-app</h2>
            <p>We are better than google</p>
        </section>
    
    `,
    data() {
        return {
            // products: []
        }
    },
    created() {
        console.log('home-page created!');
        // this.products = productService.query()
        // eventBusService.$emit(SHOW_MSG, { txt: 'HomePage Loaded!', type: 'success' });
    },
    methods: {
        // inc(val) {
        //    console.log('INC INC')
        //this.$store.state.count++;
        //     this.$store.commit({type:'updateCount', val})
        // },
        // incLater(val) {
        //     this.$store.dispatch({type:'updateCountLater', val})
        // }

    },
    computed: {
        // countForDisplay() {
        //     return this.$store.getters.countForDispaly
        // },
        // user() {
        //     return this.$store.state.user
        // },
        // productsCount() {
        //     return this.$store.state.products.length
        // }
    }

}