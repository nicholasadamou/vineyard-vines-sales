export function getPageState() {
	return window.location.href.split('/')[3]
}

export default {
	getPageState
}
