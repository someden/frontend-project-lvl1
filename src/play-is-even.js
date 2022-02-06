import readlineSync from 'readline-sync';

function playIsEven() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const answers = ['yes', 'no'];

  for (let i = 0; i < 3; i += 1) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = answers[num % 2];

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}

export default playIsEven;
