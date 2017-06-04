const {ipcRenderer} = require('electron')

document.body.addEventListener('touchmove', ev => ev.preventDefault())

//ipcRenderer.send('set-color', 'blue')

const translations = {
  "de": {
    "questions": [
      {
        "question": "Welches Tier wärst du?",
        "answers": [
          "Alphaziegenbock",
          "Schildkröte",
          "Delfin",
          "Löwin",
          "Känguru",
          "Phoenix",
        ]
      },
      {
        "question": "Welche Farbe wärst du?",
        "answers": [
          "Rot",
          "Lila",
          "Blau",
          "Orange",
          "Pink",
          "Grün",
        ]
      },
      {
        "question": "Was liest du am liebsten?",
        "answers": [
          "Politische Lieder",
          "Kurzgeschichten",
          "Gedichte",
          "Historische Romane",
          "Meeresbücher",
          "Tagebuchbearbeitungen",
        ]
      },
      {
        "question": "Welche Musikrichtung magst du am meisten?",
        "answers": [
          "Klassik",
          "Jazz",
          "Pop",
          "Rap",
          "Techno",
          "Musical",
        ]
      },
      {
        "question": "Welcher Sänger/welche Sängerin wärst du?",
        "answers": [
          "Lady Gaga",
          "Kurt Cobain",
          "Adele",
          "Bushido",
          "Udo Lindenberg",
          "Helene Fischer",
        ]
      },
      {
        "question": "Wenn dein Leben ein Film wäre - welcher wäre es?",
        "answers": [
          "Titanic",
          "Mamma Mia!",
          "Fernsehfilm",
          "Inception",
          "Ratatouille",
          "Psycho",
        ]
      },
      {
        "question": "Was ist dein Lebensmotto?",
        "answers": [
          "Wer suchet, der findet.",
          "In der Fremde bin ich zu Hause.",
          "Ohne einen Blick aufs Meer ist die Arbeit schwer.",
          "Der Sinn des Lebens schwindet für mich.",
          "Wer zuerst kommt, mahlt zuerst.",
          "Besser spät als nie.",
        ]
      },
      {
        "question": "Welches Bild würdest du posten?",
        "answers": [
          "Familienfoto",
          "Absturz",
          "Strandbild unter Palmen",
          "Business-Selfie",
          "Tierbild",
          "Foto von der eigenen Arbeit",
        ]
      },
      {
        "question": "Wie würdest du dich beschreiben?",
        "answers": [
          "Heimatlos",
          "Besserwisserisch",
          "Vielseitig",
          "Engagiert",
          "Erfolgreich",
          "Einsam",
        ]
      },
      {
        "question": "Was für ein Hobby hast du?",
        "answers": [
          "Kreatives Schreiben",
          "Musizieren",
          "Reisen",
          "Arbeiten",
          "Theater spielen",
          "Kochen und backen",
        ]
      },
      {
        "question": "Wie ist dein Verhältnis zu deinem Vater?",
        "answers": [
          "Er ist ein guter Freund.",
          "Ich regle alles für ihn.",
          "Er beachtet mich nicht.",
          "Ich würde mir wünschen, nicht so viel über ihn zu wissen.",
          "Wir haben nicht so viel Kontakt.",
          "Ganz normal…",
        ]
      },
      {
        "question": "In welchem Land würdest du gern leben?",
        "answers": [
          "USA",
          "Italien",
          "Tschechien",
          "Frankreich",
          "Schweiz",
          "Kanada",
        ]
      },
      {
        "question": "Welchen Gegenstand würdest du mit auf eine einsame Insel nehmen?",
        "answers": [
          "Kuschelaffe",
          "Laptop",
          "Alkohol",
          "Tagebuch",
          "Kochgeschirr",
          "Foto von meinem Vater",
        ]
      },
      {
        "question": "Wie stellst du dir deine perfekte Familie vor?",
        "answers": [
          "Ich und mein/-e Partner/-in",
          "Ich und meine Eltern",
          "Kurze Beziehungen - ich halte mir alles offen",
          "Ich würde mir eine Familie adoptieren",
          "Ich, mein/-e Partner/-in und unsere Kinder",
          "Wenn unsere Kinder groß sind, adoptieren wir ein neues.",
        ]
      },
    ],
    "evaluations": {
      "Klaus":     'Mit Klaus verbringst du einen schönen Urlaub auf Mallorca. Am Nachmittag steht Sightseeing auf dem Programm und nachts wird die Partymeile erobert.',
      "Michael":   'Mit Michael kannst du Verschiedenes unternehmen, von der Elbphilharmonie bis zur Reeperbahn.',
      "Elisabeth": 'Mit Elisabeth verbringst du einen schönen Tag im Zoo und besuchst den Tierschutzverein.',
      "Monika":    'Mit Monika verbringst du einen schönen, sonnigen Tag am Strand und ihr diskutiert über den Sinn des Lebens.',
      "Erika":     'Mit Erika verbringst du einen Abend im Impro-Theater, den ihr mit einem Spaziergang am Zürichsee beschließt.',
      "Golo":      'Mit Golo verbringst du einen Tag im Uni-Café und redest mit ihm über politische Themen. Viel Zeit wird er aber nicht haben…',
      "Leonie":    'Mit Leonie verbringst du einen schönen Tag zu Hause. Ihr kocht und lasst den Tag mit einem Film ausklingen.',
    },
    "elements": {
      "backToStart": "Zurück zum Start",
      "toStart": "Zum Start",
      "question": "Frage",
      "of": "von",
      "introText1": "Du wolltest schon immer\nein Teil der Familie Mann sein?",
      "introText2": "Teste, welche/-r\nMann am besten zu\ndir passt!",
      "start": "Start",
    },
  },
  "en": {
    "questions": [
      {
        "question": "What animal would you be?",
        "answers": [
          "Billy goat",
          "Tortoise",
          "Dolphin",
          "Lioness",
          "Kangaroo",
          "Phoenix",
        ]
      },
      {
        "question": "Which colour would you be?",
        "answers": [
          "Red",
          "Purple",
          "Blue",
          "Orange",
          "Pink",
          "Green",
        ]
      },
      {
        "question": "What do you love to read?",
        "answers": [
          "Political songs",
          "Short stories",
          "Poems",
          "Historical novels",
          "Books about the sea",
          "Published diaries",
        ]
      },
      {
        "question": "What kind of music do you like best?",
        "answers": [
          "Classical",
          "Jazz",
          "Pop",
          "Rap",
          "Techno",
          "Musical",
        ]
      },
      {
        "question": "Which singer would you be?",
        "answers": [
          "Lady Gaga",
          "Kurt Cobain",
          "Adele",
          "Bushido",
          "Udo Lindenberg",
          "Helene Fischer",
        ]
      },
      {
        "question": "If your life were a film – which one would it be?",
        "answers": [
          "Titanic",
          "Mamma Mia!",
          "TV film",
          "Inception",
          "Ratatouille",
          "Psycho",
        ]
      },
      {
        "question": "What is your life motto?",
        "answers": [
          "Seek and you will find.",
          "Wherever I lay my hat, that’s my home.",
          "No work is easy without a view of the sea.",
          "The meaning of life is dwindling for me.",
          "The early bird gets the worm.",
          "Better late than never.",
        ]
      },
      {
        "question": "Which picture would you post?",
        "answers": [
          "Family photo",
          "Crash",
          "Beach photo beneath palms",
          "Business selfie",
          "Animal picture",
          "Photo of your own work",
        ]
      },
      {
        "question": "How would you describe yourself?",
        "answers": [
          "Homeless",
          "Know-it-all",
          "Diverse",
          "Committed",
          "Successful",
          "Lonely",
        ]
      },
      {
        "question": "What hobby do you have?",
        "answers": [
          "Creative writing",
          "Making music",
          "Travel",
          "Work",
          "Acting",
          "Cooking and baking",
        ]
      },
      {
        "question": "How is your relationship with your father?",
        "answers": [
          "He is a good friend.",
          "I manage everything for him.",
          "He pays no attention to me.",
          "I wish I didn’t know so much about him.",
          "We don’t have much contact.",
          "Quite normal…",
        ]
      },
      {
        "question": "In which country would you like to live?",
        "answers": [
          "USA",
          "Italy",
          "Czech Republic",
          "France",
          "Switzerland",
          "Canada",
        ]
      },
      {
        "question": "Which item would you take with you onto a desert island?",
        "answers": [
          "Stuffed toy",
          "Laptop",
          "Alcohol",
          "Diary",
          "Cooking utensils",
          "Photo of my father",
        ]
      },
      {
        "question": "How do you picture the perfect family?",
        "answers": [
          "Me and my partner",
          "Me and my parents",
          "Short relationships – I don’t tie myself down",
          "I would adopt a family",
          "Me, my partner and our children",
          "When our children have grown up, we will adopt a new one.",
        ]
      },
    ],
    "evaluations": {
      "Klaus":     'With Klaus you can spend a nice holiday on Mallorca. In the afternoon you will go sightseeing, and nights are spent partying.',
      "Michael":   'With Michael you can do many things, from the Elbphilharmonie to the Reeperbahn.',
      "Elisabeth": 'With Elisabeth you can spend a nice day at the zoo and visit an animal welfare shelter.',
      "Monika":    'With Monika you can spend a nice, sunny day on the beach and discuss the meaning of life.',
      "Erika":     'With Erika you can spend an evening at an improvisation theatre, and conclude it with a stroll at Lake Zurich.',
      "Golo":      'With Golo you can spend a day in the university café, talking about political topics. But he won’t have much time…',
      "Leonie":    'With Leonie you can spend a nice day at home. You will cook, and then watch a film in the evening.',
    },
    "elements": {
      "backToStart": "Back to the start",
      "toStart": "To the start",
      "question": "Question",
      "of": "of",
      "introText1": "Have you always wanted\nto be part of the Mann family?",
      "introText2": "Test which Mann suits you best!",
      "start": "Start",
    },
  }
};

const questionData = [
  [
    "Golo",
    "Monika",
    "Elisabeth",
    "Erika",
    "Leonie",
    "Klaus",
  ],
  [
    "Erika",
    "Leonie",
    "Elisabeth",
    "Michael",
    "Monika",
    "Golo",
  ],
  [
    "Erika",
    "Klaus",
    "Monika",
    "Golo",
    "Elisabeth",
    "Michael",
  ],
  [
    "Monika",
    "Erika",
    "Elisabeth",
    "Michael",
    "Klaus",
    "Leonie",
  ],
  [
    "Erika",
    "Klaus",
    "Leonie",
    "Michael",
    "Golo",
    "Elisabeth",
  ],
  [
    "Monika",
    "Elisabeth",
    "Golo",
    "Klaus",
    "Leonie",
    "Michael",
  ],
  [
    "Golo",
    "Monika",
    "Elisabeth",
    "Klaus",
    "Erika",
    "Leonie",
  ],
  [
    "Leonie",
    "Klaus",
    "Monika",
    "Golo",
    "Elisabeth",
    "Michael",
  ],
  [
    "Klaus",
    "Erika",
    "Michael",
    "Elisabeth",
    "Golo",
    "Monika",
  ],
  [
    "Klaus",
    "Michael",
    "Monika",
    "Golo",
    "Erika",
    "Leonie",
  ],
  [
    "Elisabeth",
    "Erika",
    "Monika",
    "Michael",
    "Leonie",
    "Golo",
  ],
  [
    "Michael",
    "Monika",
    "Leonie",
    "Klaus",
    "Erika",
    "Elisabeth",
  ],
  [
    "Elisabeth",
    "Golo",
    "Michael",
    "Klaus",
    "Leonie",
    "Erika",
  ],
  [
    "Monika",
    "Erika",
    "Klaus",
    "Golo",
    "Leonie",
    "Michael",
  ],
];

const colors = {
  "Klaus":     '#1dafea',
  "Erika":     '#feeb34',
  "Monika":    '#e43319',
  "Golo":      '#1071b7',
  "Michael":   '#ef8d24',
  "Elisabeth": '#e54593',
  "Leonie":    '#8bb926',
};

const elements = {
  changeLanguageButton: document.querySelector('#changelanguage-button'),
  languageButtons: document.querySelectorAll('.language-button'),
  mainHero: document.querySelector('#main-hero'),
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
  languageOverlay: document.querySelector('#languageoverlay'),
  pages: {
    intro: document.querySelector('#intro'),
    quiz: document.querySelector('#quiz'),
    score: document.querySelector('#score'),
  },
  translatables: {
    backToStart: document.querySelector('#header .intro-button'),
    toStart: document.querySelector('#score .intro-button'),
    question: document.querySelector('.translatable-question'),
    of: document.querySelector('.translatable-of'),
    introText1: document.querySelector('#intro-text-1'),
    introText2: document.querySelector('#intro-text-2'),
    start: document.querySelector('#quiz-button'),
  },
};

//const questionsNeeded = 10;
const questionsNeeded = questionData.length;

let state = {
  showLangugages: true,
  language: null,
  page: 'intro',
  questionIndex: -1,
  questionsDone: [], // indexes
  answers: {
    "Klaus":     0,
    "Michael":   0,
    "Elisabeth": 0,
    "Monika":    0,
    "Erika":     0,
    "Golo":      0,
    "Leonie":    0,
  }
};

function reset() {
  state.showLangugages = true;
  state.language = null;
  state.page = 'intro';
  ipcRenderer.send('set-color', '');

  render();
}

function resetLanguage() {
  state.showLangugages = true;

  render();
}

function startQuiz() {
  state.page = 'quiz';
  state.questionsDone = [];
  Object.keys(state.answers).forEach(k => state.answers[k] = 0);
  newQuestion();

  render();
}

function newQuestion() {
  do {
    state.questionIndex = Math.floor(Math.random() * questionData.length);
  } while (state.questionsDone.indexOf(state.questionIndex) !== -1)
}

function showScore() {
  state.page = 'score';

  render();
}

function render() {
  if (state.language !== null) {
    document.body.lang = state.language;
  }

  elements.header.classList.add('hidden');
  elements.mainHero.style.setProperty('background-image', '');

  Object.keys(elements.pages).forEach(p => {
    let same = p === state.page;
    elements.mainHero.classList[same ? 'add' : 'remove']('bg-'+p);
    elements.pages[p].style.setProperty('display', same ? '' : 'none');
  });

  elements.languageOverlay.style.setProperty('display',
    state.showLangugages ? '' : 'none');

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
  // nothing to do here (yet?)
}

function renderQuiz() {
  elements.header.classList.remove('hidden');

  let count = state.questionsDone.length + 1;
  if (count < 10)
    count = '0' + count;
  elements.counter.textContent = count;
  elements.questionsNeeded.textContent = ''+questionsNeeded;

  let q = translations[state.language].questions[state.questionIndex];
  elements.question.textContent = q.question;

  let answerElements = elements.answers.slice(0);
  answerElements.sort(function() { return 0.5 - Math.random();  });
  answerElements.forEach(function (el, i) {
    el.textContent = q.answers[i];
    el.dataset.answerIndex = i;
  });
}

function renderScore() {
  let score = 0;
  let name = null;
  Object.keys(state.answers).forEach(key => {
    if (state.answers[key] > score) {
      score = state.answers[key];
      name = key;
    }
  });

  elements.mainHero.style.setProperty('background-image',
    'url(img/bg-score-'+name.toLowerCase()+'.png)');

  let color = colors[name];
  let text = translations[state.language].evaluations[name];

  elements.scoreText.textContent = text;
  ipcRenderer.send('set-color', color);
}

function onClickLanguage(event) {
  state.showLangugages = false;

  setLanguage(event.target.dataset.language);
}

function nl2br(text) {
  return text.replace(new RegExp('\n', 'g'), '<br>');
}

function setLanguage(lang) {
  state.language = lang;
  Object.keys(elements.translatables).forEach(key =>
    elements.translatables[key].innerHTML =
      nl2br(translations[state.language].elements[key]));

  render();
}

function onClickAnswer(event) {
  let answerIndex = event.target.dataset.answerIndex;
  let name = questionData[state.questionIndex][answerIndex];
  state.answers[name]++;

  state.questionsDone.push(state.questionIndex);

  let done = function() {
    setTimeout(function() {
      addAnswerEvents();
      if (state.questionsDone.length == questionsNeeded) {
        showScore();
      } else {
        newQuestion();
        render();
      }
    }, 400);
  };

  removeAnswerEvents();
  event.target.classList.add('clicked');
  setTimeout(function() {
    event.target.classList.remove('clicked');
    done();
  }, 400);
}

function addAnswerEvents() {
  elements.answers.forEach(function(el) {
    el.addEventListener('click', onClickAnswer);
  });
}

function removeAnswerEvents() {
  elements.answers.forEach(function(el) {
    el.removeEventListener('click', onClickAnswer);
  });
}

function init() {
  addAnswerEvents();
  render();

  elements.changeLanguageButton.addEventListener('click', resetLanguage);
  elements.languageButtons.forEach(
    b => b.addEventListener('click', onClickLanguage))
  elements.introButtons.forEach(
    b => b.addEventListener('click', reset))
  elements.quizButton.addEventListener('click', startQuiz)
  elements.questionsNeeded.textContent = questionsNeeded;
}

init();
