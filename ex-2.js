// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001 > 4000;
let isWeekday = true;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent = false;
let isPlatinum = false;

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && hasBoughtProductFromITCategory && hasAttendedDiscountEvent) || isPlatinum


console.log(hasPromotion);
