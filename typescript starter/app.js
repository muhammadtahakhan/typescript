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
var isDone = false;
var lines = 42;
var name = "Anders";
// When it's impossible to know, there is the "Any" type
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// / For collections, there are typed arrays and generic arrays
var list = [1, 2, 3];
// Alternatively, using the generic array type
var list = [1, 2, 3];
// Explicit casting
// you need to explicitly specify the type of an object.
// This technique of using the < > syntax on the right hand side of an assignment, is called explicit casting.
list = "hello pakistan";
// Enums
// Enums are a special type that has been borrowed from other languages such as C#, and
// provide a solution to the problem of special numbers. An enum associates a humanreadable
// name for a specific number. Consider the following code:(Book)
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
console.log(DoorState.Closed);
// For enumerations:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(Color[1]); //return Green
console.log(Color.Red); //return 0
; //starts with 0
var cz = 1 /* Green */;
;
; //can assign values to all
var colorIndex = 3 /* "Blue" */;
console.log(colorIndex); //log 3
var colorIndex2 = 4 /* "Blue" */;
console.log(colorIndex2); //log 4
// Lastly, "void" is used in the special case of a function returning nothing
// (https://learnxinyminutes.com/docs/typescript/)
function bigHorribleAlert() {
    console.log("I'm a little annoying box!");
}
// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference
// The following are equivalent, the same signature will be infered by the
// compiler, and same JavaScript will be emitted
var f1 = function (i) { return i * i; };
// Return type inferred
var f2 = function (i) { return i * i; };
var f3 = function (i) { return i * i; };
// Return type inferred
var f4 = function (i) { return i * i; };
// Return type inferred, one-liner means no return keyword needed
var f5 = function (i) { return i * i; };
// Functions
// https://github.com/panacloud/learn-typescript/blob/master/step09_function/app.ts
//Named function
function add(x, y) {
    return x + y;
}
//Anonymous function
var myAdd1 = function (x, y) {
    return x + y;
};
//Anonymous function with explict type
var myAdd2 = function (x, y) {
    return x + y;
};
//type names dont matter                                           
var myAdd3 = function (x, y) {
    return x + y;
};
var myAdd4 = function (a, b) { return a + b; }; //Lambda functions
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); //works correctly because last parameter is optional
//var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams"); //correct
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
// /anonymous function type with defult parameters 
// (Note that the parameter type will be optional when used with defult value)
var buildName1 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
// what are called rest parameters, or the three dots (…) syntax. Here is the
// equivalent testParams function, expressed in TypeScript:
function testParams() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i - 0] = arguments[_i];
    }
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
function buildNamer(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildNamer("Joseph", "Samuel", "Lucas", "MacKinzie");
//anonymous function type with Rest parameters
var buildNameFun = function (firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
};
function addo(arg1, arg2) {
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
//# sourceMappingURL=app.js.map