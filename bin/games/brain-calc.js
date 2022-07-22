#!/usr/bin/env node
import * as brain from '../../src/index.js';

const playCalcGame = () => {
  brain.showGreeting();

  const playerName = brain.getPlayerName();

  brain.showMessage('What is the result of the expression?');

  let playerLost = false;

  for (let i = 1; i <= brain.maxRoundsCount; i += 1) {
    const number1 = brain.getRandomNumber(50);
    const number2 = brain.getRandomNumber(50);
    const operation = brain.getRandomNumber(3);

    let correctAnswer;
    let operator;
    switch (operation) {
      case 0: correctAnswer = number1 + number2; operator = '+'; break;
      case 1: correctAnswer = number1 - number2; operator = '-'; break;
      case 2: correctAnswer = number1 * number2; operator = '*'; break;
      default: correctAnswer = 'Error! Operation is not defined';
    }

    const question = `Question: ${number1} ${operator} ${number2}`;
    brain.showMessage(question);

    playerLost = !brain.checkPlayerAnswer(correctAnswer);
    if (playerLost) {
      break;
    }
  }
  brain.showResult(playerName, playerLost);
};

playCalcGame();
