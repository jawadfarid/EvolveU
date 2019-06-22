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

let a = [1,2,3,4]

a.forEach(function(element) {
	console.log(element);
})

// it creates an array first
// Then it creates the function and registers it 

function myFunc(p1,p2,p3) {
	console.log(p1,p2,p3);
}

a.forEach(myFunc);

function myCallBackFunction (ar,func){
	console.log("in myCallBackFunction");
	console.log("-->",ar);
	console.log("-->",func);

	for(i=0;i< ar.length;i++) {
		// console.log("===>",ar[i]);
		func(ar[i]);
	}
}

function myWorkerFunction(p1) {
	console.log("myWorkerFunction",p1);
}

myCallBackFunction(data.staff,myWorkerFunction);