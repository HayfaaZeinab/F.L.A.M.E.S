function calculateFlames() {
    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s+/g, '');

    if (!name1 || !name2) {
        document.getElementById('result').innerText = 'Please enter both names!';
        return;
    }

    // Remove common letters
    let combined = name1 + name2;
    for (let char of name1) {
        if (name2.includes(char)) {
            combined = combined.replace(char, '');
            combined = combined.replace(char, '');
        }
    }

    const count = combined.length;

    // FLAMES logic
    const flames = ['Friends', 'Lovers', 'Attaction', 'Marriage', 'Enemies', 'Siblings'];
    const taglines = [
        "Forever together...friends for life!!!",
        "GO... Propose her NOWWW!!! ",
        "The pull is real...just like magnets!!!",
        "Wedding bells are ringinggg !!! ",
        "My boy...Runnnn!!! ",
        "Congratss...You got a sibiling!!!"
    ];

    let index = count % flames.length;
    const resultType = index === 0 ? flames[flames.length - 1] : flames[index - 1];
    const tagline = index === 0 ? taglines[flames.length - 1] : taglines[index - 1];

    // Display result with tagline
    document.getElementById('result').innerHTML = `
        <h3>You are: ${resultType}! </h3>
        <p>${tagline}</p>
    `;
}
