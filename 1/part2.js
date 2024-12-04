import { readFile } from 'node:fs/promises';

console.log('🎅 Advent of Code 2024, Day 1!\n');

try {
  const inputFileContent = (await readFile('input-example.txt', { encoding: 'utf8' })).trim();
  const inputFileLines = inputFileContent.split('\n');

  let leftList = [];
  let rightList = [];

  //fill the lists!
  for (let line of inputFileLines) {
    const leftInteger = line.match(/^\d+?(?=\ )/g);
    const rightInteger = line.match(/\d+?$/g);

    leftList.push(leftInteger);
    rightList.push(rightInteger);
  }

console.log("LeftList");
console.log(leftList);
console.log("Right List");
console.log(rightList);

  
} catch (error) {
  console.error('there was an error:', error.message);
}
