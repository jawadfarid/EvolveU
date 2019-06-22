const p = console.log

console.log("hello world from basic.js");
console.log("Document", document);
console.log("Document", document.body) ;

let btn = document.getElementById("btn");

function onButtonClicked() {
	console.log("You pushed the button");
}

console.log(onButtonClicked());

btn.addEventListener("click", onButtonClicked);



btn.addEventListener("click", function switchByButton() {
		if (idH1.textContent === ("Hello World")) {
		idH1.textContent = "Hello Universe";
		} else {
			idH1.textContent = "Hello World"; 		
		}
	});






let h1 = document.getElementById("idH1");
let h3 = document.getElementById("idH3");
let h4 = document.getElementById("idH4");
let a = "Hello World"
let b = "Hello Alberta"
let c = "Hello Calgary"


h1.addEventListener("click", function switchByH2() {
		if (idH1.textContent === a) {
		idH1.textContent = "Hello Universe";
		} else {
			idH1.textContent = a ; 		
		}
	});

h3.addEventListener("mouseover", function switchByH3() {
		if (idH3.textContent === b) {
		idH3.textContent = "Hello Saskatchewan";
		} else {
			idH3.textContent = b ; 		
		}
	});

h4.addEventListener("mouseout", function switchByH3() {
		if (idH4.textContent === c) {
		idH4.textContent = "Hello Saskatoon";
		} else {
			idH4.textContent = c ; 		
		}
	});








// ================================================
// ================================================
// Adding heading Element with a Counter
// ================================================
// ================================================

counter = 0;

function addHeading() {
// console.log(e.target);
  counter = counter + 1;
  document.getElementById("btn").textContent = counter;

  let head = document.createElement("H1");
  head.textContent = "Heading" + counter;
  document.body.appendChild(head);
  
}

btn.addEventListener("click", addHeading);

// ================================================
// ================================================
// Adding attribute to an Element
// ================================================
// ================================================

function addHeading() {
  let a1 = document.querySelector("h2");
  a1.setAttribute("place", "Canada");
  let place1 = a1.getAttribute("place");
  console.log(place1);


 
  // let head = document.createElement("H1");
  // head.textContent = "Heading"
  // document.body.appendChild(head);
  
}

btn.addEventListener("click", addHeading);

// ================================================
// ================================================
// Adding heading Element in div using appendCHild
// ================================================
// ================================================
function addHeading() {
 
  let head1 = document.createElement("H3");
  head1.textContent = "Hey"
  // let textnode = document.creatTextNode("")
  document.getElementById("iddiv").appendChild(head1);
}

btn.addEventListener("click", addHeading);

//================================================
// ================================================
// Adding heading Element in div using appendCHild
// ================================================
// ================================================
function addHeading() {
 
  let list = document.createElement("LI");
  document.getElementById("iddivh2").appendChild(list);
  let textnode = document.createTextNode("This is a new list")
  list.appendChild(textnode);
  // let textnode = document.creatTextNode("")
  
}

btn.addEventListener("click", addHeading);
