let gameSkip = false;
let genderJoke = 0;
let allowedUsernames = [];
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

            // ---- confirm password
            const confirmPassword = inputMap["confirm-password"].value;
            const passwordReplaced = password.replace(/o/g, "😮").replace(/O/g, "😮"); 
            if (confirmPassword == password) {
                showError("You just wrote your confirmation password exactly as your password, did y😮u miss anything?", 12);
                return;
            }

            if (confirmPassword != passwordReplaced) {
                showError("Your confirmation password must be exactly as your password but replace every O with 😮", 12);
                return;
            }


        } else if (version == "v2") {
            // ---- full name
            const fullname = inputMap["full-name"].value;
            if (!fullname) {
                showError("Full name cannot be empty.", 10);
                return;
            }

            // ---- username
            const username = inputMap["username"].value;
            if (!username) {
                showError("Empty username? Are you for real?", 12);
                return;
            }
            if (username.length < 3) {
                showError("What is this tiny boring username, try something bigger", 12);
                return;
            }

            if (username.length > 35 && allowedUsernames.includes(username.toLowerCase())) {
                showError("yes, We did suggest that username but it's too long, oh well, try again", 12);
                return;
            }

            if (username.length > 35) {
                showError("Woah, hold on shakespeare, your username is too big", 12);
                return;
            }

            if (/^\d+$/.test(username)) {
                showError("What is this username, a phone number?!", 12);
                return;
            }

            if (username.toLowerCase() == "root" || username.toLowerCase() == "admin" || username.toLowerCase() == "potato") {
                showError("You are not the big boss here.", 12);
                return;
            }

            if (["dragonslayer", "coolguy123", "darkknight", "cool", "epicgamer", "ninja", "anonymous"].includes(username.toLowerCase())) {
                showError("That username is like taken by literally everyone. Be original", 12);
                return;
            }

            const charMatch = username.match(/[^a-zA-Z0-9_]/g)
            if (charMatch) {
                const char = charMatch[0]; // first bad character
                const funnyMessages = {
                    " ": "Spaces? What is this, a full sentence? Usernames don't breathe.",
                    "@": "Trying to sneak an email in here? Nice try, hacker.",
                    "#": "Sorry, hashtags are for social media, not usernames.",
                    "$": "We see you're trying to cash in with that $, but usernames don't pay rent.",
                    "!": "Woah! Excitement level: too high with that !. Please calm your username down.",
                    "&": "Usernames can't be in relationships. Leave the & out.",
                    "\"": "Usernames can't be quotes. Are you in a history lesson?",
                    "\'": "No quotes allowed in usernames. What are you, a philosopher?"
                };
                const msg = funnyMessages[char] || `Your username contains a character that is too fancy for us. Please stick to letters, numbers, or _.`;
                showError(msg, 12);
                return;
            }

            if (!allowedUsernames.includes(username.toLowerCase())) {
                usernameExtras = ["_but_cooler", "_lol", "_official", "_v2", "_potato", "_ultimate", "_legendary", "_this_totally_works"];
                let alt = username.toLowerCase() + Math.floor(Math.random()*100) + usernameExtras[Math.floor(Math.random()*usernameExtras.length)];
                showError(`Your username is already taken, try ${alt}`);
                allowedUsernames.push(alt);
                return;
            }

            // ---- Age rules
            const currentDate = new Date();
            const birthDate = new Date(inputMap["birth-date"].value);

            let ageCalculated = currentDate.getFullYear() - birthDate.getFullYear();
            const monthDiff = currentDate.getMonth() - birthDate.getMonth();
            const dayDiff = currentDate.getDate() - birthDate.getDate();

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                ageCalculated--; // hasn't had birthday yet this year
            }
            
            let age = inputMap["age"].value;

            if (ageCalculated != age) {
                showError("Hmm, something doesn't add up about that age and date of birth");
                return;
            }

            // ---- gender rules
            const varListvalues = [inputMap["gender-male"].labels[0].textContent, inputMap["gender-female"].labels[0].textContent, inputMap["gender-croissant"].labels[0].textContent];
            const varList = [inputMap["gender-male"].checked, inputMap["gender-female"].checked, inputMap["gender-croissant"].checked];
            const gender = varListvalues[varList.findIndex(v => v)];

            if (gender == undefined) {
                showError("No gender? I thought nothing can't be something");
                return;
            }

            if (gender != "Croissant" && genderJoke == 0) {
                showError("Only croissants are allowed");
                genderJoke++;
                return;
            }
            if (gender != "Croissant" && genderJoke == 1) {
                showError("I said only croissants are allowed");
                return;
            }
            if (gender == "Croissant" && genderJoke == 0) {
                showError("A croissant? interesting gender.");
                return;
            }
            if (gender == "Croissant" && genderJoke == 1) {
                showError("Just kidding, you are not a croissant, are you?");
                genderJoke++;
                return;
            }
            if (gender == "Croissant" && genderJoke >= 2) {
                showError("lright, let's be serious now — please pick from the real options");
                return;
            }

            // ---- password rule again
            if (!inputMap["password"].value.toLowerCase().includes(gender.toLowerCase())) {
                showError("Oh I forgot one more password rule, your password must contain your gender");
                return;
            }
            
        } else if (version == "v3") {
            return;
        }
        
        document.getElementById(version).style.display = "none";
        document.getElementById(nextVersion).style.display = "flex";
    })
}