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
          title: "New Associate Welcome Box",
          dateOrdered: "September 14, 2022",
          items: ["item1", "item2", "item3"],
        },
        {
          _id: "6321b990b0e8bb3e59e0b650",
          title: "New Associate Welcome Box",
          dateOrdered: "September 14, 2022",
          items: ["item4", "item5", "item6"],
        },
        {
          _id: "6321b9a0b0e8bb3e59e0b653",
          title: "New Associate Welcome Box",
          dateOrdered: "September 14, 2022",
          items: ["item7", "item8", "item9"],
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
};
