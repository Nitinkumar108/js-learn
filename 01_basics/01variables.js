const accountId=144553;
let accountEmail="abc@gmail.com"
var accountPassword="12345"
accountCity="Kolkata";
let accountstate;

//const keyword values cannot be changed
//never use var as keyword due to issue in block scope and functional scope

accountEmail="def@gmail.com";
accountPassword="67890";
accountCity="puri";

console.table([accountId,accountEmail,accountCity,accountPassword,accountstate]);
