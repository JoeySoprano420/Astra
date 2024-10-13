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

async function jitCode(compiledCode) {
    const response = await fetch('/jit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ compiledCode }),
    });
    return response.json();
}
