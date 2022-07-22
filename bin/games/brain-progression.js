#!/usr/bin/env node
import * as brain from '../../src/index.js';

const playProgressionGame = () => {
  brain.showGreeting();

  const playerName = brain.getPlayerName();

  brain.showMessage('What number is missing in the progression?');

  let playerLost = false;

  const progressionLength = 10;

  for (let i = 1; i <= brain.maxRoundsCount; i += 1) {
    const step = 1 + brain.getRandomNumber(10);
    const progression = [];
    let currentValue = brain.getRandomNumber(100);
    for (let j = 0; j < progressionLength; j += 1) {
      progression[j] = currentValue;
      currentValue += step;
    }

    const missedNumberIndex = brain.getRandomNumber(progressionLength);
    const correctAnswer = progression[missedNumberIndex];
    progression[missedNumberIndex] = '..';

    const question = `Question: ${progression.join(' ')}`;
    brain.showMessage(question);

    playerLost = !brain.checkPlayerAnswer(correctAnswer);
    if (playerLost) {
      break;
    }
  }
  brain.showResult(playerName, playerLost);
};

playProgressionGame();
