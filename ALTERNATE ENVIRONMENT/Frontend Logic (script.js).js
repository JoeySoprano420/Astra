document.getElementById('load-button').addEventListener('click', async function() {
    try {
        const url = document.getElementById('url-input').value;
        const response = await compileCode(url);
        document.getElementById('browser-frame').src = response.compiledCode;
    } catch (error) {
        console.error('Error loading the URL:', error);
        alert('Failed to load URL. Please try again.');
    }
});

async function compileCode(code) {
    const response = await fetch('/compile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    });
    return response.json();
}
