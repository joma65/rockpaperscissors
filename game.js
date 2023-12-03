const choices = ["rock", "paper", "scissors"];
$(".bottomContainer").hide();
let playerInput = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let started = false;

$("img").on("click", function () {
	playerInput = $(this).attr("id");
	$(this).fadeOut(100).fadeIn(100);
	game(playerInput);
});

$("#reset").on("click", reset);

// Generate computer choice from Rock, Paper or Scissors
function getComputerChoice() {
	computerChoice = choices[Math.floor(Math.random() * choices.length)];
	$("#computerChoice").attr("src", `images/${computerChoice}.png`);
    if (started === false) {
        started = true;
        $("#start").hide();
        $(".bottomContainer").show();
    }
	return computerChoice;
}

// Take player input and evaluate against computer choice following RPS rules
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

// Play 5 rounds of RPS, declare winner
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

function reset() {
	playerInput = "";
	computerChoice = "";
	playerScore = 0;
	computerScore = 0;
    started = false;
    $("#start").show();
	$(".bottomContainer").hide();
}
