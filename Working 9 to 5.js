//Write a function that calculates overtime and pay associated with overtime. 
// - Working 9 to 5: regular hours 
// - After 5pm is overtime 

// Your function gets an array with 4 values: 
// - Start of working day, in decimal format, (24-hour day notation) 
// - End of working day. (Same format) 
// - Hourly rate 
// - Overtime multiplier 

// Your function should spit out: 
// - $ + earned that day (rounded to the nearest hundredth)


function dayPayment(arr) {
    const startDay = arr[0]; // start day
    const endDay = arr[1]; // end day
    const rate = arr[2]; // hourly rate
    const multiplier = arr[3]; // overtime multiplier
  
    let totalPay = 0;
    for (let i = startDay; i < endDay; i++) {
      if (i < 17) {
        totalPay += rate;
      } else {
        totalPay += rate * multiplier;
      }
    }
  
    return totalPay;
    
  }
  console.log(dayPayment([9, 17, 30, 1.5]));
  console.log(dayPayment([16, 18, 30, 1.8]));
  console.log(dayPayment([13.25, 15, 30, 1.5]));
  console.log(dayPayment([10, 14, 10, 1]));