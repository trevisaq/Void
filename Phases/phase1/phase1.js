document.addEventListener('DOMContentLoaded', function () {
    var enviar = document.getElementById('enviar');
    var respostareal = 'clube';

    enviar.addEventListener('click', () => {
        let resposta = prompt('');

        if (resposta === respostareal) {
            alert('shiu!, alguém pode ouvir!');
            window.location.href = "../phase2/phase2.html";  
        } 
        else if (resposta === '' || resposta === '') {
            alert('');
        }
        else {
            alert('ERRADO')
        }
    });
});
