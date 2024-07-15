// function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    //Retrieve user's answer
    const selectAnswer = document.querySelector('Input[name="quiz"]:checked');

    // If no option is selected, do nothing 
    if (!selectedAnswer) {
        document.getElementById('feedback'.textContent = "Please select an answer");
        return;
    }

    const userAnswer = selectAnswer.value;

    // compare user's answer with the correct answer 
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('Click',checkAnswer);