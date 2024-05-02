"use strict";
let guests = ["ahmad", "sana", "aatika", "ayesha"];
let unableToAttend = "sana";
let newGuest = "Hafsa";
guests[guests.indexOf(unableToAttend)] = newGuest;
// console.log(guests);
// guests.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I invited more guests.`)
// );
//beg
let guestBeg = "Moiz";
guests.unshift(guestBeg);
// console.log(guests);
//middle
let guestmiddle = "abubakar";
let middleIndex = guests.length / 2;
guests.splice(middleIndex, 0, guestmiddle);
// console.log(guests);
// append
guests.push("mahib");
console.log(guests);
//part 5
guests.map((items) => console.log(`Dear ${items}, you are invited in the more people list on the dinner.`));
