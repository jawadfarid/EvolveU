import Lifo from "./Lifo"

test('Test', () => {
	let queue = null;
	queue = new Lifo()
	expect(queue).not.toBeNull();
});

test('Test', () => {
	const queue = new Lifo()
	queue.addToTop(2);//Test the addToTop Method
	expect(queue.lifo[0]).toBe(2);

	queue.addToTop(4);
	expect(queue.lifo[1]).toBe(2);

	queue.removeTop();//Test the removeTop Method
	expect(queue.lifo[0]).toBe(4);
	expect(queue.getTopValue()).toBe(4);//Test the getTopValue Method

	expect(queue.isEmpty()).toBe(false);
	queue.removeTop();
	expect(queue.isEmpty()).toBe(true);//Array is empty

	queue.addToTop(1);
	queue.addToTop(2);
	queue.addToTop(3);
	queue.addToTop(4);

	expect(queue.lifo.length).toBe(4);
	expect(queue.getTopValue()).toBe(1)
	queue.removeTop()
	expect(queue.getTopValue()).toBe(2)


});