import Vue from "vue";
import Vuex from "vuex";
import { i18n } from "./i18n";

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: { i18n },
	getters: {},
	mutations: {},
	actions: {},
});

export default store;
