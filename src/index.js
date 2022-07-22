import readlineSync from 'readline-sync';

export const maxRoundsCount = 3;

export const showMessage = (message) => console.log(message);

export const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

export const showGreeting = () => {
  showMessage('Welcome to the Brain Games!');
};

export const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ').trim() || '%username%';
  showMessage(`Hello, ${name}!`);
  return name;
};

export const checkPlayerAnswer = (correctAnswer) => {
  const playerAnswer = readlineSync.question('Your answer: ').trim();
  if (playerAnswer === String(correctAnswer)) {
    showMessage('Correct!');
    return true;
  }
  showMessage(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const showCompassion = (playerName) => {
  showMessage(`Let's try again, ${playerName}!`);
};

const showCongratulation = (playerName) => {
  showMessage(`Congratulations, ${playerName}!`);
};

export const showResult = (playerName, playerLost) => {
  if (playerLost) {
    showCompassion(playerName);
  } else {
    showCongratulation(playerName);
  }
};

export const startGame = (task, getQuestionAndAnswer) => {
  showGreeting();
  const playerName = getPlayerName();
  showMessage(task);
  let playerLost = false;
  for (let i = 1; i <= maxRoundsCount; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();

    const questionText = `Question: ${questionAndAnswer.question}`;
    showMessage(questionText);

    playerLost = !checkPlayerAnswer(questionAndAnswer.answer);
    if (playerLost) {
      break;
    }
  }
  showResult(playerName, playerLost);
};
