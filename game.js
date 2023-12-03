const CHOICES = ["rock", "paper", "scissors"];

let playerInput = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let started = false;

// Hides Computer Choice and Score until game is started
$(".bottomContainer").hide();

// Listen for player input
$(".choices img").on("click", function () {
	playerInput = $(this).attr("id");
	$(this).fadeOut(100).fadeIn(100);
	game(playerInput);
});

$("#reset").on("click", reset);

function getComputerChoice() {
	// Generate computer choice from Rock, Paper or Scissors
	computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
	// Display computer choice in image
	$("#computerChoice").attr("src", `images/${computerChoice}.png`);
	// Hide ? and show computer choice or continue if already hidden
    if (started === false) {
        started = true;
        $("#start").hide();
        $(".bottomContainer").show();
    }
	return computerChoice;
}

// Take player input and evaluate against computer choice following Rock Paper Scissors rules
function playRound(playerInput) {
	computerChoice = getComputerChoice();
	if (playerInput === computerChoice) {
        return;
	} else if (
		(playerInput === "rock" && computerChoice === "scissors") ||
		(playerInput === "paper" && computerChoice === "rock") ||
		(playerInput === "scissors" && computerChoice === "paper")
	) {
		return true;
	} else {
		return false;
	}
}

// Play rounds of RPS, update score or declare a tie
function game(playerInput) {
	let round = playRound(playerInput);

	if (round === true) {
		playerScore++;
        $(".score").text(`YOU: ${playerScore} - CPU: ${computerScore}`);
	} else if (round === false) {
		computerScore++;
        $(".score").text(`YOU: ${playerScore} - CPU: ${computerScore}`);
	} else {
        $(".score").text("Tie round, choose again!");
    }
}
// Reset game state to default
function reset() {
	playerInput = "";
	computerChoice = "";
	playerScore = 0;
	computerScore = 0;
    started = false;
    $("#start").show();
	$(".bottomContainer").hide();
}
