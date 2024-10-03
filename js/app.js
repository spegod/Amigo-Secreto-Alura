let arrayAmigos = [];
let numeroDeAmigos = 0

function adicionar () {

    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    let listaDeAmigos = document.getElementById('lista-amigos');
    if (listaDeAmigos.textContent == '') {
        listaDeAmigos.textContent = nomeDoAmigo;
    } else {
        listaDeAmigos.textContent += `, ${nomeDoAmigo}`;
    }
    document.getElementById('nome-amigo').value = '';
    arrayAmigos.push(nomeDoAmigo);
    console.log(arrayAmigos);
    numeroDeAmigos++
}

function sortear () {
    let i = 0;
    let numerosSorteados = []
    while (i <= numeroDeAmigos) {
        let indiceSorteio = Math.floor(Math.random() * numeroDeAmigos);
        if (!numerosSorteados.includes(indiceSorteio)) {
            numerosSorteados.push(indiceSorteio);
            i++;
        }
    }
    console.log(numerosSorteados);
    console.log(numeroDeAmigos);
}

function reiniciar () {
    arrayAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
}