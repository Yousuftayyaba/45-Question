"use strict";
// question32: checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["mahib", "M.Ahmad", "sana", "Abubakar", "Aatika", "Ayesa", "Hafsa"];
let new_users = ["Mahib", "M.Ahmad", "Sana", "sumera", "Aatika", "Hashim"];
// loop through new users to check for userNames availability
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase());
    if (our_condition) {
        console.log(`Sorry, ${new_one_user}, is already exist.`);
    }
    else {
        console.log(`This username ${new_one_user}, is available.`);
    }
});
// question33:33.	Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// using for loop array (this loop work as forEach loop)
for (let onenNumber of numbers) {
    let ordinalending;
    if (onenNumber == 1) {
        ordinalending = "st";
    }
    else if (onenNumber === 2) {
        ordinalending = "nd";
    }
    else if (onenNumber === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log(`${onenNumber}${ordinalending}`);
}
;
//34.	Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a 
//for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let favorite_pizza = ["BarBQ", "chiken tikka", "fajita"];
for (let onepizza of favorite_pizza) {
    console.log(`I like ${onepizza} pizza.`);
}
//print message outside loop
console.log(`I am pizza lover.`);
console.log(`I eat pizza`);
// 35.	Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!
let petAnimal = ["dog", "cat", "goat"];
for (let oneAnimal of petAnimal) {
    console.log(`A ${oneAnimal} would make a great pet`);
}
console.log(`Any of these animals would make a great pet.`);
