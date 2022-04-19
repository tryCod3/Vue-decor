import { log } from "@/log";
import axios from "axios";
import { apiConstan } from "@/constan";

const logger = log("decor");

export async function getAll() {
	logger("getAllProduct running , watting ...");
	try {
		const list = await axios.get(`${apiConstan.url}/products`);
		logger("getAllProduct succes!");
		return list;
	} catch (e) {
		logger("getAllProduct fail!", "error");
		logger(e.messages);
	}
	return [];
}
