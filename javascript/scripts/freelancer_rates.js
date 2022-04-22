// INSTRUCTIONS
// Calculate the day rate given an hourly rate:


function dayRate(ratePerHour) {
    return ratePerHour * 8;
}

// Calculate the number of workdays given a fixed budget:


function daysInBudget(budget, ratePerHour) {
    var days = budget / dayRate(ratePerHour);
    return Math.floor(days);
}

// Calculate the discounted rate for large projects:



function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    var billableDays = 22;
    var monthsOfWork = Math.floor(numDays / billableDays);
    var remainingDays = Math.floor(numDays % billableDays);
    var remainingCost = remainingDays * dayRate(ratePerHour);
    var fullMonthCost = billableDays * dayRate(ratePerHour);
    var totalWithoutDiscount = fullMonthCost * monthsOfWork;
    var totalDiscount = totalWithoutDiscount * discount;

    var finalCost = (totalWithoutDiscount - totalDiscount) + remainingCost;

    return Math.ceil(finalCost);
}