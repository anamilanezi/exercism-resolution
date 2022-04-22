//  INSTRUCTIONS
/* Your friend Li Mei runs a juice bar where she sells delicious mixed fruit juices. You are a frequent customer in her shop and realized you could make your friend's life easier. You decide to use your coding skills to help Li Mei with her job.*/

// Determine how long it takes to mix a juice

/*Li Mei likes to tell her customers in advance how long they have to wait for a juice from the menu that they ordered. She has a hard time remembering the exact numbers because the time it takes to mix the juices varies. 'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 1.5 minutes each, 'Tropical Island' takes 3 minutes and 'All or Nothing' takes 5 minutes. For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.

To help your friend, write a function timeToMixJuice that takes a juice from the menu as an argument and returns the number of minutes it takes to mix that drink.*/

function timeToMixJuice(name) {
    switch(name) {
    case 'Pure Strawberry Joy':
        return 0.5;
    case 'Energizer':
        return 1.5;
    case 'Green Garden':
        return 1.5;
    case 'Tropical Island':
        return 3;
    case 'All or Nothing':
        return 5;
    default:
        return 2.5;
    }
}

// console.log(timeToMixJuice('Pure Strawberry Joy'))

// Replenish the lime wedge supply
/* A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration. So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.

Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing the supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. She always cuts the limes in the order in which they appear in the list, starting with the first item. She keeps going until she reached the number of wedges that she needs or until she runs out of limes.

Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function should return the number of limes to cut.*/

function limesToCut(wedgesNeeded, limes) {

    var wedgesCutted = 0;
    var cuttedLimes = 0;

    if(wedgesNeeded === 0 || limes.length === 0) {
        return 0;
    }

    while (wedgesCutted < wedgesNeeded) {
        var lime = limes.shift()
        
        if(lime === 'small') {
            wedgesCutted += 6;
            cuttedLimes++;
        } else if (lime === 'medium') {
            wedgesCutted += 6;
            cuttedLimes++;
        } else {
            wedgesCutted += 10;
            cuttedLimes++;
        }
    } 
    return cuttedLimes
}

var wedgesNeeded = 42;
var limes =[
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',];

console.log(limesToCut(wedgesNeeded, limes));