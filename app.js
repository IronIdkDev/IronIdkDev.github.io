/*const btnP1 = document.getElementById('btn-p1');
btnP1.addEventListener('click', () => {
  window.location.href = 'part1/part1.html';
});*/
const btnP1 = document.getElementById('btn-p1');
btnP1.addEventListener('click', () => {
  alert('Part 1 is currently disabled');
});

const btnP2 = document.getElementById('btn-p2');
btnP2.addEventListener('click', () => {
  window.location.href = 'part2/part2.html';
});

const btnQuiz = document.querySelector('.practice-quiz-button');
btnQuiz.addEventListener('click', () => {
  window.location.href = 'https://take.quiz-maker.com/QPCARQYUW';
});