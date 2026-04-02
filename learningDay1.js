console.log("Wel come to Java Script");

alert("Welcome to Java Script :")

let Karthi=prompt("Enter your name:  ");
document.write(Karthi);
console.log(2+2);
console.log("Hello");
console.log(true);
console.log([1,2,3,"Nanjunda","Charan"])
const A="Nanjunda";
console.log(A);
var Nanjunda="ISE";
let Charan="CSE";
console.log(Nanjunda);
console.log(Charan);
const nanjunda1={
    name:"Likhith",
    age:21
};
console.log(nanjunda1)
//variables in javascript
//there are threee variable in JavaScript 
//var,let,const these three variable used in Java Script
var name="Nanjunda";
var greeting;
greeting=1234;
console.log(greeting);
//Rules for conversion of variable
//declaration of variable 
//letter, number,$ these are used to to deeclare the variable in javascript
// $ symbol more used for declare a variable in j query
var $name="Nanjunda";
console.log($name);


var firstName="Charan";  //Camel case in camel case first letter should be lowerce and second letter should be in the form of big ex:firstName
console.log(firstName);


var first_name="Charan"; //undescore case
console.log(first_name);


var FirstName="Likhith"; //pascal case or uppercamel case
console.log(FirstName);


const sample=12; //for const variable we cannot assign multiple value for the same variable
console.log(sample);

const person={                //object 
    name:"Nanjunda K M",
    age:21,
    Education:"BE",
    // person2:{
    //     n:"charan",
    //     a:21
    // }

};
person.name="Charan H G RRCE";
person.age=22;
person.Education="BED";
console.log(person.name);

//DATA TYPES IN JAVSCRIPT
//There are two types of data tyepes in java script 
// primitive datatype
//Reference data type  

//1. primitive data type
// these data types are stored in the directly location  the variable access stored in the stack
/* 
1.String
2.Number
3.Boolean
4.Null 
5.undefined
6.Symbol
*/

/*
1.Reference data types
 Acceseed by refrence stored  in heap memory  and points to location in memory

 1.Array
 2.Object literal
 3.Functions
 */

 //String
  const name1="Nanjunda";
 console.log(name1);
 console.log(typeof name1);

 //number 
 const age=21;
 console.log(age);
 N=typeof(age);
 console.log(N);

 //boolean
 const is_rainy=true;
 console.log(typeof is_rainy);

 //null
  const variable=null;// we are storing value of nothing
  console.log(typeof variable);

  //undefined
//if you use a const to declare a varible, Then  you should initialize the variable or assign a value to the variable
let a;
const sym=Symbol();
console.log(typeof sym);



//Reference Data types
//Array
const hobies=["Listening Music", "Watching movie","reading"];
console.log(hobies);
console.log(typeof hobies)

//Objecctc literal
const person2={
    name:"Karthik",
    age:21
};

//Dates
const today=new Date().getDay();
console.log(today);

//Data type Converion
 
//Number to String
//There two method to convert number to string
//1.Using string() function
//2.    .toString()  function
let val;
val=123;
val=String(val);
console.log( typeof val);

//another method
let val1=1234;
val2=val1.toString();
console.log(typeof val2);

//No need to declare let all the time you can  declare once ,you can  use that variable how many times you want


//bollean to string
let nanjunda=true;
console.log( typeof nanjunda);

//string to number
// there are two method to convert string into number
//1.  Number() function
//2. parseInt
let value;
 value = Number(true);   //output:1
 value =Number(false);  //output:0
 value=Number(null)    //output:0
 value= Number("1234");
 // parseInt() methode
 Value = parseInt("10",2);
console.log(value);
console.log(typeof value)
Decimal=value.toFixed(3); //tofixed() method used to represent decimal points here 3 mean 1.000 zeros indicates it's function
console.log(Decimal);// 


//Type coensive
const value1="5";  // in java script If we add one variable string no need to add another also string javasccript itself treat that is also string .
const value2=6; // java script itseldf treat this also  a string .
const sum = value1+value2;
console.log(sum);


//out comes :

/*

1.cosole.log 
2.data types of javascript
3.data types pracctice 
4. data types conversion 
5.type coensive

*/









