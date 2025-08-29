function showError(message, duration = 5) {
    const errorParent = document.getElementById("error");
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = message + "&nbsp;&nbsp;";
    errorParent.style.animation = "none";
    void errorParent.offsetWidth;
    errorParent.style.animation = duration + "s error cubic-bezier(0, 1, 0, 1.2)";
}

function ageInput(input) {
    document.getElementById("age-label").textContent = `Age (${input.value} Years Old)`;
}

document.getElementById("age").addEventListener("keydown", (e) => {
    e.preventDefault();
});

const backButtons = document.getElementsByClassName("back");
for (let item of backButtons) {
    item.addEventListener("click", () => {
        const version = item.parentNode.parentNode.id;
        let nextVersion = "v" + (parseInt(version.slice(1)) - 1)
        
        document.getElementById(version).style.display = "none";
        document.getElementById(nextVersion).style.display = "flex";
    })
}

function openPopup(text = terms) {
    const popupText = document.getElementById("popup-text");
    popupText.textContent = text;
    popupText.parentNode.style.opacity = "1";
    popupText.parentNode.style.visibility = "visible";
}

function generateFunnyQuestion() {
    const adjectives = ["suspicious", "grumpy", "fashionable", "funny", "heroic"];
    const nouns = ["potato", "lasagna", "onion", "cucumber", "pancake", "chrimp", "chicken"];
    const tasks = ["babysit my potato", "deliver pizza to me at midnight", "design a website", "run for president", "keep my darkest secret"];

    const adj = adjectives[Math.floor(Math.random()*adjectives.length)];
    const noun = nouns[Math.floor(Math.random()*nouns.length)];
    const task = tasks[Math.floor(Math.random()*tasks.length)];
    return `I trust a ${adj} ${noun} to ${task}.`;
}
document.getElementById("funny-question-label").textContent = generateFunnyQuestion();
const terms = `Terms of Service & Privacy Policy

Welcome, human, alien, sentient AI, or friendly cat watching over this page. By clicking “I Agree,” you are officially entering into an agreement with Totally Real Company™ (hereafter “TRC,” “we,” “us,” or “the mysterious cookie lovers who sometimes drink coffee”). This document is very long, very silly, and mostly harmless. Prepare yourself for hundreds of lines of pure fun.

1. Acceptance of Terms

1. By using our services, you confirm you are either a real human or a very polite imaginary friend.
2. You accept that random emojis may appear spontaneously in your mind while reading.
3. You agree that clicking “I Agree” may result in sudden bouts of happiness.
4. If you are reading this aloud, you might notice some weird looks from your pets.
5. You promise not to teach squirrels to code using our platform.
6. We reserve the right to rename Tuesdays to "Extra Fun Day" at any moment.
7. If a penguin tries to sign up, we welcome it fully.
8. Please do not attempt to argue with your screen; it may ignore you.
9. If a cat walks on your keyboard, we assume full moral responsibility.
10. By scrolling, you acknowledge that scrolling is a physically and morally important activity.

2. Account Responsibilities

1. Your username and password are yours. Guard them like a treasure chest full of virtual cookies.
2. If someone guesses your password, you may feel a little sad. That is normal.
3. You may not convince our servers to dance salsa unless we specifically ask.
4. Forgotten passwords should first be tried as “password123” or “ilovecats.”
5. Repeating the phrase “I love TRC” may improve your memory.
6. Your account may be suspended if you send too many gifs of dancing hamsters.
7. Please do not teach robots how to tell jokes on our platform.
8. You agree not to upload sandwiches, unless you promise to share pictures.
9. You accept that sometimes the website will display random animations for fun.
10. You are responsible for any virtual plants you accidentally kill.

3. Content You Provide

1. Any photos, text, or memes you upload are mostly yours.
2. TRC reserves the right to show your content to aliens, friendly squirrels, and neighbors who like cats.
3. Emoji interpretations may be wildly inaccurate.
4. If you upload a sandwich recipe, we will treat it like a sacred scroll.
5. Videos of dancing pets are encouraged.
6. GIFs must contain at least a 10% chance of humor.
7. Please avoid memes about missing socks; they are a sensitive topic.
8. We are not responsible for virtual spaghetti accidents.
9. If you accidentally upload a hologram, we accept it with gratitude.
10. Posting too many puns may cause the website to giggle uncontrollably.

4. Weird Stuff We Collect

1. Name, email, favorite sandwich, favorite emoji, and pet names.
2. IP address (to ensure you are not a sneaky robot).
3. Mouse movement patterns and scrolling speed.
4. Keyboard sounds, if audible.
5. Random hiccups that might be detectable by highly trained squirrels.
6. We may track how many times you blink.
7. Accidental cosmic rays hitting your device are noted but not our fault.
8. Your taste in digital confetti is logged.
9. We may collect the number of times you laugh at cat memes.
10. We promise to keep your secrets safe, unless your cat spills them.

5. Prohibited Activities

1. Hacking, cheating, or causing servers to dance without permission.
2. Posting spoilers for movies, TV shows, or books.
3. Pretending to be a taco or pineapple, unless you have a costume.
4. Excessive meme posting beyond the reasonable human limit.
5. Attempting to teach squirrels to play chess.
6. Convincing your pet that they need to code.
7. Using our platform to annoy penguins.
8. Sharing your sandwich recipes as top secret.
9. Creating virtual juggling competitions without supervision.
10. Excessive tickling of keyboards.

6. Privacy Policy

1. Your privacy is respected almost as much as pizza.
2. Data is stored on secure servers guarded by highly trained squirrels.
3. Anonymous stats may be shared with aliens, penguins, or friendly robots.
4. Accidental leaks from cosmic rays are not our fault.
5. Contact us via carrier pigeon or very polite smoke signals if needed.
6. We will never sell your leftover digital cookies.
7. We may track how often you blink during long scrolling sessions.
8. Your choice of socks may remain confidential.
9. We respect your personal playlist choices.
10. Any digital confetti thrown in your direction is safe.

7. Termination

1. Accounts may be suspended for excessive memes or joke overload.
2. Attempts to convince servers they are sentient may result in a gentle scolding.
3. Laughing too loudly may cause temporary account suspension.
4. Not laughing at our jokes may also cause mild judgment.
5. Disputes may be resolved with rock-paper-scissors.
6. Thumb wars may be used as tie-breakers.
7. Interpretive dance may be encouraged.
8. Excessive snack consumption while using the site is noted.
9. If your pet logs in accidentally, we promise to be understanding.
10. Long scrolling sessions are strongly recommended.

8. Liability

1. TRC is not responsible for missing emojis.
2. TRC is not responsible for staring contests lost against mirrors.
3. Accidental digital spaghetti consumption is not our fault.
4. Mild existential dread caused by reading this TOS is normal.
5. Uncontrollable laughter is highly encouraged.
6. Virtual cookie theft is possible but rare.
7. Dancing in your chair while scrolling may be dangerous.
8. Pet interruptions are expected.
9. We are not liable for sudden urges to make pancakes.
10. Any typos are part of the charm.

9. Modifications

1. Terms may change at any time.
2. Notifications may include carrier pigeons or interpretive dance.
3. Checking updates is optional.
4. Ignoring updates is acceptable.
5. Reading updates may cause spontaneous giggling.
6. Updates may involve confetti.
7. We may add more jokes over time.
8. Some updates may include virtual balloons.
9. Minor hiccups in reading this document are normal.
10. We reserve the right to update at any moment for fun.

10. Miscellaneous

1. If any part of this agreement is invalid, the rest still applies.
2. The agreement is governed by the laws of Planet Earth.
3. Haiku disputes may be accepted.
4. Interpretive dance arguments are strongly encouraged.
5. Any resemblance to legal documents is purely coincidental.
6. Pets may be involved in optional dispute resolution.
7. Random scrolling may reveal hidden jokes.
8. Hovering may trigger playful messages.
9. Excessive blinking may result in compliments.
10. Agreement to these terms may increase happiness by a small but measurable amount.
11. If we ask you to prove that you have read this, just answer (potato123potatostrongerthanpotato)

11. Filler Section (Because We Can)

1. Seriously, keep scrolling.
2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
3. Repeat ad infinitum.
4. You may feel compelled to grab a snack.
5. Cats are always watching.
6. Virtual confetti is sprinkled randomly.
7. The next line contains no important information.
8. But it does contain happiness.
9. Smile.
10. Keep going.

11. Bonus Filler Section (Continued)

8. By continuing to scroll, you acknowledge that scrolling is an activity of significant importance, both physically and metaphysically.
9. We may, at our discretion, add completely unnecessary footnotes about the nutritional value of imaginary digital sandwiches.
10. If you sneeze while reading this, you accept full responsibility for any virtual crumbs that may fall onto your screen.
11. Hovering over this text may result in unexpected feelings of nostalgia, mild confusion, or the sudden urge to adopt a pet rock.
12. Any resemblance to actual laws, ordinances, or regulations is purely coincidental, coincidentally pure, or purely coincident.
13. Repeat after us silently: “I am totally, 100%, undeniably ready to agree.”
14. Or shout it, whichever feels right for you.

12. Advisory Notes About Reading This Document

1. Reading this document for fun is encouraged but not mandatory.
2. Reading this document seriously may result in an existential crisis lasting approximately 42 minutes.
3. Skipping to the end is permitted, though we strongly recommend at least pretending to care.
4. If you have reached this point without blinking, congratulations. You are a human (or something very similar).
5. Please remember: random emojis may appear spontaneously in your mind; this is normal.

13. Legalese-ish Section (With a Twist)

1. TRC holds the right to make arbitrary statements about the universe.
2. We reserve the right to rename Mondays to “Fluffy Cat Day” at any time.
3. Any disputes arising from this agreement shall be settled by:
   * A polite handshake
   * A riddle contest
   * A competitive thumb war
4. If no resolution can be reached, parties may submit arguments written entirely in haikus.
5. Submitting arguments via interpretive dance is strongly encouraged but not mandatory.

14. Obligatory Repetitions Section

1. You agree to agree.
2. You agree that agreeing is fun.
3. You may disagree if you want, but we will pretend you didn’t.
4. You agree to keep scrolling, because stopping now would be socially unacceptable.
5. Scroll responsibly.

15. Hypothetical Scenarios Section

1. If a penguin uploads a meme to our platform, it shall be treated with the utmost respect.
2. If an alien accesses this TOS, we assume they understand English perfectly, though we welcome Google Translate assistance.
3. If you discover a secret backdoor to Narnia, please inform us so we can add it to our “fun features” list.
4. If a time traveler attempts to edit this document from the past, present, or future, all edits are retroactively approved.
5. If a cat walks across your keyboard while reading, TRC assumes full moral responsibility for any typos created.

16. Optional Emoji Guidelines

1. 👍 = agreement
2. 👎 = disagreement (but we still consider you agreed)
3. 🤯 = mild existential awe
4. 🥲 = “I can’t believe I’m reading this”
5. 🐱 = mandatory cat appreciation
6. 🥪 = recommended snack while scrolling

17. Extremely Important Random Notes

1. You may find yourself questioning the nature of reality while reading this TOS. This is normal.
2. Repeating the phrase “I love totally real companies” aloud may improve comprehension slightly.
3. If your computer freezes, please gently remind it that it is, in fact, a machine.
4. Any typos in this document are intentional, unintentional, and semi-intentional all at once.
5. We may ask you to scroll back to previous sections to ensure comprehension, even if no one is watching.

18. Lorem Ipsum-ish Filler Section

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`