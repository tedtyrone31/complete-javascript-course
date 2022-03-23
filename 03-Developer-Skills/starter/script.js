// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const maxTemp1 = [17, 21, 23];
const maxTemp2 = [12, 5, -5, 0, 4];

// for (let i = 1; i < 4; i++) {
//   const maxTempNumber = Number(prompt(`Input 3 max temperatures`));
//   maxTemp.push(maxTempNumber);
// }

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    let arrIndex = i + Number(1);
    str = str + ` ${arr[i]}°C in ${arrIndex} Days...`;
  }
  return `...${str}`;
};

console.log(printForecast(maxTemp1));
