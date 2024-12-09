
import { Compare, Render, Set } from "./generic";

export interface ListGroupOptions<Item> {
	compare: Compare<Item>;
	render: Render<Item, HTMLLIElement>;
}

export class ListGroup<Item> implements Set<Item> {
	constructor(elem: HTMLElement, opts: ListGroupOptions<Item>) {
		this.elem = elem;
		this.opts = opts;
	}

	public readonly elem: HTMLElement;
	public readonly opts: ListGroupOptions<Item>;

	public values(): Item[] {
		let res: Item[] = [];
		[...this.elem.childNodes].forEach(elem => res.push((<HTMLLIElement> elem).item));
		return res;
	}

	public setValues(items: Item[]): void {
		this.clearItems();
		items.forEach(item => this.addItem(item));
		this.onchange?.();
	}

	private addItem(item: Item): void {

	}

	private clearItems(): void {
		let node = this.elem.firstElementChild;
		while(node) {
			node.remove();
			node = this.elem.firstElementChild;
		}
	}
}

declare global {
	interface HTMLLIElement {
		item: any;
	}
}
