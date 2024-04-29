// Task No 1
// All installations complete

//Q No 2:
//personal message: store a person's name in a veriable,and print a message to
//  that person.your message should be simple,such as, "hello eric,wold you like to learn some python today?"

// //Task no 2
let name1: string = "Eric";
console.log(`Hello ${name1}, would you like to learn some python today?`);

//Q No 3:
// Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
//Task no 3

let personName:string = "Ibrar Hussain"

in lowercase
console.log("lowercase:", personName.toLowerCase());

in upercase
console.log("upercase:", personName.toUpperCase());

tittle case
console.log("tittlecase:", personName.replace(/\b\W/g, c=> c.toUpperCase()));

// Q No 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Task no 4

let quote: string= " “A person who never made a mistake never tried anything new.”"
let author: string= "Albert Einstein"
console.log(`${author} once said,${quote}`)

//Q No 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable
//   called famous_person. Then compose your message and store it in a new variable called message.
//       Print your message.
//Task no 5

let famous_person:string="Albert Einstein"
let message:string=`${famous_person} once said,${quote}`
console.log(message);

//Q No 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping
// the white spaces.
//Task no 6

let personName:string= "\t\n Ibrar Hussain \n\t";
console.log("Original:", personName)
console.log("stripped", personName.trim())

//Q No 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result
// in the number 8. Be sure to enclose your operations in print statements to see the results.

//addition
 //subtraction
//multiplication
//division

// Q No 8

// You should create four lines that look like this:

// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
//Task no 8
console.log(5+3);    //addition
console.log(10-2);   //subtraction
console.log(4*2);    //multiplication
console.log(16/2);   //division

//Q No 9
// Favorite Number: Store your favorite number in a variable. Then,
// using that variable, create a message that reveals your favorite number. Print that message.

//Task no 9
let favoriteNumber:number = 5
console.log(`My favorite number is, ${favoriteNumber}`)

//Q No 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If you don’t have anything specific to write because your programs are too simple at this point,
//  just add your name and the current date at the top of each program file. Then write one sentence
//   describing what the program does.

//Task no 10
author: [ibrar hussain]
date: [sunday 21April 2024]

// task no 9 printing my favorite number
let favoriteNumber:number = 5

// reveling my favorite number in message formate.
console.log(`My favorite number is, ${favoriteNumber}`)

//Q No 11
// Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time

//Task no 11
let names:string[] =["ali","imran","jawad","ishfaque","rizwan"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])

//Q No 12
// Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.

//Task no 12
let names:string[] =["ali","imran","jawad","ishfaque","rizwan"]
let message:string = "Do you like to play circket?"
console.log(names[0],message);
console.log(names[1],message);
console.log(names[2],message);
console.log(names[3],message);
console.log(names[4],message);

//Q No 13
// Your Own Array: Think of your favorite mode of transportation,
//  such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statementsabout these items,
//  such as “I would like to own a Honda motorcycle.”

//Task no 13
let transportation:string[]=["Honda motorcycle","Unique bike","Audi car"];
transportation.map((items)=> console.log(`I would like to own a ${items}`));

//Q No 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

//Task no 14
let guestArr: string[]=["Ali","ahmed","daniyal"]
guestArr.map((items)=>console.log(`Dear ${items}, you are invited to the dinner.`))

//Q No 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// * Start with your program from Exercise 14. Add a print statement at the
//   end of your program stating the name of the guest who can’t make it.

// * Modify your list, replacing the name of the guest who can’t make it with
//    the name of the new person you are inviting.
// * Print a second set of invitation messages, one for each person who is still in your list.

//Task no 15
let guestArr: string[] = ["Ali", "ahmed", "daniyal"];
let cannotAttend: string = "daniyal";
console.log(cannotAttend, "can not attend the Dinner.");

let newGuest: string = "jawad";

guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items) =>
  console.log(`Dear ${items}, You are invited to the Dinner.`)
);

// Q No 16
// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// * Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.

// * Add one new guest to the beginning of your array.

// * Add one new guest to the middle of your array. • Use append() to add one new guest to the
// end of your list. • Print a new set of invitation messages, one for each person in your list.

//Task no 16
//part 1

let guestArr: string[] = ["Ali", "ahmed", "daniyal"];

let cannotAttend: string = "ahmed";

let newGuest: string = "wajahat";

guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);

guestArr.map((items) =>
  console.log(
    `Dear ${items}, I found a bigger table so i am invited more people.`
  )
);

//part 2 beganining
let guestbeg: string = "hamza";
guestArr.unshift(guestbeg);
console.log(guestArr);

// //part 3 Middle
let middleguest: string = "anwar";
let middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleguest);
console.log(guestArr);

// //part 4 append
guestArr.push("zeeshan");
console.log(guestArr);

// //part 5
guestArr.map((items) =>
  console.log(
    `Dear ${items}, you are invited in the more people list on dinner.`
  )
);

// Q No 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// * Start with your program from Exercise 16. Add a new line that prints a message
//  saying that you can invite only two people for dinner.

// * Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know you’re
//  sorry you can’t invite them to dinner.

// * Print a message to each of the two people still on your list, letting them know they’re still invited.

// * Remove the last two names from your list, so you have an empty list.
//   Print your list to make sure you actually have an empty list at the end of your program.

//Task 17

// initial list of guests
let guests:string[] = ["ali","hamza","dawood","ahsan","moosa"];

// // informing that only two people can be invited
console.log("Due to limited space, only two people can be invited for dinner.")

// //Removing guests until only two names remain
while (guests.length > 2){
  const removedGuest = guests.pop();     //Remove the last guests from the list
  console.log(`Sorry ${removedGuest}, you'r no longer invited to dinner.`)
}

// //Printing invitations to the remaining two guests
guests.forEach((guest)=>{
  console.log(`Dear ${guest}, you'r still invited to dinner,`)
});

//Removing the last two names from the list
guests.pop();
guests.pop();

//printing the final list to conform it's empty
console.log("fianal guests list:", guests);

// Q No 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// * Store the locations in a array. Make sure the array is not in alphabetical order.
// * Print your array in its original order.
// * Print your array in alphabetical order without modifying the actual list.
// * Show that your array is still in its original order by printing it.
// * Print your array in reverse alphabetical order without changing the order of the original list.
// * Show that your array is still in its original order by printing it again.
// * Reverse the order of your list. Print the array to show that its order has changed.
// * Reverse the order of your list again. Print the list to show it’s back to its original order.
// * Sort your array so it’s stored in alphabetical order. Print the array to show that its
// order has been changed.
// * Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.

//Task No 18

// Store the locations in an array

let placesToVisit:string[] = ["pakistan","tokiyo","india","china","Dubai"]

//print the arry in its original order
console.log("Original order:",placesToVisit);

//print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:",[...placesToVisit].sort());

//  Show that the array is still in its original order
console.log("Original order after sorting", placesToVisit);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

//  Show that the array is still in its original order
console.log("Original order after reverse sorting", placesToVisit);

//Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to get back to the original order 
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// // sort the arry in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// // sort the array in reverse alphabetical order
placesToVisit.sort((a, b )=> b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);


//Q No 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.

// Tas no 19

let invitations: string[] = ["ali", "hamza", "dawood"];
let count_invitations: number = invitations.length;

console.log(`${count_invitations} people will come to the dinner`);

//Q No 20
// Think of something you could store in a array. For example,
// you could make a list of mountains, rivers, countries, cities, languages,
// or anything else you’d like. Write a program that creates a list containing these items.

// Taskl no 20

let country:string[]=["pakistan","india", "iran", "japan", "china" ]
console.log("List of countries:");
console.log(country);


// Q No 21
// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

// Task no 21

let person: { name: string; fname: string; age: number } = {
  name: "ibrar hussain",
  fname: "male",
  age: 20,
};
console.log(person);


//Q No 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

// Task no 22

const days:string[]=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// console.log(days{7})
console.log(days[6])


//Q No 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test
//  and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True."
// console.log(car == 'subaru')
// * Look closely at your results, and make sure you understand why each line evaluates to True or False.
// * Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Task no 23

let car = 'subaru';

console.log("is car == 'subaru'? predict true")
console.log(car == 'subaru')

console.log("is car != 'honda city'? predict true")
console.log(car != 'honda city')

console.log("is car == 'subaru'? predict false")
console.log(car == 'Subaru')

console.log("is car == 'SUBARU'? predict false")
console.log(car == 'SUBARU')

console.log("is car.length ==6? predict true")
console.log(car.length == 6)

console.log("is car.length ==9? predict true")
console.log(car.length != 9)

console.log("is 10 > 25 ? predict false")
console.log(10>25)

console.log("is 5 <= 2 ? predict false")
console.log(5 <= 2) 

console.log("is 70 > 65? predict true")
console.log(70>65)

console.log("is 5 =>10 ? predict false")
console.log(5 >= 10) 


//Q No 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
// more comparisons, write more tests. Have at least one True and one False result for each of the following:
// * Tests for equality and inequality with strings
// * Tests using the lower case function
// * Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
//  and less than or equal to
// * Tests using "and" and "or" operators
// * Test whether an item is in a array
// * Test whether an item is not in a array

// Task no 24

let name1:string="Ibrar Hussain"
let name2:string="ibrar"
let name3:string="mr ibrar hussain"

if (name1 == name3){
  console.log("names are equal")
}else{
  console.log("names are not equal")
}

if (name1 != name2){
  console.log("names are equal")
}

if (name1 != name3){
  console.log("names are equal")
}

let age1: number=18
let age2:number=23

if(age1 == 18){
  console.log("eligible for vote")
}

if(age1 != 23){
  console.log("eligible for vote in older catagory")
}

if(age1 <= age2){         //less
  console.log("younger")
}

if(age2 >= age1){  //greater
  console.log("older")
}

if(age1 == 18 && age2 == 23){
  console.log("person is eligible for vote")
}

if(age1 == 18 || age2 != 23){
  console.log("person is not eligible for vote")
}

let country:string[]=["pakistan","japan","india","china"]
if (country.includes("pakistan")){
  console.log("pakistan is in country list")
}

if(!country.includes("america")){
  console.log("america is not include in an arry")
}

//Q No 25
// Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// * Write an if statement to test whether the alien’s color is green. If it is,
//  print a message that the player just earned 5 points.
// * Write one version of this program that passes the if test and another that fails.
//  (The version that fails will have no output.)

// Task no 25
let alien_color:string="green"
if (alien_color=="green"){
  console.log("you earn 5 points")
}

let alien_color:string="red"
if(alien_color=="green"){
  console.log("no output")
}

//Q No 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// * If the alien’s color is green, print a statement that the player just earned 5 points
// for shooting the alien.

// * If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// * Write one version of this program that runs the if block and another that runs the else block.

//Task no 26

let alien_color: string = "green"
if(alien_color == "green"){
  console.log("the player just earned 5 points for shooting the alien")
}else{
  console.log("the player just earned 10 points")
}

let alien_color: string = "red"
if(alien_color == "green"){
  console.log("the player just earned 5 points for shooting the alien")
}else{
  console.log("the player just earned 10 points")
}

//Q No 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// * If the alien is green, print a message that the player earned 5 points.

// * If the alien is yellow, print a message that the player earned 10 points.

// * If the alien is red, print a message that the player earned 15 points.

// * Write three versions of this program, making sure each message is printed for the appropriate color alien.

//Task no 27

let alien_color: string = "green";
if (alien_color == "green") {
  console.log("the player just earned 5 points");
} else if (alien_color == "yello") {
  console.log("the player just earned 10 points");
} else {
  console.log("the player just earned 15 points");
}

//Q No 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life.
//  Set a value for the variable age, and then:
// * If the person is less than 2 years old, print a message that the person is a baby.

// * If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// * If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// * If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// * If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// * If the person is age 65 or older, print a message that the person is an elder.

//Task no 28

let age:number= 18
if(age < 2){
  console.log("the person is a baby")
}else if(age < 4){
  console.log(" the person is a toddler")
}else if(age < 13){
  console.log("the person is a kid")
}else if(age < 20){
  console.log("the person is a teenager")
}else if(age < 65){
  console.log("the person is a adult")
}else{
  console.log("the person is an elder")
}


//Q No 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
//   if statements that check for certain fruits in your array.
// * Make a array of your three favorite fruits and call it favorite_fruits.

// * Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Task no 29

let favorite_fruits: string[] = ["kivi", "orange", "apple","peach","berry"];

if (favorite_fruits.includes("kivi")) {
  console.log("kivi");
}
if (favorite_fruits.includes("peach")) {
  console.log("you really like bannas");
}
if (favorite_fruits.includes("orange")) {
  console.log("orange");
}
if (favorite_fruits.includes("berry")) {
  console.log("you really like bannas");
}

if (favorite_fruits.includes("apple")) {
  console.log("apple");
}


//Q No 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
// writing code that will print a greeting to each user after they log in to a website. Loop through the array,
//  and print a greeting to each user:
// * If the username is 'admin', print a special greeting, such as Hello admin,
//   would you like to see a status report?

// * Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// Task no 30

let users:string[]=["admin","Eric","Ali","ahmed","fatima"]
for(let user of users){
  if(user === "admin"){
    console.log("Hello admin would you to see a status report?")
  }else{
    console.log(`Hello ${user} thank you for logging in again.`)
  }
}


//Q No 31
// =No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// * If the list is empty, print the message We need to find some users!

// * Remove all of the usernames from your array, and make sure the correct message is printed.

// Task no 31

let users:string[]=["admin","Eric","Ali","ahmed","fatima"]

if (users.length===0){
  console.log("We need to find some users!")
}else{
  for(let user of users){
    if(user==="admin"){
      console.log("Hello admin would you like to see a status report?")
    }else{
      console.log(`Hello${user}, thank you for logging in again`)
    }
  }
}

users = []
if(users.length===0){
  console.log("We need to find some users!")
}



//Q No 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that
// everyone has a unique username.
// * Make a list of five or more usernames called current_users.

// * Make another list of five usernames called new_users. Make sure one or two of the new usernames
//  are also in the current_users list.

// * Loop through the new_users list to see if each new username has already been used. If it has,
//  print a message that the person will need to enter a new username. If a username has not been used,
//   print a message saying that the username is available.

// * Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Task no 32

let current_users: string[]=["ahmed","daniyal","zohaib","fatima"]
let new_users:string[]=["saim","ahmed","admin","fatima","ali"]

let current_users_lower:string[]= current_users.map(user=>user.toLowerCase())

for(let new_user of new_users){
  if(current_users_lower.includes(new_user.toLowerCase())){
    console.log(`sorry ${new_user}, that name is taken`)}
    else{
      console.log(`yes ${new_user}, is still in available list`)
    }
} 


//Q No 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//  Most ordinal numbers end in th, except 1, 2, and 3.
// * Store the numbers 1 through 9 in a array.
// * Loop through the array.
// * Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

//Task no 33

let numbers:number[]=[1,2,3,4,5,6,7,8,9]

for(let number of numbers){
if(number ===1){
console.log(`${number}st`)  //1st
}else if(number===2){
console.log(`${number}nd`)  //2nd
}else if(number===3){
console.log(`${number}rd`)  //3rd
}else{
console.log(`${number}th`)  // 4th,5th,6th,7th,8th,9th
}
}


// //Q No 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
// and then use a for loop to print the name of each pizza.
// * Modify your for loop to print a sentence using the name of the pizza instead of printing just the
//  name of the pizza. For each pizza you should have one line of output containing a simple statement
//   like I like pepperoni pizza.

// * Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//    The output should consist of three or more lines about the kinds of pizza you like and then an
//     additional sentence, such as I really love pizza!

//Task no 34

let favorite_pizza:string[]=["pepperoni","chicken","veg"]
// for(let pizza of favorite_pizza){
//   console.log(pizza)
// }
// console.log("\n")

for(let pizza of favorite_pizza){
  console.log(`I really like ${pizza} pizza!`)
}
console.log("\n I really love pizza")


//Q No 35
// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a
// sentence such as Any of these animals would make a great pet!

// Task no 35

let animals:string[]=["cat","dog","loin"]

for(let animal of animals){
  console.log(animal)
}
console.log("\n")

for(let animal of animals){
  console.log(`A ${animal} has a tail`)
}
console.log("\n all of these are great pets! but i love cats more")

// //Q No 36
// = T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
//  should be printed on the shirt. The function should print a sentence summarizing the size of the
//  shirt and the message printed on it. Call the function.

// Task no 36

function makeShirt(size: string, text:string): void {
console.log(`you order a ${size} shirt that says ${text}`)
}

makeShirt('large','"i love typescript"')
makeShirt('medium','"i need big shirt"')


//Q No 37
// = Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//  reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//   and a shirt of any size with a different message.

// Task no 37

function makeShirt(size:string= 'large', text: string = ' I love typescript'): void{
  console.log(`you have order a ${size}, shirt that says ${text}`)
}

// makeShirt();
// makeShirt('medium')

// different message
makeShirt('small', 'I need a  big shirt to wear')


// //Q No 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
//  for the country a default value. Call your function for three different cities, at least one of
//   which is not in the default country.

// Task no 38

function describe_city(city: string, country: string = 'pakistan'): void {
  console.log(`${city} is in ${country}`)
}

describe_city('karachi')  // defult sentence 
describe_city('france','europe')
describe_city('lahore','punjab')


// //Q No 39
// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

// Task no 39

function cityCountry(city: string, country: string): string{ 
  return `${city}, ${country}`
}

let c1 = cityCountry('lahore', 'pakistan')
let c2 = cityCountry('tokiyo','japan')
let c3 = cityCountry('paris','france')

console.log(c1)
console.log(c2)
console.log(c3)


//Q No 40
// Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object
// containing these two pieces of information. Use the function to make three dictionaries representing
// different albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.

// Task no 40

function makeAlbum(
  artist: string,
  title: string
): { artist: string; title: string } {
  const dictionaries = {
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toUpperCase() + title.slice(1),
  };
  return dictionaries;
}

let album = makeAlbum("ali", "light");
console.log(album);

album = makeAlbum("hamza", "red wave");
console.log(album);

album = makeAlbum("ahmed", "seembreez");
console.log(album);


//Q No 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

// Task no 41

function show_magicians(magicions: string[]): void {
  for (const magician of magicions) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

const magician: string[] = ["ali", "ahmed", "jawad"];
show_magicians(magician);

//Q No 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
// make_great() that modifies the array of magicians by adding the phrase the Great to each
// magician’s name. Call show_magicians() to see that the list has actually been modified.

// Task no 42

function make_great(magicions: string[]): void {
  for (let idx = 0; idx < magicions.length; idx++) {
    magicions[idx] = magicions[idx] + " the great";
  }
}
const magicians2: string[] = ["ali", "ahmed", "jawad"];
make_great(magicians2);
show_magicians(magicians2);


//Q No 43
//  Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy
//  of the array of magicians’ names. Because the original array will be unchanged, return the new array
//  and store it in a separate array. Call show_magicians() with each array to show that you have one array
//  of the original names and one array with the Great added to each magician’s name.

// Task no 43

function make_great2(magicions: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let idx = 0; idx < magicions.length; idx++) {
    greatMagicians.push(magicions[idx] + " the Great");
  }
  return greatMagicians;
}
const magicians3: string[] = ["ali", "ahmed", "jawad"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);


//Q No 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

// Task no 44

function sandwich(...items:string[]):void{
  console.log("sandwich order")
for(let i = 0; i < items.length;i++){
console.log(`- ${items[i]}`)}
}
console.log("enjoy your sandwich")

sandwich('capsicum','tomato','chicken')
sandwich('beef','cheese')
sandwich('mayo sauc','garlic chicken')


//Q No 45
// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary
// number of keyword arguments. Call the function with the required information and two other name-value
//  pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the
//  information was stored correctly

// Task no 45

type car = {
  manufacture: string;
  model: string;
  [key: string]: any;
};

function creatcar(
  manufacture: string,
  model: string,
  optional: Record<string, any>
): car {
  return {
    manufacture,
    model,
    ...optional
  };
}
const mycar: car = creatcar("honda", "civic", { color: "white", year: "2023" });
console.log(mycar);


          //    All Task Complete