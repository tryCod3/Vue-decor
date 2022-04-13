<template>
	<div class="row">
		<div class="d-flex justify-content-lg-end header__icon col-xl-3">
			<div class="header__icon__wrapper" style="background: black">
				<img src="@/assets/img/iconsBonsai60.png" alt="icon bonsai" />
				<div>
					<span
						v-for="(item, index) in title"
						:key="index"
						class="charater"
					>
						{{ item }}
					</span>
				</div>
			</div>
		</div>
		<div class="d-flex flex-lg-column justify-content-lg-center col-xl-5">
			<div class="d-flex flex-lg-row justify-content-lg-between">
				<div
					is="HeaderItemComp"
					v-for="item in linkArr"
					:key="item.id"
					:model="item"
				></div>
			</div>
		</div>
		<div class="d-flex flex-lg-column justify-content-lg-center col-xl-4">
			<div class="header__Search__wrapper" style="background: black">
				<img src="@/assets/img/iconsFind30.png" alt="icon find" />
				<input type="text" />
				<img src="@/assets/img/iconsLock30.png" alt="icon lock" />
			</div>
		</div>
	</div>
</template>

<script>
import HeaderItemComp from "./HeaderItemComp.vue";
import { linkModel } from "../../../model";
export default {
	name: "header-page-comp",
	components: {
		HeaderItemComp,
	},
	data() {
		return {
			linkArr: [
				new linkModel(1, "Home"),
				new linkModel(2, "Features"),
				new linkModel(3, "Our Products"),
				new linkModel(4, "Contacts"),
			],
			title: "BONSAI",
		};
	},
};
</script>

<style>
.header__icon {
}
.header__icon__wrapper {
}
.charater {
	color: white;
	font-size: 1rem;
}
</style>
