#!/usr/bin/env node
import * as brainUtils from '../src/brain-utils.js';

const playGame = () => {
  brainUtils.showGreeting();

  const playerName = brainUtils.getPlayerName();

  console.log('What is the result of the expression?');

  let playerLost = false;

  const questionsCount = 3;
  for (let i = 1; i <= questionsCount; i += 1) {
    const number1 = Math.ceil(Math.random() * 20);
    const number2 = Math.ceil(Math.random() * 10);
    const operation = Math.ceil(Math.random() * 10) % 3;

    let correctAnswer;
    let operator;
    switch (operation) {
      case 0: correctAnswer = String(number1 + number2); operator = '+'; break;
      case 1: correctAnswer = String(number1 - number2); operator = '-'; break;
      case 2: correctAnswer = String(number1 * number2); operator = '*'; break;
      default: correctAnswer = 'Error! Operation is not defined';
    }

    console.log(`Question: ${number1} ${operator} ${number2}`);
    playerLost = !brainUtils.checkPlayerAnswer(correctAnswer);
    if (playerLost) {
      break;
    }
  }
  brainUtils.showResult(playerName, playerLost);
};

playGame();
