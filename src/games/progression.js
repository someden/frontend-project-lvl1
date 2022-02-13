import play from '../index.js';
import getRandom from '../utils/getRandom.js';

const description = 'What number is missing in the progression?';

function getProgression(start, step, length) {
  return Array.from({ length }).map((_, i) => start + step * i);
}

function getRound() {
  const start = getRandom();
  const step = getRandom();
  const length = getRandom(5, 10);
  const skippingIndex = getRandom(0, length - 1);
  const progression = getProgression(start, step, length);
  const question = progression
    .map((num, i) => (i === skippingIndex ? '..' : num))
    .join(' ');
  const correctAnswer = String(progression[skippingIndex]);
  return [question, correctAnswer];
}

export default function playProgression() {
  play(description, getRound);
}
