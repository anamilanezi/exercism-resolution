// 1. Determine the total number of birds that you counted so far
function totalBirdCount(birdsPerDay) {
    var total = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];    
    } return total;
}
// 2. Calculate the number of visiting birds in a specific week
function birdsInWeek(birdsPerDay, week) {
    var i = 7 * (week - 1);
    var count = i + 6;
    var totalBirds = 0;
    while (i <= count) {
        totalBirds += birdsPerDay[i];
        i++;
    } return totalBirds;
}

// 3. Fix a counting mistake
function fixBirdCountLog(birdsPerDay) {
    for(var i = 0; i < birdsPerDay.length; i += 2) {
        birdsPerDay[i] += 1; 
    } 
    return birdsPerDay;
}