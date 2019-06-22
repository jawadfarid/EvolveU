let button = document.getElementById("btm");
let input = document.getElementById("userinput");



button.addEventListener("click", function onButtonClicked() {
			console.log(Number(input.value) + 1);
})



let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let answ = document.getElementById("answ");

let add = document.getElementById("calckeyadd");
let subtract = document.getElementById("calckeysubtract");
let divide = document.getElementById("calckeydivide");
let multiply = document.getElementById("calckeymultiply");

add.addEventListener("click", function operatorClicked() {
	document.getElementById("answ").value = Number((num1.value))+Number((num2.value));
})

subtract.addEventListener("click", function operatorClicked() {
	document.getElementById("answ").value = Number((num1.value)) - Number((num2.value));
})

divide.addEventListener("click", function operatorClicked() {
	document.getElementById("answ").value = Number((num1.value))/Number((num2.value));
})

multiply.addEventListener("click", function operatorClicked() {
	document.getElementById("answ").value = Number((num1.value))*Number((num2.value));
})


// let input1 = document.getElementById("userinput1");
// let button1 = document.getElementById("btn1");
// let button2 = document.getElementById("btn2");
// let button3 = document.getElementById("btn3");
// let button4 = document.getElementById("btn4");
// let button5 = document.getElementById("btn5");
// let button6 = document.getElementById("btn6");
// let button7 = document.getElementById("btn7");
// let button8 = document.getElementById("btn8");
// let button9 = document.getElementById("btn9");
// let button0 = document.getElementById("btn0");
// let buttonadd = document.getElementById("btnadd");
// let button1subtract = document.getElementById("btnsubtract");
// let buttondivide = document.getElementById("btndivide");
// let buttonmultiply = document.getElementById("btnmultiply");
// let buttonequal = document.getElementById("btnequal");
// let buttonpoint = document.getElementById("btnpoint");

function myclick(val) {
	if(document.getElementById("display").value === 0){
		document.getElementById("display").value = ""
	} else{
		document.getElementById("display").value+= val;
	}
	
	}

function c(val) {
		document.getElementById("display").value= "";
	
}

function e() {
	document.getElementById("display").value = eval(document.getElementById("display").value);
}




// button1.addEventListener("click", btnClick);

//  function btnClick(event) {
// 	console.log('event.target.value:', event.target.value);
// 	  let b =event.target.value;
// 	  switch (b) {
// 	  	case '1':
// 	  	console.log('1 pressed');
// 	  	break;
// 	  	case '2':
// 	  	console.log('2 pressed');
// 	  	break;
// 	  	default:
// 	  	console.log('not 1 or 2!');
// 	  }
// 	  document.getElementById("display").value = b;
// };

// button2.addEventListener("click", btnClick);
// // button2.addEventListener("click", function(){
// // 	  let b = document.getElementById("btn2").textContent;
// // 	  document.getElementById("display").value = b;
// // })

// button3.addEventListener("click", function(){
// 	  let b = document.getElementById("btn3").textContent;
// 	  document.getElementById("display").value = b;
// })

// button4.addEventListener("click", function(){
// 	  let b = document.getElementById("btn4").textContent;
// 	  document.getElementById("display").value = b;
// })

// button5.addEventListener("click", function(){
// 	  let b = document.getElementById("btn5").textContent;
// 	  document.getElementById("display").value = b;
// })

// button6.addEventListener("click", function(){
// 	  let b = document.getElementById("btn6").textContent;
// 	  document.getElementById("display").value = b;
// })

// button7.addEventListener("click", function(){
// 	  let b = document.getElementById("btn7").textContent;
// 	  document.getElementById("display").value = b;
// })


// button8.addEventListener("click", function(){
// 	  let b = document.getElementById("btn8").textContent;
// 	  document.getElementById("display").value = b;
// })

// button9.addEventListener("click", function(){
// 	  let b = document.getElementById("btn9").textContent;
// 	  document.getElementById("display").value = b;
// })

// button0.addEventListener("click", function(){
// 	  let b = document.getElementById("btn0").textContent;
// 	  document.getElementById("display").value = b;
// })






// buttonadd.addEventListener("click", function(){
// 	  let c = document.getElementById("btnadd").textContent + b;
// })





// button1.addEventListener("click", function onButtonClicked1() {
// 			console.log(document.getElementById("btn1").value);
// })

// button2.addEventListener("click", function onButtonClicked2() {
// 			console.log(document.getElementById("btn2").value);
// })
// button3.addEventListener("click", function onButtonClicked3() {
// 			console.log(document.getElementById("btn3").value);
// })
// button4.addEventListener("click", function onButtonClicked4() {
// 			console.log(document.getElementById("btn4").value);
// })

// button2.addEventListener("click", function onButtonClicked2() {
// 			let b2=2;
// 			console.log(Number(b2));
// })


let income = Number(document.getElementById("idtI").value);
let btTaxOwing = document.getElementById("idbt-tO");
let br1 = 47630;
let br2 = 95259;
let br3 = 147667;
let br4 = 210371;
let tr1 = 0.15;
let tr2 = 0.205;
let tr3 = 0.26;
let tr4 = 0.29;
let tr5 = 0.33;



function taxOwing() {
	let income = Number(document.getElementById("idtI").value);
	if ( income <= br1) {
		let tax = (income * tr1);
		// console.log(tax);
		document.getElementById("idtO").value = tax;
		eTR = ((tax/income)*100);
		document.getElementById("ideTR").value = (eTR + "%");
		

	} else if (income > br1 && income <= br2) {
		let tax = (((income - br1)*tr2) + (br1*tr1));
		eTR = ((tax/income)*100);
		document.getElementById("ideTR").value = (eTR + "%");
		tax = `$${tax}`;
		document.getElementById("idtO").value = tax;

	} else if (income > br2 && income <= br3) {
		let tax = (((income - br2)*tr3) + 16908);
		eTR = ((tax/income)*100);
		document.getElementById("ideTR").value = (eTR + "%");
		tax = `$${tax}`;
		document.getElementById("idtO").value = tax;
	} else if (income > br3 && income <= br4) {
		let tax = (((income - br3)*tr4) + 30535);
		eTR = ((tax/income)*100);
		document.getElementById("ideTR").value = (eTR + "%");
		tax = `$${tax}`;
		document.getElementById("idtO").value = tax;
		
	} else {
		let tax = (((income - br4)*tr5) + 48719);
		eTR = ((tax/income)*100);
		document.getElementById("ideTR").value = (eTR + "%");
		tax = `$${tax}`;
		document.getElementById("idtO").value = tax;
		
	}
	
}

console.log(btTaxOwing.addEventListener('click', taxOwing));



// =====================================================
// ======================================================
// Working with the Arrays
// ======================================================
// ======================================================




let addbtn = document.getElementById("idadd");
let showbtn = document.getElementById("idshow");
let totalbtn = document.getElementById("idtotal");
let clearbtn = document.getElementById("idclear");


let array1 = [];
	
function toAdd() {
	let arrayinput = document.getElementById("idinput-array");
	if (isNaN(arrayinput.value)) {
	idDivArray.textContent = "Input is not a Valid Number";
	} else {
		array1.push(Number(arrayinput.value));
		idDivArray.textContent = "A Number has been added to the array";
		console.log(array1);
	}
}

function toShow() {
	let arrayinput = document.getElementById("idinput-array");
	array1.toString;
	idDivArray.textContent = array1;
	}


function toSum(){
	sum = 0;
	for (i=0; i < array1.length; i++) {
		sum = sum + array1[i] ;
		idDivArray.textContent = "Total is" + sum;
	}
}

function toClear(){
	array1 = []
		idDivArray.textContent = "Your Array has been Cleared";
	}
	


addbtn.addEventListener("click", toAdd);
showbtn.addEventListener("click", toShow); 
totalbtn.addEventListener("click", toSum); 
clearbtn.addEventListener("click", toClear);


// =====================================================
// ======================================================
// Working with Dictionaries
// ======================================================
// ======================================================



let x = 0;
function lookup(x) {
	let prov = {
	AB:"Alberta", 
	ON:"Ontario", 
	BC:"BritishColumbia", 
	QC:"Quebec", 
	NS:"Nova Scotia",
	MN:"Manitoba",
	PEI:"Prince Edward Island",
	NF: "Newfoundland"
};

x = document.getElementById("idinput-dict").value;
	console.log( 'a=',prov[x]);
	iddivdict.textContent = prov[x];
	document.getElementById("iddivdict").style.fontWeight = "900";



};

let btnlookup = document.getElementById("idbtnlookup");


btnlookup.addEventListener("click", lookup);


// =====================================================
// ======================================================
// Working with Dictionaries
// ======================================================
// ======================================================


