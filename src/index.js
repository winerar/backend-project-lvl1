import readlineSync from 'readline-sync';

export const maxRoundsCount = 3;

export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ').trim() || '%username%';
  console.log(`Hello, ${name}!`);
  return name;
};

export const checkPlayerAnswer = (correctAnswer) => {
  const playerAnswer = readlineSync.question('Your answer: ').trim();
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const showCompassion = (playerName) => {
  console.log(`Let's try again, ${playerName}!`);
};

const showCongratulation = (playerName) => {
  console.log(`Congratulations, ${playerName}!`);
};

export const showResult = (playerName, playerLost) => {
  if (playerLost) {
    showCompassion(playerName);
  } else {
    showCongratulation(playerName);
  }
};

export const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);
