// import { productService } from "./services/product.service.js"

const options = {
    strict: true,
    state: {
        // count: 10000,
        // user: { fullName: 'Baba', balance: 20 },
        // products: productService.query(),
        // cartProducts: []
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
    },
    mutations: {
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


