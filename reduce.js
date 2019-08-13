'use strict';

const secretMessage = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const secretMessageArray = secretMessage.split(' ');
//console.log(secretMessageArray);

console.log(secretMessageArray.reduce((acc, cv) => {
  if (cv.length === 3) {
    acc += ' ';
  } else {
    acc += cv[cv.length - 1].toUpperCase();
  }
  return acc;
}, ''));