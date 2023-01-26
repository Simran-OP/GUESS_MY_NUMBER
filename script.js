"use strict";

//random and secret number
let secret = Math.trunc(Math.random() * 20) + 1;
console.log(secret);
// changing the score and getting it to a var
let val = document.querySelector('.score').textContent 
console.log(val)
//if user lost . gives off boolean answer
function lose(v){
    if(v<=1)
    {
        return true
    }
    return false
}

let m=0;



//adding button add event listener
document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  console.log(Number(guess))
  //if user does not get any number in dialog box
  if (!guess) {
    document.querySelector(
      ".message"
    ).textContent = `😶‍🌫️ Enter a number already!!!`;
  } 
  else {
    // if the guess is correct 
    if (guess==secret) {
        // you won message displayed
      document.querySelector(".message").textContent = `❤️ Correct Number`;
      // secret number displayed in  the box
      console.log(val)
      if(m<val)
      document.querySelector('.highscore').textContent = val;

      document.querySelector(".number").textContent = secret;
      document.querySelector('body').style.backgroundColor='#60b432'
      
    } 
    else if (guess < secret) {
        // check the losing score
       if(!lose(val)){       
      document.querySelector(".message").textContent = `🔽 low`;
      // we can simply decrease score for the wrong guess
      document.querySelector('.score').textContent = --val
    }
    else{
        document.querySelector(".message").textContent = `😰 you lost `;
    }
    } 
    else {
        if(!lose(val)){
      document.querySelector(".message").textContent = `🔼 high`;
      // we can simply decrease score for the wrong guess
      document.querySelector('.score').textContent = --val

    }
    else{
        document.querySelector(".message").textContent = `😰 you lost `;
    }
}
  }
});



// adding refresh to again

document.querySelector('.again').addEventListener("click",function(){
    let newsec=Math.trunc(Math.random() * 20) + 1
    secret=newsec
    let score = 20;
    val=score;
    console.log(secret)
    document.querySelector('body').style.backgroundColor= '#222'; 
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent=score
    document.querySelector('.guess').value= '';
    document.querySelector('.message').textContent= 'start Guessing...'
})