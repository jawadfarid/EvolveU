// ================================================
// ================================================
// Viewing and Adding children in the Console and Webpage
// ================================================
// ================================================




const divClick = document.getElementById("iddiv");
const showBtn = document.getElementById("idshowbtn");
const addBtn = document.getElementById("idAddBtn");

// divClick.addEventListener("click", function(e) {
// 	console.log(e) ;
// });


function onShowButn() {
	console.log("a = ",document.getElementById("idlist").children)

	// let i = 0;
	// console.log(idlist.length);
	// for(i=0; i < idlist.length; i++) {
	// 	console.log(idlist[i]);
	// }
};

function onAddButn(){
	let list = document.createElement("LI");
  	document.getElementById("idlist").appendChild(list);
  	let textnode = document.createTextNode("This is a new list")
  	list.appendChild(textnode);
};

// Creating and Adding children as a first in the list
function onAddAsFirstChild(){
	let list = document.createElement("LI");
  	document.getElementById("idlist").appendChild(list);
  	let textnode = document.createTextNode("This is a new list")
  	list.appendChild(textnode);

  	let list1 = document.getElementById("idlist");
  	list1.insertBefore(list, list1.childNodes[1]);

};

// Removing a children in the list w.r.t indices
function onRemoveChild(){
	let list1 = document.getElementById("idlist");
	list1.removeChild(list1.children[0]);
  	
};


showBtn.addEventListener("click", onShowButn);
addBtn.addEventListener("click",onAddButn);

//================================================
// ================================================
// Working with Cards
// ================================================
// ================================================

const addCardBtn = document.getElementById("addCardBtn");
let counter =1

function define() {

	divCard1 = document.createElement("DIV");
	document.getElementById("idDivLeft").appendChild(divCard1);
  	divCard1.classList.add("cardDiv");

  	const cardp = document.createElement("P");
  	divCard1.appendChild(cardp);
  	const textnode = document.createTextNode("Card" + " " + counter++)
  	cardp.appendChild(textnode);

  	const cardBtnBefore = document.createElement("button");
  	cardBtnBefore.textContent = "Add Before";
  	divCard1.appendChild(cardBtnBefore);
  	cardBtnBefore.classList.add("cardBtn");

  	const cardBtnAfter = document.createElement("button");
  	cardBtnAfter.textContent = "Add After";
  	divCard1.appendChild(cardBtnAfter);
  	cardBtnAfter.classList.add("cardBtn");

  	const cardBtnDelete = document.createElement("button");
 	cardBtnDelete.textContent = "Delete";
  	divCard1.appendChild(cardBtnDelete);
  	cardBtnDelete.classList.add("cardBtn")

	// addCardBtn.addEventListener("click",addCard);
	cardBtnBefore.addEventListener("click", addBefore);
	cardBtnAfter.addEventListener("click", addAfter);
	cardBtnDelete.addEventListener("click", del);

  	};

function addCard() {
	// counter = counter + 1
	define()
	
};

function addBefore(e) {
  	
  	define();
  	console.log(e.target);
  	let cardTgt = e.target.parentElement;

  	idDivLeft.insertBefore(divCard1, cardTgt);
};

function addAfter(e) {

  	define();
  	console.log(e.target.parentElement);
  	let cardTgt = e.target.parentElement;
  	idDivLeft.insertBefore(divCard1, cardTgt.nextSibling);
};

function del(e) {
  	let cardTgt = e.target.parentElement;
	idDivLeft.removeChild(cardTgt);
};

addCardBtn.addEventListener("click",addCard);
// cardBtnBefore.addEventListener("click", addBefore);
// cardBtnAfter.addEventListener("click", addAfter);
// cardBtnDelete.addEventListener("click", del);



