import axios from "axios";

axios.defaults.baseURL = "https://648c55858620b8bae7ecb7f6.mockapi.io/api/v1/";
const PER_PAGE = 8;

export const getCars = async page => {
	const params = {
		page,
		limit: PER_PAGE,
	};

	const response = await axios.get("car", { params });

	params.page += 1;

	const nextRes = await axios.get("car", { params });
	const moreCars = nextRes.data.length;

	return { data: response.data, moreCars };
};
