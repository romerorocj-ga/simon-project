## Simon
Game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order. It's fast-paced play, with lights and sounds that can challenge you. Experience the fun as you repeat the patterns and advance to higher levels.

## Technologies Used

- HTML
- CSS
- Javascript

## Getting Started
- Link to game:

- Instructions
 - Get ready to watch, remember, repeat! 
 - players must repeat random sequences of lights by pressing the colored pads in the correct order.
 - fast-paced play, with lights and sounds that can challenge you.
 - repeat the patterns and advance to higher levels


- As a user
    - I want to be able to click all four colors
    - I want to be able to click the start button
    - I want to able to see what color I need to follow and select
    - I want to be able to win if I pass all five levels
    - I want to know if I won
    - I want to be able to experince each level harder


## Pseudocode

-  Four different buttons, with a unique color and sound which is activated when pressed
- Round begins when the game activates one or more tiles in a random order and ends when the player reproduces the order by pressing the tiles
- The game ends if the player misses a step in the sequence.

- State Variables
    - game board is 1 big array that holds 4 smaller arrays
    - turn - player 1 = 1
    - winner - null || 1

- Cache DOM ELments
    - Buttons for each color
    - start button
    - Play Again button

- Upon loading the app
    - Intialze all state variables
        - create the array of 4 nested arrays
        - turn variable should be set to 1 for Player One
        - winner should be null
    - Render changes to the DOM
        - render the board of the game
        - render the four colors on each corner of circle
        - do not render play again button 
    - wait for player interaction
    
- Handle a player clicking the start button

- Handle a player selecting the the colored buttons to follow the sequence

- Check for Winner if beats all levels


## Design and Asthetics of the app

-  I want it be clean
-  I want it to have red, yellow, green and blue buttons that light up
- the game exists on a circle with shapes in it the player will be selecting
- makes sounds each time it switches colors


## Wireframe

![Alt text](wireframe.png)