import { productConstan } from "@/constan";
import { decorApi } from "@/api";
import { productModel } from "@/model";

export const product = {
	namespaced: true,
	state: {
		list: [],
	},
	getters: {
		allListProduct(state) {
			return state.list;
		},
	},
	mutations: {
		[productConstan.aciton.GET_PRODUCT](state, payload) {
			state.list = payload;
		},
	},
	actions: {
		async [productConstan.aciton.GET_PRODUCT]({ commit }) {
			const list = await decorApi.getAll();
			const listProduct = list.data.reduce((prevlist, curentModel) => {
				prevlist.push(new productModel(curentModel));
				return prevlist;
			}, []);
			commit(productConstan.aciton.GET_PRODUCT, listProduct);
		},
	},
};
