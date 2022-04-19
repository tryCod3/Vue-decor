import app from "@/main";
import { i18nConstan } from "@/constan";

export const i18n = {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {
		[i18nConstan.action.SET_LANG](state, payload) {
			app.$i18n.locale = payload;
		},
	},
	actions: {
		[i18nConstan.action.SET_LANG]({ commit }, payload) {
			commit(i18nConstan.action.SET_LANG, payload);
		},
	},
};
