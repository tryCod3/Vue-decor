<template>
	<div class="d-flex flexs-column justify-content-sm-center">
		<div class="row">
			<div class="col-sm-1"></div>
			<div
				class="d-flex flex-column justify-content-around content_HomeDes col-sm-11 col-md-6"
			>
				<div class="choise text-center text-md-start">
					<h1>
						{{ title1 }}
					</h1>
					<h1>{{ title2 }}</h1>
				</div>
				<div>
					<p class="default">
						{{ des }}
					</p>
				</div>
				<div
					class="d-flex justify-content-center justify-content-md-start"
				>
					<button
						class="btn-success"
						style="
							padding: 5px 30px !important;
							border-radius: 7px !important;
						"
					>
						Our Products
					</button>
				</div>
			</div>
			<div class="col-sm-12 col-md-6"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "home-comp",
	data() {
		return {
			title1: "Office Plants.",
			title2: "Garden & Home",
			des: "lorem ipsum dolor sit amet, consectet lorem ipsum dolor , lorem ipsum dolor sit lorem ipsum dolor sit , lorem ipsum dolor sit lorem ipsum dolor sit , lorem ipsum dolor sit lorem ipsum dolor sit , lorem ipsum dolor sit lorem ipsum dolor sit",
		};
	},
};
</script>

<style>
.content_HomeDes {
	border-radius: 15px;
	padding: 5px !important;
	height: 400px;
	z-index: 2;
}
</style>
