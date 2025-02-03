//for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//while and do while
//Higher order Array loop

//for of loop and it can wfe used anywhere
const arr =[1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
    
}
//Maps

const map=new Map();
map.set('IN',"India")
map.set('Fr',"France")

for (const [key,value] of map) {
    //console.log(key,":=",value);    
}
// we can iterate on map but not on object using for of keys

//++++OBJECT

const Myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'

}
// for in loop 
for (const key in Myobj) {
  // console.log(`${key} is shortcut of ${Myobj[key]}`);
   
}
//in array indexes coms as key and for in loops dosen't help in map iterate

//@@@@@FOR EACH LOOP MOSTLY USED IN ARRAY
const num=["one","two","three"];
num.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
    
})//or we can use normal call back function with no name here only or arrow function,different place function passed its value;

//ex.
const myCoding=[
    {
      languageName:'javascript',
      languageFileName:'js'  
    },
    
    {
      languageName:'c++',
      languageFileName:'cpp'  
    },
    
    {
      languageName:'java',
      languageFileName:'.java'  
    }
    
]
myCoding.forEach((item)=>{
    //console.log(item.languageName);
    
})
//for each value dosent return something;
///@@@@
//filter, it returns something with condition
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newnum=myNums.filter((num)=>{
//   return num>4 //if scope then return keyword in needed
// })
// const newnum=[]
// myNums.forEach((item)=> {
//   if(item>4)
//   {
//     newnum.push(item)

//   }
  
// });
// console.log(newnum)//for each can also be used

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
let userBooks=books.filter((bk)=>bk.genre==='History')
 userBooks=books.filter((bk)=>bk.publish>=1995 && bk.genre==='History')
//console.log(userBooks)

//++++++++MAP++++++++++

let newval=myNums.map((item)=>{//operation is performed on given values
  return item+10;
})
newval=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
//console.log(newval);

///++++REDUCE///
 const num1=[1,2,3]
let myTotal=num1.reduce(function (acc,curr) {
  //console.log(`accumulator :${acc} and current :${curr}`)
  return acc+curr;
},0)
myTotal=num1.reduce((acc,curr)=>acc+curr ,0)
//console.log(myTotal);

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]
const totalBill=shoppingCart.reduce((acc,curr)=> acc+curr.price ,0)
console.log(totalBill);


