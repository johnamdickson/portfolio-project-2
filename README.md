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
    - [Essential Content](#essential-content)
    - [Optional Content](#optional-content)
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
  - [Validator Testing](#validator-testing)
  - [Bugs / Issues](#bugs--issues)
  - [Unresolved Bugs / Issues](#unresolved-bugs-or-issues)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)




## UX
### Strategy
The objective of the site is to create a two player memory card game directed towards young children and their parents. 
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
- The site will have audible effects or descriptions for each animal when the cards are turned over and matched. <br><br>
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
- The site colours are based around three strong colours as shown in the palette. 
- The colours were chosen to create a striking contrast, especially between the Confettie and Biscay colours.
- Another consideration was to have colours that stood out agains the background image. <br><br>
#### Imagery
![Background Image](/assets/images/jungle.jpg)
- The background image was selcted to again cater for the visual needs of children and as a way of introducing them and other users to the game.<br><br>
#### Logo
![Site Logo](/assets/README-files/logo.png)
- The choice of site logo was based upon one that would be fun and engaging for children and have an immediate connection with the content. <br><br>
#### Typography
- All fonts were sourced from Google Fonts. The main font used throughout is called 'Love Ya Like A Sister' which was selected for it's fun characteristics that children can relate too even if they cannot read. Raleway was selected for button font to make it stand out to adults who will normally be controlling the game.<br><br>

## Features 

### Existing Features

- __The Game Information Area__ <br><br>
![Game-Information](assets/README-files/game-information.png)

  - The game information div contains an `<h2>` welcome message and short `<p>` giving an overview of the game. There are two buttons at the bottom of the div -  *New Game* and *How To Play*. The former button gives the option to restart the game whilst the latter directs the user to an instructions div described below. The buttons are styled to have an embossed look using inset box shadows along with an outset shadow. The buttons have mousedown and mouseup event listeners where the mousedown removes the outset shadow and the mouseup returns the styling to normal. This creates the impression of the button being pressed and springing back to position once released.<br><br>
- __The Game Instructions__ <br><br>
![Game-Instructions](/assets/README-files/game-instructions.jpg) 

  - When the *How To Play* button is pressed two divs  - blurred and instructions - are made visible from their default hidden property. The blurred div covers the entire screen and creates a visual effect that accentuates the instructions div and contents and helps create a contrast against the backdrop of the game. The instructions div contains an `<ol>` of instructions followed by *New Game* and *Go Back* buttons. The former button completes the same action as its namesake described in Game Information above, whilst the latter returns the user to the current game. Both buttons return the two divs to their default visibility status of hidden.<br><br>

- __The Player Information Area__ <br><br>
![Player-Information](/assets/README-files/player-info.gif)
  - The player info div contains two divs showing which player's turn it is and a scores area. The player info updates dynamically once the players turn changes. The scores area contains the player scores and updates on a successful match of animals. In order to draw the users attention here after the site loads or a new game is selected, the elements animate in after a short time delay.<br><br>
- __The Game Area__ <br><br>
![Game Area](/assets/README-files/game-area-flip-two-cards.gif)
    - The game area consists of a div of the site blue colour with embossed edges and rounded corners. A 4 x 4 grid element is contained within this div and holds all 16 of the game cards. 
    - Each game card has two sides, the reverse side and the front side containing the animal pictures.
    - When the user hovers over a card the cursor changes to a pointer. The card is responsively styled to marginally grow along with the border getting slightly thicker using the the hover pseudo element.
    - When an unsuccessful match is made, the cards turn back around and the turn changes to the alternate player.
    - When a successful match is made, a congratualtory message (described below) is displayed and the incumbent player gets another turn.
    - The cards remain turned over revealing the animal pictures after a successful match.
    - The game continues until all animal pairs are matched at which point a game outcome message appears, again described below. <br><br>

- __The Congratulatory Message__ <br><br>
![Congratulatory Message](/assets/README-files/match-animals.gif)
    - As described above, when the user successfully matches two animals they are presented with a congratulatory message. This takes the form of a star to make it visually engaging for children. The animal name is passed into the `<span>` at the end of the congratulatory message.
    - There is also a background div covering the entire view which introduces a blurred effect to slightly obscure the background and create a greater contrast with the star.<br><br>

- __The Game Outcome__ <br><br>
![Game Outcome](/assets/README-files/game-outcome.gif)
   - Once the final pair of animals are successfully matched, an outcome star.

  - 
- __The Footer__ <br><br>
![Footer](/assets/README-files/footer.jpg)
    - Add detail here.

### Features Left to Implement
- 

## Testing 
### Development Testing

- __Home Page__

  - 
<br><br>

- __Get Started Page__
  - 


<br><br>


### Validator Testing 

- HTML
  - No errors were returned for the page when passing through the official W3C HTML validator:
    ![HTML Validator Results](/assets/README-files/html-validator.jpg)
    
- CSS
  - No errors were returned for the page when passing through the official W3C CSS validator:
    ![HTML Validator Results](/assets/README-files/css-validator.jpg)

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
  ![Alt Text Checker](/assets/README-files/alt-text-tester.png)
 

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
<br><br>
<a href="#top">BACK TO TOP 🔼</a>
