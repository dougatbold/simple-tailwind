import { createRouter, createWebHistory } from "vue-router";

// PAGES - ACCOUNT
import UserHome from "./components/pages/UserHome";
import AccountSettings from "./components/pages/account/AccountSettings";
import AccountOrders from "./components/pages/account/AccountOrders";
import AccountOrder from "./components/pages/account/AccountOrder";
import AccountInvoices from "./components/pages/account/AccountInvoices";
import AccountInvoice from "./components/pages/account/AccountInvoice";

// PAGES - GIFTS
import GiftTracking from "./components/pages/gift/GiftTracking";
import GiftRecipientAdd from "./components/pages/gift/GiftRecipientAdd";
import GiftRecipients from "./components/pages/gift/GiftRecipients";
import GiftRecipientDetails from "./components/pages/gift/GiftRecipientDetails";

// PAGES - AUTHENTICATION
import UserSignup from "./components/pages/auth/UserSignup";
import UserLogin from "./components/pages/auth/UserLogin";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: UserHome,
    },
    { path: "/account-settings", component: AccountSettings },
    {
      path: "/account-orders/",
      component: AccountOrders,
      props: true,
      children: [{ path: "order", component: null }],
    },
    { path: "/account-order/", component: AccountOrder },
    {
      path: "/account-invoices:",
      component: AccountInvoices,
      props: true,
      children: [{ path: "/account-invoice/", component: null }],
    },
    { path: "/account-invoice", component: AccountInvoice },
    {
      path: "/gift-tracking",
      component: GiftTracking,
      props: true,
      children: [{ path: ":id", component: null }],
    },
    { path: "/gift-recipient-add", component: GiftRecipientAdd },
    { path: "/gift-recipients", component: GiftRecipients },
    {
      path: "/gift-recipient-details",
      component: GiftRecipientDetails,
      props: true,
      children: [{ path: ":id", component: null }],
    },
    { path: "/sign-up", component: UserSignup },
    { path: "/login", component: UserLogin },
    // { path: "/:notFound(.*)", component: null },
  ],
});

export default router;
