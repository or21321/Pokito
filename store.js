// import { productService } from "./services/product.service.js"
import { todoService } from "./services/todo-service.js"

const options = {
    strict: true,
    state: {
        // count: 10000,
        // user: { fullName: 'Baba', balance: 20 },
        // products: productService.query(),
        // cartProducts: []
        boards: todoService.query(),
        selectedBoardIdx: 0,
        listIdxForDisplay: null,
        todoIdForDisplay: null,
    },
    getters: {
        // cartTotal(state) {
        //     return state.cartProducts.reduce((acc, prd) => {
        //         acc += prd.price
        //         return acc
        //     }, 0)
        // },
        // countForDispaly(state, otherGetters) {
        //     // console.log('Other Getters', otherGetters);
        //     // return otherGetters.cartTotal
        //     return state.count.toLocaleString()
        // }
        boardForDisplay(state) {
            return state.boards[state.selectedBoardIdx]
            // return state.boards[state.selectedBoardIdx]
        },
        // ? What about that positioning ?
        // todoForDisplay(state) { 
        //     return state.boards[state.selectedBoardIdx].lists[listIdxForDisplay].todos.find(todo => todo._id === state.todoIdForDisplay)
        // }
    },
    mutations: {
        addTodoToList(state, payload) {
            console.log('addTodoToList() payload:', payload);
            const { listIdx, todo } = payload
            state.boards[state.selectedBoardIdx].lists[listIdx].todos.push(todo);
            // state.boards[state.selectedBoardIdx].lists[listIdx].push(todo)
        },
        addList(state, payload) {
            console.log('from store addList payload', payload);
            state.boards[state.selectedBoardIdx].lists.push({ listName: payload.listName, todos: [] })
        },
        removeTodo(state, { todoId, listIdx }) {
            console.log(todoId);
            const todoIdx = state.boards[state.selectedBoardIdx].lists[listIdx].todos.findIndex(todo => todo._id === todoId)
            console.log('todoIdx', todoIdx);
            console.log('listIdx', listIdx);
            if (todoIdx !== -1) state.boards[state.selectedBoardIdx].lists[listIdx].todos.splice(todoIdx, 1)
        },
        editTodoTxt(state, {todoId, listIdx, todo}) { 
            console.log('todoId', todoId);
            console.log('listIdx', listIdx);
            const todoIdx = state.boards[state.selectedBoardIdx].lists[listIdx].todos.findIndex(todo => todo._id === todoId)
            console.log('todoIdx', todoIdx);
            state.boards[state.selectedBoardIdx].lists[listIdx].todos.splice(todoIdx, 1, todo)
        }
        // setTodoForDisplay(state, payload) {
        //     console.log('setTodoDetailsInfo() payload', payload);
        // }
        // updateCount(state, payload) {
        //     console.log('Payload', payload);
        //     state.count += payload.val;
        //     state.user.balance++;
        // },

        // addToCart(state, payload) {
        //     state.cartProducts.push(payload.product)
        // },
        // removeFromCart(state, { productId }) {
        //     const idx = state.cartProducts.findIndex(cp => cp._id === productId)
        //     state.cartProducts.splice(idx, 1)
        // },
        // checkout(state) {
        //     const totalPrice = state.cartProducts.reduce((acc, prd) => {
        //         acc += prd.price
        //         return acc
        //     }, 0)

        //     state.user.balance -= totalPrice
        //     state.cartProducts = []
        // },
        // saveProduct(state, { product }) {
        //     const isUpdate = !!product._id
        //     const newProduct = productService.save(product)
        //     if (isUpdate) {
        //         const idx = state.products.findIndex(prd => prd._id === product._id)
        //         state.products.splice(idx, 1, newProduct)
        //     } else {
        //         state.products.push(newProduct)
        //     }
        // },
    },
    // actions:{
    //     updateCountLater(context, {val}) {
    //         console.log('Context', context);
    //         setTimeout(()=>{
    //             context.commit({type: 'updateCount', val})
    //         }, 1200)
    //     },  
    // }
}

export const myStore = new Vuex.Store(options)


