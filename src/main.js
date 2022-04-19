import Vue from "vue";
import App from "./App.vue";

import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";

import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);

const app = new Vue({
	router,
	store,
	i18n,
	render: h => h(App),
}).$mount("#app");

export default app;
