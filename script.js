function showError(message) {
    const errorParent = document.getElementById("error");
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorParent.style.animation = "none";
    void errorParent.offsetWidth;
    errorParent.style.animation = "5s error cubic-bezier(0, 1.1, 0, 1.1)";
}