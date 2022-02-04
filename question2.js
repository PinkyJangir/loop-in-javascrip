let readlineSync =require("readline-sync");
var num=readlineSync.questionInt("enter the number");
var i =1
var count=0
var i=1
var count=0
while (i<=num){
    if (num%i==0){
        count=count+1
    }
        i++;
}
if(count==2){
    console.log("its prime number")
}
else{
    console.log("it is not prime number")
}