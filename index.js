
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

displayDiv.textContent = humanScore;

mainDiv.appendChild(rockB);
mainDiv.appendChild(paperB);
mainDiv.appendChild(scissorsB);

mainDiv.appendChild(displayDiv);

