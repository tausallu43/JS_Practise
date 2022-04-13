//JavaScript is a dynamic language, supporting object-oriented(e.g. class), 
//imperative(e.g. code_syntax), and declarative (e.g. functional programming) styles.

//Before writing the code in the visual studio code: install node.js, and two extensions they are,
//code_runner by jun han, javascript es6 by charalampos karypidis.
//Also make sure the node.js path is present in the system environment.
//To check the node.js path simply type "node --version" in the vs code terminal.
//if you get the  node.js version, it is good to go or correct your node.js path in the system environment.


// writing a basic function hello() which prints "Hello, World!" as output, when it is called.
// after writing the code first press ctrl + F5 for saving the changes in the file, and later run the code by 
// pressing ctrl + alt + N
// To stop the code press ctrl + alt + M
function hello(){
    console.log("Hello, World!");
}
// calling the hello function
hello(); // => Hello, World!

//Variable type and their assignment:

//Variables in JavaScript can be defined using the const, let or var keyword.

//A variable can reference different values over its lifetime when using let or var.
// example:
let javaScript = 1;
//print to check
console.log("javascript = ", javaScript)

javaScript = 'string';
//print to check
console.log("javascript = ", javaScript)

javaScript = new hello();
//print to check
console.log("javascript = ", javaScript)

//In contrast to let and var, variables that are defined with const can only be assigned once. 
//This is used to define constants in JavaScript.
//example:
// if you try to change the const variable assignement, it throws an error. so, play around it.
const Java_Script = 'constant variable example';
//print to check
console.log('Java_Script = ', Java_Script)

//Writing function in the same file:
//example:
function subtract(num1, num2){
    return console.log("subraction outtput = ", num1 - num2);
}
//calling function for checking
subtract(1, 2) // =>-1

//Writing function, constant or variable to use it in different file:
// using "export" keyword they are exported, and using "import" keyword in the another file they are imported.
//To use "export" or "import", the file extension should be '.mjs' to load ES module (An ES module is a JavaScript
// file that explicitly exports variables or functions that other modules can import and use), or should update 
// package.json file with "type":"module", which is present in the node.js package folder
// example:
//exporting 
export function add(num1, num2){
    return console.log("addition output = ", num1 + num2);
}
 export let Sample = 10; // for importing check import_testing.mjs in the same folder





