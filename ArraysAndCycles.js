//1.Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const movieNameArr = ['Interstellar', 'Source Code', 'Inception', 'Arrival', 'Gravity'];
movieNameArr.forEach(name => console.log(name));

//2.Given an array of car manufacturers, convert the array to a string and back to an array
const arrayOfCarManufaturers = ['Volks Wagon', 'Toyota', 'Volvo', 'BMW', 'Ford'];
let arrayToString = arrayOfCarManufaturers.toString();
let backToArray = arrayToString.split(" ");

//3.Given an array of the names of your friends, add the words hello to each element of the array
const arrayOfFriends = ['Chandler', 'Monica', 'Ross', 'Rachel','Joey','Phoebe'];
const addHello = arrayOfFriends.map((currentname) => 'Hello ' + currentname);
console.log(addHello);

//4.Convert numeric array to Boolean
const numberArray = [1,0,2,0,1,2];
const boolArray = [];
numberArray.forEach((Number) => boolArray.push(Boolean(Number)));
console.log(boolArray);

//5.Sort the array [1,6,7,8,3,4,5,6] in descending order
const givenArray = [1,6,7,8,3,4,5,6];
givenArray.sort();
givenArray.reverse();

//6.Filter array [1,6,7,8,3,4,5,6] by value> 3
//given array is already declared above
const filteredArray = givenArray.filter(currentNumber => currentNumber > 3);
console.log(filteredArray);

//7.Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function findIndex (array, num) {
let index = array.indexOf(num);
  console.log(index);
}
findIndex([10,20,30,40,50],30);

//8.Implement a loop that will print the number 'a' until it is less than 10
let i = 1;
do {
    i++;
    console.log('a');
} while (i < 10);

//9.Implement a loop that prints prime numbers to the console
//Printing all Prime numbers between 1 to 100
function printPrime (n)
{
  if (n == 1 || n==0)return false;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

var N = 100;
for (var i = 1; i <= N; i++)
 {
   if (printPrime(i)) {
     console.log(i);
   }
 }

 //10.Implement a loop that prints odd numbers to the console
 //Printing odd numbers between 1 to 10
 for (var i = 0; i <= 10; i++) {
    if (i %2 != 0)
      console.log(i);
  }






