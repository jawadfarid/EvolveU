import City from "./city"

test('Test city', () => {
	let myCity = null;
	myCity = new City("Jawad", 342,252455,13123123124)
	expect(myCity).not.toBeNull();
});

test('Show Method test', () => {
	const myNewCity = new City("Jawad", 342,252455,13123123124)
	const test = myNewCity.show()
	expect(myNewCity.name).toBe("Jawad");
	expect(myNewCity.latitude).toBe(342);
	expect(myNewCity.longitude).toBe(252455);
	expect(myNewCity.population).toBe(13123123124);
	expect(test).toBe("Jawad 342 252455 13123123124");
});

test('MovedIn Method test', () => {
	let myNewCity = null;
	myNewCity = new City("Jawad", 342,252455,100)
	myNewCity.movedIn(10)
	//expect(myNewCity).not.toBeNull();
	//const test = myNewCity.show()
	//expect(myNewCity.name).toBe("Jawad");
	//expect(myNewCity.latitude).toBe(342);
	//expect(myNewCity.longitude).toBe(252455);
	//expect(myNewCity.population).toBe(100);
	expect(myNewCity.population).toBe(110);
});

test('MovedOut Method test', () => {
	let myNewCity = null;
	myNewCity = new City("Jawad", 342,252455,100)
	myNewCity.movedOut(10)
	//expect(myNewCity).not.toBeNull();
	//const test = myNewCity.show()
	//expect(myNewCity.name).toBe("Jawad");
	//expect(myNewCity.latitude).toBe(342);
	//expect(myNewCity.longitude).toBe(252455);
	//expect(myNewCity.population).toBe(100);
	expect(myNewCity.population).toBe(90);
});

test('howBig Method test', () => {
	//let myNewCity = null;
	const myNewCity1 = new City("Jawad", 342,252455,1000000)
	const myNewCity2 = new City("Jawad", 342,252455,100000)
	const myNewCity3 = new City("Jawad", 342,252455,21000)
	const myNewCity4 = new City("Jawad", 342,252455,20000)
	const myNewCity5 = new City("Jawad", 342,252455,1100)
	const myNewCity6 = new City("Jawad", 342,252455,1000)
	const myNewCity7 = new City("Jawad", 342,252455,101)
	const myNewCity8 = new City("Jawad", 342,252455,99)

	const testStatus1 = myNewCity1.howBig()
	const testStatus2 = myNewCity2.howBig()
	const testStatus3 = myNewCity3.howBig()
	const testStatus4 = myNewCity4.howBig()
	const testStatus5 = myNewCity5.howBig()
	const testStatus6 = myNewCity6.howBig()
	const testStatus7 = myNewCity7.howBig()
	const testStatus8 = myNewCity8.howBig()

	//expect(myNewCity).not.toBeNull();
	expect(testStatus1).toBe("City");
	expect(testStatus2).toBe("Large Town");
	expect(testStatus3).toBe("Large Town");
	expect(testStatus4).toBe("Town");
	expect(testStatus5).toBe("Town");
	expect(testStatus6).toBe("Village");
	expect(testStatus7).toBe("Village");
	expect(testStatus8).toBe("Hamlet");
	//expect(myNewCity.latitude).toBe(342);
	//expect(myNewCity.longitude).toBe(252455);
	//expect(myNewCity.population).toBe(100);
	//expect(myNewCity.population).toBe(90);
});



// test('Balance test', () => {
// 	const myNewAccount = new Account(50)
// 	const testBal = myNewAccount.getBalance()
// 	expect(testBal).toBe(50);
// });