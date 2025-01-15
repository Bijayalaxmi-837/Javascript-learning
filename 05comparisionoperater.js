// Assignment 1-
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
    console.log(`givenstringlength is : ${Strlength}`);

    var words = givenString.split(" ");
    var totalwords = words.length;
    console.log(`given total words is : ${totalwords}`);

    var strDivision = Strlength / totalwords;
    console.log(`total length of the string/total number of words  is : ${strDivision}`);

    var strmultiply = Strlength * totalwords;
    console.log(`total length of the string * total number of words  is : ${strmultiply}`);
}
stringOperation("I am Angular Developer");
console.log("--------------------------");
// Assignment 2-

function graterNumber(n1, n2) {
    let result = n1 > n2 ? "graterthan" : "lessthan";
    console.log(result);
}
graterNumber(10, 20);
graterNumber(899, 800);

function isEvenOrOddNum(Num) {
    let result = (Num % 2 == 0) ? "even" : "odd";
    console.log(`given number is : ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
isEvenOrOddNum(429);

function wordLength(words) {
    let stringlength = words.length;
    let result = (stringlength % 2 == 0) ? "Even" : "Odd";
    console.log(`Length of the words is : ${stringlength}, even or odd length : ${result}`);
}
wordLength("Java Script");

function evenoddlength(wrds) {
    let strlength = wrds.length;
    let res = (strlength % 2 == 0) ? "Even" : "Odd";
    console.log(`length of the word is:${strlength}`);
    console.log(`Even or Odd length : ${res}`);
}
evenoddlength("developer");
function evenoddwordslength(word) {
    let strwordlength = word.length;
    console.log(`length of the word is :${strwordlength}`);
    let value = (strwordlength % 2 == 0) ? "even" : "odd";
    console.log(`even or odd length :${value}`);
}
evenoddwordslength("Google");
function wordlength(lengthofwords){
 let strrwordlength = lengthofwords.length;
 console.log(`length of words is : ${strrwordlength}`);
 let value = (strrwordlength % 2 == 0);
 console.log(`even or odd of length is: ${value}`);
}
wordLength("bijayalaxmi");