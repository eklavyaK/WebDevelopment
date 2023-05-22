// console.log("Hello World")  //used for printing on console

// // primitive data types in javascript -- string, number, null, symbol, undefiled, boolean, BigInt
// let a = "me";
// let b = 234;
// let c = null;
// let d = Symbol("what is javascript");
// let e = BigInt("23432");
// let f = undefined
// let g = false
// console.log(a, b, c, d, e,f, g)

// //dictionary (key value pairs) in js is created as follows
// const item = {
//     "a" : 1,
//     "b" : 2,
//     "c" : 3
// }

// //difference between (==,!=) and (===,!==)
// let a1 = 6
// let b1 = 6; let c1 = "6"
// console.log(a1==b1)
// console.log(a1!=b1)   //it compares only value
// console.log(a1===c1)   //it compares both value and data type
// console.log(a1!==c1)
// let a = prompt("enter a number")
// console.log(a)


// //type casting
// let a = "23432";
// a = Number.parseInt(a);
// console.log(a);


// //for - in loop in javascript gives keys, in arrays gives index
// let obj = {
//     "first" : 3234,
//     "second" : 342,
//     "third" : 23432
// }
// for(let a in obj){
//     console.log(a, obj[a])
// }

// //for - of in loop in javascript gives values of the keys, in arrays gives value at a index
// for(let a of "Eklavya") console.log(a)


// //writing functions in javascript, there are several ways, below explained is one of them
// function add(a,b){
//     function subtract(a,b){
//         console.log(a-b);
//     }
//     subtract(a,b)
//     console.log(a+b);
//     return a+b;
// }
// add(233,234)
// let c = add(23,234)
// console.log(c)

// //strings in javascript
// let name = "eklavya"
// console.log(name[0])  //gets you the character at the index
// console.log(name.length) //gives length of string
// console.log(name)
// let me = 'eklavya'  //we can also use single quotes for writing a string
// let myname = `eklavya`  //we can also use back tick for writing a string
// console.log(`my name is ${name}`)  //one of the advantages of using backtick
// console.log(myname.toUpperCase())  //converting to uppercase
// console.log(myname.toLowerCase())  //converting to lowercase
// console.log(myname.slice(2,5))     //getting a substring
// console.log(myname.slice(2))     //getting a substring
// let next = myname + " " + me + " study hard"
// next[0] = 'H'   //strings are immutable, non replaceable
// console.log(next)
// next = next.slice(0,8)+"you must"+next.slice(15)
// console.log(next)


// // arrays in javascript
// let b = "suspended"
// let marks = [b, 23, 3243, "Absent", 'NA', null, false]

// for(let a of marks){ //printing each element
//     console.log(a)
// }

// marks[0] = 98  //changint a value
// console.log(marks)
// let a = "failed"
// marks[1] = a  //assigning a value using
// console.log(marks)
// console.log(marks.length)
// marks[10] = 98   //indirectly increasing the size of an array
// console.log(marks)  
// console.log(marks[8]) //gives undefined for empty cells
// let str = marks.toString()  //conversion to a string
// console.log(str)
// let str1 = marks.join("__") //joining elements using a character
// console.log(str1)
// console.log(marks)
// marks.pop()    //removing the final element
// console.log(marks)
// marks.push(89)  //appending an element at last
// console.log(marks)
// marks.shift()
// console.log(marks)
// marks.unshift(98)
// console.log(marks)
// let new_marks = [23,2,900,98,8932,4,98,7]
// let next_marks = [231,123,190,198,189,134,198,178]
// let new_array = marks.concat(new_marks,next_marks)   //it adds the elements from various arrays into a new array
// console.log(marks,new_marks,next_marks,new_array)
// new_marks.sort()                                    // this sorts in alphbetical order
// console.log(new_marks)  
// marks.sort()
// console.log(marks)
//to sort in ascending order we must give a basis argument to the sort function
// function compare(a,b){
//     return a - b
// }
// new_marks.sort(compare)    //if returned value is positive then elements are exchanged
// console.log(new_marks)
// new_marks.reverse();       //reverses the array
// console.log(new_marks)
// let furji = new_marks.splice(2,1,9,79,34)  //2 is the index, 1 is the number of elements to be deleted, after that list of elements to be inserted at that position
// console.log(new_marks)
// console.log(furji)   //furji contains the numbers which have been deleted
// let extract = new_marks.slice(3,5)    //acts like substring, doesn't delete anything from the array
// console.log(extract)
// console.log(new_marks)