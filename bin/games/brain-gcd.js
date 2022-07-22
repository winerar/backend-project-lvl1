#!/usr/bin/env node
import * as brain from '../../src/index.js';

const gcd = (number1, number2) => {
  if (number2 > 0) {
    return gcd(number2, number1 % number2);
  }
  return number1;
};

const playGCDGame = () => {
  brain.showGreeting();

  const playerName = brain.getPlayerName();

  brain.showMessage('Find the greatest common divisor of given numbers.');

  let playerLost = false;

  for (let i = 1; i <= brain.maxRoundsCount; i += 1) {
    const number1 = brain.getRandomNumber(10);
    const number2 = brain.getRandomNumber(10);

    const correctAnswer = gcd(number1, number2);

    const question = `Question: ${number1} ${number2}`;
    brain.showMessage(question);

    playerLost = !brain.checkPlayerAnswer(correctAnswer);
    if (playerLost) {
      break;
    }
  }
  brain.showResult(playerName, playerLost);
};

playGCDGame();
