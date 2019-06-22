//================================================
// ================================================
// March 11, 2019
// ================================================
// ================================================


/*	
Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
function assertEquals(p1,p2) {
	if (p1 !== p2) {
		console.log("the two values are not the same")
		console.log("p1 -->",p1 );
		console.log("p2 -->",p2);
		return false
	} else {
		console.log("ok -->",p1);
		return true
	}
}
// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");


//================================================
// ================================================
// March 13, 2019
// ================================================
// ================================================

/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---

function makeEmailArr(arrayLarry) {
	return (arrayLarry[0] + "." + arrayLarry[1] + "@evolveu.ca" )
}

// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));



//=================================================
// ================================================
// March 14, 2019
// ================================================
// ================================================

/*	
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---
function makeEmailObj(objLarry) {
	// console.log(typeof(objLarry["fname"] + "." + objLarry["lname"] + "@evolveu.ca"))
	return (objLarry["fname"] + "." + objLarry["lname"] + "@evolveu.ca")
}


// and before this comment ---

objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

//=================================================
// ================================================
// March 18, 2019
// ================================================
// ================================================

const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

// Write the function after this comment ---
function loopStaff (a1) {
	let newNames = []
	for (i=0; i<a1.length; i++) {
		// let firstName = a1[i].fname;
		// let lastName = a1[i].lname;
	// console.log((makeEmailObj (a1[i])))
	newNames.push(makeEmailObj (a1[i]));
	// console.log(firstName + " " + lastName);
	// console.log(firstName, lastName);
	// console.log(makeEmailObj(x = {fname: "mickey", lname:"mouse"}));
	}
	// newNames.push (makeEmailObj ((a1[i].fname, a1[i].lname)))
	// newNames.push (makeEmailObj ((a1[i].fname, a1[i].lname)))
	// console.log(typeof(newNames));
	// console.log(newNames);
	return newNames;
}
// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
// console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

//=================================================
// ================================================
// March 19, 2019
// ================================================
// ================================================

 ///////////For of Loop//////////

function loopWithForOf (a1) {
	let newNames = []
	for (let value of a1) {
		newNames.push(makeEmailObj (value));
	}
return newNames;	
}

console.log('-----emailForOf')
console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);
// console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

 

 ///////////For in Loop//////////

function loopWithForIn (a1) {
	let newNames = []
	for (let value in a1) {
		newNames.push(makeEmailObj (value));
	}
return newNames;	
}

console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
// console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);


//=================================================
// ================================================
// March 20, 2019
// ================================================
// ================================================

/////////// loopStaff each ////////////// 

function loopWithEach(a1) {
	let newNames = []
	a1.forEach(element => {
		// console.log(element)
		newNames.push(makeEmailObj (element));
	})
return newNames;	
}

console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);
// console.log(emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);


 ///////////map//////////

function loopWithMap(a1) {
	
		// console.log(element)
		let newNames = a1.map(makeEmailObj);
	return newNames;

}

console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);
// console.log(emailWithMap);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);

//=================================================
// ================================================
// March 21, 2019
// ================================================
// ================================================

//=================================================
// ================================================
// write a function to receive the same array (staff) and return the total of balances
//=================================================
// ================================================

const balanceSum = (data.staff).reduce((accumulator, currentValue)=> accumulator + currentValue.balance,0);

console.log(balanceSum) ;


//=================================================
// create a table of objects of people having name and age
// write a function to receive the above array and return the total of the ages
// write a function to receive the above array and return the average the ages
//=================================================

const data1 = {
	staffAge: [
		{fname:"Jane", lname:"Smith", age:35},
		{fname:"Liam", lname:"Henry", age:45},
		{fname:"Emma", lname:"Jones", age:26},
		{fname:"Olivia", lname:"Notly", age:33},
		{fname:"Noah", lname:"Ho", age:45},
		{fname:"William", lname:"Lee", age:22},
		{fname:"Benjamin", lname:"Amis", age:30},
	]
};

function ageSum(b1) {
	let ageTotal = (b1).reduce((accumulator, currentValue)=> 
					accumulator + currentValue.age,0);
	// console.log(ageSum);
	return ageTotal;
}

function ageAvg(b1,func) {
	return func(b1)/b1.length;
}

console.log(ageAvg(data1.staffAge,ageSum));	


//=================================================
// ================================================
// March 28, 2019
// ================================================
// ================================================
//Using one of the callback functions we researched in the last exercise (but may have not used previously) create a new array for balances >= 1000. 

// let largeBalances = data.staff.filter(item=> {
	// item.balance>=1000})
let largeBalances = data.staff.filter( item =>  
	item.balance >= 1000
)	 

console.log(largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");



//=================================================
// ================================================
// March 29, 2019
// ================================================
// ================================================

//Write a reduce function to total the balances. 

let tot = data.staff.reduce((accumulator, currentValue)=> 
							accumulator + currentValue.balance,0);
console.log(tot);
assertEquals(tot, 3823);


//=================================================
// ================================================
// April 5, 2019
// ================================================
// ================================================

//Callback Exercise (Part 1) - April 5, 2019
//You are working for a private company who looks after demographics of people living in BC and Alberta only.  The data you received is from the 4 Western provinces.   
//Write two functions: 
//1) a function to process all of the people from the Western 4 provinces, selecting only BC and Alberta.  This is your jurisdiction so this function will need to be in your company’s general library to be used over and over again 
//2) a callback function to log  to the console the full names of people from BC and Alberta who are over 25 years of age.   


let people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

let processPeople = function(data, callback) {
						data = data.filter( item => 
						(item.province === "AB" || item.province==="BC"))	 
					return callback(data);
					}	

function callback(data) {
	 for (let i=0;i<data.length; i++) {
	 	if(data[i].age>26) {
	 		console.log(data[i].fname + " " + data[i].lname);
	 	}
	}
}




