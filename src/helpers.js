function choice(items) {
	const randomNumber = Math.floor(Math.random() * items.length);
	return items[randomNumber];
}

function remove(items, item) {
	const search = items.findIndex(el => el === item);
	if (search) items.splice(search, 1);
	return undefined;
}
export { choice, remove };
