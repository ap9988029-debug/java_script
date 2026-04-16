"use strict;"// treat all js code as newer version
// alert(3+3) // this use in browser .this is not use in nose.js
console.log(3+3)
console.log("ankit")//these are good practics
console.log(
    3+3
)/*
this is very bad practics
*/ 
let name="ankit"
let age=19
let  statement=false

// data type
/*
    1. number => highest stroge 2**53
    2. BigInt
    3. boolean=>true/false
    4. string=>""
    5. null=>standalone value
    6. undefined
    7. symbole => unique
    8. object 
*/
console.log(typeof null) // output null is object data type 
console.log(typeof undefined) // output undefined is undefined data type


// some important points about  data type
// premetive data type
// there are seven premetive datatype
// 1.string ,2.number, 3.Boolean,4.null,5.symbole,6.undefined,7.bigInt
// refrence or (non-premitive) datatype
// 1.array,2.object,3.funtion

let blank ;//undefined datatype
const num=12345667n //bigint data type
console.log(typeof(num))
const hero=["krish","spiderman","superman"]//array datatype typeof object
const ObjectDatatype={
    name:'ankit',
    age:20,
    sex:"male"
}//oject data type 
console.log(typeof (hero)) //object datatype
const functionDatatype=function(){
    console.log("hellow world")
}
console.log(typeof functionDatatype) //object function datatype

// stack memory store( primitive) heap memory store(non_primitive)
// stack memory to copy of ist variable data
// heap memory take refrence from ist variable data
//  example of stack
let userOne="ankitpandey@572007"
let userTwo=userOne
console.log(userTwo)
userTwo="ankit@572007"
console.log(userTwo)
console.log(userOne)
//  example of heap
let student={
    name:"ankit",
    email:"ankitpandey@572007"
}
let student2=student
student2.email="ankit@572007"//this update on student student two because its  store in heap memory
console.log(student)


