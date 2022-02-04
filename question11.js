// let readlineSync=require("readline-sync");
// var num=readlineSync.questionInt("enter the number");
var i=0
while(i<=20){
    if(i%3==0){
        console.log(i,"nav")
    }
    else if(i%7==0){
        console.log(i,"gurukul")
    }
    else if(i%3==0 && i%7==0){
        console.log(i,"navgurukul")
    }
    i++
}