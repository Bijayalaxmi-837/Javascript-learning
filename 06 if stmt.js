function checkevenodd(num) {
    if (num % 2 == 0){
        return "Even";
    }
    if (num % 2 != 0){
        return "Odd";
    }
}
console.log(checkevenodd(45));
function Oddeven(number){
    if (number % 3 == 0){
       return "Even";
    }
    if (number % 3 != 0){
       return "odd";
    }
}
console.log(Oddeven(70));
function checknumber(numb){
    if (numb % 4 == 0){
        return "Even";
    }
    if (numb % 4 != 0)
        return "Odd";
}
console.log(checknumber(67));
function numbercheck(numm){
    if (numm % 2 == 0){
        return "Even";
    }
    if (numm % 2 != 0){
        return "odd";
    }
}
console.log(numbercheck(98));
  
function checkvoting(Age){
   if (Age > 18) {
    console.log(`eligible for votinhg : ${Age}`);
   }
   if (Age < 18) {
    console.log(`Not eligible for voting : ${Age}`);
    
   }
}
checkvoting(18);
checkvoting(20);
checkvoting(17);
checkvoting(40);
 
function checksring(str){
    let strLength = str.length;
    if (strLength > 10) {
        console.log(`Given string is grater than 10 character : ${strLength}`); 
    }
    if (strLength < 10) {
        console.log(`Given string is less than 10 character : ${strLength}`); 
    }
}
checksring("javascript-E66");

function checkstr(string){
    let str = "javascript Language"
    let value = str.startsWith('java');
    console.log(value);
    
    let str2 = "programming Language"
    let value2 = str2.startsWith('program');
    console.log(value2);

    let str3 = "web developer"
    let value3 = str3.startsWith('web');
    console.log(value3);
    
}
checkstr("java");
checkstr("program");
checkstr("web");