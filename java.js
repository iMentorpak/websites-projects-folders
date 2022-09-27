// 1. JavaScript Console API
// console.log("ALLAH", 10 + 10, "Another log");

// console.warn('this is me');
// console.error("this is clear");
//   console.clear("this is clear");
// console.assert(10 == (12 - 2));

// 2. JavaScript Variables
// What are variables? - Variables are Containers to store data values
var number1 = 45;
var number2 = 89;
// console.log(number1 + number2);
// 3.Data types in javascript
/*There are two types of data types*/
/*Primitive data type*/
// Number
var num1 = 200;
var num2 = 20.8;
// console.log(num1,num2)

// String
var str1 = "This is string"
var str2 = "This is also string"
// console.log(str1,str2)

// Object
var marks = {
    abdullah: 100,
    hassan: 110,
}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a,b);

// Undefined
var und ;
// console.log(undefined);

// Null
var n = null;
// console.log(n);

/*Reference data type: */
var arr = [1,2,3,4,5,6,7,8]
// console.log(arr)
// console.log(arr[1])

// operatore
// Arithmetic operation
var a = 30
var b = 40
// console.log("The value of a + b is",a+b)
// console.log("The value of a + b is",a*b)
// console.log("The value of a + b is",a-b)
// console.log("The value of a + b is",a/b)

// Assignment Operation

var c = b;
c -= 4;
c *= 2;
// console.log(c)
// Comparison operators

var x = 30
var y =20+1
// console.log(x==y)

var x = 30
var y =20+10
// console.log(x==y)
// Logical operation

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)


// Logical not
// console.log(!false)
// console.log(!true)

// Function operation
// function avg(a, b){
// c = (a+b)/2
//  return c;}

//   c1 =avg(2,5);
// c2 = avg(89,798);
// console.log(c1 ,c2);


// conditional statements in javascript
var age = 33;
// single if  statement
// if(age > 4){
//   console.log('This is kid')
// } 
// else{
//   console.log('This is not kid')
// }
age = 25;
// if-else ladder
// if(age > 32){
//   console.log("you ar not kid")
// }
// else if(age >26){
//   console.log("you ar  kid")
// }
// else  if(age >22){
//   console.log("you ar not old")
// }
// else if(age >18){
//   console.log("18 you ar not lady")
// }
// else{
//   console.log("you are gril")
// }

// console.log("end of life")

// Loops in JavaScript
// FOR LOOP 
var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
  
//     console.log(arr[i])
// }
// Short method
// arr.forEach(function(element){
//     console.log(element)
// })
// End FOR LOOP

// WHILE LOOP

// let j =0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// do{
//     console.log(arr[j]);
//     j++; 
// }while (j < arr.length);
// End WHILE LOOP
// End Loops in JavaScript
 

// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length)

// 10. Break and continue{
    // for(var i=0;i<arr.length;i++){
    //     if (i==3){ 
    //         // continue;
    //         // break;
    //     }
    //     console.log(arr[i])
    // }

    // 11. Array MEthods
    // let myarr =["hello","Go","Push","Rush"];
    // console.log(myarr.length) 
    // // myarr.pop();
    // // myarr.shift();
    // // myarr.unshift("");
    // myarr.push("allah","Subhanallah");

    // const newLen = myarr.unshift("allah")
    // console.log(myarr)

    // let myarr =[1,2,3,4,5,6,7,8,9]
    // console.log(myarr.length);
    // // myarr.pop();
    // // console.log(myarr)
    // // myarr.shift(10);
    // // console.log(myarr)
    // // myarr.unshift(10)
    // // console.log(myarr)

    // const newLen = myarr.unshift(12)
    // console.log(12)

    // 12. String Methods in javascript

    // let mybabystring ="This is abdullah "
    // console.log(mybabystring.length)
    // // console.log(mybabystring.indexOf("abdullah"))
    // // console.log(mybabystring.lastiIndexOf("abdullah"))
    // // console.log(mybabystring.slice(10,19))
    // to replace
    // d = mybabystring.replace("abdullah","hassan");
    // console.log(d,mybabystring)
    // let mylala = "this is aseels farm"
    // console.log(mylala.length)
    // console.log(mylala.slice(6,10))
    
    //12. Dates in Java Script
    // let mydate = new Date ();
    // console.log(mydate.getMinutes()); 

    // 13.java DOM Manipulation
//     document.getElementById('click').click()
// // undefined
// // IN CONSOLE box

// document.getElementById('click').style.border='red'
// 'red'
// document.getElementById('click').style.border='3px solid red'
// '3px solid red'


// let elem = document.getElementById('click');
// console.log(elem)

let elemClass = document.getElementsByClassName('container');
console.log(elemClass)
// elemClass[0].style.background = "coral";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-center")
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "this is me"
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText="Syed Sajjad"
// tn[0].replaceChild(createdElement2, createdElement)

// 14.Events in javascript



