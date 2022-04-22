# 💰 Freelancer Rates 

## 📝 INSTRUCTIONS

In this exercise you will be writing code to help a freelancer communicate with his clients about the prices of certain projects. You will write a few utility functions to quickly calculate the costs for the clients.


## 1. Calculate the day rate given an hourly rate:
A client contacts the freelancer to enquire about his rates. The freelancer explains that he works _**8 hours a day**_. However, the freelancer knows only his hourly rates for the project. Help him estimate a day rate given an hourly rate. 
```swift
function dayRate(ratePerHour) {
    return ratePerHour * 8;
}
```

## 2. Calculate the number of workdays given a fixed budget:
 Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help him calculate the number of days he would work until the budget is exhausted. The result must be **rounded down** to the nearest whole number. 
```swift
function daysInBudget(budget, ratePerHour) {
    var days = budget / dayRate(ratePerHour);
    return Math.floor(days);
}
```
## 3. Calculate the discounted rate for large projects:

 Often, the freelancer's clients hire him for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. _**Every month has 22 billable days.**_ Help him estimate his cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, where `42%` becomes `0.42`. The result must be rounded up to the nearest whole number.
```swift
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
```