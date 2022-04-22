
// Determine how long it takes to mix a juice

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

// Replenish the lime wedge supply

function limesToCut(wedgesNeeded, limes) {

    var wedgesCutted = 0;
    var cuttedLimes = 0;

    if(wedgesNeeded === 0 || limes.length === 0) {
        return 0;
    }

    while (wedgesCutted < wedgesNeeded && limes.length > 0) {
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
var limes =['small', 'large', 'large', 'medium','small','large','large',];

console.log(limesToCut(wedgesNeeded, limes));

// Finish up the shift

function remainingOrders(timeLeft, orders) {
    do {
        timeLeft -= timeToMixJuice(orders.shift())
    } while (timeLeft > 0);
    return orders;
}

console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))
// => ['Green Garden']