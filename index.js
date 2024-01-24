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
        return `You lost! computer's ${computerSelection} beats your ${playerSelection}`;
    }
}


function game (){
    let scorePlayer = 0;
    let scoreComp = 0;

    let buttons = document.querySelectorAll('button');
    const playerResult = document.querySelector('.result-player');
    const compResult = document.querySelector('.result-computer');
    const win = document.querySelector('.winner');

    buttons.forEach( (button) =>  
        button.addEventListener('click', () =>{
            if(button.id){
                let computerSelection = getComputerChoice();
                const result = play(button.id, computerSelection);
                console.log(result);

                if (checkWin(button.id,computerSelection) == 'player'){
                    scorePlayer++;
                    playerResult.textContent = `Player:  ${scorePlayer}`;
                } else if (checkWin(button.id,computerSelection) =='computer') {
                    scoreComp++;
                    compResult.textContent = `Computer: ${scoreComp}`;
                }
                if (scorePlayer == 5 && scoreComp < 5){
                    win.textContent = 'The Player won!';
                } 
                if (scoreComp == 5 && scorePlayer < 5) {
                    win.textContent = 'You lose Try Again';
                }
            }
        })
        );
  
    }
game();
