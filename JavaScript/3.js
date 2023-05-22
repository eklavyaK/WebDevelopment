//we use promises and .then() function of promises to handle multiple calls, and program proceeds according to the result of the promise

//async functions return promises, and await keyword can be used along with async function to get the value of a function then proceed for excution of the next statement in that thread of program control

//we can use throw keyword to throw an error of any type

//try catch block can also be used to execute an alternative code block in case main block fails

//fetch keyword is used to get api or an resource from different site, it uses .then() twice

//localStorage, sessionStorage, and cookies are used to store data in the browser

//prototypes are used, where we assign a prototype to a object, if a variable or function is found not in the object then it is looked in the prototype

//in javascript classes are similar to other programming languages

// we can form classes :-  class newClass{ methods related to class }

//constructor in class is written with the name of: constructor(){ variables } , rather than class name as we used to do in other programming languages

//we can use extends keyword to inherit the properties of another class

//super keyword is used to access the methods of the super class if it has been overwritten in child class

//we can use static methods: methods which belong to a class not to the objects, i.e. we cannot call static methods of a class using objects but we can call the static methods of a class inside the class.

class biodata{
    constructor(name,address,age){
        this.name = name
        this.address = address
        this.age = age
    }
    assignDOB(date,month,year){
        this.dob = date+"/"+month+"/"+year // we can directly declare a variable in a function using this keyword which becomes a inherent variable of the object
    }
    display(){
        console.log(this.name,this.address,this.age,this.dob)
    }
}
let person = new biodata("Eklavya","Roorkee","20")
person.display()
console.log(person.dob)
person.display()
person.assignDOB(05,01,2003)
person.display()
person.name = "Shyam"
person.display()