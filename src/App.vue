<template>
	<PageComp />
</template>

<script>
import PageComp from "./components/pages/PageComp.vue";

export default {
	name: "App",
	components: { PageComp },
};
</script>

<style>
* {
	margin: 0 !important;
	padding: 0 !important;
	box-sizing: border-box !important;
}
.choise {
	color: #f4f5f0 !important;
	font-weight: bold !important;
}
.default {
	color: #b2b9a1 !important;
	font-weight: bold !important;
}
</style>
