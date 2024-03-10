let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choices");
const genCompChoice = () => {
    let options = ["Rock" , "Paper" , "Scissors"];
   const randIdx = Math.floor(Math.random() *3);
   return options[randIdx];


};
const msg = document.querySelector("#msg")

const  drawGame = () =>{
    console.log("Game Was Draw");
    msg.innerText = "Game Was Draw. /Play Again.";
    msg.style.backgroundColor = "#081b31";
}
const userScorepara = document.querySelector("#user-score");
const CompScorepara = document.querySelector("#comp-score");
const showWinner = (userWin , userChoice , compChoice)=>{



    if (userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win !");
        msg.innerText = `You Win Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        compScore++;
        CompScorepara.innerText = compScore;
        console.log("You Lose");
        // msg.innerText = "You Lose!";
        msg.innerText = `You Lost Comp ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
console.log("user choice = " ,userChoice);
const compChoice = genCompChoice();
console.log("comp choice " , compChoice)
if ( userChoice === compChoice){
    drawGame();
}else {
    let userWin = true;
    if (userChoice === "Rock"){
        userWin = compChoice === "paper" ? false : true;

    }else if (userChoice === "Paper"){
       userWin = compChoice === "Scissors" ?false:true;

    }else{
        userWin = compChoice === "Rock" ? false:true;

    }
    showWinner(userWin, userChoice , compChoice);
} 
}
choices.forEach((choices) => {
    choices.addEventListener("click", () =>{
        const userChoice = choices.getAttribute("id")
        // console.log("Choise was clicked" , coiceId)
        playGame(userChoice);
    } )
})



