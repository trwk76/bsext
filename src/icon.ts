
export function createBSIcon(name: string): HTMLElement {
	const res = document.createElement("i");
	res.classList.add("bs-" + name);
	return res;
}
