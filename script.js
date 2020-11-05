/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
let card = document.querySelectorAll('.card');
let ctr=0;
let arrayCtr=-1;
let matchedCtr = 0;
let isMatched = false;
let cardStore = [];
let restart = document.querySelector('.restart')
// This function will be responsible to listen to every clicks and then send the card to another function for card matching.
card.forEach((cardElement)=>{
    cardElement.addEventListener('click',(event)=>{
        ctr =ctr+1;
            if(ctr!==0 && ctr<=2) 
            {   cardElement.classList.add('show', 'open');
            arrayCtr++;
            cardStore[arrayCtr]=cardElement;
            console.log(cardStore)
            if(ctr===2){
                console.log(arrayCtr-1);
                isMatched = getMatch(cardStore,arrayCtr);
                console.log(arrayCtr-1);
                    ctr=0;
                    if(matchedCtr)  matchedCtr++;
            }
        } 
        if(matchedCtr===8){
            console.log('seems like we can create a modal')
        }   
    }
)})


// This function takes the card elements which are there to be compared and then changing the classes according to the matches
const getMatch = (cardStore, arrayCtr)=>{
    let firstCard = cardStore[arrayCtr-1].firstElementChild.className;
    let secondCard=cardStore[arrayCtr].firstElementChild.className;
    if(firstCard===secondCard){
        
        cardStore[arrayCtr].classList.add('match');
        cardStore[arrayCtr-1].classList.add('match');
        return true;
    }
    setTimeout(()=>{
        cardStore[arrayCtr].classList.remove('show','open');
        cardStore[arrayCtr-1].classList.remove('show','open');
    }, 500)
    
    return false;
}



// Shuffle function from http://stackoverflow.com/a/2450976 which is right now not implemented in the code.
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


 restart.addEventListener('click',()=>{
     cardStore.forEach((cardElement)=>{
         cardElement.classList.remove('match', 'show','open');
     })

 })