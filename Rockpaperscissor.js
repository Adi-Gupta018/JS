const cc1=Math.random();
var computerchoice ="rock";
function getComputerChoice(){
    if(cc1<0.34) computerchoice="rock";
    else if(cc1<=0.67) computerchoice="paper";
    else computerchoice="scissors";
}
var score=0;
var score_com=0;
function playRound(playerchoice,computerchoice){
    if(playerchoice =="rock" && computerchoice == "scissors") score++;
    else if(playerchoice == "paper" && computerchoice == "rock") score++;
    else if(playerchoice == "scissors" && computerchoice == "paper") score++;
    else if(playerchoice == computerchoice) {score++ ; score_com++;}
    else score_com++;
}

function game(){
    for(let i=0;i<5;i++){
        getComputerChoice;
        var playerchoice = prompt("Enter your choice");
        playRound(playerchoice,computerchoice);
    }
    if(score > score_com) console.log("Congratulations!! You Won :)  \n Your score: "+score);
    else if(score < score_com) console.log("Better luck next time :( \n Your score: "+score);
    else console.log("It's a draw \n Your score: "+score);
}

game();