// 1. Retrieve a card from a stack

function getItem(cards, position) {
    return cards[position];
}

// 2. Exchange a card in the stack

function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards;
}

// 3. Insert a card at the top of the stack

function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
}

// 4. Remove a card from the stack

function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards;
}

// 5. Remove the top card from the stack

function removeItemFromTop(cards) {
    cards.pop();
    return cards;
}

// 6. Insert a card at the bottom of the stack

function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
}

// 7. Remove a card from the bottom of the stack

function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
}

// 8. Check the size of the stack

function checkSizeOfStack(cards, stackSize) {
    var numberOfCards = cards.length;
    return numberOfCards == stackSize;
}
