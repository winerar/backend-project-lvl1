#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ').trim();
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let userLost = false;

  for (let i = 1; i <= 3; i += 1) {
    const number = Math.ceil(Math.random() * 1000);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      userLost = true;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  console.log(userLost ? `Let's try again, ${name}!` : `Congratulations, ${name}!`);
};

playEvenGame();
