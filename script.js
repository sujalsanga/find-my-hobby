const questions = [
    { text: "Do you prefer indoor or outdoor activities?", options: ["Indoor", "Outdoor"] },
    { text: "Do you like creative or physical activities?", options: ["Creative", "Physical"] },
    { text: "Do you prefer doing activities alone or in a group?", options: ["Alone", "Group"] },
    { text: "Do you enjoy working with your hands?", options: ["Yes", "No"] },
    { text: "Do you like competitive or relaxing activities?", options: ["Competitive", "Relaxing"] }
];

let answers = [];
let currentQuestionIndex = 0;

// Start Quiz when the button is clicked
document.getElementById("start-btn").addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Quiz Started!");
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("question-container").classList.remove("hidden");
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionText = document.getElementById("question-text");
        const optionsContainer = document.getElementById("options-container");

        questionText.textContent = questions[currentQuestionIndex].text;
        optionsContainer.innerHTML = "";

        questions[currentQuestionIndex].options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = function () {
                answers.push(option);
                currentQuestionIndex++;
                nextQuestion();
            };
            optionsContainer.appendChild(button);
        });

    } else {
        suggestHobby();
    }
}

function suggestHobby() {
    console.log("User Answers:", answers);

    let hobbyOptions = [];

    if (answers.includes("Indoor")) {
        if (answers.includes("Creative")) {
            hobbyOptions.push("Painting 🎨", "Photography 📸", "Writing ✍️", "Music Production 🎵", "Cooking 🍳");
        }
        if (answers.includes("Physical")) {
            hobbyOptions.push("Yoga 🧘", "Dancing 💃", "Martial Arts 🥋", "Table Tennis 🏓");
        }
        if (answers.includes("Relaxing")) {
            hobbyOptions.push("Reading 📚", "Journaling 📝", "Meditation 🕯️", "Puzzles 🧩");
        }
        if (answers.includes("Competitive")) {
            hobbyOptions.push("Chess ♟️", "Board Games 🎲", "E-Sports 🎮", "Speed Cubing ⏳");
        }
    }

    if (answers.includes("Outdoor")) {
        if (answers.includes("Physical")) {
            hobbyOptions.push("Cycling 🚴‍♂️", "Running 🏃‍♀️", "Hiking 🥾", "Swimming 🏊‍♂️", "Rock Climbing 🧗");
        }
        if (answers.includes("Creative")) {
            hobbyOptions.push("Nature Photography 📷", "Gardening 🌱", "Sketching Landscapes 🎨");
        }
        if (answers.includes("Competitive")) {
            hobbyOptions.push("Football ⚽", "Basketball 🏀", "Badminton 🏸", "Cricket 🏏");
        }
        if (answers.includes("Relaxing")) {
            hobbyOptions.push("Fishing 🎣", "Bird Watching 🦜", "Stargazing 🌌", "Camping ⛺");
        }
    }

    if (answers.includes("Alone")) {
        hobbyOptions.push("Solo Travel 🌍", "Blogging ✍️", "Learning a New Language 🌎", "Coding 💻");
    }

    if (answers.includes("Group")) {
        hobbyOptions.push("Theater Acting 🎭", "Karaoke 🎤", "Cooking with Friends 👩‍🍳", "Volunteering ❤️");
    }

    if (hobbyOptions.length === 0) {
        hobbyOptions.push("Exploring New Hobbies 🤔", "Trying DIY Projects 🛠️", "Listening to Podcasts 🎧");
    }

    let selectedHobbies = hobbyOptions.slice(0, 3).join(", "); // Suggest 3 hobbies

    console.log("Suggested Hobbies:", selectedHobbies);

    document.getElementById("question-container").style.display = "none";
    const resultElement = document.getElementById("hobbyResult");
    resultElement.textContent = "Your suggested hobbies: " + selectedHobbies;
    resultElement.classList.remove("hidden");
}