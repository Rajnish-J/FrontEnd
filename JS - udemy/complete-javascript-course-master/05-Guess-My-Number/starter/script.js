// 'use strict';

// // ! changing the para tag text with DOM
// console.log(window.document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Rajnish';
// console.log(window.document.querySelector('.message').textContent);

// // ! changing the values

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 18;

// // ! input selector
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 13;

// ! creating a number to check
let secretNumber = Math.trunc(Math.random() * 20)+1;
console.log(secretNumber);

// ! score variable
let score_var = 20;

// ! highscore
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value); 
    console.log(guess, typeof guess);
    
    
    if(!guess){
        document.querySelector('.message').textContent = 'No number';
    }

    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number !!';
        document.querySelector('.highscore').textContent  = score_var;

        // * if player wins the background color of the page will be change black to green
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if(score_var > highscore){
            console.log("score var", score_var);
            console.log("score high", highscore);

            console.log("inside the high score condition");
            
            highscore = score_var;
            document.querySelector('.highscore').textContent = highscore;
        }else{
            document.querySelector('.highscore').textContent = highscore;

        }

        
    }

    else if(guess > secretNumber){
        if(score_var > 1){
            document.querySelector('.message').textContent = 'Guess is too high!!';
            score_var--;
            document.querySelector('.score').textContent  = score_var;
        }
        else{
            document.querySelector('.message').textContent = 'Lost the game'
            document.querySelector('.score').textContent  = 0;
        }
    }

    else if(guess < secretNumber){
        if(score_var > 1){
            document.querySelector('.message').textContent = 'Guess is two low !!';
            score_var--;
            document.querySelector('.score').textContent  = score_var;
        }
        else{
            document.querySelector('.message').textContent = 'Lost the game'
            document.querySelector('.score').textContent  = 0;
        }
    }
    
});

// ! resetting
document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20)+1;
    score_var = 20;
    console.log(secretNumber);
    

    document.querySelector('.message').textContent = 'Start guessing !!';
    document.querySelector('.score').textContent = score_var;
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});