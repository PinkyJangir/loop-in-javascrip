var i=1
while (i<=10){ 
    let readlineSync=require("readline-sync");
    var num=readlineSync.questionInt("enter the number");
    if(num<5){
        console.log("num is greter than to 5, please try again");
    }
    else if(num>5){
        console.log("numis less than please try again");
    }else{
        console.log("you win");
        break
    }
    i++
}