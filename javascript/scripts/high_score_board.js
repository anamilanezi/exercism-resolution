
// 1. Create a new high score board

function createScoreBoard() {
    const scoreBoard = {
    'The Best Ever': 1000000, 
    }
    return scoreBoard;
}

// 2. Add players to a score board

function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard;
}
console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373))

// 3. Remove players from a score board


function removePlayer(scoreBoard, player) {
    if(scoreBoard.hasOwnProperty(player)) {
        delete scoreBoard[player];
    }
    return scoreBoard;
}

// 4. Increase a player's score


function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;
    return scoreBoard 
}

// 5. Apply Monday bonus points


function applyMondayBonus(scoreBoard) {
    for(let name in scoreBoard) {
        updateScore(scoreBoard, name, 100)
    } 
    return scoreBoard;
}

// 6. Normalize a high score

function normalizeScore(params) {
}