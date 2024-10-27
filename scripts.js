let userName = "";
let currentBook = "book1";
let currentQuestion = 0;
let points = 0;
let level = 1;

const questions = {
    book1: [
        { 
            type: "multiple", 
            question: "¿Cuál fue la importancia del ascenso de Trajano en la política romana?", 
            options: ["Fortaleció el poder militar", "Mejoró las relaciones con el Senado", "Expandió las fronteras de Roma", "Fortaleció el comercio"], 
            correctAnswer: "Mejoró las relaciones con el Senado",
            feedback: "Trajano fortaleció el apoyo del Senado, una base clave para su reinado."
        },
        { 
            type: "multiple", 
            question: "¿Qué posición tenía Trajano en Germania?", 
            options: ["Gobernador de Germania", "Prefecto del Pretorio", "Senador", "Gladiador"], 
            correctAnswer: "Gobernador de Germania",
            feedback: "Como gobernador en Germania, Trajano ganó experiencia militar decisiva para su liderazgo."
        },
        // Resto de preguntas aquí...
    ]
    // Otros libros pueden agregarse aquí con el mismo formato
};

function startQuiz() {
    userName = document.getElementById("user-name").value;
    if (userName === "") {
        alert("Por favor, introduce tu nombre.");
        return;
    }

    document.getElementById("name-entry").style.display = "none";
    document.getElementById("book-selection").style.display = "block";
    document.getElementById("user-name-display").innerText = `Nombre: ${userName}`;
}

function selectBook(book) {
    currentBook = book;
    currentQuestion = 0;
    points = 0;
    level = 1;

    document.getElementById("book-selection").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    updateScoreDisplay();
    displayQuestion();
}

function displayQuestion() {
    const questionData = questions[currentBook][currentQuestion];
    document.getElementById("question-text").innerText = questionData.question;

    const answerArea = document.getElementById("answer-area");
    answerArea.innerHTML = ""; // Limpia el área de respuesta

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option, questionData.correctAnswer, questionData.feedback);
        answerArea.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer, feedback) {
    if (selectedOption === correctAnswer) {
        points += 10;
        showFeedback("¡Correcto! " + feedback);
    } else {
        showFeedback("Incorrecto. " + feedback);
    }
    updateScoreDisplay();
}

function showFeedback(message) {
    document.getElementById("feedback-message").innerText = message;
    document.getElementById("feedback-box").style.display = "block";
}

function closeFeedback() {
    document.getElementById("feedback-box").style.display = "none";
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    updateScoreDisplay();
    if (currentQuestion < questions[currentBook].length) {
        displayQuestion();
    } else 
