"use strict";
// 36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of 
// a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size: string, printMessage: string){
// console.log(`you selected ${size} size shirt with ${printMessage} prints on shirt.`)
// }
// make_shirt("Medium","code with sumerahashim")
// make_shirt("small", "M.Ahmad")
// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt(size = "Large", printMessage = "I love Typescript") {
    console.log(`creating a ${size} shirt with ${printMessage} prints on shirt.`);
}
//calling a function by default values
make_shirt();
//calling a function with medium size with default message
make_shirt("medium");
//calling a function with medium size with different message
make_shirt("small", "I love Javascrirpt");
// 38.	Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for 
// the country a default value. Call your function for three different cities, 
// at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// calling function
describe_city("karachi");
describe_city("Lahore");
describe_city("Fujairah", "UAE");
// 39.	City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
//creating a functiton with parameters which returns a values in string
function city_country(city, country) {
    return `${city}, ${country}`;
}
// calling a function in print the return value
console.log(city_country("karachi", "Pakisan"));
console.log(city_country("Tokyo", "Pakisan"));
console.log(city_country("Berlin", "Germany"));
// 40.	Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should 
// return a Object containing these two pieces of information. Use the function to make three 
// dictionaries representing different albums. Print each return value to show that Objects are storing 
// the album information correctly. Add an optional parameter to make_album() that allows you to store 
// the number of tracks on an album. If the calling line includes a value for the number of tracks, 
// add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
//define the make album function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
// calling three function in creating three variables with different values
let album1 = make_album("Atif Aslam", "Album title 1");
let album2 = make_album("Zafar Ali", "Album title 2");
let album3 = make_album("Ahmad Jahanzaib", "Album title 3", 10);
//printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
