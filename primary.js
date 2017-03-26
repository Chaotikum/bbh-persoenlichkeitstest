const {ipcRenderer} = require('electron')

document.body.addEventListener('touchmove', ev => ev.preventDefault())

//ipcRenderer.send('set-color', 'blue')

const questionsNeeded = 2;
const questions = [
  {
    "question": "foobar!",
    "answers": [
      "1 foo",
      "2 bar",
      "3 baz",
      "4 boo",
      "5 asd",
      "6 pop"
    ]
  },
  {
    "question": "Ab wann ist man Mann?",
    "answers": [
      "1 foo",
      "2 bar",
      "3 baz",
      "4 boo",
      "5 asd",
      "6 pop"
    ]
  },
  {
    "question": "Mann 2 oder 3?",
    "answers": [
      "1 foo",
      "2 bar",
      "3 baz",
      "4 boo",
      "5 asd",
      "6 pop"
    ]
  },
];

const scoreData = {
  "Mann1": {color: 'blue', subtitle: "Hast Du schonmal was von Wikipedia gehört?"},
  "Mann2": {color: 'green', subtitle: "Das geht noch besser!"},
  "Mann3": {color: 'red', subtitle: "Du hast Dir Mühe gegeben und landest im Mittelfeld."},
  "Mann4": {color: 'pink', subtitle: "Das hast Du gut gemacht!"},
  "Mann5": {color: 'yellow', subtitle: "Super! Klasse! Toll gemacht! Sehr schön."},
  "Mann6": {color: 'cyan', subtitle: "Top! Klasse! Toll gemacht! Sehr schön."},
};

const elements = {
  introButtons: document.querySelectorAll('.intro-button'),
  quizButton: document.querySelector('#quiz-button'),
  progress: document.querySelector('#progress'),
  header: document.querySelector('#header'),
  counter: document.querySelector('.counter'),
  questionsNeeded: document.querySelector('#questions-needed'),
  question: document.querySelector('.question'),
  answers: Array.from(document.querySelectorAll('.answer')),
  scoreTitle: document.querySelector('#score .title'),
  scoreText: document.querySelector('#score .score-text'),
  pages: {
    intro: document.querySelector('#intro'),
    quiz: document.querySelector('#quiz'),
    score: document.querySelector('#score'),
  },
};

let state = {
  page: 'intro',
  questionIndex: -1,
  questionsDone: [], // indexes
  answers: [
    {name: "Mann1", score: 0},
    {name: "Mann2", score: 0},
    {name: "Mann3", score: 0},
    {name: "Mann4", score: 0},
    {name: "Mann5", score: 0},
    {name: "Mann6", score: 0},
  ],
};

function reset() {
  state.page = 'intro';
  ipcRenderer.send('set-color', '');

  render();
}

function startQuiz() {
  state.page = 'quiz';
  state.questionsDone = [];
  state.answers.forEach(a => a.score = 0);
  newQuestion();

  render();
}

function newQuestion() {
  do {
    state.questionIndex = Math.floor(Math.random() * questions.length);
  } while (state.questionsDone.indexOf(state.questionIndex) !== -1)
}

function showScore() {
  state.page = 'score';

  render();
}

function render() {
  elements.header.classList.add('hidden');

  Object.keys(elements.pages).forEach(p =>
    elements.pages[p].style.setProperty('display', p === state.page ? '' : 'none'));

  switch (state.page) {
    case 'intro':
      renderIntro();
      break;
    case 'quiz':
      renderQuiz();
      break;
    case 'score':
      renderScore();
      break;
  }
}

function renderIntro() {
  // ...
}

function renderScore() {
  let topName = state.answers.slice(0).sort((a, b) => a.score - b.score).pop().name;
  let sd = scoreData[topName];

  elements.scoreTitle.textContent = 'Du bist ' + topName + ' zum Verwechseln ähnlich!';
  elements.scoreText.textContent = sd.subtitle;
  ipcRenderer.send('set-color', sd.color);
}

function renderQuiz() {
  elements.header.classList.remove('hidden');

  let count = state.questionsDone.length + 1;
  if (count < 10)
    count = '0' + count;
  elements.counter.textContent = count;

  let q = questions[state.questionIndex];
  elements.question.textContent = q.question;

  let answerElements = elements.answers.slice(0);
  answerElements.sort(function() { return 0.5 - Math.random();  });
  answerElements.forEach(function (el, i) {
    el.textContent = q.answers[i];
    el.dataset.answerIndex = i;
  });
}

function selectAnswer(event) {
  let answerIndex = event.target.dataset.answerIndex;
  state.answers[answerIndex].score++;

  state.questionsDone.push(state.questionIndex);

  let done = function() {
    setTimeout(function() {
      addEvents();
      if (state.questionsDone.length == questionsNeeded) {
        showScore();
      } else {
        newQuestion();
        render();
      }
    }, 400);
  };

  removeEvents();
  event.target.classList.add('clicked');
  setTimeout(function() {
    event.target.classList.remove('clicked');
    done();
  }, 400);
}

function addEvents() {
  elements.answers.forEach(function(el) {
    el.addEventListener('click', selectAnswer);
  });
}

function removeEvents() {
  elements.answers.forEach(function(el) {
    el.removeEventListener('click', selectAnswer);
  });
}

function init() {
  addEvents();
  render();

  elements.introButtons.forEach(b => b.addEventListener('click', reset))
  elements.quizButton.addEventListener('click', startQuiz)
  elements.questionsNeeded.textContent = questionsNeeded;
}

init();
