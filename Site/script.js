document.addEventListener('DOMContentLoaded', function () {
    // Function to load additional content
    function loadAdditionalContent() {
        // Use fetch to load the content from the specified URL
        fetch('https://svtzx.github.io/Website/Site/styles/maincontent.html')
            .then(response => response.text())
            .then(data => {
                // Replace the entire document's HTML with the loaded HTML
                document.documentElement.innerHTML = data;
            })
            .catch(error => console.error('Error fetching content:', error));
    }

    // Button click event listener
    var btn = document.querySelector('.btn');
    btn.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Load additional content when the button is clicked
        loadAdditionalContent();
    });
});