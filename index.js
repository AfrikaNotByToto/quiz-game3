const rl = require('readline-sync');
const fs = require('fs');
// const chalk = require('chalk');

function getQuestions() {
  const arr = [];
  const files = fs.readdirSync('./topics', 'utf-8');
  for (const file of files) {
    const readfiles = fs.readFileSync(`./topics/${file}`, 'utf-8');
    arr.push(readfiles.split('\n').filter((str) => str !== ''));
  }
  return arr;
}

console.log('Добро пожаловать на  Квиз!\n');
const answer = rl.question('Как тебя зовут?\n');
console.log(`Привет, ${answer}! Давай сыграем в игру!\n`);

console.log('Выбери тему:');
console.log('1. GTA V');
console.log('2. Сумерки');
console.log('3. Теория Большого Взрыва\n');
quize();

function quize() {
  let score = 0;
  let answer = rl.question('Введи номер темы:');
  if (answer < 4 && answer > 0) {
    const questions = getQuestions();
    const quizTopic = questions[answer - 1];
    for (let i = 1; i < quizTopic.length; i += 2) {
      console.log(quizTopic[i - 1]);
      const answer = rl.question('Твой ответ: ');
      if (answer.toLowerCase() === quizTopic[i].toLowerCase()) {
        console.log('Верно!');
        score += 1;
      } else {
        console.log('Ты не прав!');
        console.log('Правильный ответ: ' + quizTopic[i])
      }
    }
    console.log(`Твой результат: ${score}`);
  } else {
    console.log('Такой темы нет. Выбери тему');
    quize();
  }
}
