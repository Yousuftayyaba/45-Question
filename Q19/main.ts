// let guests: string[] = ["Mrs. Muzammil", "Mrs. Iftikhar", "Mrs. Yousuf"];
// guests.forEach(guests => {
    // console.log(`Dear ${guests} would you like to join us in a iftar party.`);
// });

//15
// let guests: string[] = ["Mrs. Muzammil", "Mrs. Iftikhar", "Mrs. Yousuf"];

// let unableToAttend: string = "Mrs. Muzammil";
// console.log(unableToAttend + " " "unable to attend the dinner.");

// let newGuest: string = "Alishba";
// guests [guests.indexOf(unableToAttend)] = newGuest
// console.log(guests);
// guests.map((items) => 
// console.log(`Dear ${items}, you are invited to the dinner.`)
// )


//16
// let guests: string[] = ["ahmad", "sana", "aatika", "ayesha"];
// let unableToAttend: string = "sana";
// let newGuest: string = "Hafsa";
// guests[guests.indexOf(unableToAttend)] = newGuest;
// console.log(guests);
// guests.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I invited more guests.`)
// );
//beg
// let guestBeg: string = "Moiz";
// guests.unshift(guestBeg);
// console.log(guests);
//middle
// let guestmiddle: string = "abubakar";
// let middleIndex = guests.length/2
// guests.splice(middleIndex,0,guestmiddle)
// console.log(guests);
// append
// guests.push("mahib")
// console.log(guests)

//part 5
// guests.map((items) =>
// console.log(`Dear ${items}, you are invited in the more people list on the dinner.`));
//17
// / initial list of guest
// let guestList: string[] = ["mahib", "m.ahmad", "sana", "aatika"];
// console.log("Due to limited space only two peoples can be invited for dinner.");
// while(guestList.length > 2){
    // const removedGuest = guestList.pop();
    // console.log(`sorry, ${removedGuest} you are no longer invited to dinner.`);
// }
// guestList.forEach((guest) =>{
    // console.log(`Dear ${guest}, you are still invited to dinner.`);
// });
// guestList.pop()
// guestList.pop()
// console.log("final Guest list:", guestList);

//19
let invitations : string[] = ["mahib", "m.ahmad"]
let count_invitations : number = invitations.length
console.log(`${count_invitations} people will come to the dinner`);