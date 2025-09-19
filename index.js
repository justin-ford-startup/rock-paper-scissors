
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

function playRound(humanChoice, computerChoice) {

	if (humanChoice === computerChoice) {
		console.log("Draw");
		displayDiv.textContent = "Draw";
	} else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
		humanScore ++;
		console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
		displayDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
		gameScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
	} else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
		computerScore ++;
		console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
		displayDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
		gameScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
	} else {
		console.log("Invalid input. Please enter rock, paper, or scissors");
	}
}

let humanScore = 0;
let computerScore = 0;

const rockB = document.createElement("button");
const paperB = document.createElement("button");
const scissorsB = document.createElement("button");

rockB.textContent = "Rock";
paperB.textContent = "Paper";
scissorsB.textContent = "Scissors";

rockB.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperB.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsB.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const mainDiv = document.querySelector("div");
const displayDiv = document.createElement("div");
const gameScore = document.createElement("p");

gameScore.textContent = humanScore;

mainDiv.appendChild(rockB);
mainDiv.appendChild(paperB);
mainDiv.appendChild(scissorsB);

mainDiv.appendChild(displayDiv);
mainDiv.appendChild(gameScore);

