// ! *************************************************** 1)AOO Questions --> 8 **************************************************
// ! Array of Objects

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ]

// ?AOO Q.1) Ans:
//let names = studentRecords.map(({name}) => name.toUpperCase());
// console.log(names);
//

//?AOO Q.2) Ans:
// const newArr = studentRecords.map(({name, id, marks}) => {
//     if(marks > 50){
//        console.log({name, id, marks});
//		}
// });

// ?AOO Q.3) Ans:
// const newArr = studentRecords.map(({name, id, marks}) => {
//     if(marks > 50 && id > 120){
//        console.log({name, id, marks});
//     }
// });

// ?AOO Q.4) Ans:
// var sum = 0;
// let markSum = studentRecords.forEach(({marks}) => {
//     sum = sum + marks;
//     return sum;
// });
// console.log(sum);

// ?AOO Q.5) Ans:
// let names = studentRecords.map(({name, marks}) =>{
//     if(marks > 50){
//         console.log({name})
//     }
// });

// ?AOO Q.6) Ans:
// var sum = 0;
// let markSum = studentRecords.forEach(({marks, id}) => {
//     if(id >= 120){
//         sum = sum + marks;
//         return sum;
//     }
// });
// console.log(sum);

// ?AOO Q.7) Ans:
// var sum = 0;
// var newmarks = 0;
// let markSum = studentRecords.forEach(({marks, id}) => {
//         newmarks = marks + 15;
//         if(newmarks >= 50){
//             sum = sum + newmarks;
//             return sum;
//         }
// });
// console.log(sum-30);

// ?AOO Q.8) Ans:
// let student2 = {"name":"stu2", "class":"1st", "rollNo":"12"};
// let student3 = {"name":"stu3", "class":"2nd", "rollNo":"21"};
// let student4 = {"name":"stu4", "class":"2nd", "rollNo":"22"};
// let student5 = {"name":"stu5", "class":"3rd", "rollNo":"31"};

// const students = [{"name":"stu1", "class":"1st", "rollNo":"11"}];

// students.push(student2, student3, student4, student5);

// students.push({"name":"stu6", "class":"4th", "rollNo":"41"})

// console.log(students)
//

// ! *************************************************** 2)DOM Questions --> 11 *************************************************
// ! Document Object Model

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
	if (min < 10) {
		min = `0${min}`;
	}
	if (sec < 10) {
		sec = `0${sec}`;
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
// function sum(a, b){
// 	sum = a+b;
// 	return `Sum of ${a} and ${b} is ${sum}`;
// }

// ?FUNCTION Q.3) Ans:
// const max = (a, b) => a > b ? a : b;
// console.log(max(5, 6));

// ?FUNCTION Q.4) Ans:
// Undefined

// ?FUNCTION Q.5) Ans:
// Undefined
// 21

// ?FUNCTION Q.6) Ans:
// 20
// 40

// ?FUNCTION Q.7) Ans:
// function factorial(a){
//     if(a !== 0){
//         let ans = 1;
//         for(let i=2; i<=a; i++){
//             ans = ans * i;
//         }
//         return ans;
//     }
// }
// console.log(factorial(a));
//

// ! ***************************************** 4)I&P Questions --> 7 *****************************************
// ! Inheritance & Prototype

// ?I&P Q.1) Ans:
// const arr = [1,2,3,4,5,6];
// const arrsum = {
// 	addAll:function(arr){
// 		let sum = 0;
// 		for(let i=0; i<arr.length; i++){
// 		  sum = sum + arr[i];
// 		}
// 		console.log(sum)
// 	  }
// 	}

// Array.__proto__ = arrsum;
// Array.addAll(arr);

// ?I&P Q.2) Ans:

// ?I&P Q.3) Ans:
//

// ?I&P Q.4) Ans:
//
//

// ! ***************************************** 5)P&AA Questions --> 7 *****************************************
// ! Promises and Async Await

// ?PAA Q.1) Ans:
// function addition(a, b, callback) {
//     let result = callback(a, b);
//     console.log("The result is: " + result);
// }
// function callback(a, b) {
//     return a + b;
// }
// addition(5, 8, callback);

// ?PAA Q.2) Ans:
// function calltime(){
// 	setTimeout(()=>{
// 	 console.log("1");
// 	 setTimeout(()=>{
// 		 console.log("2");
// 		 setTimeout(()=>{
// 			 console.log("3");
// 			 setTimeout(()=>{
// 				 console.log("4");
// 				 setTimeout(()=>{
// 					 console.log("5");
// 					 setTimeout(()=>{
// 						 console.log("6")
// 						 setTimeout(()=>{
// 							 console.log("7")
// 						 },7000)
// 					 },6000)
// 					},5000)
// 			 },4000)
// 			},3000)
// 	 },2000)
// 	},1000)
//  }
//  calltime()

// ?PAA Q.3) Ans:
//

// ?PAA Q.4) Ans:
//

// ?PAA Q.5) Ans:
//

// ?PAA Q.6) Ans:
//

// ?PAA Q.7) Ans:
//
