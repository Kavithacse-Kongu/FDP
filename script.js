// // Spread Operator
// var arr = [10,20,30];
// var arr1 = [...arr, 40, 50 ,60];
// console.log(arr);
// console.log(arr1);

// // Destructuring Operator
// var marks = [100,89,98,96,97];
// var [m1,m2,m3,m4,m5] = marks;
// console.log(m1,m2,m3,m4,m5);

// //call back function
// function demo(){
//     console.log("Hello from demo");
// }

// const callback = (callbackfun)  =>{
//     console.log("Hello from Call back");
//     callbackfun();
// }
// callback(demo)
// //template literals
// var name ="viky"
// console.log(`My name is ${name}`) 

// //MAP-accept a function return new array
// function addOne(n){
//     return n*2;
// }
// let array=[1,2,3,4,5];
// let mappedarr=array.map((i)=>{return i*2})
// // let mappedarr=array.map((i)=>{addOne(i)})
// console.log(array);
// console.log(mappedarr);

// //filter-returns a new array based on the condition
// const filteredArray=array.filter((i)=>{return i%2===0});
// console.log(filteredArray); 

// //REDUCE-accept two parameters(accumulate value,current value) and 
// // return single value based on the function 
// const reducedArray =array.reduce((sum,current)=>{return sum+current},0);
// console.log(reducedArray);

//async await
const getData = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        console.log(users);    
    }
    catch(error){
        console.log(`Error: ${error}`);         
    }
}
getData()