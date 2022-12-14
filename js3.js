let now = new Date();
console.log(now);

let dt = new Date(1000);
console.log(dt);

let new_Date = new Date("2029-09-30");
console.log(new_Date)

// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let new__Date = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(new_Date);

let yr = new_Date.getFullYear();
console.log("The year is ", yr);

let dat = new_Date.getDate();
console.log("The date is ", dat);

let month = new_Date.getMonth();
console.log("The month is ", month);

let hours = new_Date.getHours();
console.log("The hours is ", hours);

newDate.setDate(8);
newDate.setMinutes(29);
console.log(new_Date)