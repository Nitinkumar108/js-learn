///...rust operator
//*********intresting */
console.log(addone(5));//nun can access this before initialization.
 
function addone(num){
    return num+1;
}

//addtwo(3);//cannot access this
const addtwo=function(num){
return num+2;
}

/*Arrow funvtion and this keyword*/
