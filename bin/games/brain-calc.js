#!/usr/bin/env node
import * as brain from '../../src/index.js';

const getQuestionAndAnswer = () => {
  let answer;
  let operator;
  const number1 = brain.getRandomNumber(50);
  const number2 = brain.getRandomNumber(50);
  const operation = brain.getRandomNumber(3);
  switch (operation) {
    case 0: answer = number1 + number2; operator = '+'; break;
    case 1: answer = number1 - number2; operator = '-'; break;
    case 2: answer = number1 * number2; operator = '*'; break;
    default: answer = 'undefined'; operator = 'undefined';
  }

  const question = `${number1} ${operator} ${number2}`;
  const result = {
    question,
    answer,
  };
  return result;
};

const playCalcGame = () => {
  const task = 'What is the result of the expression?';
  brain.startGame(task, getQuestionAndAnswer);
};

playCalcGame();
