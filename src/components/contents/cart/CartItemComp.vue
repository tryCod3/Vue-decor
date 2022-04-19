<template>
	<div class="d-flex flex-column cart m-1">
		<div class="imgcart d-flex justify-content-center">
			<img :src="product.model.image" :alt="product.model.title" />
		</div>
		<div
			class="p-3 d-flex flex-column justify-content-between"
			style="height: 100%"
		>
			<div class="des mb-4">
				<h5 class="content">
					{{ product.model.title }}
				</h5>
				<p class="content">
					{{ product.model.description }}
				</p>
			</div>
			<div class="action d-flex justify-content-between">
				<button class="btn btn-primary">Add Product</button>
				<div
					style="width: 50px"
					class="d-flex justify-content-between align-items-center width: 30px; height: 30px;"
				>
					<BIconHeartFill class="aciton_icon" />
					<BIconThreeDots class="aciton_icon" style="color: black" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { productModel } from "@/model";
import { BIconHeartFill, BIconThreeDots } from "bootstrap-vue";
export default {
	name: "cart-item-comp",
	components: { BIconHeartFill, BIconThreeDots },
	props: {
		product: productModel,
	},
};
</script>

<style scoped>
.cart {
	width: 400px;
	background-color: #fff;
}
img {
	height: 300px;
	object-fit: content;
}
.imgcart {
	width: 100%;
}
.space {
	padding: 5px;
}
.aciton_icon {
	width: 20px;
	height: 20px;
	color: red;
	border-radius: 50%;
}
</style>
