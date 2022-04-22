// Get the first letter of a sentence:

function frontDoorResponse(line) {
    return line[0];
}

// Capitalize a word

function frontDoorPassword(word) {
    var lowerCaseWord = word.toLowerCase()
    return word[0] + lowerCaseWord.slice(1);
}

// Get the last letter of a sentence:

function backDoorResponse(line) {
    var trimLine = line.trim();
    var lastChar = trimLine.length - 1
    return trimLine[lastChar];
}

// Be polite:

function backDoorPassword(word) {
    var upCaseChar = word[0].toUpperCase()
    return upCaseChar + word.slice(1) + ', please';
}