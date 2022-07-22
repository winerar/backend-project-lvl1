#!/usr/bin/env node
import * as brain from '../../src/index.js';

const playCalcGame = () => {
  brain.showGreeting();

  const playerName = brain.getPlayerName();

  console.log('What is the result of the expression?');

  let playerLost = false;

  for (let i = 1; i <= brain.maxRoundsCount; i += 1) {
    const number1 = brain.getRandomNumber(50);
    const number2 = brain.getRandomNumber(50);
    const operation = brain.getRandomNumber(3);

    let correctAnswer;
    let operator;
    switch (operation) {
      case 0: correctAnswer = String(number1 + number2); operator = '+'; break;
      case 1: correctAnswer = String(number1 - number2); operator = '-'; break;
      case 2: correctAnswer = String(number1 * number2); operator = '*'; break;
      default: correctAnswer = 'Error! Operation is not defined';
    }

    console.log(`Question: ${number1} ${operator} ${number2}`);
    playerLost = !brain.checkPlayerAnswer(correctAnswer);
    if (playerLost) {
      break;
    }
  }
  brain.showResult(playerName, playerLost);
};

playCalcGame();
