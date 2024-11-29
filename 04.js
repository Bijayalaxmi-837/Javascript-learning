// string
function stringbasics(){
    var company = "microsoft";
console.log(`my dream company is :  ${company}`);
 var hobbyOne = "drawing";
 var hobbytwo = "singing";
 var hobbythree = "cooking";    

   console.log(`my hoobys are  :${hobbyOne}, ${hobbytwo}, ${hobbythree}`);
   var result = hobbyOne.length + hobbytwo.length + hobbythree.length; 
   console.log(`total number of character in hobbyOne,hobbytwo,hobbythree : ${result}`);
}
stringbasics();
console.log("---------------------");
function stringHandsOn(){
    var string= "    Hey you are doing good, keep it up    ";
console.log(`1.given str is : ${string}`);
console.log(`Length of the string is : ${string.length}`);
var result = string.trim();
console.log(`After trim string is : ${result} and it's length : ${result.length}`);
console.log(`First char : ${result.charAt(0)} And last char : ${result.charAt(result.length-1)}`);
var resultvalue = result.split(" ");
console.log(`Total words : ${resultvalue.length}`);
var res = result.indexOf("Good");
console.log(`index of good is : ${res}`);
var sub = result.substring(22);
console.log(` substring starting from index 22 is : ${sub}`);
var checkStart = trimStr.startswith("Hey");
var checkEnd = trimStr.endsWith("up");
console.log(`start With : ${checkStart}`);
console.log(`End With : ${checkEnd}`);


}
stringHandsOn();
 