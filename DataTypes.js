//1. Addition of various types
var addStringBoolean = "too good to be "+ true;
var addStringNumber = "one in a " + 100000;
var addNumberBoolean = 10 + false;

//2. Multiplication of various types
var multStingBoolean = "not a number " * true;
var multStringNumber = "not a number " * 100;
var multNumberBoolean = 10 * false;

//3. Division of various types
var divStringBoolean = "not a number " / true;
var divStringNumber = "not a number " / 100;
var divNumberBoolean = 10 / false;

//4. Explicit conversion
stringToNumber = Number('123');
booleanToNumber = Number(true);
numberToString = String(456);
booleanToString = String(false);
numberToBoolean = Boolean(1);
stringToBoolean = Boolean('null');
 