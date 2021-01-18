// Examine the Document Object //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);

// GET ELEMENT BY ID //

// console.log(document.getElementById("header-title"));
// var headertitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headertitle);

// TEXT CONTENT // text inside html tags
// headertitle.textContent = "hello";  //Exclude Styling
// headertitle.innerText = "goodbye";  //Include Styling

// INNER HTML // content inside html tags
// headertitle.innerHTML = "<h3>Hello</h3>";

// CHANGE CSS //
// header.style.borderBottom = "2px solid black";

// GET ELEMENT BY CLASSNAME //
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "lightgrey";
// }

// GET ELEMENT BY TAGS NAME //
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "lightblue";
// }

// QUERY SELECTOR // grab the 1st element
// var header = document.querySelector("#main-header"); // Can use any CSS Selector
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector("input[type = submit]");
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red"; //Get only 1st one

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green";

// QUERY SELECTOR ALL // grab more than one
// ar title = document.querySelectorAll(".title");
// console.log(title);
// title[0].textContent = "Hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "lightgrey";
//   even[i].style.backgroundColor = "darkgrey";
// }

// TRAVERSING THE DOM //

// var itemList = document.querySelector("#items");
// ParentNode //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "lightgrey";
// console.log(itemList.parentNode.parentNode);

// Parent Element // same as parent node
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "lightgrey";
// console.log(itemList.parentElement.parentElement);

// Child Node //
// console.log(itemList.childNodes); // not recommended

// console.log(itemList.children); // RECOMMENDED
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// First Child //
// console.log(itemList.firstChild); // USELESS
// First Element Child //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// Last Child //
// console.log(itemList.lastChild); // USELESS
// // Last Element Child //
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 1";

// Next Sibling //
// console.log(itemList.nextSibling); //USELESS
// console.log(itemList.nextElementSibling);

// Previous Sibling //
// console.log(itemList.previousSibling); // USELESS
// console.log(itemList.previousElementSibling);

// CREATE ELEMENT //

// Create div //
// var newDiv = document.createElement("div");
// //Add Class
// newDiv.className = "hello";
// //Add ID
// newDiv.id = "hello1";
// //Add Attribute
// newDiv.setAttribute("title", "Hello Div");
// // Create Text Node
// var newDivText = document.createTextNode("Hello World");
// //Add Text to div
// newDiv.appendChild(newDivText);

// Insert Element //

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// //Insert Before
// container.insertBefore(newDiv, h1);
// console.log(newDiv);

// EVENTS //

// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

//Put output in HTML //
var output = document.getElementById("output");
// output.innerHTML = "<h3>" + e.target.id + "</h3>";

// function buttonClick(e) {
//Pass in event parameter
//See what event we get //
//   console.log(e);
//See what element we click //
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.classList);

//See what type of event //
//   console.log(e.type);
//Mouse Position on Window //
//   console.log(e.clientX);
//   console.log(e.clientY);
//Mouse Position on Element //
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//Check if you hold these keys //
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }

// Types of Mouse Event //
// var button = document.getElementById("button");
// var box = document.getElementById("box");

//Click
// button.addEventListener("click", runEvent);

// //DoubleClick
// button.addEventListener("dblclick", runEvent);

// //Mouse Down
// button.addEventListener("mousedown", runEvent);

// //Mouse UP
// button.addEventListener("mouseup", runEvent);

// //Mouse Enter
// box.addEventListener("mouseenter", runEvent);

// //Mouse Leave
// box.addEventListener("mouseleave", runEvent);

// //Mouse Over  //include inner element
// box.addEventListener("mouseover", runEvent);

// //Mouse Out  //include inner element
// box.addEventListener("mouseout", runEvent);

// //Mouse Move
// box.addEventListener("mousemove", runEvent);

//KeyBoard Events //
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var select = document.querySelector("select");

//types of keyboard Events//
//Keydown
itemInput.addEventListener("keydown", runEvent);

//Keyup
itemInput.addEventListener("keyup", runEvent);

//Keypress
itemInput.addEventListener("keypress", runEvent);

//Text Input Events
//Focus
itemInput.addEventListener("focus", runEvent);

//Blur
itemInput.addEventListener("blur", runEvent);

//Cut
itemInput.addEventListener("cut", runEvent);

//Paste
itemInput.addEventListener("paste", runEvent);

//Input
itemInput.addEventListener("input", runEvent);

//Select events
select.addEventListener("change", runEvent);

//Submit event
form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE: " + e.type);
  console.log(e.target.value);
  //   output.innerHTML =
  //     "<h3>MouseX : " + e.offsetX + "</h3><h3>MouseY : " + e.offsetY + "</h3>";

  //   document.body.style.backgroundColor =
  //     "rgb(" + e.offsetX + "," + e.offsetY + ",40)";

  //   console.log(e.target.value);
  //   output.innerHTML = "<h3>" + e.target.value + "</h3>";
}
