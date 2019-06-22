

class Lifo {
	constructor() {
		this.lifo = [];
	}


addToTop(item) {
	this.lifo.unshift(item);
}

removeTop() {
	this.lifo.pop();
}

getTopValue() {
	//let i = (this.lifo.length)-1;
  return this.lifo[(this.lifo.length)-1];
}

isEmpty() {
  return this.lifo.length === 0;
}

}


export default Lifo;