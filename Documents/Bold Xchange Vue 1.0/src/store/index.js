import { createStore } from "vuex";

import rootMutations from "./mutations";
// import rootGetters from "./getters";
import rootActions from "./actions";

import ordersModule from "./modules/orders/index";
import invoicesModule from "./modules/invoices/index";
import usersModule from "./modules/users/index";

const store = createStore({
  modules: {
    users: usersModule,
    orders: ordersModule,
    invoices: invoicesModule,
  },
  state() {
    return {
      isLoggedIn: false,
      user_Id: " ",
      firstName: " ",
      lastName: " ",
      email: " ",
      password: " ",
      passwordConfirm: " ",
    };
  },
  actions: rootActions,
  mutations: rootMutations,
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
