document.addEventListener("DOMContentLoaded", function () {
    const revealButton = document.getElementById("revealButton");
    const audio = document.getElementById("myAudio");

    revealButton.addEventListener("click", function () {
        document.body.classList.add("reveal");
        revealButton.classList.add("hidden");
        document.querySelector(".first-container").classList.remove("hidden");
        audio.play();
    });
});
