import Fifo from "./Fifo"

test('Test', () => {
	let stack = null;
	stack = new Fifo()
	expect(stack).not.toBeNull();
});

test('Test', () => {
	const stack = new Fifo()
	stack.addToTop(2);//Test the addToTop Method
	expect(stack.fifo[0]).toBe(2);

	stack.addToTop(4);
	expect(stack.fifo[1]).toBe(4);

	stack.removeTop();//Test the removeTop Method
	expect(stack.fifo[0]).toBe(2);
	expect(stack.getTopValue()).toBe(2);//Test the getTopValue Method

	expect(stack.isEmpty()).toBe(false);
	stack.removeTop();
	expect(stack.isEmpty()).toBe(true);//Array is empty

	stack.addToTop(1);
	stack.addToTop(2);
	stack.addToTop(3);
	stack.addToTop(4);

	expect(stack.fifo.length).toBe(4);
	expect(stack.getTopValue()).toBe(4)
	stack.removeTop()
	expect(stack.getTopValue()).toBe(3)


});