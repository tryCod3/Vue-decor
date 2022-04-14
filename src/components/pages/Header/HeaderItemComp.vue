<template>
	<router-link :to="path" :class="defaultCss">{{ model.name }}</router-link>
</template>

<script>
import { linkModel } from "../../../model";
export default {
	name: "header-item",
	props: {
		model: linkModel,
		index: Number,
	},
	computed: {
		defaultCss: function () {
			return {
				wrapper: true,
				choise: this.model.id === this.index,
				default: this.model.id !== this.index,
			};
		},
		path: function () {
			return `/${this.model.name}`;
		},
	},
};
</script>

<style></style>
