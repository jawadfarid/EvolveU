import Node from "./Node"

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.position = null;
		this.size = 0;
	}


	insertNode(amount, subject, next) {
		if (this.position === null || this.size === 0) {
			this.head = new Node(amount, subject, next);
			this.tail = this.head;
			this.position = this.tail;
		} else if (this.tail === this.position  && this.tail !== null) {
			this.tail = new Node(amount, subject, next)
			this.position.next = this.tail;
			this.position = this.tail;
		} else if( this.head !== this.tail) {
			const oldPositionNext = this.position.next
			this.position.next = new Node(amount, subject, next)
			this.position = this.position.next;
			this.position.next = oldPositionNext;
		}
		this.size++;
	}

	deleteNode() {
		if (this.position === null) {
			console.log("The LinkedList is Empty")
		}
		else if (this.head === this.position) {
			let oldPosition = this.position;
			this.head = oldPosition.next;
			this.position = this.head;
			oldPosition.next = null;
		} else if (this.tail === this.position) {
			let prevNode = this.head;
				while(prevNode.next !== this.position) {
					prevNode = prevNode.next;
				}
					prevNode.next= this.position.next;
					this.position.next = null;
					this.position = prevNode;
					this.tail = prevNode;
		} else {
			let prevNode = this.head;
				while(prevNode.next !== this.position) {
					prevNode = prevNode.next;
				}
					prevNode.next= this.position.next;
					this.position.next = null;
					this.position = prevNode; //Move the position to the previous node instead to next Node
		}
		this.size--;
		}

		positionToFirst() {
			if (this.head === null) {
				this.position = this.position;
			} else if (this.head === this.tail) {
				this.position = this.position;
			} else {
				this.position = this.head;
			}
			


			// if (this.position !== null) {
			// 	this.position = this.head
			// }
		}

		positionToLast() {
			if (this.position !== null){
			this.position = this.tail;
		}
		}

		positionToNext() {
			if (this.head === null) {
				this.position = this.position;
			} else if (this.position === this.tail) {
				this.position = this.position;
			} else {
				this.position = this.position.next;
			}
			// if (this.position!== null) {
			// 	this.position = this.position.next;
			// } else if (this.position === this.tail) {
			// 	this.position = this.position
			// }
			// else {
			// 	this.position = this.head;
			// }
		}

		positionToPrev() {
			if (this.head === null) {
				this.position = this.head;
			} else if (this.position === this.head) {
				this.position = this.head;
			}else {
				let prevNode = this.head;
					while(prevNode.next !== this.position) {
						prevNode = prevNode.next;
					}
					this.position = prevNode;
			}
		}

		nodesAmountTotal() {
			if (this.head === null) {
				return 0
			} else {
			let oldPosition = this.position;//eidted
			this.position = this.head;
				let totalAmount = 0;
					while(this.position.next !== null) {
						totalAmount = totalAmount + this.position.amount;
						this.position = this.position.next;
						// prevNode = prevNode.next;
					}
					totalAmount = totalAmount + this.position.amount;
					this.position = oldPosition;
			return totalAmount;
			}

		}



			


}
		
		

export default LinkedList;