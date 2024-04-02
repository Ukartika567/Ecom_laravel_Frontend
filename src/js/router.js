import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView";
import BuyerPageView from "@/views/BuyerPageView";
import BuyerQuoteDetailsView from "@/views/BuyerQuoteDetailsView";
import AdminView from "@/views/AdminView";
import ApprovedOrdersView from "@/views/ApprovedOrdersView";
import CategorySubCatPageView from "@/views/CategorySubCatPageView";
import ShowProductPageView from "@/views/ShowProductPageView";
import UserListPageView from "@/views/UserListPageView";
import AddUserPageView from "@/views/AddUserPageView";
import EditUserPageView from "@/views/EditUserPageView";
import ViewUserPageView from "@/views/ViewUserPageView";
import ResponseQuotesView from "@/views/ResponseQuotesView";
import ForgetPasswordView from "@/views/ForgetPasswordView";
import ChangePasswordView from "@/views/ChangePasswordView";
import PurchaseCreditsView from "@/views/PurchaseCreditsView";
import AccountSettingsView from "@/views/AccountSettingsView";
import QuestionnaireView from "@/views/QuestionnaireView";
import AdminWerehouseView from "@/views/AdminWerehouseView";
import AboutUsView from "@/views/AboutusView";
import PrivacyPolicyView from "@/views/PrivacyPolicyView";
import ContactUsView from "@/views/ContactUsView";
import RequestQuoteView from "@/views/RequestQuoteView";
import QuotesView from "@/views/QuotesView";
import supplierSpecificView from "@/views/supplierSpecificView";

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("userType") == "Admin") {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next();
  } else {
    if (localStorage.getItem("userType") == "Customer") {
      window.location.href = "/buyer/dashboard";
    } else if (localStorage.getItem("userType") == "Supplier") {
      window.location.href = "/vendor/req-quotes-list";
    } else {
      window.location.href = "/login";
    }
  }
}

function guardMyroutecustomer(to, from, next) {
  var isCustAuthenticated = false;
  if (localStorage.getItem("userType") == "Customer") {
    isCustAuthenticated = true;
  } else {
    isCustAuthenticated = false;
  }
  if (isCustAuthenticated) {
    next();
  } else {
    if (localStorage.getItem("userType") == "Customer") {
      window.location.href = "/buyer/dashboard";
    } else if (localStorage.getItem("userType") == "Supplier") {
      window.location.href = "/vendor/req-quotes-list";
    } else if (localStorage.getItem("userType") == "Admin") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/login";
    }
  }
}
function guardMyroutesupplier(to, from, next) {
  var isSupplAuthenticated = false;
  if (localStorage.getItem("userType") == "Supplier") {
    isSupplAuthenticated = true;
  } else {
    isSupplAuthenticated = false;
  }
  if (isSupplAuthenticated) {
    next();
  } else {
    if (localStorage.getItem("userType") == "Customer") {
      window.location.href = "/buyer/dashboard";
    } else if (localStorage.getItem("userType") == "Supplier") {
      window.location.href = "/vendor/req-quotes-list";
    } else if (localStorage.getItem("userType") == "Admin") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/login";
    }
  }
}
const router = createRouter({
  history: createWebHistory(),
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/admin",
      name: "admin",
      beforeEnter: guardMyroute,
      component: AdminView,
    },
    {
      path: "/login",
      name: "login",
    },
    {
      path: "/register",
      name: "signup",
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: AboutUsView,
    },
    {
      path: "/contactus",
      name: "contactus",
      component: ContactUsView,
    },
    {
      path: "/how-it-works",
      name: "howitworks",
      component: AboutUsView,
    },
    {
      path: "/privacy-policy",
      name: "privacypolicy",
      component: PrivacyPolicyView,
    },
    {
      path: "/forget-password",
      name: "forgetpswd",
      component: ForgetPasswordView,
    },
    {
      path: "/change-password",
      name: "changepassword",
      component: ChangePasswordView,
    },
    {
      path: "/buyer/dashboard",
      name: "buyerdashboard",
      beforeEnter: guardMyroutecustomer,
      component: BuyerPageView,
    },
    {
      path: "/buyer/order",
      name: "buyerorder",
      beforeEnter: guardMyroutecustomer,
      component: BuyerPageView,
    },
    {
      path: "/suppSpecific",
      name: "buyersuppSpecific",
      component:supplierSpecificView,
    },
    {
      path: "/buyer/create-new-quote",
      name: "createquote",
      component: BuyerQuoteDetailsView,
    },
    {
      path: "/buyer/invoice-table",
      beforeEnter: guardMyroutecustomer,
      name: "invoicetable",
      component: BuyerQuoteDetailsView,
    },
    {
      path: "/buyer/payment",
      beforeEnter: guardMyroutecustomer,
      name: "buyerpayment",
      component: BuyerQuoteDetailsView,
    },
    {
      path: "/buyer/estimated-invoice",
      beforeEnter: guardMyroutecustomer,
      name: "estimatedinvoicetable",
      component: BuyerQuoteDetailsView,
    },
    {
      path: "/buyer/supp-resp",
      beforeEnter: guardMyroutecustomer,
      name: "suppinvoicetable",
      component: BuyerQuoteDetailsView,
    },
    {
      path: "/buyer/account-settings",
      name: "buyeracctsettings",
      beforeEnter: guardMyroutecustomer,
      component: AccountSettingsView,
    },
    {
      path: "/buyer/approve-supp-resp",
      beforeEnter : guardMyroutecustomer,
      name: "suppapproveresp",
      component: BuyerQuoteDetailsView,
    },
    {
      path: "/buyer/cancel-supp-resp",
      beforeEnter : guardMyroutecustomer,
    name: "suppcancelresp",
    component: BuyerQuoteDetailsView,
    },
    {
    path: "/buyer/account-settings",
    name: "buyeracctsettings",
      beforeEnter : guardMyroutecustomer,
    component: AccountSettingsView,
    }, 
    {
      path: "/buyer/personal-info",
      name: "personalinfo",
      beforeEnter: guardMyroutecustomer,
      component: AccountSettingsView,
    },
    {
      path: "/buyer/questionnaire",
      name: "buyerquestionnaire",
      beforeEnter: guardMyroutecustomer,
      component: QuestionnaireView,
    },
    {
      path: "/admin/personal-info",
      name: "adminpersonalinfo",
      beforeEnter: guardMyroute,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/personal-info",
      name: "vendorpersonalinfo",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/business-info",
      name: "vendorbusinessinfo",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/agreement",
      name: "vendoragreement",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/questionnaire",
      name: "vendorquestionnaire",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/buyer/manage-addr",
      name: "manageaddr",
      beforeEnter: guardMyroutecustomer,
      component: AccountSettingsView,
    },
    {
      path: "/buyer/manage-pwsd",
      name: "managepswd",
      beforeEnter: guardMyroutecustomer,
      component: AccountSettingsView,
    },
    {
      path: "/admin/bank-details",
      name: "adminbankdetail",
      beforeEnter: guardMyroute,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/company-information",
      name: "vendorcompanyinfo",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/product-information",
      name: "vendorprodinfo",
      beforeEnter: guardMyroutesupplier,
      component: QuotesView,
    },
    {
      path: "/vendor/quotation-details",
      name: "vendorquotation",
      beforeEnter: guardMyroutesupplier,
      component: QuotesView
    },
    {
      path: "/vendor/supplier-experience",
      name: "vendorexperience",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/term-and-conditions",
      name: "vendorterm&condition",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/quality-and-certifications",
      name: "vendorquality&certification",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/customer-support",
      name: "vendorcustomersupport",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/req-quotes-list",
      name: "reqquotelist",
      beforeEnter: guardMyroutesupplier,
      component: QuotesView,
    },
    {
      path: "/vendor/resp-quotes-list",
      name: "respquotes",
      beforeEnter: guardMyroutesupplier,
      component: ResponseQuotesView,
    },
    {
      path: "/vendor/orders",
      name: "orders",
      beforeEnter: guardMyroutesupplier,
      component: ApprovedOrdersView,
    },
    {
      path: "/vendor/purchase-credits",
      name: "purchasecrdits",
      beforeEnter: guardMyroutesupplier,
      component: PurchaseCreditsView,
    },
    {
      path: "/vendor/account-settings",
      name: "vendoraccountsettings",
      beforeEnter: guardMyroutesupplier,
      component: AccountSettingsView,
    },
    {
      path: "/vendor/quote-details",
      name: "vendorquotedetails",
      beforeEnter: guardMyroutesupplier,
      component: QuotesView,
    },
    {
      path: "/vendor/resp-details",
      name: "vendorrespdetails",
      beforeEnter: guardMyroutesupplier,
      component: QuotesView,
    },
    {
      path: "/vendor/quote-resp-details",
      name: "vendorquotesrespdetails",
      beforeEnter: guardMyroutesupplier,
      component: QuotesView,
    },
    {
      path: "/vendor/approve-quote-details",
      name: "vendorapprovequotedetails",
      beforeEnter: guardMyroutesupplier,
      component: QuotesView,
    },
    {
      path: "/vendor/order-quoteresp-details",
      name: "vendororderrespdetails",
      beforeEnter: guardMyroutesupplier,
      component: QuotesView,
    },
    {
      path: "/vendor/order-ship-details",
      name: "vendorordershipdetails",
      beforeEnter: guardMyroutesupplier,
      component: QuotesView,
    },
    {
      path: "/admin/quotes-list",
      name: "quotelist",
      beforeEnter: guardMyroute,
      component: QuotesView,
    },
    {
      path: "/admin/approved-order",
      name: "approvedorders",
      beforeEnter: guardMyroute,
      component: ApprovedOrdersView,
    },
    {
      path: "/admin/add-category",
      name: "addcategory",
      beforeEnter: guardMyroute,
      component: CategorySubCatPageView,
    },
    {
      path: "/admin/show-product-detail",
      name: "showproddetail",
      beforeEnter: guardMyroute,
      component: ShowProductPageView,
    },
    {
      path: "/admin/customer-list",
      name: "customerlist",
      beforeEnter: guardMyroute,
      component: UserListPageView,
    },
    {
      path: "/admin/add-customer",
      beforeEnter: guardMyroute,
      name: "adminaddcustomer",
      component: AddUserPageView,
    },
    {
      path: "/admin/add-supplier",
      beforeEnter: guardMyroute,
      name: "adminaddsupplier",
      component: AddUserPageView,
    },
    {
      path: "/admin/edit-customer",
      beforeEnter: guardMyroute,
      name: "admineditcustomer",
      component: EditUserPageView,
    },
    {
      path: "/admin/view-user-details",
      beforeEnter: guardMyroute,
      name: "adminvieuserdetails",
      component:ViewUserPageView,
    },
    {
      path: "/admin/edit-supplier",
      beforeEnter: guardMyroute,
      name: "admineditsupplier",
      component: EditUserPageView,
    },
    {
      path: "/admin/supplier-list",
      name: "supplierlist",
      beforeEnter: guardMyroute,
      component: UserListPageView,
    },
    {
      path: "/admin/respequotes-list",
      name: "responsequotes",
      beforeEnter: guardMyroute,
      component: ResponseQuotesView,
    },
    {
      path: "/admin/quote-details",
      name: "quotedetails",
      beforeEnter: guardMyroute,
      component: QuotesView,
    },

    {
      path: "/admin/resp-details",
      name: "respdetails",
      beforeEnter: guardMyroute,
      component: QuotesView,
    },
    {
      path: "/admin/quote-resp-details",
      name: "quotesrespdetails",
      beforeEnter: guardMyroute,
      component: QuotesView,
    },
    {
      path: "/admin/approve-quote-details",
      name: "adminquotesrespdetails",
      beforeEnter: guardMyroute,
      component: QuotesView,
    },
    {
      path: "/admin/order-quoteresp-details",
      name: "orderrespdetails",
      beforeEnter: guardMyroute,
      component: QuotesView,
    },
    {
      path: "/admin/order-ship-details",
      name: "adminordershipdetails",
      beforeEnter: guardMyroute,
      component: QuotesView,
    },

    {
      path: "/admin/create-quote",
      beforeEnter: guardMyroute,
      name: "createnewquote",
      component: RequestQuoteView,
    },

    {
      path: "/admin/account-settings",
      name: "adminacctsettings",
      beforeEnter: guardMyroute,
      component: AccountSettingsView,
    },
    {
      path: "/admin/werehouse",
      name: "werehouse",
      beforeEnter: guardMyroute,
      component: AdminWerehouseView,
    },
  ],
});
export default router;
