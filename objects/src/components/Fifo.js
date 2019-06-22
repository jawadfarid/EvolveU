

class Fifo {
	constructor() {
		this.fifo = [];
	}


addToTop(item) {
	this.fifo.push(item);
}

removeTop() {
	this.fifo.pop();
}

getTopValue() {
	//let i = (this.fifo.length)-1;
  return this.fifo[(this.fifo.length)-1];
}

isEmpty() {
  return this.fifo.length === 0;
}

}


export default Fifo;