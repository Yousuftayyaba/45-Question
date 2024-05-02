"use strict";
let guests = ["Mrs. Muzammil", "Mrs. Iftikhar", "Mrs. Yousuf"];
let unableToAttend = "Mrs. Muzammil";
// console.log(unableToAttend + " " "unable to attend the dinner.");
let newGuest = "Alishba";
guests[guests.indexOf(unableToAttend)] = newGuest;
// console.log(guests);
guests.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`));
