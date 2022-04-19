export const log = function (name) {
	function show(messages, type = "log") {
		console[type](`[${name}] : `, messages);
	}

	return show;
};
