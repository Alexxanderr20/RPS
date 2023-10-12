/*
    Rock,Paper,Scissors Game
    Edward Alexander Munoz
*/

    let playerScore = 0;
    let computerScore = 0;

    //selecting DOM containers for input
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const playerTotal = document.getElementById("#playerTotal");
    const computerTotal = document.getElementById("#computerTotal");
    const finalTotal = document.getElementById("#finalTotal");

    //creating Event Listeners
    rock.addEventListener("click", () => singleRound("rock", computerPlay()));
    paper.addEventListener("click", () => singleRound("paper", computerPlay()));
    scissors.addEventListener("click", () => singleRound("scissors", computerPlay()));

    //randomizes computer choices
    function computerPlay()
    {
        //const computerChoices = ["rock","paper","scissors"];
        let computerChoices = ["rock", "paper", "scissors"];
        let computerSelection = computerChoices[Math.floor(Math.random() * 3)];
        return computerSelection;
    }

//compares computer selection to user input based on buttons
function singleRound(playerSelection,computerSelection)
    {
        switch(playerSelection)
        {
            case "rock":
                if(computerSelection === "scissors")
                    {
                        resultMsg = `You win! ${playerSelection} beats ${computerSelection}`;
                        playerScore++;
                        score();
                    }
                else if(computerSelection === "paper")
                    {
                        resultMsg = `You lose. ${playerSelection} loses to ${computerSelection}`;
                        computerScore++;
                        score();
                    }
                else
                    {
                        resultMsg = `It's a tie. ${playerSelection} ties ${computerSelection}`;
                        score();
                    }
                break;

            case "paper":
                if(computerSelection === "rock")
                    {
                        resultMsg = `You win! ${playerSelection} beats ${computerSelection}`;
                        playerScore++;
                        score();
                    }
                else if(computerSelection === "scissors")
                    {
                        resultMsg = `You lose. ${playerSelection} loses to ${computerSelection}`;
                        computerScore++;
                        score();
                    }
                else
                    {
                        resultMsg = `It's a tie. ${playerSelection} ties ${computerSelection}`;
                        score();
                    }
                break;

            case "scissors":
                if(computerSelection === "paper")
                    {
                        resultMsg = `You win! ${playerSelection} beats ${computerSelection}`;
                        playerScore++;
                        score();
                    }
                else if(computerSelection === "rock")
                    {
                        resultMsg = `You lose. ${playerSelection} loses to ${computerSelection}`;
                        computerScore++;
                        score();
                    }
                else
                    {
                        resultMsg = `It's a tie. ${playerSelection} ties ${computerSelection}`;
                    }
                break;
        }
    }
        function score()
        {
            //using DOM to select specific elements
            const roundResults = document.getElementById("roundResults");
            const playerTotal = document.getElementById("playerTotal");
            const computerTotal = document.getElementById("computerTotal");
            const finalTotal = document.getElementById("finalTotal");

            finalTotal.textContent = "";

            roundResults.textContent = resultMsg;
            playerTotal.textContent = "Player Score: " + playerScore;
            computerTotal.textContent = "Computer Score: " + computerScore;

            //outputs final score to screen and resets the score back to 0
            if(playerScore === 5)
            {
                finalTotal.textContent = `You win! You beat the computer ${playerScore} to ${computerScore}!`;
                playerScore = 0;
                computerScore = 0;
            }
            else if(computerScore === 5)
            {
                finalTotal.textContent = `You lost! The computer beat you ${computerScore} to ${playerScore}`;
                playerScore = 0;
                computerScore = 0;
            }
        }
