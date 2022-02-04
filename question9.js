var i=1;
var sum=0;
while(i<=10){
    let readlineSync=require("readline-sync");
    var num=readlineSync.questionInt("enter the number");
    sum=sum+num
    i++
}
console.log(sum)

