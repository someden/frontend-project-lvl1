import play, { getRandom } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const answers = ['yes', 'no'];

function getNextRound() {
  const num = getRandom();
  const correctAnswer = answers[num % 2];
  return [num, correctAnswer];
}

export default function playIsEven() {
  play(description, getNextRound);
}
