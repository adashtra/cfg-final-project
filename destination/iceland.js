// Newsletter sign up
function newsletterSignUp() {
    let text;
    if (email.value === '') {
        text = "Please enter an email address";
    } else {
        text = "Thank you for subscribing to the Green Travel newsletter, you will receive your first email shortly.";
    }
    document.getElementById("message").innerHTML = text;
}