import { createApp } from "vue";
import App from "./App.vue";
import router from "./js/router";
import axios from "axios";
import VueAxios from "vue-axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./assets/css/bootstrap.min.css";
import "../node_modules/swiper/swiper.css";
import "./assets/fonts/Linearicons/Font/demo-files/demo.css";
import "./assets/fonts/font-awesome/css/font-awesome.css";
import "./assets/scss/env.scss";
import "./assets/scss/style.scss";
import "./assets/styles/env.scss";
import "./assets/styles/style.scss";
import "vuetify/styles";
import "../node_modules/vuetify/dist/vuetify.css";
import "../node_modules/vuetify/dist/vuetify.min.css";
import "@vueform/multiselect/themes/default.css";
import "./assets/css/customstyle.css";
import "./assets/css/style.css";
import "../node_modules/swiper/swiper.css";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue3-apexcharts";
import "vue-awesome-sidebar/dist/vue-awesome-sidebar.css";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Tabs, Tab } from "../node_modules/vue3-tabs-component";
import Datepicker from "../node_modules/vue3-datepicker";
import Multiselect from "@vueform/multiselect";
import VueHtml2pdf from "../node_modules/vue-html2pdf";
import Vue3SimpleHtml2pdf from "vue3-simple-html2pdf";
import VueSingleSelect from '../node_modules/vue-single-select';
import loader from "vue-ui-preloader";
import VueBarcode from '@chenfengyuan/vue-barcode';
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import Chips from 'primevue/chips';
// import "primeicons/primeicons.css";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ChipsMultiSelect from 'primevue/multiselect';
import AutoComplete from 'primevue/autocomplete';
import SingleChipsDropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
// import dateFormat from '@vue-formily/date-format';
// import Checkbox from 'primevue/checkbox';



library.add(far, fas, fab);
config.searchPseudoElement = true;
const app = createApp(App);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.component("EasyDataTable", Vue3EasyDataTable);
app.component("TabsDiv", Tabs);
app.component("TabDiv", Tab);
app
  .use(router)
  .use(vuetify)
  .use(VueApexCharts)
  .use(VueHtml2pdf)
  .use(Vue3SimpleHtml2pdf)
  .use(loader)
  .use(PrimeVue)
  // .use(dateFormat)
  .component('DataTable', DataTable)
  .component('Chips', Chips)
  .component('Column', Column)
  .component('ColumnGroup', ColumnGroup)
  .component('ChipsMultiSelect', ChipsMultiSelect)
  .component('SingleChipsDropdown', SingleChipsDropdown)
  .component('Calendar', Calendar)
  .component('Card', Card)
  .component('AutoComplete', AutoComplete)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .component("Datepicker", Datepicker)
  .component("Multiselect ", Multiselect)
  .component('VueSingleSelect',VueSingleSelect)
  .component(VueBarcode.name, VueBarcode)
  .mount("#app");
