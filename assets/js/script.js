// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementsByTagName("button");
    let gameButton = button[0];
        gameButton.addEventListener("mousedown", function(){
            console.log("Pressed button")
            this.style.boxShadow = "none";
        })
        // How to return styling to CSS: https://stackoverflow.com/questions/3506050/how-to-reset-the-style-properties-to-their-css-defaults-in-javascript
        gameButton.addEventListener("mouseup", function(){
            console.log("Unclicked!")
            this.style.boxShadow = "";
        })
    })

    function buttonPressed() {
        

    }