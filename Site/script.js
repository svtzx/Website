document.addEventListener("DOMContentLoaded", function () {
    // Get the button and audio elements
    const revealButton = document.getElementById("revealButton");
    const audio = document.getElementById("myAudio");

    // Add a click event listener to the button
    revealButton.addEventListener("click", function () {
        // Show the content by removing the class that hides it
        document.querySelector(".first-container").classList.remove("hidden");

        // Play the audio
        audio.play();
    });
});
