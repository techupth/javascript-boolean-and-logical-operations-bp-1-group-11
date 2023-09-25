// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001 > 4000;
let isWeekday = true;
let hasNotBoughtProductFromITCategory = true;
let hasNotAttendedDiscountEvent = false;
let isPlatinum = false;

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && hasNotBoughtProductFromITCategory && hasNotAttendedDiscountEvent) || isPlatinum


console.log(hasPromotion);
