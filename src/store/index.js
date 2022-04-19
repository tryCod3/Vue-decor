import Vue from "vue";
import Vuex from "vuex";
import { i18n } from "./i18n";
import { product } from "./product";

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: { i18n, product },
	getters: {},
	mutations: {},
	actions: {},
});

export default store;
