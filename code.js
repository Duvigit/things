const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("user-score")
const scoreBoard_div = document.querySelector(".core-board");
const result_div= document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getComputerChoice( ){

   const choices = ['r' , 'p', 's'];
console.log(Math.random());
}
getComputerChoice();

function game(userChoice) {
   
   console.log("holaa" + userChoice);
}

function main() {



rock_div.addEventListener('click', function() {
   game("r") ;
   })

paper_div.addEventListener('click', function() {
   game("p")
   })  
   

scissors_div.addEventListener('click', function() {
   game("s")
   })
}

main () ;