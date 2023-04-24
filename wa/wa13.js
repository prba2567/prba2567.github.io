

// function check() {
//     console.log('test');
// }

// function submit() {
//     alert("Your volume "+ output.textContent);
// }

// function reset() {
//     outputInt = 0;
//     output.textContent = outputInt;
// }

// function minus() {
//     if (outputInt > 0) {
//     outputInt -=1;
//     output.textContent = outputInt; }
    
// }

// function plus() {
//     if (outputInt < 100) {
//     outputInt +=1;
//     output.textContent = outputInt;
//     }
// }

// function random() {
//     outputInt = randomNumber(0, 100);
//     output.textContent = outputInt;
// }

// function randomNumber(min, max) {
//     const num = Math.floor(Math.random() * (max - min + 1)) + min;
//     return num;
//   }



// const output = document.querySelector('.output');
// let outputInt = parseInt(output.textContent);
// console.log(outputInt);

// const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
// const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
// const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
// const randomButton = document.querySelector('.random-button').addEventListener('click', random);
// const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


// /* const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value);
// }
// */


// var slider = document.getElementById("myRange");
// var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
// var sliderOutput = document.querySelector(".slider-output");


// // Update the current slider value (each time you drag the slider handle)
// function update() {
//   sliderOutput.textContent = slider.value;
// }

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;

let firstCard, secondCard;

function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;
//   this.classList.toggle('flip');
this.classList.add('flip');

  if (!hasFlippedCard) {
     hasFlippedCard = true;  
     firstCard = this;
     return;
    }
   secondCard = this;

  checkForMatch();
 }

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
 }

 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);

   resetBoard();
 }

 function unflipCards() {
    lockBoard = true;
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
   }, 1500);
   resetBoard();
 }

 function resetBoard() {
     [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
 }

 (function shuffle() {
       cards.forEach(card => {
         let ramdomPos = Math.floor(Math.random() * 12);
         card.style.order = ramdomPos;
       });
     })();

cards.forEach(card => card.addEventListener('click', flipCard));