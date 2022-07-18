//1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let str = 'ahb acb aeb aeeb adcb axeb';
let result = str.match(/a\Sb/g);
console.log(result);

//2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const givenStr = '2 + 3 223 2223';
let regex = givenStr.match(/2\s\+\s3/g);
console.log(regex);

//3. Get the day, month and year of the current date and output it to the console separately
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();

let year = d.getFullYear();
let month = months[d.getMonth()];
let day = days[d.getDay()];
let date = d.getDate();

console.log('today is ',day + ', '+ date);
console.log('month - ', month);
console.log('year - ', year);
