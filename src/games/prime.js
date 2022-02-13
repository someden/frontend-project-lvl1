import play from '../index.js';
import getRandom from '../utils/getRandom.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
}

function getRound() {
  const num = getRandom();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, correctAnswer];
}

export default function playPrime() {
  play(description, getRound);
}
