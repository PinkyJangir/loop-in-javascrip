let readlineSync = require("readline-sync");
var Name=readlineSync.question("enter the number ");
var i= Name.length-1;
var string=""
while (i>=0){
    string=string+Name[i]
    i--
}
if(string===Name){
    console.log("palimdrom")
}
else{
    console.log("not palimdrom")
}