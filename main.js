
import {myRouter} from './router.js'
import {myStore} from './store.js'
import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'

new Vue({
    template: `
        <section class="app">
            <app-header/>
            <router-view/>
            <app-footer/>
        </section>
    `,
    created() {
        console.log('Vue App was created!!!');
    },
    components: {
        appHeader,
        appFooter,
    },
    router: myRouter,
    store: myStore,

}).$mount('#app')