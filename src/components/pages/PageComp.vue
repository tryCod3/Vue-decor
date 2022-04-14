<template>
	<div class="container-fluid">
		<HeaderPageComp />
		<ContentsComp />
		<div class="overlay col-md-7 col-lg-8">
			<div
				class="overlay--bottom d-none d-lg-block col-md-7 col-lg-8"
			></div>
		</div>
	</div>
</template>

<script>
import HeaderPageComp from "./header/HeaderPageComp.vue";
import ContentsComp from "../contents/ContentsComp.vue";
export default {
	name: "page-comp",
	components: {
		HeaderPageComp,
		ContentsComp,
	},
};
</script>

<style>
.overlay {
	position: absolute;
	top: 0;
	left: 0;
	height: 497px;
	background: rgba(66, 48, 57, 0.7);
}
.overlay--bottom {
	position: absolute;
	bottom: 0;
	left: 0;
	height: 100px;
	width: 100% !important;
	background: rgba(255, 255, 255, 0.1);
}
</style>
