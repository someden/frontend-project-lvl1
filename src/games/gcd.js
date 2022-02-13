import play from '../index.js';
import getRandom from '../utils/getRandom.js';

const description = 'Find the greatest common divisor of given numbers.';

function getGCD(a, b) {
  return !b ? a : getGCD(b, a % b);
}

function getRound() {
  const a = getRandom();
  const b = getRandom();
  const question = `${a} ${b}`;
  const correctAnswer = String(getGCD(a, b));
  return [question, correctAnswer];
}

export default function playGCD() {
  play(description, getRound);
}
