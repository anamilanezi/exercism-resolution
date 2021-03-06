# 📜 POETRY CLUB DOOR POLICY

## 📝 INSTRUCTIONS

 A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents in the past, the club has a very specific door policy which you'll need to master, before attempting entry.

There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, you'll need to work out the password of the day. The details of the process depend on which door you are trying to enter. 

## 1. Get the first letter of a sentence:
 To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you. To end up with a nice password, the members of the poetry club like to use acrostic poems. This means that the first letter of each sentence forms a word. Here is an example by one of their favorite writers Michael Lockwood. 
```swift
function frontDoorResponse(line) {
    return line[0];
}
```

## 2. Capitalize a word
Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize the word.  Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized. 
```swift

function frontDoorPassword(word) {
    var lowerCaseWord = word.toLowerCase()
    return word[0] + lowerCaseWord.slice(1);
}
```

## 3. Get the last letter of a sentence:
To determine letters for the back door password, you need to respond with the last letter of the line of the poem that the guard recites to you. The members of the poetry club are really clever. The poem mentioned before is also telestich, which means that the last letter of each sentence also forms a word. Implement the function backDoorResponse that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character. 

```swift
function backDoorResponse(line) {
    var trimLine = line.trim();
    var lastChar = trimLine.length - 1
    return trimLine[lastChar];
}
```

## 4. Be polite:
To enter the poetry club via the back door, you need to be extra polite. So to derive the password, this time you need to correctly capitalize the word and add ', please' at the end. Implement the function backDoorPassword that accepts a string (the combined letters you found in task 3) and returns the polite version of the capitalized password. 

```swift
function backDoorPassword(word) {
    var upCaseChar = word[0].toUpperCase()
    return upCaseChar + word.slice(1) + ', please';
}
```