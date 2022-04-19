export const aciton = {
	GET_PRODUCT: "GET_PRODUCT",
	ADD_PRODUCT: "ADD_PRODUCT",
	DELETE_PRODUCT: "DELETE_PRODUCT",
	DETAIL_PRODUCT: "DETAIL_PRODUCT",
};

export const prefix = cmd => {
	return "product/" + cmd;
};
