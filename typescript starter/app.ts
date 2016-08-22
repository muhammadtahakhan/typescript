// TypeScript is a language that aims at easing development of large scale applications written in JavaScript.
//  TypeScript adds common concepts such as classes, modules, interfaces, generics and 
//  (optional) static typing to JavaScript. 
//  It is a superset of JavaScript: all JavaScript code is valid TypeScript code so it can be added seamlessly to 
//  any project. The TypeScript compiler emits JavaScript.(https://learnxinyminutes.com/docs/typescript/).

// Strong Typing
// JavaScript is not strongly typed. It is a language that is very dynamic, as it allows objects
// to change their properties and behavior on the fly. As an example of this, consider the
// following code:
//** var test = "this is a string";
//** test = 1;
//** test = function(a, b) {
//** return a + b;
//** }
// On the first line of this code snippet, the variable test is bound to a string. It is then
// assigned a number, and finally is redefined to be a function that expects two parameters.
// Traditional object oriented languages, however, will not allow the type of a variable to
// change – hence they are called strongly typed languages.(Book)

// There are 3 basic types in TypeScript.(https://learnxinyminutes.com/docs/typescript/).
var isDone: boolean = false;
var lines: number = 42;
var name: string = "Anders";

// When it's impossible to know, there is the "Any" type
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// / For collections, there are typed arrays and generic arrays
var list: number[] = [1, 2, 3];
// Alternatively, using the generic array type
var list: Array<number> = [1, 2, 3];


// Explicit casting
// you need to explicitly specify the type of an object.
// This technique of using the < > syntax on the right hand side of an assignment, is called explicit casting.

list=<any>"hello pakistan";

// Enums
// Enums are a special type that has been borrowed from other languages such as C#, and
// provide a solution to the problem of special numbers. An enum associates a humanreadable
// name for a specific number. Consider the following code:(Book)

enum DoorState {
Open,
Closed,
Ajar
}
console.log(DoorState.Closed);
// For enumerations:
enum Color {Red, Green, Blue};
var c: Color = Color.Green;
console.log(Color[1]);//return Green
console.log(Color.Red);//return 0

// Const enums
// With the release of TypeScript 1.4, we are also able to define const enums as follows:(Book)
// These types of enums have been introduced largely for performance reasons, and the
// resultant JavaScript will not contain the full closure definition(book).
const enum DoorStateConst {
Open,
Closed,
Ajar
}
// https://github.com/panacloud/learn-typescript/blob/master/step08_const_enum/app.ts
const enum Colorz {Red, Green, Blue};//starts with 0
var cz: Colorz = Colorz.Green;

const enum Color1 {Red = 1, Green, Blue};
//var colorName: string = Color[2]; Not allowed with const enums
//console.log(colorName);

const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color1["Blue"];
console.log(colorIndex);//log 3
var colorIndex2 = Color2["Blue"];
console.log(colorIndex2); //log 4

// Lastly, "void" is used in the special case of a function returning nothing
// (https://learnxinyminutes.com/docs/typescript/)
function bigHorribleAlert(): void {
 console.log("I'm a little annoying box!");
}
// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference

// The following are equivalent, the same signature will be infered by the
// compiler, and same JavaScript will be emitted
var f1 = function(i: number): number { return i * i; }
// Return type inferred
var f2 = function(i: number) { return i * i; }
var f3 = (i: number): number => { return i * i; }
// Return type inferred
var f4 = (i: number) => { return i * i; }
// Return type inferred, one-liner means no return keyword needed
var f5 = (i: number) =>  i * i;

// Functions
// https://github.com/panacloud/learn-typescript/blob/master/step09_function/app.ts
//Named function
function add(x: number, y: number): number {
    return x+y;
}
//Anonymous function
var myAdd1 = function(x: number, y: number): number { 
				return x+y; 
			};
//Anonymous function with explict type
var myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
												return x+y; 
											};
											
 //type names dont matter                                           
var myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
																return x+y; 
															};
															
var myAdd4 = (a : number, b : number) => a + b;//Lambda functions
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

//Named function with optional parameters
function buildName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}


var result1 = buildName("Bob");  //works correctly because last parameter is optional
//var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams");  //correct

//anonymous function type with optional parameters
var buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

// /anonymous function type with defult parameters 
// (Note that the parameter type will be optional when used with defult value)
var buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

// what are called rest parameters, or the three dots (…) syntax. Here is the
// equivalent testParams function, expressed in TypeScript:
function testParams(...argArray: number[]) {
if (argArray.length > 0) {
for (var i = 0; i < argArray.length; i++) {
console.log("argArray " + i + " = " + argArray[i]);
console.log("arguments " + i + " = " + arguments[i]);
}
}
}
testParams(1);
testParams(1, 2, 3, 4);
// testParams("one", "two"); //warning only numbers are allow
// Note the use of the …argArray: number[] syntax for our testParams function. This
// syntax is telling the TypeScript compiler that the function can accept any number of
// arguments. This means that our usages of this function, i.e. calling the function with either
// testParams(1) or testParams(1,2,3,4), will both compile correctly. In this version of
// the testParams function, we have added two console.log lines, just to show that the

function buildNamer(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

var employeeName = buildNamer("Joseph", "Samuel", "Lucas", "MacKinzie");




//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

//Note: Rest, optional and default parameters can only be at the end of the parameter list

//  Function overloads 
// /overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
function addo(arg1: string, arg2: string): string;//option 1
function addo(arg1: number, arg2: number): number;//option 2
function addo(arg1: boolean, arg2: boolean): boolean;//option 3
function addo(arg1: any, arg2: any): any {//this is not part of the overload list, so it has only three overloads
    return arg1 + arg2;
}

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(addo(1, 2));
console.log(addo("Hello", "World"));
console.log(addo(true, false));
// console.log(addo(true, 8));// gives error because it is not define in overloading.



// Union types
// With the release of TypeScript 1.4, we now have the ability to combine one or two types
// using the pipe symbol (|) to denote a Union Type.(book)
// Chech this link https://github.com/panacloud/learn-typescript/blob/master/step16a_union_types/app.ts

// Basics of typescript  completed Here