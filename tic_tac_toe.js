// Variables
const container = document.getElementById("container");
const table = document.createElement("table");
const tBody = document.createElement("tbody");
const choices = document.getElementById("choice");
const cells = document.getElementsByTagName("td");
const rows = document.getElementsByTagName("tr");
const btn = document.querySelectorAll("button");
const btnO = document.getElementById("o-btn");
const btnX = document.getElementById("x-btn");
const btnReset = document.getElementById("reset");
const infoPanel=document.getElementById('info-panel')
let computer = "";
let user = "";
let userScore = document.getElementById("yourScore");
let computerScore = document.getElementById("compScore");
const scoreBoard = document.getElementById("scoreBoard");
const mq = window.matchMedia("(max-width: 700px)");
let player='user';
let gameOvervariable = false;

// Winning combinations
const winningCombinations = [
  ["0,0", "0,1", "0,2"],
  ["1,0", "1,1", "1,2"],
  ["2,0", "2,1", "2,2"],
  ["0,0", "1,0", "2,0"],
  ["0,1", "1,1", "2,1"],
  ["0,2", "1,2", "2,2"],
  ["0,0", "1,1", "2,2"],
  ["0,2", "1,1", "2,0"],
];

//state of board
let board = [
];


// Functions

// Function to hide choice of symbol
const hideChoices = () => {
  choices.style.display = "none";
};

// Function to display choice of symbol
const showChoices = () => {
  choices.style.display = "block";
};

// Function to show score
const showScoreBoard = () => {
  scoreBoard.style.display = "flex";
};

// Function to hide score
const hideScoreBoard = () => {
  scoreBoard.style.display = "none";
};

// Function to remove content from the board
const removeContent = () => {
  for (let cell of cells) {
    cell.textContent = "";
  }
};

// Function to restart game
const restart = () => {
  gameOvervariable = false;
 removeContent()
 setTimeout(() => {
  infoPanel.innerHTML = 'User Starts';
}, 1000);
 player='user';

};

// function to change the ui according to the winner
  const gameOver = (winner) => {
    gameOvervariable = true;
    switch (winner) {
      case 'user':
        infoPanel.innerHTML = 'User wins';
        userScore.innerText = parseInt(userScore.innerText) + 1;
        break;
      case 'computer':
        infoPanel.innerHTML = 'Computer wins';
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        break;
      case 'draw':
        infoPanel.innerHTML = "It's a draw";
        break;
    }
   
   setTimeout(restart,1000)
  };
  


// Function to check for a winner
const checkForWinner = () => {
 
  for (let win of winningCombinations) {
    const [a, b, c] = win;

    const td1 = Array.from(cells).find((td) => td.getAttribute("dataIdx") === `[${a}]`);
    const td2 = Array.from(cells).find((td) => td.getAttribute("dataIdx") === `[${b}]`);
    const td3 = Array.from(cells).find((td) => td.getAttribute("dataIdx") === `[${c}]`);

    if (td1.textContent === user && td2.textContent === user && td3.textContent === user) {
      return 'user';
    } else if (td1.textContent === computer && td2.textContent === computer && td3.textContent === computer) {
      return 'computer';
    }
  }

  if (checkBoard()) {
    return 'draw';
  }

  return null;
};

// function to insert the state of the table into the board variable
 
  const stateOfBoard = () => {
    board = []; // Clear the board array before populating it
  
    for (let row of rows) {
      const rowData = [];

      //check the tds of the row
      const rowCells = row.querySelectorAll("td");
      
      for (let cell of rowCells) {
        rowData.push(cell.textContent);
      }
      
      board.push(rowData);
    }
  //  console.log(board);
  };
  
  

// Function for the computer's move
const computerPlay = () => {
 // console.log("Computer move made!");
   // Array of empty cells
  let emptyCells = possibleMoves()
  for (let cell of cells) {
    if (!cell.innerHTML.trim()) {
      emptyCells.push(cell);
    }
  }

  if (emptyCells.length !== 0) {
    const position = Math.floor(Math.random() * emptyCells.length);
    const cp = emptyCells[position];
    cp.innerHTML = computer;
    emptyCells.splice(position, 1);
    const winner = checkForWinner();
    if (winner) {
      gameOver(winner);
    }
  }
  
 }
 
 

// Function to place the user's move on the board
const placeUserMove = (cell) => {
  if (gameOvervariable) return;
  if (user !== "" && !checkBoard()) {
    cell.textContent = user;
    turn();

    // Check for a winner after user's move
    const winner = checkForWinner();
    if (winner) {
      gameOver(winner);
      return
    } else {
      computerPlay();
    }
  }
};


// Function to alternate turns
const turn = () => {
 
 
    if (player === 'user') {
      player = 'computer';
  
    } else {
      player = 'user';
    }
  }


// Function to check if all cells have content
const checkBoard = () => {
  for (let cell of cells) {
    if (!cell.innerHTML.trim()) {
      return false;
    
    }
  }
//console.log('all tds have content')
  return true;
};

// Generate board
const generateBoard = () => {
  for (let j = 0; j < 3; j++) {
    const row = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
      const cell = document.createElement("td");
      cell.setAttribute("dataIdx", `[${j},${i}]`);
      row.appendChild(cell);
    }
    tBody.appendChild(row);
  }
  table.appendChild(tBody);
  container.appendChild(table);
};

//function to get available moves
const possibleMoves = () => {
  let possibilities=[];
  for (let cell of cells) {
    if (!cell.innerHTML.trim()) {
      possibilities.push(cell)
    
    }
  }
return possibilities;
};

//minimax function
const minimax = (boardState,currentPlayer) =>{
  let bestScore = -Infinity;
if(checkForWinner() === 'user'){
  score=-1
} else if(checkForWinner() === 'computer'){
  score=1
}else if(checkForWinner() === 'draw'){
  score=0
}
}


// Event listeners

// Event listener for the 'O' button
btnO.addEventListener("click", function () {
  user = this.value;
  computer = btnX.value;
  setTimeout(hideChoices, 600);
  btnX.disabled = true;
  if (mq.matches) {
    setTimeout(showScoreBoard, 600);
  }
});

// Event listener for the 'X' button
btnX.addEventListener("click", function () {
  user = this.value;
  computer = btnO.value;
  setTimeout(hideChoices, 600);
  btnO.disabled = true;
  if (mq.matches) {
    setTimeout(showScoreBoard, 600);
  }
});

// Reset button event listener
btnReset.addEventListener("click", function () {
  user = "";
  computer = "";
  removeContent();
  btnX.disabled = false;
  btnO.disabled = false;
  userScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  player='user';
  if (mq.matches) {
    hideScoreBoard();
  }
  showChoices();
});

// Add event listener to listen for clicks on the table and check if it's a cell
table.addEventListener("click", (event) => {
  const target = event.target;
  
  // Check if the clicked element is a cell
  if (target.tagName === "TD" ) {
    if (user !== "" && target.innerHTML === "") {
      placeUserMove(target);
    }
  }

 
});

generateBoard();
