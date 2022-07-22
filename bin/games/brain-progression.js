#!/usr/bin/env node
import * as brain from '../../src/index.js';

const getQuestionAndAnswer = () => {
  const step = 1 + brain.getRandomNumber(10);
  const progression = [];
  let currentValue = brain.getRandomNumber(100);
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = currentValue;
    currentValue += step;
  }
  const missedNumberIndex = brain.getRandomNumber(progressionLength);
  const answer = progression[missedNumberIndex];
  progression[missedNumberIndex] = '..';
  const question = progression.join(' ');
  const result = {
    question,
    answer,
  };
  return result;
};

const playProgressionGame = () => {
  const task = 'What number is missing in the progression?';
  brain.startGame(task, getQuestionAndAnswer);
};

playProgressionGame();
