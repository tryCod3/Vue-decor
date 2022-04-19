import app from "@/main";
import { i18nAction } from "@/constan/index";

export const i18n = {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {
		[i18nAction.SET_LANG](state, payload) {
			app.$i18n.locale = payload;
		},
	},
	actions: {
		[i18nAction.SET_LANG]({ commit }, payload) {
			commit(i18nAction.SET_LANG, payload);
		},
	},
};
