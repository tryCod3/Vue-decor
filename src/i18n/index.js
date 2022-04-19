import Vue from "vue";
import VueI18n from "vue-i18n";
import { vn } from "./vn";
import { en } from "./en";

Vue.use(VueI18n);

const messages = {
	vn,
	en,
};
const locale = "vn";
const fallbackLocale = "en";

const i18n = new VueI18n({
	locale,
	messages,
	fallbackLocale,
});

export default i18n;
