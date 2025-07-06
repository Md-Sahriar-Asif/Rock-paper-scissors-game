let userScore = 1;
let compScore = 1;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const geneCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    //console.log("Game was draw");
    msg.innerText = "Game was draw. Please play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        //console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        user_score.innerText = userScore++;
    }   
    else{
        //console.log("You lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        comp_score.innerText = compScore++;
    }
};

const playGame = (userChoice) => {
    console.log("user choice: ", userChoice);

    //generating computer choice
    const compChoice = geneCompChoice();
    console.log("comp choice: ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        //console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})