document.addEventListener("DOMContentLoaded", function () {
    const revealButton = document.getElementById("revealButton");
    const audio = document.getElementById("myAudio");
    const body = document.body;
    const revealedContent = document.querySelector(".first-container");

    revealButton.addEventListener("click", function () {
        body.classList.toggle("hidden"); // Toggle the 'hidden' class on body
        revealedContent.style.display = "flex"; // Show the container
        audio.play();
    });
});
