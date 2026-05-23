// Task 1: Function Declaration vs Expression
// Topic: Introducing Functions
// Instructions:
// Write a function declaration
// named addNumbers that takes two
// parameters (a and b) and returns their sum.
// Then, create a function expression
// that does exactly the same thing and
// assign it to a const variable named addNumbersExpr.


/*
1. Function Declaration (კლასიკური გამოცხადება)
სინტაქსი: function myFunc() { ... }

მთავარი თვისება (Hoisting): ჯავასკრიპტი ამ ფუნქციებს კოდის გაშვებამდე "კრეფს" და მეხსიერებაში ყველაზე ზევით ინახავს. ამიტომ, მათი გამოძახება შეგიძლია მანამდე, სანამ კოდში დაწერ.

როდის ვიყენებთ: 1. ფაილის ორგანიზებისთვის: როცა გინდა, რომ მთავარი ლოგიკა კოდის თავში გეწეროს, ხოლო დამხმარე ფუნქციები — სულ ბოლოში, რომ ხელი არ შეგიშალოს კითხვაში.
2. გლობალური ფუნქციებისთვის: როცა ქმნი ისეთ საბაზისო ფუნქციას, რომელიც მთელ ფაილში ნებისმიერი ადგილიდან უნდა იყოს ხელმისაწვდომი.
*/

//function declaration
function addNumbers(a, b) {
    return a + b;
}

/*
2. Function Expression (ცვლადში შენახული)
სინტაქსი: const myFunc = function() { ... }

მთავარი თვისება (No Hoisting): რადგან ფუნქციას ინახავ ცვლადში (const ან let), მასზე მოქმედებს ცვლადის წესები. სანამ კოდი ფიზიკურად არ მივა ამ ხაზამდე, ფუნქცია არ იარსებებს! ანუ მისი წინასწარ გამოძახება არ შეგიძლია.

როდის ვიყენებთ:

მკაცრი კონტროლისთვის: გაიძულებს, რომ კოდი ლოგიკური თანმიმდევრობით წერო — ჯერ შექმნა ფუნქცია და მერე გამოიყენო. ეს ბევრ გაუგებარ ბაგს (შეცდომას) აგარიდებს თავიდან.

კოდის დასაცავად: რადგან const-ს იყენებ, გარანტია გაქვს, რომ ამ ფუნქციას ქვემოთ შემთხვევით ვერავინ გადააწერს სხვა მნიშვნელობას. (Declaration-ის შემთხვევაში, იგივე სახელით მეორე ფუნქცია რომ დაწერო, პირველს უბრალოდ გადააწერს და არც კი გაგაფრთხილებს).

Callback-ების დროს: როცა ფუნქციას პირდაპირ მეორე ფუნქციას აწვდი არგუმენტად.
*/

//function expression
const addNumbersExpr = function (a, b) {
    return a + b;
}

// Task 2: Arrow Functions
// Topic: Modern ES6 Features
// Instructions:
// Convert the addNumbersExpr function from
// Task 1 into a modern ES6 Arrow Function.
// Assign it to a const variable named addNumbersArrow.
// Keep the syntax as short as possible.

const addNumbersArrow = (a, b) => a + b

// Task 3: Parameters and Arguments
// Topic: Adding a Custom Function
// Instructions:
// Create a function named introduce that
// accepts two parameters: firstName and profession.
// Inside the function, use console.log to print
// the sentence: "Hello, my name is [firstName] and I am a [profession]."
// After defining it, call the function and
// pass your own name and profession as arguments.

function introduce(firstName, profession) {
    console.log(`Hello, my name is ${firstName} and I am a ${profession}`);
}

introduce("Nika", "Developer");

// Task 4: Function Destructuring
// Topic: Modern ES6 Features
// Instructions:
// Write an arrow function named displayCarDetails.

// This function should accept a single object as a parameter.
// The object will have brand, model, and year properties.
// Use ES6 object destructuring directly inside the function parameters
// to extract these values and log them to the console.
// Example object to pass: { brand: 'Toyota', model: 'Corolla', year: 2022 }

const displayCarDetails = ({ brand, model, year }) => {
    console.log(`Brand:${brand}, Model:${model}, Year:${year}`)
}

const myCar = { brand: "Toyota", model: 'Corolla', year: 2022 }

displayCarDetails(myCar);

// Task 5: Returning Values vs Logging
// Topic: Returning Values
// Instructions:
// Write a function named calculateDiscount that
// takes two parameters: price and discountPercentage.
// The function MUST calculate the final price and return the value, NOT log it.
// Call the function with a price of 200 and a discount of 15,
// store the returned result in a variable named finalPrice,
// and then console.log(finalPrice) outside the function.

function calculateDiscount(price, discountPercentage) {
    return price * (100 - discountPercentage) / 100;
}

let finalPrice = calculateDiscount(200, 15);
console.log(finalPrice);

// Task 6: Hoisting
// Topic: The Importance of Code Order
// Instructions:
// Write a function declaration called sayGoodbye that returns the string "Goodbye!".
// To demonstrate hoisting, call this function and log its result on the line above
// where the function is actually defined in your code.

console.log(sayGoodbye());

function sayGoodbye() {
    return "Goodbye!"
}

// Task 7: Global and Local Scope
// Topic: Introduction to Scopes
// Instructions:
// Declare a global variable named secretCode with the value "XYZ123".
// Write a function called testScope.
// Inside this function, declare
// a local variable named localPin with the value "9999".
// Inside the function, try logging both variables.
// Outside the function, try logging both variables.
// Observe which one causes a ReferenceError and comment out the line that breaks the code.

const secretCode = "XYZ123";

function testScope() {
    const localPin = "9999"
    console.log(secretCode);
    console.log(localPin);
}

testScope();
console.log(secretCode);
//console.log(localPin);  // localPin is not defined

// Task 8: Shadowed Variables
// Topic: Shadowed Variables
// Instructions:
// Declare a global let variable named playerScore and set it to 10.
// Write a function named updateScore. Inside the function,
// declare a local variable with the exact same
// name (let playerScore) and set it to 50 (this is shadowing).
// Log playerScore inside the function, call the function,
// and then log playerScore outside the function.
// Notice how the global variable remains unchanged.

let playerScore = 10;

function updateScore() {
    let playerScore = 50; //this is shadowing
    console.log(playerScore);
}

updateScore();
console.log(playerScore);

// Task 9: Executing Functions Indirectly (Callbacks)
// Topic: Executing Functions Indirectly
// Instructions:
// Write a simple function named alertUser that logs "Action completed!".

// Write a second function named executeCallback that takes a parameter called callbackFunc.

// Inside executeCallback, execute the callbackFunc.

// Call executeCallback and pass alertUser as
// an argument (remember to pass it indirectly, without parentheses).

function alertUser() {
    console.log("Action completed!") 
}

function executeCallback(callbackFunc) {
    callbackFunc();
}

executeCallback(alertUser);


// Task 10: Indirect vs. Direct Execution with setTimeout
// Topic: Indirect vs. Direct Execution
// Instructions:
// Write a function named timeIsUp that logs "Time is up!".
// Use the built-in setTimeout function to execute timeIsUp after 3 seconds (3000 milliseconds).
// Ensure you are passing the function reference correctly (indirect execution).
// Write a comment explaining what would happen if you used
// timeIsUp() with parentheses inside the setTimeout.

function timeIsUp() {
    console.log("Time is up!")
}

setTimeout(timeIsUp,3000);