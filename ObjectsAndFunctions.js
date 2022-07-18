//create a car object, add a color property to it with the value equals 'black'
const car = {
    color : "black",
};

//Change the color property of the car object to 'green'
car.color = 'green';
console.log(car);

//Add the power property to the car object, which is a function and displays the engine power to the console
const power = () => console.log("engine power is 184hp");
car.power = power();

//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function numberOfAcceptedPearsAndApples (numOfPears, numOfApples)
{
 return numOfPears + numOfApples;
}; 
console.log(numberOfAcceptedPearsAndApples (24,25));

//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
const namePaymentTerminal = "Ana Lu";
function define () {
if (namePaymentTerminal === 'Ana Lu') {
        console.log ('hello ' + namePaymentTerminal)
} else
        console.log('there is no such name')
};
define();

//Write a function for calculating the type of argument and type output to the console
let str = typeof "my name";
let num = typeof 99.99;
let boo = typeof true;
console.log('type of str is-  ',str);
console.log('type of num is-  ',num);
console.log('type of boo is-  ',boo);

//Write a function that determines whether a number is prime or not
function prime(number)
{
  let isPrime = true;
  if (number <= 1 ) return console.log("Give a number greater than 1");
 
  else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
        }
    }
  }

 if (isPrime) {
  console.log(number,'is a prime number');
    } else {
  console.log(number,'is a not prime number');
    }
  };

prime(9);







