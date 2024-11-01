console.log('Welcome! To My Netflix Clone.............');
//  code for email secttion......................
function validateEmail() {
    const emailInput = document.getElementById("email");
    if (emailInput.value === "") {
        emailInput.placeholder = "Invalid Input!";
        emailInput.value = ""; // Clear any existing text
    } else {
        emailInput.placeholder = "Account not Found!!!";
        emailInput.value = ""; // Clear the input field
    }
}

// code for questions section.................
function toggleAnswer(element) {
    // Select the answer div related to the clicked question
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.svg img');

    // Check if the selected answer is currently visible
    if (answer.style.display === 'block') {
        // If answer is visible, hide it and reset icon to plus
        answer.style.display = 'none';
        icon.classList.remove('rotate');
    } else {
        // Close all other answers and reset icons
        const allAnswers = document.querySelectorAll('.answer');
        const allIcons = document.querySelectorAll('.svg img');

        allAnswers.forEach(ans => ans.style.display = 'none');
        allIcons.forEach(icn => icn.classList.remove('rotate'));

        // Show the selected answer and rotate the icon to minus
        answer.style.display = 'block';
        icon.classList.add('rotate');
    }
}