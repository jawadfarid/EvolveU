import Node from "./Node"

test('Test Node', () => {
	let myNode = null;
	myNode = new Node(500)
	expect(myNode).not.toBeNull();
	expect(myNode.amount).toBe(500);
});