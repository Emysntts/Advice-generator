document.addEventListener('DOMContentLoaded', function () {
    const adviceTextElement = document.getElementById('adviceText');
    const generateButton = document.getElementById('gerar');
    const adviceNumberElement = document.getElementById('Advice'); 
    const apiUrl = 'https://api.adviceslip.com/advice';

    function fetchAdvice() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const advice = data.slip.advice;
                const adviceNumber = data.slip.id; 
                adviceTextElement.textContent = `"${advice}"`;
                adviceNumberElement.textContent = `ADVICE #${adviceNumber}`; 
            })
            .catch(error => console.error('Erro ao obter conselho:', error));
    }
    fetchAdvice();
    generateButton.addEventListener('click', fetchAdvice);
});

