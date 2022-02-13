import play from '../index.js';
import getRandom from '../utils/getRandom.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRound() {
  const answers = ['yes', 'no'];
  const question = getRandom();
  const correctAnswer = answers[question % 2];
  return [question, correctAnswer];
}

export default function playIsEven() {
  play(description, getRound);
}
