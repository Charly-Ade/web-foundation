const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "jupiter"
    },
    {
        question: "Who is the best football player in the world?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappe"],
        answer: "lionel messi"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Vienna", "Zurich", "Berlin", "Stockholm"],
        answer: "berlin"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        answer: "tokyo"
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "pacific ocean"
    },
    {
        question: "Who is the president of the United States?",
        options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
        answer: "Donald Trump"
    }
];

const prevbutton = document.getElementById("prev");
const nextbutton = document.getElementById("next");
const questionElement = document.getElementById("question");    
const optionsElement = document.getElementById("option");

const makeCounter = () => {
    let count = 0;
    return {
        decrement: function() {
            if (count > 0) {
                count--;
            };
            return count;
            },
            increment: function() {
                count++
                return count
            }
    }
}
const counter = makeCounter();

const displayQuestion = (index) => {
    const questionData = questions[index];
    questionElement.innerHTML = `<h3>Q${index + 1}: ${questionData.question}</h3>`;
    optionsElement.innerHTML = questionData.options.map(option => 
        `<button class="option-button">${option}</button>`).join("");
};
prevbutton.addEventListener("click", () => {
    const index = counter.decrement();
    displayQuestion(index);
});
nextbutton.addEventListener("click", () => {
    const index = counter.increment();
    displayQuestion(index);
});
//initial display of the first question
displayQuestion(0);