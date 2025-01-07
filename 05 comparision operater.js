console.log("comparision operater");
var n1 = 10;
var n2 = 20;
var n3 = 10;
var result = n1 > n2;
console.log(`greater than operater (>): ${result}`);// false
console.log("----------------------------------------------");
var result = n1 > n3;
console.log(`greater than operater (>): ${result}`);// false
console.log("----------------------------------------------");
var result = n1 >= n3;
console.log(`greater than  equal operater (>=): ${result}`);// true
console.log("----------------------------------------------");
var result = n1 < n3;
console.log(`less than operater (<): ${result}`);// false
console.log("----------------------------------------------");
var result = n1 <= n3;
console.log(`less than  equal operater (<): ${result}`);// true
console.log("----------------------------------------------");

console.log(`what is difference between == and ===(strictly) equal`);

var n1 = 10; var n2 = "10"; var n3 = 20;
var result = n1 == n3; // 10==20
console.log(`double equal operater == : ${result}`); // false

var result = n1 == n2; // 10=="10"
console.log(`double equal operater == : ${result}`);// true 

var result = n1 == n3; // 10==="10"
console.log(`Triple equal or strictly equal === operater : ${result}`);// false



function squareOfWordLength(givenString) {
    var givenStringLength = givenString.length;
    var result = givenStringLength * givenStringLength;
    return result;
}
var returnvalue = squareOfWordLength("javascript");
console.log(`given string is: javascripy and it's length squre is: ${returnvalue}`);

var returnvalue = squareOfWordLength("Google Chrome");
console.log(`given string is: Google Chrome and it's length squre is: ${returnvalue}`);

var returnvalue = squareOfWordLength("Web Developer Smart");
console.log(`given string is: Web Developer Smart and it's length squre is: ${returnvalue}`);



function stringOperation(givenString) {
    var Strlength = givenString.length;
    console.log(`givenstringlength is : ${Strlength }`);

    var words = givenString.split(" ");
    var totalwords = words.length;
    console.log(`given total words is : ${totalwords}`);
    
    var strDivision = Strlength / totalwords;
    console.log(`total length of the string/total number of words  is : ${strDivision}`);

    var strmultiply = Strlength * totalwords;
    console.log(`total length of the string * total number of words  is : ${strmultiply}`);
}
stringOperation("I am Angular Developer");



