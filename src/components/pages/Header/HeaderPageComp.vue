<template>
	<div class="row header">
		<div class="d-flex justify-content-sm-end header__icon col-sm-2">
			<div
				class="d-flex flex-sm-column align-items-sm-center header__icon__wrapper"
			>
				<img
					style="width: 60px"
					src="@/assets/img/iconsBonsai60.png"
					alt="icon bonsai"
				/>
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
		<div
			class="d-flex flex-sm-column justify-content-sm-center col-sm-10 col-md-4 col-lg-6"
		>
			<div
				class="d-flex flex-sm-row flex-sm-wrap justify-content-sm-around"
			>
				<div
					is="HeaderItemComp"
					v-for="item in linkArr"
					:key="item.id"
					:model="item"
					:index="index"
				></div>
			</div>
		</div>
		<div
			class="d-flex flex-sm-column justify-content-sm-center col-sm-12 col-md-6 col-lg-4"
		>
			<div
				class="d-flex justify-content-sm-center header__Search__wrapper"
			>
				<img src="@/assets/img/iconsFind30.png" alt="icon find" />
				<span style="color: #b2b9a1">|</span>
				<input
					type="text"
					placeholder="Search plans"
					style="margin: 0px 1% !important; height: 100%"
					class="form-control"
				/>
				<img
					src="@/assets/img/iconsLock30.png"
					alt="icon lock"
					style="margin-left: 2s% !important"
				/>
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
				new linkModel(3, "OurProducts"),
				new linkModel(4, "Contacts"),
			],
			title: "BONSAI",
			index: 1,
		};
	},
};
</script>

<style>
.header {
	position: relative;
	z-index: 2;
}
.charater {
	color: #f4f5f0;
	font-size: 1rem;
	font-weight: bold;
}
</style>
