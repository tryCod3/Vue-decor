<template>
	<div class="d-flex flex-sm-column justify-content-sm-center bgHome">
		<div class="row">
			<div class="col-sm-1"></div>
			<div
				class="d-flex flex-sm-column justify-content-sm-around content_HomeDes col-sm-11 col-md-4 col-lg-6"
			>
				<div>
					<h1 class="choise">{{ title1 }}</h1>
					<h1 class="choise">{{ title2 }}</h1>
				</div>
				<div>
					<p class="default">
						{{ des }}
					</p>
				</div>
				<div>
					<buttonss
						class="btn-success"
						style="
							padding: 5px 30px !important;
							border-radius: 7px !important;
						"
					>
						Our Products
					</buttonss>
				</div>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-4"></div>
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
.bgHome {
	background-image: url("@/assets/img/bgHomeTree.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	width: 100%;
}
.content_HomeDes {
	border-radius: 15px;
	padding: 5px !important;
	height: 400px;
	z-index: 2;
}
</style>
