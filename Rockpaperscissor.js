const cc1=Math.random();
var computerchoice ="";
function getComputerChoice(){
    if(cc1<0.34) computerchoice="rock";
    else if(cc1<=0.67) computerchoice="paper";
    else computerchoice="scissor";
}
getComputerChoice();

var playerchoice = prompt("Enter your choice");

