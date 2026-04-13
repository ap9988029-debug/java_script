console.table([["null>0","null<0","null==0","null<=0","null>=0"],[null>0,null<0,null==0,null<=0,null>=0]]);
/*
    1. Relational Comparisons (>= and <=)
When you use >, <, >=, or <=, JavaScript converts null to a number.
Number(null) becomes 0.
Therefore, null >= 0 becomes 0 >= 0, which is true.
Similarly, null <= 0 becomes 0 <= 0, which is true.
2. Equality Comparison (==)
The loose equality operator (==) handles null specifically according to the spec. It does not convert null to a number.
null is only loosely equal to itself or undefined.
Therefore, null == 0 is false.
3. Strict Greater/Less Than (> and <)
While null is converted to 0 here as well:
null > 0 becomes 0 > 0, which is false.
null < 0 becomes 0 < 0, which is false.
*/
// harder code
console.log("02"==2) //incomprasion opreater string convert into number
console.log("02"<=3) //output true
console.log("03">1)  //output true 
// null comparsion
console.log(null>0)//output false
console.log(null>=0)//output true
console.log(null<=0) // output true
console.log(null==0)//output false
console.log(null<0) //output false
// undefined treted as 0
console.log(undefined>0)//output false
console.log(undefined<0)//output false
console.log(undefined<=0)//output false
console.log(undefined>=0)//output false
console.log(undefined==0)//output false 