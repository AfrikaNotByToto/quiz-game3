const rl = require('readline-sync');
const fs = require('fs');

function getTopics() {
  const topics = [];
  const files = fs.readdirSync('./topics', 'utf-8');
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const readfiles = fs.readFileSync(`./topics/${file}`, 'utf-8');
    topics.push(readfiles.split('\n').filter((str) => str !== ''));
  }
  return topics;
}

console.log('Добро пожаловать на  Квиз!\n');
const userName = rl.question('Как тебя зовут? ');
console.log(`Привет, ${userName}! Давай сыграем в игру!\n`);
console.log('Выбери тему: ');
console.log('1. GTA V');
console.log('2. Сумерки');
console.log('3. Теория большого взрыва\n');
const topics = getTopics();
console.log(topics);
const index = rl.question('Введи номер темы: ');
const quizTopic = topics[index - 1];
for (let i = 1; i < quizTopic.length; i += 2) {
  console.log(quizTopic[i - 1]);
  const answer = rl.question('Твои ответ: ');
  if (answer.toLowerCase() === quizTopic[i].toLowerCase()) console.log('Верно!');
  else console.log('Ты не прав!');
}
