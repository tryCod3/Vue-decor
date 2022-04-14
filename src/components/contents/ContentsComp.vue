<template>
	<div class="contents">
		<router-view />
	</div>
</template>

<script>
export default {
	name: "contents-comp",
};
</script>

<style>
.contents {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100%;
}
</style>
