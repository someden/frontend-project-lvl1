import play, { getRandom } from '../index.js';

const description = 'What is the result of the expression?';
const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

function getNextRound() {
  const a = getRandom();
  const b = getRandom();
  const [sign, fn] = operations[getRandom() % 3];
  const question = `${a} ${sign} ${b}`;
  const correctAnswer = String(fn(a, b));
  return [question, correctAnswer];
}

export default function playCalc() {
  play(description, getNextRound);
}
