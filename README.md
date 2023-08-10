
# Tic Tac Toe Game

This project is a simple implementation of the Tic Tac Toe game using HTML, CSS, and JavaScript. It allows two players to take turns marking X or O on a 3x3 grid until a winner is determined or the game ends in a draw.

## Installation

To run the Tic Tac Toe game, follow these steps:

1. Clone the repository or download the project files.
1. Open the `index.html` file in a web browser.

Alternatively, you can copy the HTML, CSS, and JavaScript code into separate files in your preferred development environment.

## Usage

Once the game is loaded in the web browser, follow these instructions to play:

1. Choose whether you want to play as X or O by clicking the respective button.
1. The game starts with the user's turn.
1. Click on an empty cell in the grid to place your mark (X or O).
1. The turn alternates between the user and the computer.
1. The game will notify you when a player wins or when it ends in a draw.
1. To reset the game, click the reset button (the circular arrow icon).

## Technologies Used

The Tic Tac Toe game project utilizes the following technologies:

- HTML
- CSS
- JavaScript
- Font Awesome (for the reset button icon)

## Game Logic

The JavaScript code in the project handles the game logic. Here are the main functions and variables used:

- Variables:

  - `container`: Represents the container element that holds the game grid.
  - `table`, `tBody`: Elements that create the table structure for the grid.
  - `choices`: Represents the element that displays the choice of symbol (X or O) for the player.
  - `cells`, `rows`: Collections of the individual cells and rows in the grid.
  - `btn`, `btnO`, `btnX`, `btnReset`: Buttons used for symbol choice and game reset.
  - `infoPanel`: Element that displays game information (e.g., current turn, winner).
  - `computer`, `user`: Variables to store the computer's and user's chosen symbols.
  - `userScore`, `computerScore`: Elements that display the scores of the user and computer.
  - `scoreBoard`: Element that represents the score board section.
  - `mq`: Represents a media query for responsive design.
  - `player`: Indicates whose turn it is (either "user" or "computer").
  - `gameOvervariable`: Indicates whether the game is over or not.
  - `winningCombinations`: An array containing all the possible winning combinations on the grid.
  - `board`: Represents the current state of the game board.

- Functions:

  - `hideChoices()`: Hides the choice of symbol (X or O).
  - `showChoices()`: Displays the choice of symbol (X or O).
  - `showScoreBoard()`: Displays the score board.
  - `hideScoreBoard()`: Hides the score board.
  - `removeContent()`: Clears the content from the game grid.
  - `restart()`: Restarts the game by resetting the grid and game variables.
  - `gameOver(winner)`: Handles the game over state, updates the score, and displays the winner or draw message.
  - `checkForWinner()`: Checks if there is a winner based on the current state of the grid.
  - `stateOfBoard()`: Updates the `board` variable with the current state of the game board.
  - `computerPlay()`: Handles the computer's move by selecting an empty cell randomly and updating the grid.
  - `placeUserMove(cell)`: Handles the user's move by placing their symbol in the selected cell and updating the grid.
  - `turn()`: Alternates the turn between the user and the computer.
  - `checkBoard()`: Checks if all cells on the grid have been filled.
  - `generateBoard()`: Generates the initial HTML structure for the game grid.
  - `possibleMoves()`: Returns an array of empty cells on the grid.
  - `minimax(boardState, currentPlayer)`: Implements the minimax algorithm for AI-based moves (not fully implemented).

## Credits

- The Tic Tac Toe game logic and functionality were implemented using JavaScript.
- The Font Awesome library was used to display the reset button icon.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use it for personal or commercial purposes.
