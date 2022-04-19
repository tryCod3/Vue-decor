<template>
	<div
		class="d-flex flex-wrap justify-content-around"
		style="height: 100vh; overflow: auto"
	>
		<CartItemComp
			v-for="product in list"
			:key="product.model.id"
			:product="product"
		>
		</CartItemComp>
	</div>
</template>

<script>
import CartItemComp from "./CartItemComp.vue";
import { mapGetters, mapActions } from "vuex";
import { productConstan } from "@/constan";
export default {
	name: "cart-comp",
	components: {
		CartItemComp,
	},
	created() {
		this.getAllProductApi();
	},
	computed: {
		...mapGetters({
			list: productConstan.prefix("allListProduct"),
		}),
	},
	methods: {
		...mapActions({
			getAllProductApi: productConstan.prefix(
				productConstan.aciton.GET_PRODUCT
			),
		}),
	},
};
</script>

<style></style>
