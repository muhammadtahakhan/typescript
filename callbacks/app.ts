// A callback function is a function that is passed into another function.
// why do we need callback functions?
// lets check practical example of call backs(https://www.youtube.com/watch?v=pTbSfCT42_M)
let add = (a, b)=> {return a+b; }
let multiply = (a, b)=> {return a*b; }
let cal = (a:number, b:number, callback:(a:number, b:number)=>void)=>{
   return callback(a, b);
}
console.log(cal(2, 3, add));
console.log(cal(2, 3, multiply));

//  Javascript code  start
function mycallbackjs(text:string){
    console.log("hello my callbacljs");
}
	
function getInput(options, callback) {
	   
	​
	    // Make sure the callback is a function​
	    if (typeof callback === "function") {
	    // Call it, since we have confirmed it is callable​
	        callback(options);
	    }
	}

    getInput("one", mycallbackjs);

// Javascript code end here
// above code is for js were callback checking is very hard and w define if for checking of function 
// but in typescript it is very easy 

function myCallBack(text: string) {
    console.log("inside myCallback " + text);
}

function callingFunction(initialText: string, callback: (text: string) => void)
{
   
    callback(initialText);
}

callingFunction("myText", myCallBack);
console.log("this is console log");


// let work with array foreach 

var fruits = ['banana', 'apple', 'pear'];
fruits.forEach((val)=>{
console.log(val);
});

// this is inline callback of function
// now expand this function
// this callback call synchronously.
function callback(val){
console.log(val);
}

var fruits = ['banana', 'apple', 'pear'];
fruits.forEach(callback);

