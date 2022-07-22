#!/usr/bin/env node
import * as brain from '../../src/index.js';

const isPrime = (number) => {
  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = 2 + brain.getRandomNumber(999);
  const answer = isPrime(question) ? 'yes' : 'no';
  const result = {
    question,
    answer,
  };
  return result;
};

const playPrimeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  brain.startGame(task, getQuestionAndAnswer);
};

playPrimeGame();
