// QUESTION 21

// interface item {
//     name: string
//     price: number
// }

// // create object
// const book: item ={
//     name: `essential typescrit`,
//     price: 450

// }
// const apple: item={
//     name: `apple`,
//     price: 200
// }
// console.log(`book name: ${book.name}, price: $${book.price}`)
// console.log(`apple name: ${apple.name}, price: $${apple.price}`)
// SECOND WAY
// let book: { title: string; author: string; yearPublished:number } = {
    // title: "essential typescript",
    // author: "xyz",
    // yearPublished: 2021
// };
// console.log(`Book info: ${book.title}, by ${book.author}, publised in ${2021}`)

// QUESTION: 22
// const days: string [] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
// console.log(days{7})
// console.log(days[6])

// QUESTION 23

let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

//tests for equality and inequality with string

console.log("Is apple is equual to apple?");
console.log(apple == "apple")

console.log("\nIs apple is not equual to apple?");
console.log(apple != "apple");

//tests using lower case function

console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// numerical tests

//equal to or not equal to
console.log("\n is ten equal to twenty?");
console.log(ten == twenty);

console.log("\n is ten not equal to twenty?");
console.log(ten != twenty);

//greater than and less than

console.log("\n is ten is greaterr than zero?");
console.log(ten > 0);

console.log("\n is twenty less than to ten?");
console.log(twenty < ten);

// greater/less than or equal to

console.log("\n is ten is greater than or equal to 5?");
console.log(ten >= 5);

console.log("\n is twenty is less than or equal to 10?");
console.log(ten <= 10);

// tests using && (and) operators

~console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10)

console.log("\n twenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30)

//using || (or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20)

console.log("\n 20 is greater than 50 OR 20 is noy equal to 20");
console.log(20 > 50 || 20 != 20)

//tests whether an item inculde in array
console.log("is orange include in my fruits array");
console.log(fruits.includes("orange"));


