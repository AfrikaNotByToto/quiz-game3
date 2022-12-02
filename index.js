function compareRes(res, ans) {
    return res.toLowerCase() === ans.toLowerCase();
}

const fs = require('fs');

function massiv() {
  const arr = [];
  const files = fs.readdirSync('./topics', 'utf-8');
  for (const file of files) {
    const readfiles = fs.readFileSync(`./topics/${file}`, 'utf-8');
    arr.push(readfiles.split('\n').filter((str) => str !== ''));
  }
  return arr;
}

console.log(massiv());

