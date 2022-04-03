let player = {
    name : "Player",
    chips : 150,
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = '';

let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');
let playerEl = document.getElementById("player-el");

getName();
playerEl.textContent = player.name + ": $" + player.chips;

function getName(){
    let playerName = prompt("Please enter your name:");
    if(playerName != null){
        player.name = playerName; 
    }
}

function getRandomCard() {
    let randNum = Math.floor(Math.random()*13)+1;

    if(randNum > 10)
        return 10;
    else if(randNum == 1)
        return 11;
    else
        return randNum;
}

function startGame() {

    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard+secondCard;

    renderGame();
}
function renderGame(){
    
    cardsEl.textContent = 'Cards: ';
    for(let i=0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + ' ';
    }

    sumEl.textContent = 'Sum ' + sum;

    if(sum < 21) {
        msg = "Do you want to draw another card?";
    } else if (sum === 21) {
        msg = "Blackjack!!";
        hasBlackJack = true;
    } else {
        msg = "You're out of the game ";
        isAlive = false;
    }
    messageEl.textContent = msg;
    
}

function newCard() {

    if(isAlive && !hasBlackJack)
    {   let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

