import homePage from './pages/home-page.js'
import todoApp from './pages/todo-app.js';
import todoDetails from './pages/todo-details.js';

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/todo-app',
        component: todoApp,
        children: [
            //     {
            //         path:'list',
            //         component: todoList
            //     }
            {
                path: '/todo-app/:todoId',
                component: todoDetails
            }
        ]
    },
];

Vue.use(VueRouter);
export const myRouter = new VueRouter({ routes })