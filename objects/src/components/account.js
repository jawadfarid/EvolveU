



class Account {
	constructor(balance=0, name, id) {
		this.balance = Number(balance);
		this.name = name
		this.id = id
		
	}

	deposit(value) {
		this.balance = this.balance + Number(value);		
	}

	withdraw(value) {
		this.balance = this.balance - Number(value);
	}

	getBalance() {
		return this.balance
	}
}


export default Account;
	