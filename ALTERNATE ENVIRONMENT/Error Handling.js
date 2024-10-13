// Example in frontend
loadButton.addEventListener('click', async () => {
    try {
        const url = document.getElementById('url-input').value;
        await compileCode(url);
        // Load compiled code into iframe, etc.
    } catch (error) {
        console.error('Error loading the URL:', error);
        alert('Failed to load URL. Please try again.');
    }
});
