'use strict';

function max(numbers) {
    let counter = 0;
    let currentMax = 0;
    while (counter < numbers.length) {
        if (numbers[counter] > numbers[currentMax]) {
            currentMax = counter;
        }
        counter++;
    }
    return numbers[currentMax];
}

function min(numbers) {
    let counter = 0;
    let currentMin = 0;
    while (counter < numbers.length) {
        if (numbers[counter] < numbers[currentMin]) {
            currentMin = counter;
        }
        counter++;
    }
    return numbers[currentMin];
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  } else {
    console.log(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function testEmpty(fn) {
  if (fn([]) === null || fn([]) == undefined) {
    console.log(`SUCCESS: ${fn.name} works on empty arrays`);
    return true;
  } else {
    console.log(
      `FAILURE: ${fn.name} should return undefined or null for empty arrays`
    );
    return false;
  }
}

(function runTests() {
  // we'll use the variables in our test cases
  const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  const realMin1 = numList1[3];
  const realMax1 = numList1[6];
  const numList2 = [0, 1, 2, 3, 4];
  const realMin2 = numList2[0];
  const realMax2 = numList2[4];

  const testResults = [
    testFunctionWorks(max, numList1, realMax1),
    testFunctionWorks(max, numList2, realMax2),
    testFunctionWorks(min, numList1, realMin1),
    testFunctionWorks(min, numList2, realMin2),
    testEmpty(max),
    testEmpty(min),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();
