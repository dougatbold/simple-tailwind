export default {
  users(state) {
    return state.users;
  },
  isUser(state, getters, rootState, rootGetters) {
    const users = getters.users;
    const userId = rootGetters.userId;
    return users.some((user) => user.id === userId);
  },
};
