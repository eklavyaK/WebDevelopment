// alert("are you sure you want to visit this website?") //shows a alert message on the website when run
// let a = prompt("enter a number") // asks for input from the user
// document.write(a) //writes on the webpage
// let c = confirm("did the download start") //asks for confirmation returns true of false
// document.write(c)
document.body.style.background = "green"  //changing css styling properties using javascript
let arr = Array.from(document.body.childNodes)//childNodes gives you the all the child nodes of a node you can also access a particular child using its index, this can also be converted in an array of objects
console.log(arr)
console.log(document.body.parentNode) //this gives you the parentnode of the node
let c = document.getElementById("first") //this function gives you the element which has that id
console.log(typeof c) //it of object type
console.log(document.getElementsByClassName("1")) //gives array of all elements having that class name
console.log(document.getElementsByTagName("div"))// gives an array of all div elements

c.style.color = "red"
let ih = first.innerHTML //this gives us the everything written under that object, this very very important to make dynamic websites
console.log(ih)
ih = second.innerHTML
console.log(ih)


let oh = first.outerHTML
console.log(oh)

first.innerHTML = "<br>I've almost learnt JavaScript<br>"

//getting and setting attributes in javascript
console.log(first.hasAttribute("class")) //this checks whether the object has has attribute class
console.log(first.getAttribute("class")) //this gets you the value of that attribute
first.setAttribute("class", "2") //it sets the attributes of the object first
console.log(first.outerHTML)
first.removeAttribute("class") //removes the attributes
console.log(first.getAttribute("data-player"))// we can also create custom attributes by data-<attribute name>
console.log(first.dataset.player) //this  gives you the value of the attribute

//insertAdjacentHTML method can be used to insert HTML code before after the start, or before after the end, of an html object

//to change the class list of an object, we can use add remove or toggle methods in javascript

//to introduce a timer in the excution of a function, we can use setInterval setTimeout

//we can write simple javascript code inside the element itself or in script file where mouse or keyboard functions are involved, like when element is clicked by the mouse, or like mouse is pointed on it, some attributes related to it is onmouseenter = "javascript", onclick = "javascript code"

let a = document.getElementById("proceed")
a.style.backgroudColor = 'dark'
a.onclick = () => {
  window.open("https://stackoverflow.com/questions/22057610/uncaught-typeerror-cannot-read-property-value-of-null")
}
function change() {
  a.style.backgroundColor = 'blue'
}
function normal() {
  a.stylebackgroundColor = 'white'
}
a.onmouseenter = change;
a.onmouseout = normal;