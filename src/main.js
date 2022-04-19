import Vue from "vue";
import App from "./App.vue";

import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const app = new Vue({
	router,
	store,
	i18n,
	render: h => h(App),
}).$mount("#app");

export default app;
