export function getPageName() {
	return window.location.href.split('/')[3]
}

export const getPageQueries = (url) => {
	const arr = url.slice(1).split(/&|=/); // remove the "?", "&" and "="
	let params = {};

	for(let i = 0; i < arr.length; i += 2){
	  const key = arr[i], value = arr[i + 1];
	  params[key] = value ; // build the object = { limit: "10", page:"1", status:"APPROVED" }
	}

	return params;
  };

export default {
	getPageName,
	getPageQueries
}
