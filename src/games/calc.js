import play from '../index.js';
import getRandom from '../utils/getRandom.js';

const description = 'What is the result of the expression?';

function getRound() {
  const operations = [
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
  ];
  const a = getRandom();
  const b = getRandom();
  const [sign, fn] = operations[getRandom() % operations.length];
  const question = `${a} ${sign} ${b}`;
  const correctAnswer = String(fn(a, b));
  return [question, correctAnswer];
}

export default function playCalc() {
  play(description, getRound);
}
