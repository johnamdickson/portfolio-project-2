// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// code below for JSHint to silence warnings for ESversion 6.
/*jshint esversion: 6 */ 

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("mousedown", function(){
        this.style.boxShadow = "inset 3px 3px 3px 0 rgba(255,255,255,0.7), inset -3px -3px 3px 0 rgba(255,255,255,0.5)";
        this.style.color = "rgba(186, 221, 233, 0.9)";
      });
// How to return styling to CSS: https://stackoverflow.com/questions/3506050/how-to-reset-the-style-properties-to-their-css-defaults-in-javascript
        button.addEventListener("mouseup", function(){
            this.style.boxShadow = "";
            this.style.color = "";
        });
    }
// set up properties that will interact with or contain buttons
    let blurredDiv = document.getElementById('blurred-div');
    let instructions = document.getElementById('instructions');
 // set up buttons
    let howToPlayStartButton = buttons[0];
    howToPlayStartButton.addEventListener("click", function(){
        blurredDiv.style.visibility = 'hidden';
        instructions.style.visibility = 'hidden';
        howToPlayStartButton.disabled = true;
        setTimeout(function(){
            howToPlayStartButton.disabled = false;
        }, 1000);
        window.location.reload();
    });
    let goBackButton = buttons[1];
    goBackButton.addEventListener("click", function(){
        blurredDiv.style.visibility = 'hidden';
        instructions.style.visibility = 'hidden';
    });
    let newGameButton = buttons[2];
    newGameButton.addEventListener("click", function(){
        blurredDiv.style.visibility = 'hidden';
        instructions.style.visibility = 'hidden';
        newGameButton.disabled = true;
        setTimeout(function(){
            newGameButton.disabled = false;
        }, 1000);
        window.location.reload();
    });
    let gameStartButton = buttons[3];
    gameStartButton.addEventListener("click", function(){
        gameStartButton.disabled = true;
        setTimeout(function(){
            gameStartButton.disabled = false;
        }, 1000);
        window.location.reload();
    });
    let howToPlayButton = buttons[4];
    howToPlayButton.addEventListener("click", function(){
      blurredDiv.style.visibility = 'visible';
      instructions.style.visibility = 'visible';
  });
  //  solution to handling media queries in JS found here: 
  //  https://css-tricks.com/working-with-javascript-media-queries/
  let nineFiftyQuery = window.matchMedia('(max-width: 950px)');
  nineFiftyQuery.addEventListener("change", handleNineFiftyChange);
  function handleNineFiftyChange(event) {
    let gameStatus = document.getElementById('game-status-div');
    if (gameStatus !== null) {
        if (event.matches) {
            gameStatus.innerHTML = 
            `
            <p>Player <span id="player-number-span">1</span> turn.</p>
            `;
        } else {
            gameStatus.innerHTML = 
            `
            <p>Player<br><span id="player-number-span">1</span><br>turn.</p>
             `;
        }
    }
} setUpGame();
    });

/**
 * Function to set up game when the window loads or new game buttons are pressed.
 */
    function setUpGame() {
        // hide game outcome star if already in place.
        let gameOutcome = document.getElementById('game-outcome');
        gameOutcome.style.display = 'none';
        let cards = document.getElementsByClassName("card");
        for (let card of cards) {
        /*
        pictureShowing variable to detect if the picture side is showing and then the if loop 
        detects any cards that do not have the "none" property for transform. On that basis, 
        the cards are then flipped back around to the starting position.
        */
          let pictureShowing = getComputedStyle(card).transform;
          if (pictureShowing != "none") {
            card.className = "card";
           }
      }
        removeOldImages();
        let playerInfoArea = document.getElementById("player-info-area");
        let gameStatusCheck = document.getElementById("game-status-div");
        let scoresArea = document.getElementById("scores-area")
        //  check if the game status div has been added. If not, add this div above player scores.
        setTimeout(function(){
            if (gameStatusCheck === null) {
                let windowWidth = window.innerWidth;
                let gameStatus = document.createElement('div');
                gameStatus.className = "game-control-divs";
                gameStatus.id = "game-status-div";
                let gameStatusInnerHTML;
         //   check window width to style game status div appropriately.
                if (windowWidth <= 950) {
                    gameStatusInnerHTML = 
                     `
                     <p>Player <span id="player-number-span">1</span> turn.</p>
                     `;
                } else {
                    gameStatusInnerHTML =
                     `
                     <p>Player<br><span id="player-number-span">1</span><br>turn.</p>
                    `;
                }
                gameStatus.innerHTML = gameStatusInnerHTML ;
                /* solution to adding the game status div before the scores area div found here: 
                 https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-first-child
                 */
                playerInfoArea.insertBefore(gameStatus, playerInfoArea.firstChild);
                /* solution to animating in the game status div: 
                 https://stackoverflow.com/questions/14300210/animation-with-node-appendchild-html
                 */
                 document.getElementById('player-number-span').innerText = '1';
                gameStatus.animate([
                // keyframes
                { opacity: '0' },
                { opacity: '1' }
                ], {
                // timing options
                    duration: 1000,
                });
                scoresArea.style.visibility = 'visible'
                scoresArea.animate([
                    // keyframes
                    { opacity: '0' },
                    { opacity: '1' }
                    ], {
                    // timing options
                        duration: 1000,
                    });
            }
         }, 1000); 
        // reset scores on start of new game.
        document.getElementById('player-one-score').innerText = "0";
        document.getElementById('player-two-score').innerText = "0";
        /*
        Function below ensures that the animal images are not visible on card turn
        when new game is started from Start New Game Button click. 
        Solution found here: https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
        */
        setTimeout(function(){
            addAnimalImages();
            playGame(1);
         }, 1000); 
    }

/**
 * Helper function that can be called to return the number of cards with pictures visible.
 */
    function cardsPicturesVisibleCalculator() {
        let cardsReverse = 0;
        let cardsPicture = 0;
        let cards = document.getElementsByClassName("card");
        for (let card of cards) {
            let visibility = getComputedStyle(card).transform;
            if (visibility === "none") {
                cardsReverse += 1;
            } else {
                cardsPicture += 1;
            }
        }
        return cardsPicture;
    }

/**
 * playGame function takes in the player number, counts the number of cards turned and stores the card elements
 *  in an array to be passed on to the checkForMatch function.
 */

    function playGame(playerNumber) {
        let numberOfCardsTurned = 0;
        let cardsTurned = [];
        let cardsTurnedInfo = [];
        let cards = document.getElementsByClassName("card");
         for (let card of cards){
            card.addEventListener("click", flipCard);
            card.addEventListener("click", count);
        }
        function flipCard() {
            this.classList = "card flip";
        }
        function count() { 
            // obtain alt text from images using query selector and add to cardsTurned array.
            cardsTurned.push(this);
            let image = this.querySelector('.animal-image').alt;
            cardsTurnedInfo.push(image);
            // remove event listener once card selected so that it is not counted twice.
            this.removeEventListener('click', count);
            numberOfCardsTurned ++;
            if (numberOfCardsTurned === 2) {
                for (let card of cards){
                // remove this event listener to ensure no more cards can be flipped prior to checking for a match.
                    card.removeEventListener("click", flipCard);
                }
                checkForMatch(playerNumber, cardsTurned, cardsTurnedInfo);
            }
        }
    }
     
    /**
 * Helper function to remove old images from previous game and maintain readability of setUpGame function.
 */
    function removeOldImages () {
        let pictureCards = document.getElementsByClassName("card-front");
        for (let pictureCard of pictureCards){
            // Used query selector to check if card-front div contains anything of class animal image before removing. Solution found at link below.
            // https://bobbyhadz.com/blog/javascript-check-if-element-has-child-with-id#:~:text=Use%20the%20querySelector()%20method,null%20if%20no%20element%20matches.
            if (pictureCard.querySelector('.animal-image') !== null){
                let oldImages = document.getElementsByClassName("animal-image");
                for (let oldImage of oldImages){
                    oldImage.remove();
                }
            }
        }
    } 
      /**
   * addAnimalImages function creates an array of animal images and applies a shuffle function.
   * before adding random images to each card-front div.
 */
    function addAnimalImages() {
        let monkey = {image: "assets/images/monkey.png", alt: "Cartoon image of a monkey"};
        let elephant = {image: "assets/images/elephant.png", alt: "Cartoon image of an elephant"};
        let tiger = {image: "assets/images/tiger.png", alt: "Cartoon image of a tiger"};
        let lion = {image: "assets/images/lion.png", alt: "Cartoon image of a lion"};
        let panda = {image: "assets/images/panda.png", alt: "Cartoon image of a panda"};
        let zebra = {image: "assets/images/zebra.png", alt: "Cartoon image of a zebra"};
        let giraffe = {image: "assets/images/giraffe.png", alt: "Cartoon image of a giraffe"};
        let turtle = {image: "assets/images/turtle.png", alt: "Cartoon image of a turtle"};
        let animalCards = [monkey, monkey, elephant, elephant,tiger, tiger, lion, lion, panda, panda, zebra, zebra, giraffe, giraffe, turtle, turtle];
        let shuffledAnimalCards = shuffle(animalCards);
        let i = 0;
        let pictureCards = document.getElementsByClassName("card-front");
        for (let pictureCard of pictureCards){
            let picture = document.createElement('img');
            picture.className = "animal-image";
            picture.style.zIndex = '3';
            picture.src = shuffledAnimalCards[i].image;
            picture.alt = shuffledAnimalCards[i].alt;
            // picture.src = monkey.image;
            // picture.alt = monkey.alt;
            pictureCard.appendChild(picture);
            i++;
        }
    }

  /**
   * shuffle function to randomise order of game cards.
 */
    // Solution for this function found in stack overflow.
    // https://bost.ocks.org/mike/shuffle/  
   
    function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    function checkForMatch(playerNumber, cardsTurned, cardsTurnedInfo) {
        let playerOneScore = parseInt(document.getElementById('player-one-score').innerText);
        let playerTwoScore = parseInt(document.getElementById('player-two-score').innerText);
        let playerStatus = document.getElementById('player-number-span');
        switch(playerNumber) {
            case 1:
                if (cardsTurnedInfo[0] === cardsTurnedInfo[1]){
                    document.getElementById('player-one-score').innerText = ++ playerOneScore;
                    feedbackMatch(cardsTurnedInfo[0], 1);
                }
                else {
                    for (let card of cardsTurned) {
                        setTimeout(function(){
                            card.className = "card";
                        }, 2000); }
                    setTimeout(function(){
                        playGame(2);
                        playerStatus.innerHTML = "2";
                    }, 2250); }
                break;
            case 2: 
                if (cardsTurnedInfo[0] === cardsTurnedInfo[1]){
                    document.getElementById('player-two-score').innerText = ++ playerTwoScore;
                    feedbackMatch(cardsTurnedInfo[0], 2);
                }
                else {
                     //  Turn cards back around if they do not match. Time delay to stop this happening straight away.
                    for (let card of cardsTurned) {
                        setTimeout(function(){
                            card.className = "card";
                        }, 2000); }
                    setTimeout(function(){
                        playGame(1);
                        playerStatus.innerHTML = "1";
                    }, 2250); }
                break;
            default:
                console.log("Fell through");
        }
        return;
    }


  /**
   * function to present a feedback star and message when a match is made. Function takes in two
   * parameters card information to describe the matched animals and the player number.
 */
    function feedbackMatch(info, player) {
        let cardsVisible = cardsPicturesVisibleCalculator();
        let playerOneScore = parseInt(document.getElementById('player-one-score').innerText);
        let playerTwoScore = parseInt(document.getElementById('player-two-score').innerText);
        if (cardsVisible === 16) {
            calculateWinner(playerOneScore, playerTwoScore);
          } 
        else {
            let feedbackDiv = document.getElementById("feedback-div");
            feedbackDiv.style.visibility = 'visible';
            let star = document.getElementById("feedback");
            star.style.display = 'block';
            // solution to getting last word from string from here:
            // https://bobbyhadz.com/blog/javascript-get-last-word-of-string
            let animal = info.split(' ').pop();
            let animalSpan = document.getElementById("animal-name");
            animalSpan.innerHTML = animal;
            // properties for animating out the star feedback block using tutorial below:
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
            let animateOut = [
            { transform: "rotate(0) scale(1.5)", opacity: "0.95"},
            { transform: "rotate(270deg) scale(100)", opacity: "0" },
            ];
            let animateOutTiming = {
                duration: 750,
                iterations: 1
            };
            setTimeout(function(){
                star.animate(animateOut, animateOutTiming);
            },3000);
            setTimeout(function(){ 
                star.style.display = 'none';
                feedbackDiv.style.visibility = 'hidden';
            }, 3750);
            playGame(player);
        }
    }
  /**
   * function to calculate the winner by comparing the two parameters and then feedback the game 
   * outcome to the users with an approriate message. After a time delay, the text changes to prompt
   * initation of a new game along with the appropriate button to do so.
 */
    function calculateWinner(playerOneScore, playerTwoScore) {
        let blurredDiv = document.getElementById('blurred-div');
        blurredDiv.style.visibility = 'visible';
        let gameOutcome = document.getElementById('game-outcome');
        gameOutcome.style.display = 'block';
        let gameOutcomeMessage = document.getElementById('outcome-message');
        let newGameButton = document.getElementById('new-game-button');
        if (playerOneScore === playerTwoScore) {
            gameOutcomeMessage.innerText = "That was close, its a draw!";
        } 
        else if (playerOneScore > playerTwoScore) {
            gameOutcomeMessage.innerText = "Congrats Player 1, you win!";
      } 
      else {
            gameOutcomeMessage.innerText = "Congrats Player 2, you win!";
      }
      setTimeout(function(){ 
        gameOutcomeMessage.style.top = "42%";
        gameOutcomeMessage.style.fontSize = "1.5rem";
        gameOutcomeMessage.innerText = "Click below to begin a new game";
        newGameButton.style.display = "block";
      }, 3500);
    }