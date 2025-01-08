//singleton (with constructor)
//Object.create

//object literal
const mysum=Symbol("key1");
const JsUser={
    name:"krishna",
    "full name":"vasudev",
    [mysum]:"myKey1",
    LastLogin:["monday","saturday"]
}
//access method
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[mysum]);
//Object.freeze(JsUser);

JsUser.greeting=function () {
    console.log(`hello Js user,${this.name}`);
    
}
//console.log(JsUser.greeting());

//******************* */

//const tinderUser =new Object();
const tinderUser = {}
tinderUser.name="Samay"
tinderUser.id="123bcd"
tinderUser.isLoggedIn=false;
//console.log(tinderUser);
//object can be nested also and acces it with using . as possible

const ob1={1:'a',2:'b'}
const ob2={3:'c',4:'d'}
//const ob3=Object.assign({},ob1,ob2)
const ob3={...ob1,...ob2};
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));//ENTRIES ALSO
// console.log(JsUser.hasOwnProperty('LastLogin'));

//DESTRUCTURING
const {name:n}=tinderUser
console.log(n);




