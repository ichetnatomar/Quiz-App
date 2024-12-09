const data = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },

  {
    question: "Who is the CM of Assam?",
    a: "Himanta Biswa Sarma",
    b: "Pinarai Vijayan",
    c: "Sarbananda Sonowal",
    d: "Tarun Gogoi",
    correct: "a"
  },

  {
    question: "How many seasons is Six Seasons?",
    a: "6",
    b: "4",
    c: "7",
    d: "3",
    correct: "a"
  },

  {
    question: "Who is the current CEO of PepsiCo.?",
    a: "Ramon Laguarta",
    b: "Indra Nooyi",
    c: "Leena Nair",
    d: "Kiran Majumdar Shaw",
    correct: "a"
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit_button = document.getElementById('submit');

let currentQuestionIndex = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAll();

  const currentQuestionData = data[currentQuestionIndex];

  questionEl.innerText = currentQuestionData.question;
  a_text.innerText = currentQuestionData.a;
  b_text.innerText = currentQuestionData.b;
  c_text.innerText = currentQuestionData.c;
  d_text.innerText = currentQuestionData.d;

}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAll() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit_button.addEventListener('click', () => {

  const answer = getSelected();

  if (answer) {
    if (answer === data[currentQuestionIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < data.length) {
      loadQuiz();
    }
    else {
      quiz.innerHTML = `<h2>You answered correctly ${score} / ${data.length}</h2>`;
      `<button onclick = "location.reload()">Reload</button>`;
    }

  }
});
