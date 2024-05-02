variable = 10; // Assigns a value to the global variable variable

(() => {
    foo = 100; // Assigns a value to a variable without declaring it (implicitly global within the script)
    console.log(variable); // Logs the value of variable (100)
    var foo = 100; // Declares and initializes a local variable foo
    variable = 20; // Changes the value of variable to 20
    console.log(variable); // Logs the updated value of variable (20)
})();

console.log(foo); // Logs the value of foo (100) - Accessible due to implicit global declaration
console.log(variable); // Logs the value of variable (20) - Updated value

var variable = 30; // Declares and initializes a new variable variable
