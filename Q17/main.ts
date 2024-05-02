// initial list of guest
let guestList: string[] = ["mahib", "m.ahmad", "sana", "aatika"];
// console.log("Due to limited space only two peoples can be invited for dinner.");
// while(guestList.length > 2){
//     const removedGuest = guestList.pop();
//     console.log(`sorry, ${removedGuest} you are no longer invited to dinner.`);
// }
// guestList.forEach((guest) =>{
//     console.log(`Dear ${guest}, you are still invited to dinner.`);
// });
guestList.pop()
guestList.pop()
console.log("final Guest list:", guestList);