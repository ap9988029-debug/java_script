let score=true
// console.log(typeof(score))
let stringtonumber=Number(score)
// console.log(stringtonumber)
/*  string to number
    "3ab"       =>NaN
    "2"         =>2
    "a"         =>NaN
    null        =>0
    undefined   =>NaN
    true        =>1
    false       =>0
*/
// let statement=3
// let numbertobolean=Boolean(statement)
// console.log(numbertobolean)
/*
    boolean conversion
    ""        =>false
    "ankit"   =>true
    1         =>true
    0         =>false
    null      =>false
    undefiend =>false
    2         =>true
    object    => error
*/
let data=undefined
let stringindata=String(data) 
console.log(typeof(stringindata))
console.log(stringindata)
/*
    string data conversion
    3           =>"3"
    true        =>"true"
    false       =>"false"
    null        =>"null"
    undefined   =>"undefined"
*/
// -----------------------opreations------------------------------------------------
let va =2
let neg_data=-va
// console.log(neg_data)
// console.log(2+2)
// console.log(2*2)
// console.log(2**3)
// console.log(2-1)
// console.log(1/3)
// let a=" ankit"
// let b="hellow"
// console.log(b + a)
console.log("1"+1+3) //if =>first number is string  then =>js consider all opreations as string
console.log(1+3+"3")//if first number is number then =>js consider first opreation  and combiend them.
console.log(+true)//if + opreation first then true then => (js add 0+ (true) (true consider 1) )=1 
// console.log(true+)// if + opreation after true then js show error
let k=2
++k; //prefix opreater
console.log(k)
/*
    prefix opreater
    increment before opretor
*/
k++;
console.log(k);
/*
postfix opreator
increment after opretor
*/
// help line :-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
