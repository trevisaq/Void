document.addEventListener('DOMContentLoaded', function () {
    var enviar = document.getElementById('enviar');
    var respostareal = 'fightclub';

    enviar.addEventListener('click', () => {
        let resposta = prompt('');

        if (resposta === respostareal) {
            alert('Isso mesmo!, até que não foi difícil');
            window.location.href = "";  // Redireciona para a próxima fase
        } 
        else if (resposta === '' || resposta === '') {
            alert('');
        }
        else {
            alert('ERRADO')
        }
    });
});
