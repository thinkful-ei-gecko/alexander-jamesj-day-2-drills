'use strict';

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return (location) => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);        
    }
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const sleetWarning = hazardWarningCreator('Sleet is Falling');

//Rock Warnings
console.log(rocksWarning('Texas'));
console.log(rocksWarning('Minnesota'));

//Ice Warnings
console.log(iceWarning('Hawaii'));
console.log(iceWarning('Pripyat'));

//Sleet
console.log(sleetWarning('Tokyo'));
console.log(sleetWarning('Panama'));