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
        "question": "Welcher HTML-Tag wird verwendet, um ein Bild einzubinden?",
        "answer_1": "<picture>",
        "answer_2": "<img>",
        "answer_3": "<image>",
        "answer_4": "<src>",
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
        "answer_1": "var",
        "answer_2": "int",
        "answer_3": "declare",
        "answer_4": "variable",
        "right_answer": 1
    }
];


let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    // Deklariert eine Funktion namens 'answer', die eine Eingabe 'selection' erwartet.
    
    let question = questions[currentQuestion];
    // Holt die aktuelle Frage aus dem Array 'questions' mit dem Index 'currentQuestion'
    // und speichert sie in der Variablen 'question'.
    
    console.log('Selected answer is', selection);
    // Gibt die ausgewählte Antwort in der Konsole aus.
    
    let selectedQuestionNumber = selection.slice(-1);
    // Schneidet das letzte Zeichen der 'selection'-Zeichenkette ab und speichert es in 'selectedQuestionNumber'.
    // Dies wird angenommen, dass die Auswahl eine Zeichenkette ist und die Nummer der Antwort am Ende steht.
    
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    // Gibt die ausgewählte Antwortnummer in der Konsole aus.
    
    console.log('Current question is', question['right_answer']);
    // Gibt die richtige Antwort der aktuellen Frage in der Konsole aus.
    
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        // Überprüft, ob die ausgewählte Antwortnummer mit der richtigen Antwort übereinstimmt.

        console.log('Richtige Antwort!!!');
        // Wenn die Antwort richtig ist, wird 'Richtige Antwort!!!' in der Konsole ausgegeben.

        document.getElementById(selection).parentNode.classList.add('bg-success');
        // Findet das HTML-Element mit der ID, die der 'selection' entspricht.
        // Fügt der übergeordneten Node (z.B. einem <div>) des Elements die CSS-Klasse 'bg-success' hinzu,
        // um die Auswahl als richtig zu markieren (durch eine grüne Hintergrundfarbe).
    } else {
        console.log('Falsche Antwort');
        // Wenn die Antwort falsch ist, wird 'Falsche Antwort' in der Konsole ausgegeben.

        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        // Findet das HTML-Element mit der ID, die der 'selection' entspricht.
        // Fügt der übergeordneten Node (z.B. einem <div>) des Elements die CSS-Klasse 'bg-danger' hinzu,
        // um die Auswahl als falsch zu markieren (durch eine rote Hintergrundfarbe).
    }
}
