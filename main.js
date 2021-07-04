
import {myRouter} from './router.js'
import {myStore} from './store/store.js'
import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'
import userMsg from './cmps/user-msg.js'

new Vue({
    template: `
        <section class="app">
            <user-msg></user-msg>
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
        userMsg
    },
    router: myRouter,
    store: myStore,

}).$mount('#app')