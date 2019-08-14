// string
let myName: string = "Radek";

// number
let myAge = 27;

// boolean
let hasHobbies: boolean = true;

//assign types
let myRealAge: number; // can assign type
myRealAge = 27;

//arrays
let hobbies = ["Cooking", "Sports"];

//tuples - mixed types
let address: [string, number] = ["Superstreet", 99];

//enums
enum Color
{
	Gray, // 0
	Green, // 1 - can remap it to any number e.g. 100
	Blue // 2 - remapped to 101 if Green mapped to 100
}

let myColour: Color = Color.Green;
console.log(myColour);

// any - try to avoid it! Use only in rare, peculiar situations

let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

//functions
function returnMyName(): string //after colon specifies the return type
{
	return myName;
}
console.log(returnMyName());

// void

function sayHello(): void
{
	console.log("Hello!");

}

// argument types
function multiply(value1: number, value2: number): number
{
	return value1 * value2;
}
console.log(multiply(2, 10)); // FUNCTIONS ARE TYPES ON THEIR OWN!

//function types
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
myMultiply();



