'use strict';
let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
function display(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        display('🔴 No Number!');
    }
    else if(guess === secretnumber){
        document.querySelector('.box').textContent=secretnumber;
        display('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor='#60b347';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess !== secretnumber){
        if(score > 1){
            display(guess > secretnumber ? 'Too high!':'Too low!');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            display('You lost the game!');
            document.querySelector('.score').textContent=0;
        }
    }
});
document.querySelector('.again').addEventListener('click',function(){
    secretnumber=Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('.score').textContent=score;
    display('Start guessing...');
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.box').textContent='?';
    document.querySelector('.guess').value='';
   })