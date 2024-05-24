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
    localStorage.setItem('scores', JSON.stringify(scores)); // Update localStorage
    updateScoresDisplay(); // Update the display
  
    
 
})

const scores = JSON.parse(localStorage.getItem('scores')) || {
    wins:0,
    losses:0,
    draws:0
}



updateScoresDisplay()




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
  

}

function startGame(userMove) {
const computerMove = compChoice();


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

localStorage.setItem('scores', JSON.stringify(scores))

updateScoresDisplay(userMove, computerMove, result);






}


function updateScoresDisplay(userMove = '', computerMove = '', result = '') {
    const displayScore = document.querySelector('.displayScore');
    const userImage = getImage(userMove);
    const computerImage = getImage(computerMove);
    



    displayScore.innerHTML = `
    Wins: ${scores.wins} Losses: ${scores.losses} Draws: ${scores.draws}<br>

    You picked <img src="${userImage}" alt=""  width="50px" >  & the computer picked <img src="${computerImage}" alt="" width="50px"> 
    <br>
    <br>

    ${result.toUpperCase()}
    `;

    // systematic approach should be like all the three should have separate div's in html and all the information should be passed to the respective div so this will make things more easy to manage 

    // as it is not that systematic i have to use br tag which is highly inappropriate 


    
}


function getImage(move) {
    switch (move) {
        case 'rock':
            return 'rock-emoji.png'; // Replace with actual path
        case 'paper':
            return 'paper-emoji.png'; // Replace with actual path
        case 'scissors':
            return 'scissors-emoji.png'; // Replace with actual path
        // default:
        //     return ''; // Return an empty string or a placeholder image path
    }
}
