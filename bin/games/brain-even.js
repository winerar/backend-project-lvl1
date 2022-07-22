#!/usr/bin/env node
import * as brain from '../../src/index.js';

const getQuestionAndAnswer = () => {
  const question = brain.getRandomNumber(1000);
  const answer = (question % 2 === 0 ? 'yes' : 'no');
  const result = {
    question,
    answer,
  };
  return result;
};

const playEvenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  brain.startGame(task, getQuestionAndAnswer);
};

playEvenGame();
