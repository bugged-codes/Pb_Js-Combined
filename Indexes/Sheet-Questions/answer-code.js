// ! *************************************************** 1)AOO Questions --> 8 **************************************************
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ]
// ?AOO Q.1) Ans:
//

// ! *************************************************** 2)DOM Questions --> 11 *************************************************
// ?DOM Q.1) Ans:
// document.getElementById("text");

// ?DOM Q.2) Ans:
// document.querySelector("h1");

// ?DOM Q.3) Ans:
// document.querySelector(".box");

// ?DOM Q.4) Ans:
// document.querySelector("h1").textContent = "Hello World!";

// ?DOM Q.5) Ans:
function flexDirection() {
	let direction = document.getElementById("que5-example");
	if (direction.style.flexDirection === "row") {
		document.getElementById("que5-btn").textContent = "Row";
		direction.style.flexDirection = "column";
	} else {
		document.getElementById("que5-btn").textContent = "Column";
		direction.style.flexDirection = "row";
	}
}

// ?DOM Q.6) Ans:
/*
Window: The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created.
Syntax: window.property_name;

Document: The document object represent a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.
Syntax: document.property_name;
*/

// ?DOM Q.7) Ans:
// document.querySelector("h1").id = "heading";
// document.querySelector("h1").style.color = "red";

// ?DOM Q.8) Ans:
function changeText() {
	let text = document.getElementById("que8-example");
	if (text.textContent === "Hello World..!") {
		text.textContent = "Welcome to Elevation Academy.";
	} else if ((text.textContent = "Welcome to Elevation Academy.")) {
		text.textContent = "Hello World..!";
	}
}

// ?DOM Q.9) Ans:
setInterval(() => {
	let currentTime = new Date();
	let hr = currentTime.getHours();
	let min = currentTime.getMinutes();
	let sec = currentTime.getSeconds();

	if (hr < 10) {
		hr = `0${hr}`;
	}
	document.getElementById("hr-time").textContent = hr;
	document.getElementById("min-time").textContent = min;
	document.getElementById("sec-time").textContent = sec;
}, 1000);

// ?DOM Q.10) Ans:
function year() {
	let year = document.getElementById("year-select").value;
	document.getElementById("que10-text").textContent = year;
}

//
// ! ************************************************* 3)Functions Questions --> 7 ***********************************************
// ?FUNCTION Q.1) Ans:
// function log(){
// 	console.log("Hello World");
// }

// ?FUNCTION Q.2) Ans:
// ?FUNCTION Q.2) Ans:
// ?FUNCTION Q.2) Ans:
// ?FUNCTION Q.2) Ans:
// function sum(a, b){
// 	sum = a+b;
// 	return `Sum of ${a} and ${b} is ${sum}`;
// }

// ?FUNCTION Q.3) Ans:
