import { readFile } from 'node:fs/promises';

console.log('🎅 Advent of Code 2024, Day 1!\n');

try {
  const inputFileContent = (await readFile('input.txt', { encoding: 'utf8' })).trim();
  const inputFileLines = inputFileContent.split('\n');
  
  //this loop fetches the integers of the left and right list and puts them in an array
  let leftList = [];
  let rightList = [];
  for (let line of inputFileLines) {
    const leftInteger = parseInt(line.match(/^\d+?(?=\ )/g)[0]);
    const rightInteger = parseInt(line.match(/\d+?$/g)[0]);
    leftList.push(leftInteger);
    rightList.push(rightInteger);
  }
  
  //this loop checks for every iterm in the left list: how often does it appear in the right list and does the required maths
  let runningValue = 0;
  for (let leftListItem of leftList) {
    let leftListItemQuantity = rightList.filter((a) => a == leftListItem).length;
    runningValue += ( leftListItem * leftListItemQuantity );
  }

  console.log(runningValue);

} catch (error) {
  console.error('there was an error:', error.message);
}
