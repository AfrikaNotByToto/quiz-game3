function compareRes(res, ans) {
    return res.toLowerCase() === ans.toLowerCase();
}

const fs = require('fs');

function massiv() {
  const arr = [];
  const first = fs.readFileSync(
    './topics/nighthawk_flashcard_data.txt',
    'utf-8'
  );
  const arrArray = first.split('\n').filter((str) => str !== '');
  arr.push(arrArray);
  return arr;
}
console.log(massiv());

