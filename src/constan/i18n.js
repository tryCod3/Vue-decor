export const action = {
	PREFIX: "i18n/",
	SET_LANG: "SET_LANG",
};

export const prefix = cmd => {
	return action.PREFIX + cmd;
};
