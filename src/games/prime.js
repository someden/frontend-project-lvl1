import play, { getRandom } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function getNextRound() {
  const num = getRandom();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, correctAnswer];
}

export default function playIsPrime() {
  play(description, getNextRound);
}
