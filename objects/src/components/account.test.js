import Account from "./account"

test('Test account', () => {
	let myNewAccount = null;
	myNewAccount = new Account()
	expect(myNewAccount).not.toBeNull();
});

test('Deposit test', () => {
	const myNewAccount = new Account()
	myNewAccount.deposit(10)
	expect(myNewAccount.balance).toBe(10);
});

test('Withdraw test', () => {
	const myNewAccount = new Account()
	myNewAccount.withdraw(10)
	expect(myNewAccount.balance).toBe(-10);
});

test('Balance test', () => {
	const myNewAccount = new Account(50)
	const testBal = myNewAccount.getBalance()
	expect(testBal).toBe(50);
});