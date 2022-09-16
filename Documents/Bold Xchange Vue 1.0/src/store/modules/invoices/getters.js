export default {
  invoices(state) {
    return state.invoices;
  },
  hasInvoices(state) {
    return state.invoices && state.invoices.length > 0;
  },
};
