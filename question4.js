let readlineSync=require("readline-sync");
var num=readlineSync.question("enter the number");
for (i=1;i<=20;i++){
    multi=num*i;
    console.log(num,"*",i,"=",multi)
}