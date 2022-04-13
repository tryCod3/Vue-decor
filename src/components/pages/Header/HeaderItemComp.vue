<template>
	<div class="wrapper">
		<router-link to="#">{{ model.name }}</router-link>
	</div>
</template>

<script>
import { linkModel } from "../../../model";
export default {
	name: "header-item",
	props: {
		model: linkModel,
	},
};
</script>

<style></style>
