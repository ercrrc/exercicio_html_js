const form = document.getElementById('form-cadastro');
let linhas = '';

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputContato = document.getElementById('contato');
    

    let linha = `<tr>`;
    linha += `<td>${inputNomeCompleto.value}</td>`;
    linha += `<td>${inputContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeCompleto.value = '';
    inputContato.value = '';
});





