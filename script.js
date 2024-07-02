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

let rightQuestions = 0;
let currentQuestion = 0;
// Deklariert eine Variable 'currentQuestion', die den Index der aktuellen Frage speichert.
// Sie wird initial auf 0 gesetzt, um mit der ersten Frage im Array zu beginnen.

function init() {
    // Deklariert eine Funktion namens 'init', die initiale Aktionen ausführt.
    
    document.getElementById('all-questions').innerHTML = questions.length;
    // Findet das HTML-Element mit der ID 'all-questions' und setzt seinen Inhalt auf die Anzahl der Fragen.

    showQuestion();
    // Ruft die Funktion 'showQuestion' auf, um die aktuelle Frage anzuzeigen.
}

function showQuestion() {
    // Deklariert eine Funktion namens 'showQuestion', die die aktuelle Frage und ihre Antworten anzeigt.
    
    let question = questions[currentQuestion];
    // Holt die aktuelle Frage aus dem Array 'questions' basierend auf 'currentQuestion'
    // und speichert sie in der Variablen 'question'.

    if (currentQuestion >= questions.length) {
        //Show End Screen
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-img').src = './img/trophy.png';
    } else { //Show question

        let percent = (currentQuestion + 1)/ questions.length;
        percent = Math.round(percent * 100);

        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;
        console.log('Fortschritt', percent);

        let question = questions[currentQuestion];
    
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        // Setzt den Inhalt des HTML-Elements mit der ID 'questiontext' auf die Frage.
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        // Setzt den Inhalt des HTML-Elements mit der ID 'answer_1' auf die erste Antwort.
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        // Setzt den Inhalt des HTML-Elements mit der ID 'answer_2' auf die zweite Antwort.
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        // Setzt den Inhalt des HTML-Elements mit der ID 'answer_3' auf die dritte Antwort.
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        // Setzt den Inhalt des HTML-Elements mit der ID 'answer_4' auf die vierte Antwort.
    }
}

function answer(selection) {
    // Deklariert eine Funktion namens 'answer', die eine Eingabe 'selection' erwartet.
    
    let question = questions[currentQuestion];
    // Holt die aktuelle Frage aus dem Array 'questions' basierend auf 'currentQuestion'
    // und speichert sie in der Variablen 'question'.
    
    let selectedQuestionNumber = selection.slice(-1);
    // Schneidet das letzte Zeichen der 'selection'-Zeichenkette ab und speichert es in 'selectedQuestionNumber'.
    // Dies wird angenommen, dass die Auswahl eine Zeichenkette ist und die Nummer der Antwort am Ende steht.
    
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    // Konstruiert die ID der richtigen Antwort basierend auf der 'right_answer'-Eigenschaft der Frage.
    
    if (selectedQuestionNumber == question['right_answer']) {
        // Überprüft, ob die ausgewählte Antwortnummer mit der richtigen Antwort übereinstimmt.
        
        document.getElementById(selection).parentNode.classList.add('bg-success');
        // Findet das HTML-Element mit der ID, die der 'selection' entspricht.
        // Fügt der übergeordneten Node (z.B. einem <div>) des Elements die CSS-Klasse 'bg-success' hinzu,
        // um die Auswahl als richtig zu markieren (durch eine grüne Hintergrundfarbe).
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        // Findet das HTML-Element mit der ID, die der 'selection' entspricht.
        // Fügt der übergeordneten Node (z.B. einem <div>) des Elements die CSS-Klasse 'bg-danger' hinzu,
        // um die Auswahl als falsch zu markieren (durch eine rote Hintergrundfarbe).
        
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        // Findet das HTML-Element mit der ID der richtigen Antwort.
        // Fügt der übergeordneten Node des Elements die CSS-Klasse 'bg-success' hinzu,
        // um die richtige Antwort zu markieren (durch eine grüne Hintergrundfarbe).
    }
    document.getElementById('next-button').disabled = false;
    // Aktiviert den "Weiter"-Button, indem das 'disabled'-Attribut auf 'false' gesetzt wird.
}

function nextQuestion() {
    // Deklariert eine Funktion namens 'nextQuestion', die zur nächsten Frage geht.
    
    currentQuestion++;
    // Erhöht den Index der aktuellen Frage um 1, um zur nächsten Frage zu gehen.

    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
    // Ruft die Funktion 'showQuestion' auf, um die nächste Frage anzuzeigen.
}

function resetAnswerButtons() {
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
    document.getElementById('header-img').src = './img/brainbg.jpg';
    document.getElementById('question-body').style = '';
    document.getElementById('end-screen').style = 'display: none';
    
    rightQuestions = 0;
    currentQuestion = 0;
    init();

}