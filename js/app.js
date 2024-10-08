
let arrayAmigos = [];
let numeroDeAmigos = 0;
let listaDeAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');

function adicionar () {

    let nomeDoAmigo = document.getElementById('nome-amigo').value;

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
    listaSorteio.textContent = '';
    while (i < numeroDeAmigos) {
        let indiceSorteio = Math.floor(Math.random() * numeroDeAmigos);
        if (!numerosSorteados.includes(indiceSorteio) && arrayAmigos[i] != arrayAmigos[indiceSorteio]) {
            numerosSorteados.push(indiceSorteio);
            i++;
        } else if (i == arrayAmigos.length - 1 && arrayAmigos[i] == arrayAmigos[indiceSorteio]) {
            sortear ();
            return;
        }
    }
    console.log(numerosSorteados);

    for (i = 0; i < numerosSorteados.length; i++) {
        let nomesListaSorteio = `${arrayAmigos[i]} --> ${arrayAmigos[numerosSorteados[i]]}`
        listaSorteio.innerHTML += `<p>${nomesListaSorteio}</p>`;
    }

}

function reiniciar () {
    arrayAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    numeroDeAmigos = 0;
    listaSorteio.textContent = '';
}