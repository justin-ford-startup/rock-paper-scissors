
function getComputerChoice() {
	let selectionNumber = Math.random();
	if (selectionNumber < 0.3333333) {
		return "rock"
	} else if (selectionNumber < 0.6666667) {
		return "paper"
	} else {
		return "scissors"
	}
}

let getHumanChoice = () => prompt("rock, paper, scissors!");

function playRound(humanChoice, computerChoice) {

	if (humanChoice === computerChoice) {
		console.log("Draw");
	} else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
		humanScore ++;
		console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
	} else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
		computerScore ++;
		console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
	} else {
		console.log("Invalid input. Please enter rock, paper, or scissors");
	}

}

let humanScore = 0;
let computerScore = 0;

function playGame() {
	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice().toLowerCase();
		const computerSelection = getComputerChoice().toLowerCase();
		playRound(humanSelection, computerSelection);
	}
	if (humanScore > computerScore) {
		console.log(`Congratulations! You win with a score of ${humanScore} to ${computerScore}.`);
	} else if (humanScore < computerScore) {
		console.log(`You lose with a score of ${humanScore} to ${computerScore}.`);
	} else {
		console.log(`You draw with a score of ${humanScore} to ${computerScore}.`);
	}
}
