// import { productService } from "./services/product.service.js"
import { boardService } from "../services/board-service.js"
import { todoStore } from "./todo-store.js";

const options = {
    strict: true,
    state: {
        // boards: boardService.query(),
        // selectedBoardIdx: 0,
        // listIdxForDisplay: null,
        // todoIdForDisplay: null,
    },
    getters: {
    },
    mutations: {
    },
    actions: {
 
    },
    modules: {
        todoStore
    },
}

export const myStore = new Vuex.Store(options)
