import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "default",
			component: () =>
				import(
					/* webpackChunkName: "default" */ "@/components/contents/home/HomeContentComp.vue"
				),
		},
		{
			path: "/Home",
			name: "home",
			component: () =>
				import(
					/* webpackChunkName: "home" */ "@/components/contents/home/HomeContentComp.vue"
				),
		},
		{
			path: "/OurProducts",
			name: "OurProducts",
			component: () =>
				import(
					/* webpackChunkName: "OurProducts" */ "@/components/contents/cart/CartContentComp.vue"
				),
		},
		{
			path: "*",
			name: "error",
			component: () =>
				import(
					/* webpackChunkName: "error" */ "@/components/contents/home/HomeContentComp.vue"
				),
		},
	],
});

export default router;
