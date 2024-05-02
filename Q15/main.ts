let guests: string[] = ["Mrs. Muzammil", "Mrs. Iftikhar", "Mrs. Yousuf"];

let unableToAttend: string = "Mrs. Muzammil";
// console.log(unableToAttend + " " "unable to attend the dinner.");

let newGuest: string = "Alishba";
guests [guests.indexOf(unableToAttend)] = newGuest
// console.log(guests);
guests.map((items) => 
console.log(`Dear ${items}, you are invited to the dinner.`)
)