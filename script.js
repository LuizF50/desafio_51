document.getElementById('calcular').addEventListener('click', function () {
    const entrada = document.getElementById('entrada').value;

    // Converter entrada para array numérico
    const numeros = entrada.split(',')
        .map(num => num.trim())
        .filter(num => !isNaN(num))
        .map(Number);

    if (numeros.length === 0) {
        alert('Por favor, insira números válidos separados por vírgula!');
        return;
    }

    const sequencia = ordenarPortais(numeros);
    document.getElementById('resultado').innerHTML = `
        <h3>Sequência Mágica Revelada:</h3>
        <div class="sequencia">${sequencia}</div>
    `;
});

// Função de ordenação mantida igual
function ordenarPortais(numeros) {
    const arr = numeros.map(String);
    let trocado;
    do {
        trocado = false;
        for (let i = 0; i < arr.length - 1; i++) {
            const a = arr[i];
            const b = arr[i + 1];
            if ((b + a) > (a + b)) {
                [arr[i], arr[i + 1]] = [b, a];
                trocado = true;
            }
        }
    } while (trocado);
    return arr.join('').replace(/^0+/, '0');
}
