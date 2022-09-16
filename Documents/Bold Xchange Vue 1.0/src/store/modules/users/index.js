import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      orders: [
        {
          _id: "6321b787480e28ed39953456",
          firstName: "Sam",
          lastName: "Smith",
          email: "test@test.com",
          password: "password1234",
          passwordConfirm: "password1234",
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
};
