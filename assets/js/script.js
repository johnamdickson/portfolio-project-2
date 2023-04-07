// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementsByTagName("button");
    let gameButton = button[0];
        gameButton.addEventListener("mousedown", function(){
            this.style.boxShadow = "inset 3px 3px 3px 0 rgba(255,255,255,0.7), inset -3px -3px 3px 0 rgba(255,255,255,0.5)";
            this.style.color = "rgba(186, 221, 233, 0.9)";
            runGame()
        })
        // How to return styling to CSS: https://stackoverflow.com/questions/3506050/how-to-reset-the-style-properties-to-their-css-defaults-in-javascript
        gameButton.addEventListener("mouseup", function(){
            this.style.boxShadow = "";
            this.style.color = "";
        })
    })
/**
 * The main game "loop", called when the start game button is pressed
 * allowing player one to select two cards.
 */
    function runGame() {
        let cards = document.getElementsByClassName("card");
      console.log(cards);
      for (let card of cards) {
        card.addEventListener("click", flipCard);
      }

      function flipCard() {
        this.classList.toggle("flip");
        console.log("Clicked card");
      }
    }

    
    function incrementScores() {

    }

    function calculateWinner() {

    }

