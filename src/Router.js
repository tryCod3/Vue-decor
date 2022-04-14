import Vue from "vue";
import VueRouter from "vue-router";
import HomePageComp from "./components/contents/home/HomeContentComp.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", component: HomePageComp },
		{ path: "/Home", component: HomePageComp },
		{ path: "*", component: HomePageComp },
	],
});
