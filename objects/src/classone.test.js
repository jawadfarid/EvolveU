import Location from "./classone"

test('Test Location', () => {
	let myNewLocation = null;
	let point1 = new Location("5°42'53' W","50°03'59' N");
	let point2 = new Location("3°4'12' W","58°38'38' N");
	expect(point1.latitude).not.toBeNull();

	let test1 = point1.degreesToDistance(point1.longitude,point1.latitude);
	expect(test1[0]).toBe(-5.714722222222222);
	
	let test2 = point2.degreesToDistance(point2.longitude,point2.latitude);
	expect(test2[0]).toBe(-3.0700000000000003);
	expect(test2[1]).toBe(58.64388888888889);

	let test3 = point2.myConvert("3","4","12","W");
	expect(test3).toBe(-3.0700000000000003);


	
	// expect(point1.latitude).toBe(54253);
	// expect(point1.longitude).toBe(500359);
	// expect(point2.latitude).toBe(30412);
	// expect(point2.longitude).toBe(583838);
	expect(point1.distance(point2)).toBe(968.9);
	
});

// test('Add Account', () => {
// 	const newAC = new AccountController()
// 	newAC.addAccount("Jawad")
// 	expect(newAC).toBe("Jawad");
// 	expect(newAC.accountArray[0].balance).toBe(0);
// 	expect(newAC.accountArray.length).toBe(1);
// });