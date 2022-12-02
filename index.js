const rl = require("readline-sync");
const fs = require("fs");

// function massiv() {
//   const arr = [];
//   const files = fs.readdirSync("./topics", "utf-8");
//   for (const file of files) {
//     const readfiles = fs.readFileSync(`./topics/${file}`, "utf-8");
//     arr.push(readfiles.split("\n").filter((str) => str !== ""));
//   }
//   return arr;
// }

// console.log(massiv());

// function compareRes(res, ans) {
//   return res.toLowerCase() === ans.toLowerCase();
// }

console.log("Добро пожаловать на  Квиз!\n");
const answer = rl.question("Как тебя зовут?\n") 
console.log(`Привет, ${answer}! Давай сыграем в игру!\n`);

console.log("Выбери тему:");
console.log("1. Сумерки");
console.log("2. GTA V");
console.log("3. Теория Большого Взрыва\n");
quize();
// rl.question("Введи номер темы:", (answer) => {
function quize() {
  let answer = rl.question("Введи номер темы:");
  if (answer === "1") {
    const file = fs.readFileSync("topics/сумерки.txt", "utf-8");
    let arr = file.split("\n").filter((str) => str !== "");
    for (let i = 0; i < arr.length; i += 2) {
      const res = rl.question(`${arr[i]}\n`);
      
    //   console.log(res);
    //   console.log(arr[i + 1]);
      if (res.toLowerCase() === arr[i + 1].toLowerCase()) {
        console.log("ok");
      } else console.log("fuck u. right answer: " + arr[i + 1]) 
      console.log();
    }
  }
  //   const topics = massiv();
  //   switch (answer) {
  // case "1":

  //   console.log(topics[answer - 1]);
  //   for (let i = 0; i < topics[answer - 1].length; i += 1) {
  //     rl.question("Твой ответ:", (answer) => {
  //       if (res.toLowerCase() === answer.toLowerCase()) {
  //         console.log("ok");
  //       } else console.log("fuck u");
  //     });
  //   }
  //   break;
  // case '2':
  //   topics[answer -1];
  //   for (let i = 0; i < topics.length; i += 1) {

  //     rl.question('Твои ответ:', (answer) => {
  //       сравнение и подсчет очков
  //     })
  //   }
  //   break;
  // case '3':
  //   topics[answer -1];
  //   for (let i = 0; i < topics.length; i += 1) {
  //     rl.question('Твои ответ:', (answer) => {
  //       сравнение и подсчет очков
  //     })
  //   }
  //   break;
  // default:
  //   console.log("Ошибка ввода! Попробуй ещё раз!");
  //   }
  // });
}
