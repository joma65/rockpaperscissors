const choices = ["rock", "paper", "scissors"];
let playerInput = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let started = false;

$("img").on("click",function () {
    playerInput = $(this).attr("id");
    $(playerInput).fadeOut().fadeIn();
    console.log(playerInput);
    game(playerInput);
});

$("#reset").on("click",reset);

// Generate computer choice from Rock, Paper or Scissors
function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    $("#computerChoice").attr("src", `images/${computerChoice}.png`);
    return computerChoice;
}

// Take player input and evaluate against computer choice following RPS rules
function playRound(playerInput) {
    computerChoice = getComputerChoice();
    if (playerInput === computerChoice) {
        $(".score").text("Tie round, choose again!");
    } else if (
        (playerInput === "rock" && computerChoice === "scissors") ||
        (playerInput === "paper" && computerChoice === "rock") ||
        (playerInput === "scissors" && computerChoice === "paper"))  {
            return true;
        } else {
            return false;
        }
    }

// Play 5 rounds of RPS, declare winner
function game(playerInput) {
    let round = playRound(playerInput);
    if (round === true) {
        playerScore++;
        $(".score").text(`${playerScore} - ${computerScore}`);
    } else if (round === false) {
        computerScore++;
        $(".score").text(`${playerScore} - ${computerScore}`);
    }
    if (playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            console.log(`You win! Final score: ${playerScore} - ${computerScore}`);
        } else if (playerScore < computerScore) {
            console.log(`You lose! Final score: ${playerScore} - ${computerScore}`);
        }
    }
}

function reset() {
    console.log("reset");
    let playerScore = 0;
    let computerScore = 0;
    $(".score").text(`Score reset`);
}