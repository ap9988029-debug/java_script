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
