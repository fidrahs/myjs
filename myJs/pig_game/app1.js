/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore,activePlayer, previusDice;


init();
function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

}

previusDice;

document.querySelector('.btn-roll').addEventListener('click' , function(){
    //Primero hacer el dado que ruede
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //Roll dice 
    var DOMdice = document.querySelector('.dice');
    DOMdice.style.display = 'block';
    DOMdice.src = 'dice-' + dice + '.png';
    
    if (previusDice === 6 && dice === 6) {
        
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;
        nextPlayer();

    } else if(dice !== 1){
        
        //Update Score if is not 1
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
    }else{
        //else Next Player 

        nextPlayer();

    }
    previusDice = dice;
    console.log(previusDice + ' active player ' + activePlayer);
});

function nextPlayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-hold').addEventListener('click' , function(){
    //Global Score
    scores[activePlayer] += roundScore;

    //Udpate player score
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 10) {
        
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        
    } else {
        //Next Player
        nextPlayer();
    }
    

});

//New game button 
document.querySelector('.btn-new').addEventListener('click' , init);