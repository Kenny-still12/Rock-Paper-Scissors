const choices = ["rock", "paper", "scissors"];

function getComputerChoice () {
    const choice = choices[Math.floor((Math.random()* choices.length))];
    return choice;
}

function checkWin (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tie';
    } else if (playerSelection == 'rock' && computerSelection == 'paper' 
               || playerSelection == 'paper' && computerSelection == 'scissors' 
               || playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'computer';
    } else {
        return 'player';
    }
}

function play(playerSelection, computerSelection) {
    const result = checkWin(playerSelection, computerSelection);
    if (result == 'tie'){
        return 'it is a tie'
    } else if (result == 'player') {
        return `You won! your ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lost! computer's ${playerSelection} beats your ${computerSelection}`;
    }
}

function getplayerChoice(){
    let checkInput = false;
    while(checkInput == false){
        const choice = prompt("Rock Paper Scissors!");
        if (choice == null){
            continue;
        }
        const choiceLowered = choice.toLowerCase();
        if (choices.includes(choiceLowered)){
            return choiceLowered;
        }
    } 
}

function game (){
    let scorePlayer = 0;
    let scoreComp = 0;
    for (let i = 0; i < 5; i++){    
        const computerSelection = getComputerChoice();
        const playerSelection = getplayerChoice();
        console.log(play(playerSelection, computerSelection));
        if(checkWin(playerSelection, computerSelection) == 'player'){
            scorePlayer++;
        } else if (checkWin(playerSelection, computerSelection) == 'computer'){
            scoreComp++;
        }
    }
    if (scorePlayer > scoreComp){
        console.log(`you Won with the score of ${scorePlayer}!`);
    } else if (scorePlayer < scoreComp){
        console.log(`you lost with the score of ${scorePlayer}`);
    } else {
        console.log('you tied with the computer! bettter luck next time');
    }
}

game();
