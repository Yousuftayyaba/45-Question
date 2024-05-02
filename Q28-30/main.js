"use strict";
// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// let age = 22;
// if(age < 2){
//     console.log("that a person is a baby");
// }
// else if(age >= 2 && age < 4){
//     console.log("that a person is is a toddler");
// }
// else if(age >= 4 && age < 13){
//     console.log("That a person is a kid");
// }
// else if(age <= 13 && age < 20){
//     console.log("That a person is a teenager");
// }
// else if(age >= 20 && age < 65){
//     console.log("That a person is an adult");
// }
// else if(age >= 65){
//     console.log("That a person is an elder");
// };
//Question29: Favorite Fruit: Create an array for your favorite fruits and check if certain 
// fruits are included.
// let favorite_Fruits = ["Mango", "Strawbery", "Orange"]
// //using five independent statement
// if(favorite_Fruits.includes("Mango")){
//     console.log("I really like Mango")
// }
// if(favorite_Fruits.includes("Strawbery")){
//     console.log("I really like strawberry")
// }
// if(favorite_Fruits.includes("apple")){
//     console.log("I really like apple")
// }
// if(favorite_Fruits.includes("apple")){
//     console.log("I really like apple")
// }
// if(favorite_Fruits.includes("Orange")){
//     console.log("I really like Orange")
// }
// if(favorite_Fruits.includes("banana")){
//     console.log("I really like banana")
// }
//Questiton30: Hello Admin: Greet users differently, especially 'admin'.
// let userNames = ["Mahib", "M.Ahmad", "Sana", "Abubakar","Aatika", "Ayesha","Hafsa", "Admin"]
// //using forEach loop
// userNames.forEach(oneUser=>{
//     if(oneUser === "Admin"){
//         console.log(`Hello ${oneUser}, would you like to see a status report?`)
//     } else{
//         console.log(`Hello ${oneUser}, thank you for logging again.`)
//     }
// })
//questiton 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ["Mahib", "M.Ahmad", "Sana", "Abubakar", "Aatika", "Ayesha", "Hafsa", "Admin"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty we need find some users.");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging again.`);
        }
    });
}
