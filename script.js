// Banco de 40 perguntas variadas
const questionBank = [
  {
    question: "Qual é a capital do Brasil?",
    answers: [
      { text: "Brasília", correct: true },
      { text: "Rio de Janeiro", correct: false },
      { text: "São Paulo", correct: false },
      { text: "Salvador", correct: false }
    ]
  },
  {
    question: "Quem pintou a Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false },
      { text: "Picasso", correct: false },
      { text: "Van Gogh", correct: false }
    ]
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    answers: [
      { text: "Júpiter", correct: true },
      { text: "Saturno", correct: false },
      { text: "Terra", correct: false },
      { text: "Netuno", correct: false }
    ]
  },
  {
    question: "Qual planeta é conhecido como Planeta Vermelho?",
    answers: [
      { text: "Marte", correct: true },
      { text: "Vênus", correct: false },
      { text: "Júpiter", correct: false },
      { text: "Saturno", correct: false }
    ]
  },
  {
    question: "Quantos estados tem o Brasil?",
    answers: [
      { text: "27", correct: true },
      { text: "26", correct: false },
      { text: "28", correct: false },
      { text: "25", correct: false }
    ]
  },
  {
    question: "Qual é o maior oceano do planeta?",
    answers: [
      { text: "Pacífico", correct: true },
      { text: "Atlântico", correct: false },
      { text: "Índico", correct: false },
      { text: "Ártico", correct: false }
    ]
  },
  {
    question: "Quem descobriu o Brasil?",
    answers: [
      { text: "Pedro Álvares Cabral", correct: true },
      { text: "Dom Pedro I", correct: false },
      { text: "Cristóvão Colombo", correct: false },
      { text: "Américo Vespúcio", correct: false }
    ]
  },
  {
    question: "O que significa 'www' na internet?",
    answers: [
      { text: "World Wide Web", correct: true },
      { text: "World Web Wide", correct: false },
      { text: "Web World Wide", correct: false },
      { text: "Wide Web World", correct: false }
    ]
  },
  {
    question: "Quantos planetas existem no sistema solar?",
    answers: [
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "7", correct: false },
      { text: "10", correct: false }
    ]
  },
  {
    question: "Quem foi o primeiro homem a pisar na Lua?",
    answers: [
      { text: "Neil Armstrong", correct: true },
      { text: "Buzz Aldrin", correct: false },
      { text: "Yuri Gagarin", correct: false },
      { text: "Alan Shepard", correct: false }
    ]
  },
  {
    question: "Qual é a fórmula da água?",
    answers: [
      { text: "H₂O", correct: true },
      { text: "O₂", correct: false },
      { text: "CO₂", correct: false },
      { text: "CH₄", correct: false }
    ]
  },
  {
    question: "Qual o menor país do mundo?",
    answers: [
      { text: "Vaticano", correct: true },
      { text: "Mônaco", correct: false },
      { text: "Malta", correct: false },
      { text: "San Marino", correct: false }
    ]
  },
  {
    question: "Qual é o símbolo químico do ouro?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
      { text: "Cu", correct: false }
    ]
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    answers: [
      { text: "Machado de Assis", correct: true },
      { text: "José de Alencar", correct: false },
      { text: "Clarice Lispector", correct: false },
      { text: "Graciliano Ramos", correct: false }
    ]
  },
  {
    question: "Qual continente fica o Egito?",
    answers: [
      { text: "África", correct: true },
      { text: "Ásia", correct: false },
      { text: "Europa", correct: false },
      { text: "América", correct: false }
    ]
  },
  {
    question: "O que mede a escala Richter?",
    answers: [
      { text: "Terremotos", correct: true },
      { text: "Temperatura", correct: false },
      { text: "Distância", correct: false },
      { text: "Altura", correct: false }
    ]
  },
  {
    question: "Qual é a montanha mais alta do mundo?",
    answers: [
      { text: "Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Makalu", correct: false },
      { text: "Aconcágua", correct: false }
    ]
  },
  {
    question: "Quem é o autor de 'Romeu e Julieta'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Victor Hugo", correct: false },
      { text: "Jane Austen", correct: false }
    ]
  },
  {
    question: "Qual a capital da França?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Marselha", correct: false },
      { text: "Lyon", correct: false },
      { text: "Toulouse", correct: false }
    ]
  },
  {
    question: "Em que ano o homem pisou na Lua?",
    answers: [
      { text: "1969", correct: true },
      { text: "1970", correct: false },
      { text: "1965", correct: false },
      { text: "1959", correct: false }
    ]
  },

  // Adicione mais perguntas aqui se quiser (já tem 20 a mais agora)
];

// Fisher-Yates Shuffle
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleAndSelectQuestions(array, count) {
  return shuffleArray(array).slice(0, count);
}

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const timerDisplay = document.getElementById('time-left');
const progressText = document.getElementById('progress-text');
const startButton = document.getElementById('start-btn');
const quizContent = document.getElementById('quiz-content');
const startContainer = document.getElementById('start-container');

const soundCorrect = document.getElementById('sound-correct');
const soundWrong = document.getElementById('sound-wrong');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function startQuiz() {
  questions = shuffleAndSelectQuestions(questionBank, 10);
  currentQuestionIndex = 0;
  score = 0;
  startContainer.style.display = 'none';
  quizContent.style.display = 'block';
  resultContainer.innerText = '';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  progressText.innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  questionContainer.innerText = currentQuestion.question;

  const shuffledAnswers = shuffleArray(currentQuestion.answers);

  shuffledAnswers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.dataset.correct = answer.correct;
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });

  startTimer();
}

function resetState() {
  clearInterval(timerInterval);
  timeLeft = 15;
  timerDisplay.innerText = timeLeft;
  nextButton.style.display = 'none';
  answerButtons.innerHTML = '';
}

function selectAnswer(e) {
  clearInterval(timerInterval);
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';

  if (correct) {
    score++;
    soundCorrect.play();
  } else {
    soundWrong.play();
  }

  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === 'true');
    button.disabled = true;
  });

  nextButton.style.display = 'block';
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  element.classList.add(correct ? 'correct' : 'wrong');
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function showResult() {
  resetState();
  questionContainer.innerText = 'Quiz finalizado!';
  resultContainer.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
  nextButton.innerText = 'Recomeçar';
  nextButton.style.display = 'block';
  nextButton.onclick = startQuiz;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      autoSelect();
    }
  }, 1000);
}

function autoSelect() {
  const buttons = Array.from(answerButtons.children);
  buttons.forEach(button => {
    setStatusClass(button, button.dataset.correct === 'true');
    button.disabled = true;
  });
  nextButton.style.display = 'block';
  soundWrong.play();
}
