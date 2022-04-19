<template>
	<div class="container-fluid">
		<HeaderPageComp />
		<ContentsComp />
	</div>
</template>

<script>
import HeaderPageComp from "@/components/pages/header/HeaderPageComp.vue";
import ContentsComp from "../contents/ContentsComp.vue";

export default {
	name: "page-comp",
	components: {
		HeaderPageComp,
		ContentsComp,
	},
	created() {
		console.log(this.$router);
	},
};
</script>

<style></style>
