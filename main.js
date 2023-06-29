function verificaSeNumeroBeMaiorqueNumeroA(){
    const valorA = document.getElementById('valor-a').value;
    const valorB = document.getElementById('valor-b').value;
    
    if(valorB > valorA) {
        alert('valor do campo B e maior que do campo A');
    } else {
        alert('valor do campo A e maior que do campo B');
    }
}




