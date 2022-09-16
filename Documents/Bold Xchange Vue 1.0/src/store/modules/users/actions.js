export default {
  registerUser(context, data) {
    const userData = {
      _id: context.rootGetters.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    };

    context.commit("registerUser", userData);
  },
};
