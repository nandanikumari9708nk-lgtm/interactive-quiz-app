const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used to style a webpage?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        answer: 1
    },
    {
        question: "Which language makes a webpage interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },
    {
        question: "Which keyword declares a constant in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "constant"
        ],
        answer: 2
    },
    {
        question: "Which method is used to select an element by its ID?",
        options: [
            "getElementById()",
            "queryClass()",
            "selectId()",
            "getElement()"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");

function showQuestion() {
    const question = questions[currentQuestion];

    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.addEventListener("click", () => {
            if (index === question.answer) {
                score++;
            }

            document.querySelectorAll(".option").forEach(btn => {
                btn.disabled = true;
            });
        });

        optionsElement.appendChild(button);
    });
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        nextBtn.style.display = "none";

        resultElement.textContent =
            `Your score: ${score} / ${questions.length}`;
    }
});

showQuestion();
