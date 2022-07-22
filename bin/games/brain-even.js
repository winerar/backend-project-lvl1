#!/usr/bin/env node
import * as brain from '../../src/index.js';

const playEvenGame = () => {
  brain.showGreeting();

  const playerName = brain.getPlayerName();

  brain.showMessage('Answer "yes" if the number is even, otherwise answer "no".');

  let playerLost = false;

  for (let i = 1; i <= brain.maxRoundsCount; i += 1) {
    const number = brain.getRandomNumber(1000);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    const question = `Question: ${number}`;
    brain.showMessage(question);

    playerLost = !brain.checkPlayerAnswer(correctAnswer);
    if (playerLost) {
      break;
    }
  }
  brain.showResult(playerName, playerLost);
};

playEvenGame();
