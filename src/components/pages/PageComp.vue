<template>
	<div class="container-fluid p-2">
		<HeaderPageComp />
		<ContentsComp />
		<div class="overlay col-md-6 col-lg-8"></div>
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

	height: 567px;
	background: rgba(66, 48, 57, 0.7);
	top: 0;
	left: 0;
}
</style>
