import Community from "./Community"
import City from "./city"


test('Test Community Controller', () => {
	let myNewCommunity = null;
	myNewCommunity = new Community()
	expect(myNewCommunity).not.toBeNull();
});

test('Add City Test', () => {
	const newCommunity = new Community()
	//const newCity = new City("Calgary",50,25,78)
	
	newCommunity.addCity("Calgary",50,25,78)
	expect(newCommunity.cityArray[0].name).toBe("Calgary");
	expect(newCommunity.cityArray[0].latitude).toBe(50);
	expect(newCommunity.cityArray.length).toBe(1);
});

test('Which Sphere Test', () => {
	const newCommunity = new Community()
	//const newCity1 = new City("Calgary",10,55,1500)
	//const newCity2 = new City("Edmonton",-10,55,1500)
	newCommunity.addCity("Calgary",10,55,1500)
	newCommunity.addCity("Edmonton",-10,59,1500)
	const testLoc1 = newCommunity.whichSphere(0)
	const testLoc2 = newCommunity.whichSphere(1)
	//expect(newCommunity.cityArray[0].latitude).toBe(10);
	expect(testLoc1).toBe("Northern Hemisphere");
	expect(testLoc2).toBe("Southern Hemisphere");
 	//expect(newCommunity.cityArray[0].name).toBe(10);
// 	expect(newAC.accountArray.length).toBe(1);
});


 test('Most Northern Method Test', () => {
 	const newCommunity = new Community()
 	//const newCity1 = new City("Calgary",10,55,1500)
 	//const newCity2 = new City("Edmonton",25,55,1500)

 	newCommunity.addCity("Calgary",10,55,1500)
 	newCommunity.addCity("Edmonton",25,55,1500)
 	const test = newCommunity.getMostNorthern()
 	//console.log(test.name)
 	expect(test.name).toBe("Edmonton");
 });

 test('Most Southern Method Test', () => {
 	const newCommunity = new Community()
 	//const newCity1 = new City("Calgary",10,55,1500)
 	//const newCity2 = new City("Edmonton",-25,55,1500)

 	newCommunity.addCity("Calgary",10,55,1500)
 	newCommunity.addCity("Edmonton",-25,55,1500)
 	const test = newCommunity.getMostSouthern()
 	//console.log(test.name)
 	expect(test.name).toBe("Edmonton");
 });

 test('Sum of Population Method Test', () => {
 	const newCommunity = new Community()
 	//const newCity1 = new City("Calgary",10,55,1500)
 	//const newCity2 = new City("Edmonton",-25,55,2500)

 	newCommunity.addCity("Calgary",10,55,1500)
 	newCommunity.addCity("Edmonton",-25,55,2500)
 	const test = newCommunity.sumOfPopulation()
 	//console.log(test.name)
 	expect(test).toBe(4000);
 });

