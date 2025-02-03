const user={
    username: "Krishna",
    price:999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
    }
}
// user.welcomeMessage();
// user.username="Balram";
// user.welcomeMessage();
//this cannot be used in normal function but noly with object

//Arrow function
const code=()=>{
    let name="Krishna"
    console.log(this);
    
}
/*const addTwonum=(num1,num2)=>{
    return num1+num2;
}*/
//in curly braces we neeed to write return;
const addTwonum=(num1,num2)=>(num1+num2);//when simple bracket no return and when only one line is there we can remove braces also
//console.log(addTwonum(5,2));
//**** */
//IMMEDIATELY iNVOKED FUNCTION EXPRESSION(IIFE)
(function chai(){
    //Named IIFE
    console.log("Db connected");
    
})();

((name)=>{
    //unNamed IIFE
    console.log(`Db connected two ${name}`)
    
})('Krishna')
