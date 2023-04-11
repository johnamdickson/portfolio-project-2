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
      removeOldImages();
   
     let playerInfoArea = document.getElementById("player-info-area");
     let gameStatusCheck = document.getElementById("game-status-div");
    //  check if the game status div has been added. If not, add this div above player scores.

     if (gameStatusCheck === null) {
      let gameStatus = document.createElement('div');
      gameStatus.className = "game-control-divs";
      gameStatus.id = "game-status-div";
      gameStatusInnerHTML =
      `
      <p>Player <span id="player-number-span">One</span>'s Go!</p>
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
  // function below ensures that the animal images are not visible on card turn 
  // when new game is started from Start New Game Button click. 
  // Solution found here: https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
  setTimeout(function(){
    addAnimalImages();
  }, 750); 
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
      console.log(`player number ${playerNumber}`)
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
        cardsTurned.push(this)
        let image = this.querySelector('.animal-image').alt;
        cardsTurnedInfo.push(image);
        // remove event listener once card selected so that it is not counted twice.
        this.removeEventListener('click', count)
        numberOfCardsTurned ++;
        if (numberOfCardsTurned === 2) {
          checkForMatch(playerNumber, cardsTurned, cardsTurnedInfo);
          for (let card of cards){
            // remove this event listener to ensure no more cards can be flipped prior to checking for a match.
            card.removeEventListener("click", flipCard);
          }
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
            oldImage.remove()
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
      let i = 0
      let pictureCards = document.getElementsByClassName("card-front");
      for (let pictureCard of pictureCards){
        let picture = document.createElement('img');
        picture.className = "animal-image"
        picture.src = shuffledAnimalCards[i].image;
        picture.alt = shuffledAnimalCards[i].alt;
        // picture.src = monkey.image;
        // picture.alt = monkey.alt;
        pictureCard.appendChild(picture);
        i++
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
      console.log(`here is the player number!!! ${playerNumber}`)
      console.log(cardsTurned)
      let playerOneScore = parseInt(document.getElementById('player-one-score').innerText);
      let playerTwoScore = parseInt(document.getElementById('player-two-score').innerText);
      let playerStatus = document.getElementById('player-number-span');
      if (cardsTurnedInfo[0] === cardsTurnedInfo[1]) {
        switch(playerNumber) {
          case 1:
            document.getElementById('player-one-score').innerText = ++ playerOneScore
            playGame(1)
            case 2: 
            document.getElementById('player-one-score').innerText = ++ playerTwoScore
            playGame(2)
        }
      } else {
      //  Turn cards back around if they do not match. Time delay to stop this happening straight away.
        for (let card of cardsTurned) {
           setTimeout(function(){
            card.className = "card";
        }, 2000); 
      }
      
        switch(playerNumber) {
          case 1:
            console.log("should be player two!")
            playGame(2)
            playerStatus.innerHTML = "Two"
            case 2: 
            playerStatus.innerHTML = "One"
            playGame(1)
        }
        
      }

    

    }

    function incrementScores() {
    }

    function calculateWinner() {

    }
