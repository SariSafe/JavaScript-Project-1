'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 
'Correct Number !';
document.querySelector('.number').textContent = 0
document.querySelector('.score').textContent = 0
document.querySelector('.guess').value = 23
*/
 // set random between 1 and 20 .
 const secretNumber = Math.trunc(Math.random()*20) + 1;
 // to  get the secret number and load it to  html  element 
 document.querySelector('.number').textContent = 
 secretNumber ;
  
 let score = 20 

 // to program logices of click button ('Check')
 document.querySelector('.check').addEventListener
  ('click', function () {
    const guest = Number(document.querySelector('.guess').value);
  if(!guest){
    document.querySelector('.message').textContent = ' No number !';
  }
  // when player  wins 
  else if ( guest === secretNumber){
   
    document.querySelector('.message').textContent = 
   'Correct Number !';
   //green background 
   document.querySelector('.number').textContent = secretNumber;
   document.querySelector('body').style.backgroundColor ='#60b347'
   document.querySelector('.number').style.width ='30rem'

} 
  // when guess id  too high 
  else if (guest > secretNumber){
    if(score>0){
      document.querySelector('.message').textContent = 
      ' Too High !';
      
      // decreas score number for every fail attemp
      score--;
      document.querySelector('.score').textContent =
      score ;
    }
    else{
    document.querySelector('message').textContent = 
    ' You Lost the game'
    document.querySelector('.score').textContent = 
    0;
      }

  }
  // when guess is too low 
  else if (guest < secretNumber){
      // decreas score number for every fail attemp 
     document.querySelector('.message').textContent = 
     ' To Low !';
     score--;
     document.querySelector('.score').textContent =
     score ;

  }
  });