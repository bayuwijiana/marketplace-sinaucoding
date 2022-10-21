import {
  faShieldHalved,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.css";
library.add(faUserSecret, faShieldHalved);
import router from "./router/index";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "bootstrap";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';





const app = createApp(App);
app.use(VueSweetalert2);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
