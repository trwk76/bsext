
export type Compare<Item> = (left: Item, right: Item) => number;
export type Render<Item, Elem> = (item: Item, parent: Elem) => void;

export interface Set<Item> {
	values(): Item[];
	setValues(items: Item[]): void;
	indexOf(item: Item): number;
	contains(item: Item): boolean;
	add(item: Item): boolean;
	remove(item: Item): boolean;
	clear(): void;
}
