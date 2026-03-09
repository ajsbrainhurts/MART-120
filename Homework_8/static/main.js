function formValidation(e) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "") {
        e.preventDefault();
        formName.focus();
        return;
    }
    if (email === "") {
        e.preventDefault();
        return;
    }
}
function termsValidation(e) {
    let answer = document.querySelector(
        'input[name="answer"]:checked');
    if (answer === null) {
        e.preventDefault();
        document.getElementById("terms-error-msg").innerHTML = "Please select an answer!";
        return;
    }
    if (answer.value === 'no') {
        e.preventDefault();
        document.getElementById("terms-error-msg").innerHTML = "Please?";
        return;
    }
}