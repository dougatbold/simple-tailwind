import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
// import { onMounted } from "vue";
// import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      invoices: [
        {
          _id: "6321b787480e28ed39953456",
          title: "Test #1",
          invoicedCompany: "Test Company",
          total: 50,
          dateInvoiced: "September 14, 2022",
          items: ["item1", "item2", "item3"],
        },
        {
          _id: "6321b990b0e8bb3e59e0b650",
          title: "Test #1",
          invoicedCompany: "Test Company",
          total: 50,
          dateInvoiced: "September 14, 2022",
          items: ["item4", "item5", "item6"],
        },
        {
          _id: "6321b9a0b0e8bb3e59e0b653",
          title: "Test #1",
          invoicedCompany: "Test Company",
          total: 50,
          dateInvoiced: "September 14, 2022",
          items: ["item7", "item8", "item9"],
        },
      ],
    };
    // onMounted() {
    //   axios.get("http://localhost:8000/api/v1/invoices").then((response) => {
    //     console.log(response.data);
    //     this.invoices = response.data
    //   })
    //   .catch(error) => {
    //     console.log(error)
    //   }
    // };
  },
  mutations,
  getters,
  actions,
};
