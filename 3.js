// Hoisting in JS

var variable = 10; // Declaration and initialization

(() => {
    console.log(variable); // Accesses the value 10

    variable = 20; // Variable reassigned

    console.log(variable); // Accesses the updated value 20
})();//iife immmediate involkes function

console.log(variable); // Accesses the value 20

var variable = 30; // Declaration and initializatio

console.log(variable);