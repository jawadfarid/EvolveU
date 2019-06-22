import AccountController from "./AccountController"
import Account from "./account"


test('Test Account Controller', () => {
	let myNewAC = null;
	myNewAC = new AccountController()
	expect(myNewAC).not.toBeNull();
});

test('Add Account', () => {
	const newAC = new AccountController()
	newAC.addAccount("Jawad")
	expect(newAC).toBe("Jawad");
	expect(newAC.accountArray[0].balance).toBe(0);
	expect(newAC.accountArray.length).toBe(1);
});


test('Highest Value Account', () => {
	const newAC = new AccountController()
	const newAccount1 = new Account(50,"Jawad")
	const newAccount2 = new Account(300,"Andy")
	newAC.addAccount(newAccount1)
	newAC.addAccount(newAccount2)
	
	expect(newAC.highestValueAccount()).toBe(300);
});

test('Lowest Value Account', () => {
	const newAC = new AccountController()
	const newAccount1 = new Account(50,"Jawad")
	const newAccount2 = new Account(300,"Andy")
	newAC.addAccount(newAccount1)
	newAC.addAccount(newAccount2)
	
	expect(newAC.lowestValueAccount()).toBe(50);
});

test('Total of Account', () => {
	const newAC = new AccountController()
	// const newAccount1 = new Account(50,"Jawad")
	// const newAccount2 = new Account(300,"Andy")
	// newAC.push(newAccount1)
	// newAC.push(newAccount2)
	newAC.addAccount("Jawad",500)
	newAC.addAccount("Kit",700)
	
	expect(newAC.totalOfAccounts()).toBe(1200);
	expect(newAC.accountArray.length).toBe(2);

});

test('Renamaing the Account name/type property', () => {
	const newAC = new AccountController()
	//const newAccount1 = new Account(50,"Jawad")
	//const newAccount2 = new Account(50,"Kit")
	//const newAccount3 = new Account(50,"Zayn")
	newAC.addAccount("Jawad")
	newAC.addAccount("Kit")
	newAC.addAccount("Zayn")

	newAC.renameAccountName(0,"Andy")
	expect(newAC.accountArray[0].name).toBe("Andy");
});



test('Remove Account', () => {
	const newAC = new AccountController()
	newAC.addAccount("Jawad")
	newAC.addAccount("Andy")

	newAC.removeAccount(0)
	expect(newAC.accountArray[0].name).toBe("Andy");
	//expect(newAC.accountArray[0].balance).toBe(50);
	expect(newAC.accountArray.length).toBe(1);
});