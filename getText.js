const rl = require('readline');
const fs = require('fs');

console.log('Добро пожаловать на  Квиз!\n');
rl.question('Как тебя зовут?', (answer) => {
  console.log(`Привет, ${answer}! Давай сыграем в игру!\n`);
});
console.log('Выбери тему:');
console.log('1. название');
console.log('2. название');
console.log('3. название\n');
rl.question('Введи номер темы:', (answer) => {
  switch (answer) {
    case '1':
      массив с темами[answer -1];
      for (let i = 0; i < длина; i += 1) {
        rl.question('Твои ответ:', (answer) => {
          сравнение и подсчет очков
        })
      }
      break;
    case '2':
      массив с темами[answer -1];
      for (let i = 0; i < длина; i += 1) {
        rl.question('Твои ответ:', (answer) => {
          сравнение и подсчет очков
        })
      }
      break;
    case '3':
      массив с темами[answer -1];
      for (let i = 0; i < длина; i += 1) {
        rl.question('Твои ответ:', (answer) => {
          сравнение и подсчет очков
        })
      }
      break;
    default:
      console.log('Ошибка ввода! Попробуй ещё раз!');
  }
});
