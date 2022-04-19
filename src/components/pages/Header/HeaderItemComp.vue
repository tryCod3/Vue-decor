<template>
	<router-link :to="path" :class="defaultCss">
		<div @click="handelChangeIndex">
			{{ $t(`links[${idx}]`) }}
		</div>
	</router-link>
</template>

<script>
import { linkModel } from "../../../model";
export default {
	name: "header-item",
	props: {
		model: linkModel,
		index: Number,
		idx: Number,
	},
	methods: {
		handelChangeIndex() {
			var data = {
				id: this.model.id,
			};

			this.$emit("change-index", data);
		},
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
