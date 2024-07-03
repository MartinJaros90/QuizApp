let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Bill Gates",
        "answer_2": "Steve Jobs",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Mark Zuckerberg",
        "right_answer": 3 
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Absatz",
        "answer_2": "Container",
        "answer_3": "Hyperlink",
        "answer_4": "Formular",
        "right_answer": 3
    },
    {
        "question": "Welches Attribut wird verwendet, um einer HTML-Datei eine CSS-Datei zuzuweisen?",
        "answer_1": "src",
        "answer_2": "href",
        "answer_3": "class",
        "answer_4": "style",
        "right_answer": 2
    },
    {
        "question": "Welches Unternehmen hat React entwickelt?",
        "answer_1": "Google",
        "answer_2": "Facebook",
        "answer_3": "Microsoft",
        "answer_4": "Apple",
        "right_answer": 2
    },
    {
        "question": "Welcher JavaScript-Befehl wird verwendet, um eine Nachricht in der Konsole anzuzeigen?",
        "answer_1": "console.log()",
        "answer_2": "print()",
        "answer_3": "echo()",
        "answer_4": "alert()",
        "right_answer": 1
    },
    {
        "question": "Welche Methode wird verwendet, um ein Element nach seiner ID in JavaScript auszuwählen?",
        "answer_1": "getElementById()",
        "answer_2": "querySelector()",
        "answer_3": "getElementByClass()",
        "answer_4": "getElementByTagName()",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut in HTML5 wird verwendet, um eine Eingabe zu einem Pflichtfeld zu machen?",
        "answer_1": "required",
        "answer_2": "mandatory",
        "answer_3": "validate",
        "answer_4": "necessity",
        "right_answer": 1
    },
    {
        "question": "Welches Schlüsselwort wird in JavaScript verwendet, um eine Variable zu deklarieren?",
        "answer_1": "let",
        "answer_2": "int",
        "answer_3": "declare",
        "answer_4": "variable",
        "right_answer": 1
    }
];

let rightQuestions = 0; // Speichert die Anzahl der richtig beantworteten Fragen.
let currentQuestion = 0; // Speichert den Index der aktuellen Frage, initial auf 0 gesetzt.
let audio_success = new Audio('sounds/success.mp3');
let audio_fail = new Audio('sounds/fail.mp3');

function init() {
    // Initialisiert das Quiz.
    document.getElementById('all-questions').innerHTML = questions.length;  // Zeigt die Gesamtzahl der Fragen an.
    showQuestion(); // Zeigt die aktuelle Frage an.
}

function showQuestion() {
    // Zeigt die aktuelle Frage und ihre Antworten an.
    if (gameIsOver()) {
        // Wenn alle Fragen beantwortet sind, zeige den Endbildschirm an.
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showEndScreen() {
    let question = questions[currentQuestion];  // Holt die aktuelle Frage aus dem Array 'questions' basierend auf 'currentQuestion'.

    document.getElementById('end-screen').style = ''; // Endbildschirm anzeigen.
    document.getElementById('question-body').style = 'display: none'; // Fragenbildschirm ausblenden.
    document.getElementById('amount-of-questions').innerHTML = questions.length; // Anzahl der Fragen anzeigen.
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions; // Anzahl der richtig beantworteten Fragen anzeigen.
    document.getElementById('header-img').src = './img/trophy.png'; // Bild im Header ändern.
}


function updateProgressBar() {
        // Wenn noch Fragen übrig sind, zeige die nächste Frage an.
        let percent = (currentQuestion + 1) / questions.length; // Berechnet den Fortschritt in Prozent.
        percent = Math.round(percent * 100); // Rundet den Fortschritt auf die nächste ganze Zahl.

        document.getElementById('progress-bar').innerHTML = `${percent} %`; // Fortschritt in Prozent anzeigen.
        document.getElementById('progress-bar').style = `width: ${percent}%`; // Fortschrittsbalken anpassen.
}



function updateToNextQuestion() {
    document.getElementById('current-question').innerHTML = currentQuestion + 1; // Zeigt die aktuelle Fragezahl an.
    document.getElementById('questiontext').innerHTML = question['question']; // Zeigt die Frage an.
    document.getElementById('answer_1').innerHTML = question['answer_1']; // Zeigt die erste Antwort an.
    document.getElementById('answer_2').innerHTML = question['answer_2']; // Zeigt die zweite Antwort an.
    document.getElementById('answer_3').innerHTML = question['answer_3']; // Zeigt die dritte Antwort an.
    document.getElementById('answer_4').innerHTML = question['answer_4']; // Zeigt die vierte Antwort an.
}


function answer(selection) {    // Überprüft die ausgewählte Antwort.
    let question = questions[currentQuestion];  // Holt die aktuelle Frage aus dem Array 'questions'.

    let selectedQuestionNumber = selection.slice(-1);   // Schneidet das letzte Zeichen der 'selection' Zeichenkette ab und speichert es in 'selectedQuestionNumber'.
    
    let idOfRightAnswer = `answer_${question['right_answer']}`; // Konstruiert die ID der richtigen Antwort basierend auf der 'right_answer' Eigenschaft der Frage.

    if (selectedQuestionNumber == question['right_answer']) {   // Wenn die ausgewählte Antwort richtig ist...
        document.getElementById(selection).parentNode.classList.add('bg-success');  // Markiere die richtige Antwort grün.
        audio_success.play();
        rightQuestions++; // Erhöhe die Anzahl der richtig beantworteten Fragen.
        } else {
        // Wenn die ausgewählte Antwort falsch ist...
        document.getElementById(selection).parentNode.classList.add('bg-danger');   // Markiere die falsche Antwort rot.
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');    // Markiere die richtige Antwort grün.
        audio_fail.play();
    }
    document.getElementById('next-button').disabled = false;    // Aktiviert den "Weiter"-Button.
}

function nextQuestion() {
    // Geht zur nächsten Frage.
    currentQuestion++; // Erhöht den Index der aktuellen Frage um 1.

    document.getElementById('next-button').disabled = true; // Deaktiviert den "Weiter"-Button.
    resetAnswerButtons(); // Setzt die Antwort-Buttons zurück.
    showQuestion(); // Zeigt die nächste Frage an.
}

function resetAnswerButtons() {
    // Setzt die Hintergrundfarben der Antwort-Buttons zurück.
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restartGame() {
    // Startet das Quiz neu.
    document.getElementById('header-img').src = './img/brainbg.jpg'; // Setzt das Bild im Header zurück.
    document.getElementById('question-body').style = ''; // Zeigt den Fragenbildschirm an.
    document.getElementById('end-screen').style = 'display: none'; // Blendet den Endbildschirm aus.
    
    rightQuestions = 0; // Setzt die Anzahl der richtig beantworteten Fragen zurück.
    currentQuestion = 0; // Setzt den Index der aktuellen Frage zurück.
    init(); // Initialisiert das Quiz.
}
