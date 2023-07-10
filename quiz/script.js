const quizData = [
    {
        question: "What is the name of the biggest company in South Korea in 2022?",
        a: "Siemens",
        b: "LG Electronics",
        c: "Samsung",
        d: "Hyundai",
        correct: "c"
    }, {
        question: "What is the chemical symbol for silver?",
        a: "Au",
        b: "Ag",
        c: "Pb",
        d: "Al",
        correct: "b"
    }, {
        question: "What is the worlds smallest bird?",
        a: "Bee Hummingbird",
        b: "Hummingbird",
        c: "Vrabac",
        d: "Ghohub",
        correct: "a"
    }, {
        question: "What country won the very first FIFA World Cup in 1930?",
        a: "Paraguay",
        b: "Argentina",
        c: "Uruguay",
        d: "Croatia",
        correct: "c"
    }, {
        question: "Which animal can be seen on the Porsche logo?",
        a: "Lion",
        b: "Jaguar",
        c: "Horse",
        d: "Puma",
        correct: "c"
    }, {
        question: "What percentage of our bodies is made up of water?",
        a: "60-65%",
        b: "80-90%",
        c: "40-45%",
        d: "100%",
        correct: "a"
    }, {
        question: "What is the smallest country in the world?",
        a: "Luxemburg",
        b: "Nauru",
        c: "Monaco",
        d: "Vatikan",
        correct: "d"
    }, {
    question: "Which team has won last UEFA champions league title?",
    a: "Liverpul",
    b: "Real Madrid",
    c: "Barcelona",
    d: "Chelsea",
    correct: "b"
    }, {
        question: "What does WWW stand for in a website browser?",
        a: "World Wide Web",
        b: "World Websites Wiki",
        c: "Watson Wyatt Worldwide",
        d: "Internet explorer",
        correct: "a"
    }, {
        question: "Which is the only edible food that never goes bad?",
        a: "garlick",
        b: "onion",
        c: "honey",
        d: "salted meat",
        correct: "c"
    }, {
        question: "How many colors are there in the rainbow?",
        a: "5",
        b: "7",
        c: "9",
        d: "11",
        correct: "b"
    }, {
        question: "What is Earth's largest continent?",
        a: "Europe",
        b: "North America",
        c: "Afrika",
        d: "Asia",
        correct: "d"
    }, {
        question: "What is the smallest planet in our solar system?",
        a: "Earth",
        b: "Mercury",
        c: "Neptun",
        d: "Uranus",
        correct: "b"
    }, {
        question: "What is the capital city of Japan?",
        a: "Shanghai",
        b: "Seoul",
        c: "Tokyo",
        d: "Uranus",
        correct: "c"
    }, {
        question: "What is the highest mountain in Africa?",
        a: "Mount Kilimanjaro",
        b: "Mount Everest",
        c: "Mount McKinley",
        d: "Mount Aconcagua",
        correct: "a"
    }, {
        question: "What is the capital of Turkmenistan?",
        a: "Tashkent",
        b: "Ashgabat",
        c: "Bishkek",
        d: "Dushanbe",
        correct: "b"
    }, {
        question: "Which city is located on two continents?",
        a: "Istanbul",
        b: "Rome",
        c: "Madrid",
        d: "Paris",
        correct: "a"
    }, {
        question: "Which European country is divided into departments, not states or provinces?",
        a: "Spain",
        b: "Italy",
        c: "Portugal",
        d: "France",
        correct: "d"
    }, {
        question: "Which country is the largest in terms of land area?",
        a: "Canada",
        b: "China",
        c: "Russia",
        d: "United States",
        correct: "c"
    }, {
        question: "What is the smallest ocean in the world?",
        a: "Indian Ocean",
        b: "Arctic Ocean",
        c: "Southern Ocean",
        d: "Atlantic Ocean",
        correct: "c"
    }, {
        question: "Which country has won the most World Cup titles in men's soccer?",
        a: "Argentina",
        b: "Brazil",
        c: "Italy",
        d: "Germany",
        correct: "b"
    }, {
        question: "Which boxer is known as The Greatest?",
        a: "Sugar Ray Leonard",
        b: "Floyd Mayweather Jr",
        c: "Muhammad Ali",
        d: "Mike Tyson",
        correct: "c"
    }, {
        question: "Which country hosted the first modern Olympic Games in 1896?",
        a: "Greece",
        b: "France",
        c: "United Kingdom",
        d: "United States",
        correct: "a"
    }, {
        question: "Which tennis player has won the most Grand Slam singles titles in men's tennis history?",
        a: "Rafael Nadal",
        b: "Roger Federer",
        c: "Novak Djokovic",
        d: "Pete Sampras",
        correct: "b"
    }, {
        question: "Which country gifted the Statue of Liberty to the United States?",
        a: "France",
        b: "Italy",
        c: "Spain",
        d: "United Kingdom",
        correct: "a"
    }, {
        question: "Who is credited with inventing the telephone?",
        a: "Thomas Edison",
        b: "Alexander Graham Bell",
        c: "Albert Einstein",
        d: "Nikola Tesla",
        correct: "b"
    }, {
        question: "Who was the first person to step foot on the moon?",
        a: "Buzz Aldrin",
        b: "Michael Collins",
        c: "Neil Armstrong",
        d: "Yuri Gagarin",
        correct: "c"
    }, {
        question: "Which club has won the most UEFA Champions League titles in history?",
        a: "Real Madrid",
        b: "Barcelona",
        c: "Liverpool",
        d: "AC Milan",
        correct: "a"
    }, {
        question: "Who won the Ballon d'Or award for the best male footballer in 2021?",
        a: "Lionel Messi",
        b: "Cristiano Ronaldo",
        c: "Robert Lewandowski",
        d: "Kylian Mbape",
        correct: "c"
    }, {
        question: "Who is the most successful manager in the history of the English Premier League?",
        a: "Sir Alex Ferguson",
        b: "Arsène Wenger",
        c: "José Mourinho",
        d: "Pep Guardiola",
        correct: "a"
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const background = document.getElementById("color");
const bodyColor = document.getElementById("bodycolor");
background.addEventListener("click", function onClick(event) {
    //bodyColor.style.backgroundImage = "linear-gradient(90deg, #A100FFFF 0%, #71C4FFFF 100%)";
    //const backgroundColor = document.body.style.backgroundImage;
    /*if (document.body.style.backgroundImage === "linear-gradient(90deg, #A100FFFF 0%, #71C4FFFF 100%)") {
        document.body.style.backgroundImage = "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)";
    } else if(document.body.style.backgroundImage === "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)") {
        document.body.style.backgroundImage = "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)";
    } else {
        document.body.style.backgroundImage = "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)";
    }*/
    /*const backgroundColo = bodyColor.style.backgroundColor;
    if (backgroundColo === "purple") {
        bodyColor.style.backgroundColor = "blue";
        background.style.backgroundColor = "purple";

    } else {
        bodyColor.style.backgroundColor = "purple";
        background.style.backgroundColor = "blue";

    }*/

    const backgroundColo = bodyColor.style.backgroundImage;
    if (backgroundColo === "linear-gradient(90deg, rgb(161, 0, 255) 0%, rgb(113, 196, 255) 100%)") {
        bodyColor.style.backgroundImage = "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)";
        background.style.backgroundImage = "linear-gradient(90deg, rgb(161, 0, 255) 0%, rgb(113, 196, 255) 100%)";
    } else {
        bodyColor.style.backgroundImage = "linear-gradient(90deg, rgb(161, 0, 255) 0%, rgb(113, 196, 255) 100%)";
        background.style.backgroundImage = "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)";
    }
    
});

//const cheat = document.getElementById("h2");
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

const MAX_QUESTIONS = 30;


let currentQuiz = 0;
let score = 0;
let questionCounter = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    

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
//scoreText.innerText = quizData[currentQuiz].correct;

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

document.querySelector("div.cheat").addEventListener("click", function () {
    alert("Stop trying to cheat");
});

document.querySelector("div.restart").addEventListener("click", function () {
    location.reload();
});


submitBtn.addEventListener("click", () => {
    const answer = getSelected();


    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
            scoreText.innerText++;
            score++;
            
        }
        
    currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered corectly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Play Again</button>`;
    }
    }
});