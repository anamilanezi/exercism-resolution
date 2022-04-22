# 🧙‍♀️ Elyses Enchantments

## 📝 INSTRUCTIONS

As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers. The position of a certain card corresponds to the index in the array. That means position 0 refers to the first card, position 1 to the second card etc.

## 1. Retrieve a card from a stack
To pick a card, return the card at index `position` from the given stack.

```swift
function getItem(cards, position) {
  return cards[position];
}

```

## 2. Exchange a card in the stack
Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.

```swift
function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}
```

## 3. Insert a card at the top of the stack
Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.
```swift
function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}
```

## 4. Remove a card from the stack
Make a card disappear by removing the card at the given `position` from the stack. Return the adjusted stack.
```swift
function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}
```

## 5. Remove the top card from the stack
Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.
```swift
function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}
```

## 6. Insert a card at the bottom of the stack
Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.
```swift
function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}
```

## 7. Remove a card from the bottom of the stack
Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.
```swift
function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}
```

## 8. Check the size of the stack
Check whether the size of the stack is equal to `stackSize` or not.
```swift
function checkSizeOfStack(cards, stackSize) {
  var numberOfCards = cards.length;
  return numberOfCards == stackSize;
}
```