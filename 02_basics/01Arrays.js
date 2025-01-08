//ARRAYS
const myArr=[0,1,2,3,4,5]

const myArr2= new Array(1,2,3,4)
//console.log(myArr[1]);

//Array Method
// push,pop,unshift(insert in start),shift(delete the first)
//includes check whether its present its value is boolean type)
//arr.unshift(),arr.shift(),arr.imclude(),arr.indexof(),arr.join()
//slice,splice
/*++++++++++++
*/
const arr1=[1,2,3,4];
const arr2=[5,6,7,8,[11,12,[13,[14,[15,16]]]]];
//const arr3=[...arr1,...arr2];//spread operator
const realArr=arr2.flat(Infinity);
console.log(realArr);
//Array.isArray("krishna"),array.from(""), if cannot convert into array then return empty array
//Array.of(score1,score2,score3));
