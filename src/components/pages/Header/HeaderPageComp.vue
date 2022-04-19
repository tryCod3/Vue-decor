<template>
	<div class="row header m-2">
		<div
			class="d-flex justify-content-center justify-content-sm-end header__icon col-12 col-sm-2"
		>
			<div
				class="d-flex flex-column align-items-center header__icon__wrapper"
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
			class="d-flex flex-sm-column justify-content-sm-center col-12 col-sm-10 col-md-5 col-lg-6"
		>
			<div
				style="width: 100%"
				class="d-flex flex-row flex-sm-wrap justify-content-around"
			>
				<HeaderItemComp
					v-for="(item, idx) in linkArr"
					:key="item.id"
					:model="item"
					:index="index"
					:idx="idx"
					@change-index="changeIndex"
				/>
			</div>
		</div>
		<div
			class="d-flex flex-sm-column justify-content-sm-center col-12 col-md-5 col-lg-4"
		>
			<div
				style="width: 100%"
				class="m-3 m-sm-0 d-flex justify-content-sm-center header__Search__wrapper"
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
				<select @change="ChangeLang" v-model="lang">
					<option
						v-for="lang in langArr"
						:key="lang.value"
						:value="lang.value"
					>
						{{ lang.name }}
					</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderItemComp from "@/components/pages/header/HeaderItemComp.vue";
import { linkModel, langModel } from "../../../model";
import { i18nAction } from "@/constan/index";
export default {
	name: "header-page-comp",
	components: {
		HeaderItemComp,
	},
	data() {
		return {
			langArr: [
				new langModel("vn", "Việt Nam"),
				new langModel("en", "English"),
			],
			linkArr: [
				new linkModel(1, "Home"),
				new linkModel(2, "Features"),
				new linkModel(3, "OurProducts"),
				new linkModel(4, "Contacts"),
			],
			title: "BONSAI",
			lang: "vn",
			index: 1,
		};
	},
	methods: {
		changeIndex(data) {
			this.index = data.id || this.index;
		},
		ChangeLang() {
			this.$store.dispatch(
				i18nAction.PREFIX + i18nAction.SET_LANG,
				this.lang
			);
		},
	},
	watch: {},
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
