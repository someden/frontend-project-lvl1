import play, { getRandom } from '../index.js';

const description = 'What number is missing in the progression?';

function getProgression(start, step, length) {
  return Array.from({ length }).map((_, i) => start + step * i);
}

function getNextRound() {
  const start = getRandom();
  const step = getRandom();
  const length = getRandom(5, 10);
  const skipIndex = getRandom(0, length - 1);
  const progression = getProgression(start, step, length);
  const question = progression
    .map((num, i) => (i === skipIndex ? '..' : num))
    .join(' ');
  const correctAnswer = String(progression[skipIndex]);
  return [question, correctAnswer];
}

export default function playProgression() {
  play(description, getNextRound);
}
