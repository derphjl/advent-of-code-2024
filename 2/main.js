import { readFile } from 'node:fs/promises';

console.log('🎅 Advent of Code 2024, Day 2!');

try {
  const inputFileContent = (await readFile('input-example.txt', { encoding: 'utf8' })).trim();
  const reports = inputFileContent.split('\n');
  
  for (let report of reports){
    let reportSafety = 1;
    let digits = report.split(' ').map((a) => parseInt(a));
    console.log(digits);
    //this loop will calculate the distanced for all the "steps"
    let distances = [];
    for (let i = 0 ; i < digits.length - 1 ; i ++) {
      let distance = digits[i+1] - digits[i];
      distances.push(distance);
    }
    //if any of the steps is larger than 3
    if (distances.filter((a) => Math.abs(a) > 3).length > 0){
      reportSafety = 0;
      console.log("Failed for step size, too big!");
    }
    if (distances.filter((a) => Math.abs(a) == 0).length > 0){
      reportSafety = 0;
      console.log("Failed for step size, zero!");
    }
  }
  
  
} catch (error) {
  console.error('there was an error:', error.message);
}
