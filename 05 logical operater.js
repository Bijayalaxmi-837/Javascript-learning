

var n1 = 10;
var n2 = 20;
var result = n1 ==n2 ? "Equal" :"Not Equal";
console.log(result);
console.log("----------------------------");

var Age = 20;
var result = Age >= 18 ? "You Are Eligible For Vote": "Sorry Not,Try Next Time";
console.log(result);

function VoteEligibility(Age){
    var result = Age >= 18 ? "You Are Eligible For Vote": "Sorry Not,Try Next Time";
    console.log(result);
}
var result = VoteEligibility(20);
var result = VoteEligibility(70);
var result = VoteEligibility(10);
VoteEligibility(Age);
console.log("----------------------------------------------------------------------");

