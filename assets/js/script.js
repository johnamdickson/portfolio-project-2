// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementsByTagName("button");
    let gameButton = button[0];
        gameButton.addEventListener("mousedown", function(){
            this.style.boxShadow = "inset 3px 3px 3px 0 rgba(255,255,255,0.7), inset -3px -3px 3px 0 rgba(255,255,255,0.5)";
            this.style.color = "rgba(186, 221, 233, 0.9)";
            
        })
        // How to return styling to CSS: https://stackoverflow.com/questions/3506050/how-to-reset-the-style-properties-to-their-css-defaults-in-javascript
        gameButton.addEventListener("mouseup", function(){
            this.style.boxShadow = "";
            this.style.color = "";
        })
        gameButton.addEventListener("click", function(){
          setUpGame();
        })
    })
/**
 * Function to set up game on press of the start game button.
 */
    function setUpGame() {
      
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
     let playerInfoArea = document.getElementById("player-info-area");
     let gameStatusCheck = document.getElementById("game-status-div");
    //  check if the game status div has been added. If not, add this div above player scores.

     if (gameStatusCheck === null) {
      let gameStatus = document.createElement('div');
      gameStatus.className = "game-control-divs";
      gameStatus.id = "game-status-div";
      gameStatusInnerHTML =
      `
      <p>Player <span>One</span>'s Go!</p>
      `;
      gameStatus.innerHTML = gameStatusInnerHTML;
      /* solution to adding the game status div before the scores area div found here: 
      https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-first-child
      */
      playerInfoArea.insertBefore(gameStatus, playerInfoArea.firstChild);
      /* solution to animating in the game status div: 
     https://stackoverflow.com/questions/14300210/animation-with-node-appendchild-html
      */
      gameStatus.animate([
        // keyframes
        { opacity: '0' },
        { opacity: '1' }
    ], {
        // timing options
        duration: 500,
    });
    
  }
      playGame(1);
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
      console.log(cardsReverse);
      console.log(cardsPicture);
      return cardsPicture
    }

/**
 * playGame function takes in the player number, counts the number of cards turned and stores the card elements
 *  in an array to be passed on to the checkForMatch function.
 */

    function playGame(playerNumber) {
      let numberOfCardsTurned = 0;
      let cardsTurned = [];
      let cards = document.getElementsByClassName("card");
      for (let card of cards){
        card.addEventListener("click", flipCard);
        card.addEventListener("click", count);
      }
      function flipCard() {
        this.classList = "card flip";
      }
      function count() { 
        cardsTurned.push(this);
        // remove event listener once card selected so that it is not counted twice.
        this.removeEventListener('click', count)
        numberOfCardsTurned ++;
        if (numberOfCardsTurned === 2) {
          checkForMatch(playerNumber, cardsTurned);
          for (let card of cards){
            // remove this event listener to ensure no more cards can be flipped prior to checking for a match.
            card.removeEventListener("click", flipCard);
          }
          }
        }
      }
    

    function checkForMatch(playerNumber, cardsTurned) {
      console.log(`here is the player number!!! ${playerNumber}`)
      console.log(cardsTurned)
    }

    function incrementScores() {
    }

    function calculateWinner() {

    }
