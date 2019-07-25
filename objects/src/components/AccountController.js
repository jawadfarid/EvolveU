import Account from "./account"

class AccountController {
	constructor() {
		this.accountArray = [];
		this.id = 0
		//this.accountArray.id = 0

	}

	addAccount(name) {
		this.id++
		//this.accountArray.id++
		const newAC = new Account(null,name, this.id)
		//const newAC = new Account(null,name, this.accountArray.id)
		this.accountArray.push(newAC)
	}

	removeAccount(index) {
		this.accountArray = this.accountArray.filter((item,i) => i !== index)
	}

	renameAccountName(index,newName) {
		this.accountArray.forEach((item,i) => {
			if(i === index) {
				item.name = newName;
			}})
	}
		
	
	totalOfAccounts() {
		let total = this.accountArray.reduce((accumulator, currentValue)=> accumulator + currentValue.balance,0);
		return total
	}
	
	highestValueAccount() {
		// const test = this.accountArray.map(item => item.balance);
		// //Started with usign For Loop and then end up using map mrthod 
		// // for (let i=0; i< this.accountArray.length; i++) {
		// // 	test.push(this.accountArray[i].value)
		// // 	}
		// const highestValue = Math.max(...test)
		// return highestValue
		const max = this.accountArray.reduce((prev, current) => (prev.balance > current.balance) ? prev : current,0)
	 	return max
	}	
	

	lowestValueAccount() {
		const test = this.accountArray.map(item => item.balance);
		const lowestValue = Math.min(...test)
		return lowestValue
	}
}


export default AccountController;

