let score ="Krishna"

//console.log(typeof(score));
//console.log(typeof score);
let InNumber=Number(score);
//console.log(typeof InNumber);
//console.log(InNumber);

/* "33"=>33
"33abc"=>NaN
true=>1; false=>0*/

let IsloggedIn="hare"

let booleanIsloggedIn=Boolean(IsloggedIn);
//console.log(booleanIsloggedIn);


/*
In  boolean conversion
1=>true; 0=>false;
""=>false
"hare"=>true;
*/

//similarly in string : let StringNum=String(someNum)

/***Operations:
   -value,2**3 power,str1+str2,"2"+1+1=>211 but 1+1+"2"=>22,+true=>1,+""=>0)
 */
/*
 comparisons:
 null in comparison(<,>,<=,>=) is treated as zero, but not in equality check(==)
 => (===)strict equality check also check value along with data types)*/
 /*
 Data types:
 Primitve{called by value:
 7 types: String,Number,Boolearn,null,undefined
 }
 Non primitive or reference{
  array,object,Functions
 }*/
const id=Symbol("123");
const id1=Symbol("123");
//console.log(id===id1);

//references
//array
const hero=["shaktimaan","hulk"];
//object
const obj={
  name:"aman",
  age:12,
}
//functiom
const fun= function () {
  console.log("hello world");
}
//console.log(typeof hero);

 /*
 MEMORY:

 stack(primitive)=>call by value, duplicate value is passed
 Heap(non primitive value)=> call by reference , pointer to value is passed)
 
  */
//STRINGS
const name="Hare";
//const repoCount=50;
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 /*
 strings :
 name.length=>to find length
 some more easy function
 name.replace('H','C');//to replace character
 name.include("hi")//to check that value
 name.split('_')// to split string on the basis of _
 
  */
 const min=10;
 const max=30;
 console.log(Math.floor(Math.random()*(max-min+1))+min);
