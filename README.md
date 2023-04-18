<a name="top"></a>
# <img src="favicon.png"  width="50" height="50"> Wild Cards Memory Game

Wild cards is a two player memory game designed for people of all ages but especially kids.

This website is showcasing Javascript, HTML and CSS design for Project Portfolio 2 and can be accessed by following this [link.](https://johnamdickson.github.io/Portfolio-Project-2/)

![Responsive Mockup Screenshot](/assets/README-files/am-i-responsive.jpg)

## Contents
- [UX](#ux)
  - [Strategy](#strategy)
    - [User Stories](#user-stories)
  - [Scope](#scope)
    - [Essential Content](#essential-content)
    - [Optional Content](#optional-content)
  - [Structure](#structure)
  - [Skeleton](#structure)
    - [Web Wireframe](#web-browser-wireframe)
    - [Tablet Wireframe](#tablet-wireframe)
    - [Mobile Wireframe](#mobile-wireframe)
  - [Surface](#surface)
    - [Colour Scheme](#colour-scheme)
    - [Imagery](#imagery)
    - [Logo](#logo)
    - [Typography](#typography)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features Left to Implement](#features-left-to-implement)
- [Testing](#testing)
  - [Development Testing](#development-testing)
  - [Testing User Stories](#testing-user-stories)
  - [Validator Testing](#validator-testing)
  - [Bugs / Issues](#bugs--issues)
  - [Unresolved Bugs / Issues](#unresolved-bugs-or-issues)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)




## UX
### Strategy
The objective of the site is to create a two player memory card game directed towards young children and their parents which will demonstrate the Portfolio Project 2 requirements.
#### User Stories
- As an adult user:
  - I want to play a game with my children that challenges their memory and spatial awareness.
  - I want the game to encourage turn taking by giving feedback on which player's turn it is.
  - I want to be able to play the game on all devices including PC/Mac, tablets and mobile phones.
  - I want responsive feedback from buttons and cards on the website.
<br><br>
- As a child user:
  - I want to engage in a fun game with my parents or caregiver.
  - I want to be visually stimulated by the site including background picture, card pictures and colours.
<br><br>
- As the site administrator:
  - I want to easily identify issues or bugs by having clear and concise code with annotations.
  - I want to promote a fun online environment and game for parents and children to enjoy together.
  - I want the game to be accessible to all users including those that are visually impaired.

### Scope
#### Essential Content
 - The site will have 16 cards that can be clicked to turn over.
 - The site will keep track of player turns and will give visual feedback of this.
 - The site should give feedback on successful matches.
 - The site should keep track of the scores. and 
 - There should be a game outcome feedback once all cards are turned over.
 - There should be alt text describing each animal image for visually impaired users. <br><br>
#### Optional Content
- The site will have background music.
- The site will have audible effects or descriptions for each animal when the cards are turned over and matched. 
- 1 player game option against the computer.<br><br>
### Structure
 - The site will have a logo at the top of the page.
 - There will be a game section containing all of the game elements.
 - The first element will be a game information div.
 - The next will be a game grid consisting of 16 cards arranged in a 4 x 4 grid.
 - Each card will have a front and reverse with a blank side and then an hidden animal at the back.
 - There will be a game information area which will keep track of player turns and their respective scores.<br><br>
### Skeleton
#### Web Browser Wireframe
![Web-Wireframe](/assets/README-files/web-browser-wireframe.png) <br><br>
#### Tablet Wireframe
![Tablet-Wireframe](/assets/README-files/tablet-wireframe.png)  <br><br>
#### Mobile Wireframe
![Mobile-Wireframe](/assets/README-files/mobile-wireframe.png) <br><br>

### Surface
#### Colour Scheme
![Colour Palette](/assets/README-files/color-palette.png)
- The site colour scheme revolves around three strong colours as shown in the palette. 
- The colours were chosen to create a striking contrast, especially between the *Confetti* and *Biscay* colours.
- Another consideration was to have colours that stood out agains the background image. <br><br>
#### Imagery
![Background Image](/assets/images/jungle.jpg)
- The background image was selcted to again cater for the visual needs of children and as a way of introducing them and other users to the game.<br><br>
#### Logo
![Site Logo](/assets/README-files/logo.png)
- The choice of site logo was based upon one that would be fun and engaging for children and have an immediate connection with the content. The logo utilises two of the colours from the site colour scheme: *Biscay* and *Powder Blue*.<br><br>
#### Typography
- All fonts were sourced from Google Fonts. The main font used throughout is called *Love Ya Like A Sister* which was selected for it's fun characteristics that children can relate too even if they cannot read. *Raleway* was selected for the buttons' font to make it stand out to adults who will normally be controlling the game.<br><br>

## Features 

### Existing Features

- __The Game Information Area__ <br><br>
![Game-Information](assets/README-files/game-information.png)

  - The game information div contains an `<h2>` welcome message and short `<p>` giving an overview of the game. There are two buttons at the bottom of the div -  *New Game* and *How To Play*. The former button gives the option to restart the game whilst the latter directs the user to an instructions div described below. The buttons are styled to have an embossed look using inset box shadows along with an outset shadow. The buttons have mousedown and mouseup event listeners where the mousedown removes the outset shadow and the mouseup returns the styling to normal. This creates the impression of the button being pressed and springing back to position once released.<br><br>
- __The Game Instructions__ <br><br>
![Game-Instructions](/assets/README-files/game-instructions.jpg) 

  - When the *How To Play* button is pressed two divs  - blurred and instructions - are made visible from their default hidden property. The blurred div covers the entire screen and creates a visual effect that accentuates the instructions div and contents and helps create a contrast against the backdrop of the game. The instructions div contains an `<ol>` of instructions followed by *New Game* and *Go Back* buttons. The former button completes the same action as its namesake described in Game Information above, whilst the latter returns the user to the current game. Both buttons return the two divs to their default visibility status of hidden.<br><br>
- __The Game Area__ <br><br>
![Game Area](/assets/README-files/game-area-flip-two-cards.gif)
    - The game area consists of a div of the site blue colour with embossed edges and rounded corners. A 4 x 4 grid element is contained within this div and holds all 16 of the game cards. 
    - Each game card has two sides, the reverse side and the front side containing the animal pictures.
    - When the user hovers over a card the cursor changes to a pointer. The card is responsively styled to marginally grow along with the border getting slightly thicker using the the hover pseudo element.
    - When an unsuccessful match is made, the cards turn back around and the turn changes to the alternate player.
    - When a successful match is made, a congratualtory message (described below) is displayed and the incumbent player gets another turn.
    - The cards remain turned over revealing the animal pictures after a successful match.
    - The game continues until all animal pairs are matched at which point a game outcome message appears, again described below. <br><br>
- __The Player Information Area__ <br><br>
![Player-Information](/assets/README-files/player-info.gif)
  - The player info div contains two divs showing which player's turn it is and a scores area. The player info updates dynamically once the players turn changes. The scores area contains the player scores and updates on a successful match of animals. In order to draw the users attention here after the site loads or a new game is selected, the elements animate in after a short time delay.<br><br>
- __The Congratulatory Message__ <br><br>
![Congratulatory Message](/assets/README-files/match-animals.gif)
    - As described above, when the user successfully matches two animals they are presented with a congratulatory message. This takes the form of a star to make it visually engaging for children. The animal name is passed into the `<span>` at the end of the congratulatory message.
    - There is also a background div covering the entire view which introduces a blurred effect to slightly obscure the background and create a greater contrast with the star.<br><br>

- __The Game Outcome__ <br><br>
![Game Outcome](/assets/README-files/game-outcome.gif)
   - Once the final pair of animals are successfully matched and the game is completed, an outcome star appears on top of a blurred background div displaying one of three messages depending on the calcualted outcome of the game:
     - *That was close, its a draw!*
     - *Congrats Player 1, you win!*
     - *Congrats Player 2, you win!*
   - After a short time delay, the message on the start changes to *Click below to begin a new game* and a *New Game* button appears.

- __The Footer__ <br><br>
![Footer](/assets/README-files/footer.png)
    - The footer contains links to background and animal images on Freepik per licensing requirement.

### Features Left to Implement
- The optional features identified in the scope phase were not implemented in this iteration of the site due to their complexity and time demands. 
- As a reminder, the features are listed below
  - Voice and/or animal sounds on a successful match.
  - Background music.
  - 1 player game against the computer.
- In future versions of this game I would like to revisit these features and assess the feasiblity of implementing them.

## Testing 
### Development Testing

- __The Game Information Area__
  - The *New Game* button was tested and work correctly by reloading the window.
  - The *How To Play* was tested and opened up the game instructions as expected, with the associated blurred background div also presenting.  <br><br>
- __The Instructions Area__
  - The *New Game* button was tested and worked correctly by hiding the blurred div and instructions area before reloading the window.
  - The *Go Back* was tested and worked as expected by hiding the blurred div and instructions and returning to the game in progress.<br><br>
- __The Game Area__
  - Two cards were selected by clicking on them. They both turned over in the y-axis as expected.
  - When the cursor moved over a card the pointer selector appeared. The cards also responded as per CSS styling to marginally increase in size.
  - In the case of an unsuccessul match, the cards remained in position for a short period before turning back around and hiding the animal images.
  - Attempts to turn over more than two cards were unsuccessful which is the correct behaviour.
  - When a match was made, the cards remained in the position with the animal images facing towards the user and remained that way until the end of the game.<br><br>
- __The Player Information Area__
  - The player number alternated between 1 and 2 correctly throughout the game.
  - The players scores incremented correctly on successful match of animal images.<br><br>
- __The Congratulatory Message__
  - The congrulatory message, star and blurred background div appeared as expected after a successful match of animal images. 
  - The message contained the correct animal name in it.
  - The star and message both animated in and out as expected.<br><br>
- __The Game Outcome__
  - The game outcome star and message appeared as expected at the culmination of the game. 
  - The message accurately represented the outcome of the game.
  - The message changed to the prompt for starting a new game and the *New Game* button appeared.
  - The *New Game* functioned as expected, commencing a new game after hiding the outcome message and blurred background div.<br><br>

### Testing User Stories

### Validator Testing 

- HTML
  - No errors were returned for the page when passing through the official W3C HTML validator:
    ![HTML Validator Results](/assets/README-files/html-validator.jpg)
    
- CSS
  - No errors were returned for the page when passing through the official W3C CSS validator:
    ![HTML Validator Results](/assets/README-files/css-validator.jpg)

- Javascript
  - No errors or warnings were returned 

- Accessibility
  - Accessibility of the pages was checked using the lighthouse tool in devtools with a score within the 95 - 100% bracket for all metrics.
   ![Lighthouse Results](/assets/README-files/lighthouse-results.jpg)
  - The theme colours were also checked against the font colour using [contrast checker](https://webaim.org/resources/contrastchecker/).
  <br><br>
  <table  width = 100% height = 350px cellspacing="0" cellpadding="0">
  <tr>
  <td><img src="assets/README-files/header-contrast-checker-results.jpg" height=300px width=275px></td>
  <td> <img src="assets/README-files/body-elements-contrast-checker-results.jpg" height=300px width=275px></td>
  </tr>
  </table>

  - Images alt text properties were checked using Chrome extension [Alt Text Checker.](https://chrome.google.com/webstore/detail/alt-text-tester/koldhcllpbdfcdpfpbldbicbgddglodk)
  ![Alt Text Checker](/assets/README-files/alt-text-checker.gif)
 

### Bugs / Issues
- __General Issues__
  - 
    <br><br>
- __Home Page Issues__
   - 
   <br><br>

- __Get Started Page Issues__
    - 
    

### Unresolved Bugs or Issues

- 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - Under the repository name, click ⚙ Settings. If you cannot see the "Settings" tab, select the  dropdown menu, then click Settings.
  - In the "Code and automation" section of the sidebar, click  Pages
  - Under "Build and deployment", under "Branch", use the None or Branch dropdown menu and select a publishing source.
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found [here.](https://johnamdickson.github.io/Portfolio-Project-1/index.html)


## Credits 

### Content 

- 


### Media

- The site logo was created using Hatchful, a free logo design service offered by [Shopify.](https://www.shopify.com/tools/logo-maker)
- The site colour scheme pallete was generated using the palette creation tool in [Color Hex.](https://www.color-hex.com/) 
- The site background image is from <a href="https://www.freepik.com/free-vector/wild-animal-cartoon-character-forest-scene_14801768.htm#query=cartoon%20jungle&position=49&from_view=search&track=ais">Freepik.</a>
- Conversion of mp4s to GIFs using free service on the [ezgif.com](https://ezgif.com/video-to-gif) website.
- The colour names were sourced from [Name That Color.](https://chir.ag/projects/name-that-color/)
<br><br>
<a href="#top">BACK TO TOP 🔼</a>
