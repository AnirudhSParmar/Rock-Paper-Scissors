const rock = document.querySelector('.rock')
rock.addEventListener('click',()=>{
    startGame('rock')
})

const paper = document.querySelector('.paper')
paper.addEventListener('click',()=>{
    startGame('paper')
})

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click',()=>{
    startGame('scissors')
})

const reset = document.querySelector('.reset')
reset.addEventListener('click',()=>{
    scores.wins=0;
    scores.losses=0;
    scores.draws=0;
    updateScoresDisplay();
    
})

// to include the scores , the algorithm is :
// 1.after getting the result , update the score
// 2.display the score


const scores = {
    wins:0,
    losses:0,
    draws:0
}



function compChoice(){
    let rand = Math.random();
    
   let computerMove = '';

    if ( rand >=0 && rand < 0.33 ){
         computerMove = 'rock'
    }
    else if (rand > 0.33 && rand <0.66 ){
        computerMove = 'paper'
    }else if (rand > 0.66 && rand < 1 ){
        computerMove = 'scissors'
    }

    return computerMove
    // computerMove was not returned, so i fixed it
    // Returned the value

}

function startGame(userMove) {
const computerMove = compChoice();
//  Undefined because compChoice doesn't return anything
// now it is able to properly get the value

let result = '';

if ( userMove === 'rock'){
    if (computerMove === 'rock') {
        result = 'draw'
    }else if( computerMove === 'paper'){
     result = 'you lose'
    }else if (computerMove ==='scissors'){
    result = 'you win'
    }
    
}

if ( userMove === 'paper') {
    if( computerMove === 'rock'){
        result = 'you win'
    }else if (computerMove === 'paper'){
        result = 'draw'
    }else if (computerMove ==='scissors'){
        result = 'you lose'
    }

}

if( userMove ==='scissors') {
    if ( computerMove === 'rock'){
        result =  'you lose'
    }else if (computerMove === 'paper'){
        result = 'you win'
    }else if( computerMove ==='scissors') {
        result = 'draw'
    }

}

if ( result === 'you win'){
    scores.wins+=1;
}else if ( result === 'you lose'){
scores.losses+=1;
}else if ( result === 'draw'){
scores.draws+=1;
}
updateScoresDisplay(userMove,computerMove, result)

}


// Function to update the score display
function updateScoresDisplay(userMove = '', computerMove = '', result = '') {
    const displayScore = document.querySelector('.displayScore');
    displayScore.innerHTML = `
        YOU PICKED ${userMove.toUpperCase()} & THE COMPUTER PICKED ${computerMove.toUpperCase()}.
        ${result.toUpperCase()}<br>
        ${scores.wins} Wins, ${scores.losses} Losses & ${scores.draws} Draws.
    `;
    
}

// The variables userMove and computerMove were being used outside their scope so this i fixed

//  updated the display with the result within the scope of the function

// but now as we created the updateScoresDisplay function, we can call it directly .
