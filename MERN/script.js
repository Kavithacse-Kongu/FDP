var arr =[10,20,30];
var arr1 = [...arr,40,50,60];
console.log(arr);
console.log(arr1);

// Destructing operator
var arr1 = [...arr,40,50,60];
var[a1,a2,a3,a4,a5,a6] = arr1;
console.log(a1,a2,a3,a4,a5,a6);

//callback function
function demo()
{
    console.log("hello from demo");
}

const callback=(callbackfun) =>
{
    console.log("hello from callback");
    callbackfun();
}
callback(demo);

var name = "kavitha";
console.log(`My name is ${name}`);

function Add(n)
{
    return n*2;
}
//MAP -accept a function return new array
let array=[1,2,3,4,5]
let mappedarr = array.map((i)=>{return i*2})
console.log(array);
console.log(mappedarr);


let array1 = [1, 2, 3, 4, 5];
let mappedarr1 = array1.map(i => Add(i));

console.log(array1);       // [1, 2, 3, 4, 5]
console.log(mappedarr1);   // [2, 4, 6, 8, 10]

//filter returns a new array based on the condition
const filteredarray = array.filter((i)=>{return i%2 ==0})
console.log(filteredarray);

//REDUCE - accept two parameters(accumulate value,current value) and 
//return single value based on the function

const reducedarray=array.reduce((sum,current)=>{return sum+current},0)
console.log(reducedarray);