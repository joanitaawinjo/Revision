let a = "Hello World";
console.log(a.slice(6,));
console.log(a.slice(2, 6));

// Converting a string into number and adding a certain number 
let str = "50";
let str2 = Number(str) + 20;
console.log(str2);

// Finding the first and last elements in a string
let x = "Javasript";
console.log(x[0]);
console.log(x[x.length - 1]);

//Converting to lower and upper cases
let m = "I love javaScript";
console.log(m.toUpperCase());
console.log(m.toLowerCase());

//Replacing a word
let n = "Hello world";
console.log(n.replace("world", "Javascript"));

// Checking if the length of a string is leaa than or equal to a certain length
let b = " ";
console.log(b.length >= 10);

// Joininng two strings with space between them
let string1 = "Hello";
let string2 = "Javascript";
let string3 = string1 + " " + string2;
console.log(string3);

// Using literals and string tempelate
let language = "Javascript";
let statement = `My favorite programming language is ${language}`;
console.log(statement);
console.log(`My favorite programming language is ${language}`);

let string = "Beginning";
let newString = string.slice(a, 3);
console.log(newString);

//On your website’s sign-up form, users often type their names in all lowercase, uppercase,or with extra spaces. For example, someone might enter “alice” instead of “Alice”. You want the system to clean up the name before using it. After processing the name, the system should display: Welcome, Alice.
let d = "alice ";
let d2 = d.charAt([0]).toUpperCase() + d.slice(1).toLowerCase();
console.log(`welcome, ${d2}`);

//You’re building a chatbot to support people when they’re feeling down. A user might type something like “HELP”, “can you help me?” or “i need HELP!”. If the message seems like a request for help, the bot should respond with: I’m here for you. Otherwise, it says: How else can I assist you?
let message = " ";
if (message.includes("help")) {
    console.log("Am here for you");
}
else {
    console.log("How can i help you");
}

//On your email sign-up page, users enter their email addresses freely. Some entries are correct, like “user@eaxample.com”, but others forget the @ or end with something like .org. If the email includes an @ symbol and ends with .com, show: Thanks for subscribing!. Otherwise, display: Please enter a valid email address.
let email = " ";
if (email.includes("@") && endsWith(".com")) {
    console.log("Thanks for subscribing");
}
else {
    console.log("Insert valid email");
}
//A friend is trying to name their new shop. The name should be short and simple - between 5 and 15 characters, with no spaces. When a name is entered, the system should either say: Name accepted. or Please choose a different name.
let name = " ";
if (name.length >= 5 && name.length <= 15 && name.includes("")) {
    console.log("Name accepted");
}
else {
    console.log("Please choose a differnt name");
}

//In your text-based adventure game, a player can respond however they like when asked a yes-or-no question. Some type “yes”, “Yes!”, “Yup”, or “yeah”. If the system can tell they mean yes, it should show: You chose to continue. Otherwise, it should say: You chase to stop.
let answer = " ? ()";
if (answer.toLowerCase() === "yes") {
    console.log("You chose to continue");
} else {
    console.log("You chase to stop");
}
//Checking  if strings palindrome
let i = "Mariam";
let twi = i.toLowerCase();
if (twi == twi.split("").reverse().join("")) {
    console.log(true);
}
else {
    console.log(false);
}

let w = "Hannah";
let two = w.toLowerCase();
if (two == two.split("").reverse().join("")) {
    console.log(true)
}
else {
    console.log(false)
}
// Check if strings are anagram
let str1 = "Silent";
let str3 = "Listen";
if (str1.sort == str3.sort) {
    console.log(true)
}
else {
    console.log(false)
}



// Javascript program to remove vowels from a String and an array
function remVowel(str) {
    let r = new RegExp("[aeiouAEIOU]", 'g')

    return str.replace(r, "");
}
console.log(remVowel);


function remVowel(letters) {
    const vowels = "aeiou";
    return letters.replace(/[aeiou]/gi, '');
}
console.log(remVowel("I love coding"));


function vowelRemove(string) {
    const vowels = "aeiouAEIOU"
    return string.replace(/[aeiouAEIOU]/gi, '');
}
console.log(vowelRemove("I lovE coding"));

function vowelRem(word) {
    const vowels = ["a", "e", "i", "o", "u"]
    return [...word].filter((c) => !vowels.includes(c)).join(" ");
}
console.log(vowelRem(["I love coding"]));



// fonding the last four elements in an array
function lastArray(numbers) {
    return numbers.slice(-4);
}
console.log(lastArray([1, 2, 3, 4, 5, 6, 7, 8]));


//finding the maximum values in the array
function sortArray(numbers) {
    let min = 0;
    return Math.min(...numbers);
}
let num = [2, 3, 4, 5, 7, 8, 4, 5, 8, 4, 3]
console.log(sortArray(num));


function arraySortes(numbers) {
    let max = 5
    for (let num of numbers) {
        if (num > max) {
            max = num
        }
    }
    return max;
}
console.log(arraySortes([2, 4, 5, 6, 7, 8, 9]));



//Finding the minimum value in the array
function minValue(number) {
    return Math.min(...number);
}
console.log(minValue([1, 23, 4, 5, 6, 7, 2, 8]));


function findMin(numbers) {
    let min = 5;
    for (let number of numbers) {
        if (number < min) {
            min = number

        }
    }
    return min
}
console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9]));



//Reversing an array
function reverseArray(names) {
    return names.reverse();
}
console.log(reverseArray(["Joy", "Ushi", "Lorraine", "Faith"]));


function reverseString(name) {
    return name.toLowerCase().split("").reverse().join("");
}
console.log(reverseString("Beginning"));



//Array concatination using +
function mergeArray(num) {
    const arr4 = [1, 2, 3];
    const arr5 = [4, 5, 6]
    const arr6 = arr4 + "," + arr5
    return arr6
}
console.log(mergeArray(num));



//Array concatination using concat method
function concatArray(fruits) {
    let moreFruits = ["Apple", "Cherry"]
    return fruits.concat(moreFruits);
}
console.log(concatArray(["Mango", "Orange"]));



//Array concatination using spread operator
function spreadOperator(fruits) {
    return [...firstFruits, ...OtherFruits];
}
let firstFruits = ["Mango", "Orange"];
let OtherFruits = ["Apple", "Cherry"];
let allFruits = [...firstFruits, ...OtherFruits];
console.log(spreadOperator(allFruits));



//Using forEach loop to find the even numbers
function evenNumbers(numbers) {
    const newArray = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
            newArray.push(number);
        }
    })
    return newArray
}
console.log(evenNumbers([2, 4, 3, 5, 6, 1, 10, 12]));



//Using forEach loop to find the maximum value
function maxValue(numbers) {
    let max = 5;
    numbers.forEach(number => {
        if (number > max) {
            max = number
        }
    })
    return max
}
console.log(maxValue([2, 6, 8, 9, 34, 50]));



//Using forEach loop to find the minimum value
function minValue(numbers) {
    let min = 3;
    numbers.forEach(number => {
        if (number < min) {
            min = number
        }
    })
    return min
}
console.log(minValue([2, 6, 8, 9, 34, 50]));



//Using forEach loop to find the length of each string in an array
function findLength(names) {
    let nameLength = [];
    names.forEach(name => {
        if (name.length >= 6) {
            nameLength.push(name)
        }
    })
    return nameLength
}
console.log(findLength(["Mary", "Annamary", "Joanita", "Mercyline"]));

//Using forEach loop to find strings in an array
function findString(items) {
    let strings = [];
    items.forEach(item => {
        if (typeof item === 'string') {
            strings.push(item)
        }
    })
    return strings
}
console.log(findString([2, "Maj", 5.6, "cat", "Mummy"]));



//Using forEach loop to find the longest and shortest names in an array
function findShortest(names) {
    let shortestName = "Lovelace";
    names.forEach(name => {
        if (name.length < shortestName.length) {
            shortestName = name
        }
    })
    return shortestName
}
console.log(findShortest(["Mary", "Jan", "Joanita"]));



//Using some methods
function useSome(arr) {
    return arr.some(item => typeof item === "string");
}
console.log(useSome([2, "Maj", 5.6, "cat", "Mummy"]));


function someMethod(numbers) {
    return numbers.some(item => item % 2 == 0);
}
console.log(someMethod([2, 3, 4, 5, 6, 7, 8, 9]));



//Using every method
function useEvery(arr) {
    return arr.every(item => typeof item === "string");
}
console.log(useEvery([2, "Maj", 5.6, "cat", "Mummy"]));

function everyMethod(numbers) {
    return numbers.every(number => typeof number === "number");
}
console.log(everyMethod([2, 4, 5, 6, 7, 8, 3]));



//Using find method
function findMethod(numbers) {
    return numbers.find(num => num < 3);
}
console.log(findMethod([1, 2, 3, 4, 5, 6, 7]));


function findName(names) {
    let guestName = "Alice"
    if (names.find(name => name === guestName)) {
        return `${guestName}`
    }

    else {
        return "name not present";
    }
}
console.log(findName(["Mary", "Alice", "Abey"]));



//Using reduce method
function useReduce(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(useReduce([4, 65, 34, 12, 3, 4, 5]));


//Using switch
function temperature(degree) {
    for (let i = 0; i < degree.length; i++) {
        switch (degree) {
            case ">=30":
                console.log("Hot")
                break
            case ">=20 && <30":
                console.log("warm")
                break
            case ">=10 && <20":
                console.log("cool")
                break
            default:
                console.log("cold")
        }
    }
}
let degree = [20, 30, 10, 5, 16, 35, 37];
temperature(degree);




//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
function scheduledDelivery(days) {
    days.forEach(day => {
        switch (day) {
            case "Monday":
                console.log(` The delivery for ${day} is foods`)
                break;
            case "Tuesday":
                console.log(`The delivery for ${day} is vegetable`)
                break;
            case "Wednesday":
                console.log(`The delivery for ${day} is Catelery`)
                break;
            case "Thursday":
                console.log(`The delivery for ${day} is Drinks`)
                break;
            case "Friday":
                console.log(`The delivery for ${day} is Clothes`);
                break;
            default:
                console.log("No delivery for this day");
                break

        }

    });
};
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
scheduledDelivery(days);



//Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".
function bookStatuses(status) {
    for (let i = 0; i < status.length; i++) {
        if (status[i] > 0) {
            console.log("Ready to lend");
        }
        else {
            console.log("Checked out");
        }
    }
}
const statuses = [20, 0, 10, 2]
bookStatuses(statuses);



//Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
function checkCustomerAge(age) {
    for (let i = 0; i < age.length; i++) {
        if (age[i] >= 18) {
            console.log("Adult");
        }
        else {
            console.log("Minor")
        }
    }
}
const age = [20, 12, 16, 19, 30, 3, 10, 25, 35];
checkCustomerAge(age)


//Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
function liveCountdown(live) {
    let live = 5;
    while (live > 0) {
        console.log(`You have ${live} lives left`)
        live--;
    }
    console.log("Time up")
}
liveCountdown(live)



//Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
function userFeedback(feedback) {
    do {
        const comment = feedback.shift();
        if (comment) {
            console.log(comment);
        }
    } while (feedback.length > 0);
}


const comment = ["Good product", "Bad", "Can be improved", "Great", "Interesting"]
userFeedback(comment)



//Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
function checkLoginStatus(status) {
    for (let i = 0; i < status.length; i++) {
        if (status[i] == "logged in") {
            console.log("Welcome back");
        }
        else {
            console.log("Please login");
        }
    }
}
const userLoginStatus = ["logged in", "not logged in", "logged in", "not logged in", "logged in", "not logged in"];
checkLoginStatus(userLoginStatus)



//Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
function ticketAddress(priorities) {
    priorities.forEach(priority => {
        switch (priority) {
            case "low":
                console.log("Priority is low");
                break;
            case "medium":
                console.log("Priority is medium")
                break;
            case "high":
                console.log("Priority is high")
                break;
            default:
                console.log("Priority not found");
                break;
        }
    })
}
const priorityList = ["low","medium","high","very low"];
ticketAddress(priorityList);


//Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
function countQuiz(){
    let i= 10
    while(i>0){
        console.log(i);
        i--;
    }
    console.log("Time up")
}
countQuiz();


function findNumbers(){
    for(let i=1;i<=100;i++){
        if([i]%5 ==0 && [i]%3 == 0){
            console.log("multiple of five and three");
        }
        else if([i]%3 == 0){
            console.log("multiple of three");
        }
        else if([i]%5 == 0){
            console.log("multiple of five");
        }
        else{
            console.log(i);
        }
    }
}
findNumbers();



class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
}
Car.prototype.getAge = function(){
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
}

Car.prototype.isClassic = function(){
    return this.getAge() > 25;
}

const toyota = new Car('Toyota', 'KB123', 2000);
const isuzu = new Car('isuzu','kr45', 1960);

console.log(toyota.getAge());
console.log(toyota.isClassic());

console.log(isuzu.getAge());
console.log(isuzu.isClassic());





//Create a programme that takes in two arrays of the same length and multiplies the corresponding 
// element in each index results in a new array.
function isMultipliesArray(arr1, arr2){
    const results = [];
    for(let i=0; i<arr1.length; i++){
    results.push(arr1[i]*arr2[i]);
    }
    return results;
}
const arr1 = [2,3,4,5,6,7,8];
const arr2 = [4,5,6,7,8,9,1];
const productArray = isMultipliesArray(arr1, arr2);
console.log(productArray)



//Write a programmme that sorts a list of students based on their exam scores in ascending order .
//Each student is represented by a data class containing their names and scores.
function sortStudentAscore(array){
    return array.sort((b,a) => b.score - a.score)
}
const studentArray = [{name:"Alice", score:90},
                    {name:"Mary", score:50},
                    {name:"Daphine", score:30},
                    {name:"Juliet", score:80},
                    {name:"Peace", score:75}
]

console.log(sortStudentAscore(studentArray))



//Write a function called calculateArea that calculates the area of a rectangle given the width and the height.
function calculateArea(){
    const width = 30
    const height = 20
    return width * height
}
console.log(calculateArea())


//Write a programme that takes a list of integers as input and returns a new list containing the length of the string
function stringLength(array){
    return array.length
}
console.log(stringLength([4,5,6,7,8,9,10]))




function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

// Child constructor function
function Dog(name) {
    Animal.call(this, name); // Inherit properties
}

// Inherit methods from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a new method to Dog
Dog.prototype.bark = function () {
    console.log(`${this.name} barks: Woof!`);
};

// Creating an instance
const myDog = new Dog("Buddy");

myDog.speak(); 
myDog.bark();



//Create a Person class with properties for name and age. Add a method 
//introduce() that prints a greeting including the person's name and age
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    } 
}
Person.prototype.introduce = function(){
    console.log(`Hello ${this.name} your age is ${this.age}`);
}
const person = new Person("Mary", 21);

person.introduce();


//Create a class named Dog with properties name and breed, and a method bark() that logs "Woof!" 
// along with the dog's name. Instantiate two Dog objects.
class Species{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
bark(){
    console.log(`The dog ${this.name} of breed ${this.breed} barks woof`)
}
}
const dog = new Species("pop", "indigin");
const dog2 = new Species("jahm","africana");

dog.bark();
dog2.bark();


//Create a class MathUtils with a static method add() that takes two numbers and returns their sum. 
// Call the static method without instantiating the class.
class MathUtils{
    static add(num1, num2){
        return num1 += num2
    }
}
const sum = MathUtils.add(5,29)
console.log(sum)



//inheritance

//Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. 
//Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class 
//and includes an additional property for the number of doors. 
//Override the display method to include the number of doors.


class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Doors: ${this.doors}`);
  }
}

// // Create an instance of the Vehicle class
const vehicle = new Vehicle('Ford', 'F-150', 2020);

// // Display vehicle details 
console.log('Vehicle Details:');
vehicle.displayDetails();

// // Create an instance of the Car class
const car = new Car('Honda', 'Accord', 2023, 4);

// // Display car details
console.log('\nCar Details:');
car.displayDetails();


const jobs = ["JobA", "JobB", "JobC"];
const workers = {
  Alice: ["JobA", "JobC"],
  Bob: ["JobB"]
};
const machines = {
  Machine1: true,
  Machine2: false
};
let schedule = [];
for (let job of jobs) {
  for (let worker in workers) {
    if (workers[worker].includes(job)) {
      for (let machine in machines) {
        if (machines[machine]) {
          schedule.push({ job: job, worker: worker, machine: machine });
          machines[machine] = false; // machine is now busy
          break;
        }
      }
      break;
    }
  }
}
console.log("Schedule:", schedule);




function PersonalDetails(details){
  this.details = [details];
}
PersonalDetails.prototype.newContact = function(newDetail){
  this.details.push(newDetail);
  return this.details;
}
PersonalDetails.prototype.modify = function (modifiedData) {
  for (let key in this.details) {
  if (modifiedData === this.details[key]) {
  this.details[key] = modifiedData;
  return `${modifiedData} has been modified`;
  }
  }
  return `${modifiedData} not in the list`;
}
PersonalDetails.prototype.removeDetail = function(removeDetail){
  let index = this.details.indexOf(removeDetail);
  if (index !== -1) {
  this.details.splice(index, 1);
  return `${removeDetail} has been removed`;
  } else {
  return `${removeDetail} not in the list`;
  }
}
PersonalDetails.prototype.updatedDetails = function(){
  return this.details;
}
const gladwine = new PersonalDetails({name: "Gladwine", school: "AkiraChix"});
gladwine.newContact({secondName: "Meron"});
console.log(gladwine.updatedDetails());



function BankAccount(userName, balance){
    this.userName = userName
    this.balance = balance
    this.deposit = function(amount){
    this.balance += amount
       console.log(`${this.userName} your new balance is ${this.balance}`)
    }

    this.withdraw = function(amount){
    if (amount <= this.balance){
        this.balance -= amount;
        console.log(`${this.userName} withdrew ${amount}your new balance is ${this.balance}`)
        return this.balance
    }
    else{
        console.log(`${this.userName} withdrew ${amount}new balance is ${this.balance} which is insuffient`)
    }
}
}
   const firstAccount = new BankAccount("firstAccount", 2000)
   const secondAccount = new BankAccount("secondAccount", 500)
   const thirdAccount = new BankAccount("thirdAccount",350)

    firstAccount.deposit(200);
    firstAccount.withdraw();
    secondAccount.deposit(400);
    secondAccount.withdraw(300);
    thirdAccount.deposit(200);
    thirdAccount.withdraw(300);


function delayedMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

async function main() {
  console.log("Start");
  await delayedMessage("Hello after 2 seconds", 2000);
  console.log("End");
}

main();





function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;
            if (success) {
                resolve('Accepted');
            } else {
                reject('Denied');
            }
        }, 1000); // example delay, e.g., 1 second
    });
}

myPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


function firstPromises(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
             resolve("Promise resolved!");
        },2000);
    })

}





class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`${this.name}, ${this.age}`);
    }
 
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); 
        this.subject = subject;
    }
    teach() {
        console.log(`Teacher ${this.name} teaches ${this.subject}`);
    }
}

class Employee extends Person{
    constructor(name, age, salary){
        super(name, age);
        this.salary = salary;
    }
    employeeDetails(){
        console.log(`${this.name} aged ${this.age} earns ${this.salary}`);
    }
}

const firstPerson = new Teacher('Joy', 40, 'English');
const secondPerson = new Employee('Mary', 30, 50000);

firstPerson.displayInfo(); 
firstPerson.teach();   
secondPerson.employeeDetails();  


// Shopping Cart: You have a cart array like ["milk", "bread"]. A user adds "eggs".
// Question: Which method would you use to add it, and how?

function shoppingCart(arr) {
    arr.push('Eggs');
    return arr;
}
console.log(shoppingCart(['milk', 'bread']));


// To-Do List Removal: You created a to-do list: ["wash dishes", "do homework", "read"].
// The user finished the last task.
// Question: Which method will remove the last item?
function toDoList(arr){
    arr.pop('read');
    return arr;
}
console.log(toDoList(["wash dishes", "do homework", "read"]))



// Combining Orders: You received two orders from different users: ["burger", "fries"] and ["soda", "salad"].
// Question: How will you merge both orders into one array?
function mergeArray() {
    const arr1 = ["burger", "fries"];
    const arr2 = ["soda", "salad"];
    const arr3 = arr1.concat(arr2); 
    return arr3;
}
console.log(mergeArray());


// Filtering Numbers: You have an array of scores: [56, 75, 89, 90, 43, 30].
// Question: Write a method to filter out scores below 50.
function filterNumbers(numbers) {
    return numbers.filter(number => number < 50);
}
console.log(filterNumbers([10, 60, 30, 80, 45])); 


// Product Search: A user searches for "apple" in your array of products: ["banana", "orange", "apple"].
// Question: How do you check if "apple" exists in the list?
function productSearch(products){
return products.includes('apple');

}
console.log(productSearch(["banana", "orange", "apple"])); 


// Price Calculation: An array of item prices is [200, 500, 300].
// Question: How do you calculate the total price?
function priceCalculation(prices){
    return prices.reduce((accumulator, values)=> accumulator+values, 0);
}
console.log(priceCalculation([200, 500, 300]));


// Rearranging Queue: Customers [“Alice”, “Bob”, “Charlie”] enter a queue.
// The first customer is served.
// Question: Which method will remove Alice?
function arrangeQueue(customers){
 customers.shift()
  return customers
}
console.log(arrangeQueue(['Alice', 'Bob', 'Charlie']));

// Transform Data: You have [10, 20, 30] and want to add tax (10%) to each.
// Question: What method will help you return a new array with updated values?
function addTaxToArray(taxes) {
    const taxRate = 0.10; 
  return taxes.map(tax => tax + tax * taxRate);
}
console.log(addTaxToArray([10, 20, 30]));


// Write a function delay(ms) that returns a Promise that resolves after ms milliseconds.
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Write an async function getData() that waits for a Promise that resolves 
// with the string "Hello, World!" after 1 second, and then logs it.
async function getData() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello world");
      resolve();
    }, 1000);
  });
}

getData();

// Chain together three Promises to log the values 1, 2, and 3 sequentially, 
// each with a 500ms delay
function sequentially() {
    return delay(500)
        .then(() => {
            console.log(1);
            return delay(500);
        })
        .then(() => {
            console.log(2);
            return delay(500);
        })
        .then(() => {
            console.log(3);
        });
}
sequentially();








