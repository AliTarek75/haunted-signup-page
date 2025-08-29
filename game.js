let gameSkip = false;

document.getElementsByClassName("google")[0].onclick = () => {
    showError("Google's AI has decided this isn't the right app for you.")
}
document.getElementsByClassName("apple")[0].onclick = () => {
    showError("Sorry, apple integration was too expensive to add.")
}

const inputs = document.querySelectorAll('input');
const inputMap = Object.fromEntries(
    Array.from(inputs).map(input => [input.id, input])
);

inputMap["password"].addEventListener("copy", (event) => {
    event.preventDefault();
    showError("Cheating isn't allowed!")
});

const nextButtons = document.getElementsByClassName("next");
for (let item of nextButtons) {
    item.addEventListener("click", () => {
        const version = item.parentNode.parentNode.id;
        const nextVersion = "v" + (parseInt(version.slice(1)) + 1);
        
        if (version == "v1" && !gameSkip) {

            // ---- Email rules
            const emailRegexValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const email = inputMap["email"].value;
            if (!emailRegexValidator.test(email)) {
                showError("Please enter a valid email address");
                return;
            }

            if (email.split("@")[1] != "potato.potato") {
                showError("Email is not registered with the Official Department of Potatoes. Please provide a certified potato.potato address", 10);
                return;
            }

            if (email == "potato@potato.potato") {
                showError("That's my email. Get your own!", 10);
                return;
            }

            // ---- Password rules
            const password = inputMap["password"].value;
            if (password.length < 8) {
                showError("Your password must include at least 8 characters", 10);
                return;
            }
            if (!/[a-z]/.test(password)) { // lowercase test
                showError("Your password must include at least one lowercase letter", 10);
                return;
            }

            if (!/[A-Z]/.test(password)) { // uppercase test
                showError("Your password must include at least one uppercase letter", 10);
                return;
            }

            if (!/[0-9]/.test(password)) { // number test
                showError("Your password must include at least one number", 10);
                return;
            }

            if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) { // special character test
                showError("Your password must include at least one special character, not just plain old characters", 10);
                return;
            }

            // special password rules

            const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/;
            if (!emojiRegex.test(password)) { // emoji test
                showError("Your password must include at least one emoji", 10);
                return;
            }

            if (!password.toLowerCase().includes("potato")) { // potato test
                showError("Your password must include at least one potato", 10);
                return;
            }

            const currentDay = (new Date()).toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
            if (!password.toLowerCase().includes(currentDay)) { // Day test
                showError("Your password must include the current day of the week", 10);
                return;
            }
            
            if (!password.includes(52)) { // number of letters
                showError("Your password must include the number of letters in this error", 12);
                return;
            }

            // confirm password

            const confirmPassword = inputMap["confirm-password"].value.toLowerCase();
            const passwordReplaced = password.toLowerCase().replace(/o/g, "😮"); 
            if (confirmPassword == password.toLowerCase()) {
                showError("You wrote your confirmation password exactly as your password, did y😮u miss anything?", 12);
                return;
            }
            
            if (confirmPassword != passwordReplaced) {
                showError("Your confirmation password must be exactly as your password but replace every O with 😮", 12);
                return;
            }


        } else if (version == "v2") {
            
        } else if (version == "v3") {
            return;
        }
        
        document.getElementById(version).style.display = "none";
        document.getElementById(nextVersion).style.display = "flex";
    })
}