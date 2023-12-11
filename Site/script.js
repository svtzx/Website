document.addEventListener('DOMContentLoaded', function () {
    function loadAdditionalContent() {
        fetch('https://svtzx.com/Site/styles/maincontent.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch content: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                document.body.innerHTML = tempDiv.innerHTML;

                // AUDIO //
                const audio = document.getElementById('autoplayAudio');
                if (audio) {
                    audio.play();
                }
            })
            .catch(error => console.error('Error fetching content:', error));
    }
    var btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            loadAdditionalContent();
        });
    }
});
