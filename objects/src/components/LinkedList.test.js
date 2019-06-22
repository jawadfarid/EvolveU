import LinkedList from "./LinkedList"

test('Test LinkedList', () => {
	let myNewLinkedList = null;
	myNewLinkedList = new LinkedList()
	expect(myNewLinkedList).not.toBeNull();
});

test('Add Node Test', () => {
	const newLinkedList = new LinkedList()
	//const newCity = new City("Calgary",50,25,78)
	
	newLinkedList.insertNode(50,"A")
	expect(newLinkedList.head.subject).toBe("A");
	expect(newLinkedList.size).toBe(1);

	newLinkedList.insertNode(60,"B")
	expect(newLinkedList.size).toBe(2);
	expect(newLinkedList.tail.subject).toBe("B");
	expect(newLinkedList.head.subject).toBe("A");
	expect(newLinkedList.position.subject).toBe("B");
	expect(newLinkedList.size).toBe(2);

	newLinkedList.insertNode(70,"C")
	expect(newLinkedList.size).toBe(3);
	expect(newLinkedList.tail.subject).toBe("C");
	expect(newLinkedList.position.subject).toBe("C");
	expect(newLinkedList.head.subject).toBe("A");

	newLinkedList.deleteNode()
	expect(newLinkedList.size).toBe(2);
	expect(newLinkedList.head.subject).toBe("A");
	expect(newLinkedList.position.subject).toBe("B");
	expect(newLinkedList.tail.subject).toBe("B");

	newLinkedList.insertNode(70,"C") //Adding Another Node
	expect(newLinkedList.position.subject).toBe("C");
	expect(newLinkedList.tail.subject).toBe("C");

	newLinkedList.deleteNode()//Deleting C Node
	newLinkedList.deleteNode()//Deleting B Node
	expect(newLinkedList.size).toBe(1);
	expect(newLinkedList.position.subject).toBe("A");
	expect(newLinkedList.tail.subject).toBe("A");
	expect(newLinkedList.head.subject).toBe("A");


	newLinkedList.insertNode(80,"B")
	newLinkedList.insertNode(90,"C")
	newLinkedList.insertNode(100,"D")

	expect(newLinkedList.position.subject).toBe("D");

	newLinkedList.positionToFirst()//Testing positionToFirst Method
	expect(newLinkedList.position.subject).toBe("A");

	newLinkedList.deleteNode()
	expect(newLinkedList.position.subject).toBe("B");
	expect(newLinkedList.head.subject).toBe("B");
	
	newLinkedList.insertNode(110,"E")
	expect(newLinkedList.position.subject).toBe("E");
	expect(newLinkedList.tail.subject).toBe("D");
	expect(newLinkedList.head.subject).toBe("B");

	newLinkedList.positionToLast()//Testing positionToLast Method
	expect(newLinkedList.position.subject).toBe("D");
	expect(newLinkedList.tail.subject).toBe("D");

	newLinkedList.deleteNode()
	expect(newLinkedList.position.subject).toBe("C");
	expect(newLinkedList.tail.subject).toBe("C");

	newLinkedList.insertNode(120,"F")
	expect(newLinkedList.position.subject).toBe("F");
	expect(newLinkedList.tail.subject).toBe("F");
	expect(newLinkedList.head.subject).toBe("B");

	newLinkedList.positionToNext()//Testing positionToNext Method
	expect(newLinkedList.position.subject).toBe("F");
	expect(newLinkedList.tail.subject).toBe("F");

	newLinkedList.positionToFirst()
	expect(newLinkedList.position.subject).toBe("B");
	expect(newLinkedList.head.subject).toBe("B");

	newLinkedList.positionToNext()
	expect(newLinkedList.position.subject).toBe("E");
	expect(newLinkedList.tail.subject).toBe("F");

	newLinkedList.positionToPrev()//Testing positionToPrev Method
	expect(newLinkedList.position.subject).toBe("B");
	expect(newLinkedList.tail.subject).toBe("F");
	expect(newLinkedList.head.subject).toBe("B");

	newLinkedList.positionToLast()
	expect(newLinkedList.position.subject).toBe("F");
	expect(newLinkedList.tail.subject).toBe("F");

	newLinkedList.positionToPrev()
	newLinkedList.positionToPrev()
	expect(newLinkedList.position.subject).toBe("E");
	expect(newLinkedList.tail.subject).toBe("F");
	expect(newLinkedList.head.subject).toBe("B");

	newLinkedList.deleteNode()
	expect(newLinkedList.position.subject).toBe("B");
	expect(newLinkedList.head.subject).toBe("B");

	newLinkedList.deleteNode()
	expect(newLinkedList.position.subject).toBe("C");
	expect(newLinkedList.head.subject).toBe("C");

	newLinkedList.deleteNode()
	expect(newLinkedList.position.subject).toBe("F");
	expect(newLinkedList.head.subject).toBe("F");

	newLinkedList.deleteNode()
	expect(newLinkedList.position).toBeNull;
	expect(newLinkedList.head).toBeNull;
	expect(newLinkedList.tail).toBeNull;



	newLinkedList.insertNode(130,"G")
	newLinkedList.insertNode(140,"H")
	newLinkedList.insertNode(150,"I")


	expect(newLinkedList.position.subject).toBe("I");
	expect(newLinkedList.tail.subject).toBe("I");
	expect(newLinkedList.head.subject).toBe("G");
	expect(newLinkedList.size).toBe(3);

	expect(newLinkedList.nodesAmountTotal()).toBe(420);

	newLinkedList.deleteNode()
	expect(newLinkedList.position.subject).toBe("H");
	expect(newLinkedList.tail.subject).toBe("H");
	expect(newLinkedList.head.subject).toBe("G");
	expect(newLinkedList.size).toBe(2);

	expect(newLinkedList.nodesAmountTotal()).toBe(270);
	newLinkedList.deleteNode()
	newLinkedList.deleteNode()

	expect(newLinkedList.nodesAmountTotal()).toBe(0);

	newLinkedList.insertNode(160,"J")
	newLinkedList.insertNode(170,"K")
	newLinkedList.insertNode(180,"L")

	expect(newLinkedList.position.subject).toBe("L");
	expect(newLinkedList.tail.subject).toBe("L");
	expect(newLinkedList.head.subject).toBe("J");
	expect(newLinkedList.size).toBe(3);
	expect(newLinkedList.nodesAmountTotal()).toBe(510);











	


	// expect(prevNode.subject).toBe("C");
	// expect(newLinkedList.position.subject).toBe("C");
	// expect(newLinkedList.tail.subject).toBe("D");

	// newLinkedList.deleteNode()
	// expect(newLinkedList.size).toBe(3);
	// expect(newLinkedList.position.subject).toBe("B");
	// expect(newLinkedList.tail.subject).toBe("D");

	// newLinkedList.deleteNode()
	// expect(newLinkedList.size).toBe(2);
	// expect(newLinkedList.tail.subject).toBe("D");
	// expect(newLinkedList.position.subject).toBe("A");

	// newLinkedList.deleteNode()
	// expect(newLinkedList.size).toBe(1);
	// expect(newLinkedList.tail.subject).toBe("D");
	// expect(newLinkedList.position.subject).toBe("D");







	





});