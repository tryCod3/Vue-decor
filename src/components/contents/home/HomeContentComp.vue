<template>
	<div class="d-flex flexs-column justify-content-sm-center">
		<div class="row">
			<div class="col-sm-1"></div>
			<div
				class="d-flex flex-column justify-content-around content_HomeDes col-sm-11 col-md-6"
			>
				<div class="choise text-center text-md-start">
					<h1>
						{{ $t("pageHome.title1") }}
					</h1>
					<h1>{{ $t("pageHome.title2") }}</h1>
				</div>
				<div>
					<p class="default">
						{{ $t("pageHome.des") }}
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
						{{ $t("pageHome.btn") }}
					</button>
				</div>
			</div>
			<div class="col-sm-12 col-md-6"></div>
		</div>
		<div class="overlay col-lg-7">
			<div class="overlay--bottom d-none d-lg-block col-lg-7"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "home-comp",
};
</script>

<style>
.content_HomeDes {
	border-radius: 15px;
	padding: 5px !important;
	height: 400px;
	z-index: 2;
}
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
