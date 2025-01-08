//Dates
let myDate=new Date();
//console.log(myDate.toLocaleString);

let newDate=new Date(2025,0,8);
//console.log(newDate);

let Timestamp=Date.now();
console.log(Math.floor(Timestamp/1000));
newDate.toLocaleString('dafault',{
    weekday:"long",
})
//use mdn docs for this