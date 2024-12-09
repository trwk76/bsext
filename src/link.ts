import { createBSIcon } from "./icon";

export function renderLinkButton(url?: string, title?: string, bsIcon?: string, color?: string): HTMLAnchorElement {
	const res = document.createElement("a");

	res.classList.add("btn", "btn-sm");

	if(color) {
		res.classList.add("btn-" + color);
	}

	res.role = "button";

	const icon = createBSIcon(bsIcon ?? "link");
	icon.classList.add("me-2");
	res.appendChild(icon);

	res.append(title ?? "");
	res.title = title ?? "";

	if(url) {
		res.href = url;
	} else {
		res.href = "#";
		res.ariaDisabled = "true";
	}

	return res;
}
