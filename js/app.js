
let arrayAmigos = [];
let numeroDeAmigos = 0;
let listaDeAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let childrenAmigos = listaDeAmigos.children;

function adicionar () {

    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    let nomeDoAmigoBack = document.getElementById('nome-amigo').value.toUpperCase();

    if (nomeDoAmigo == '') {
        alert('Insira o nome de um amigo!');
        return;
    } else if (arrayAmigos.includes(nomeDoAmigoBack)) {
        alert('Esse nome já foi adicionado!');
        document.getElementById('nome-amigo').value = '';
        return;
    }

    if (listaDeAmigos.textContent == '') {
        //listaDeAmigos.textContent = nomeDoAmigo;
        listaDeAmigos.innerHTML = `<a onclick="removerAmigo('${nomeDoAmigo}')" href="#" id="${nomeDoAmigo}" class="form__link">${nomeDoAmigo}</a>`;
    } else {
        //listaDeAmigos.textContent += `, ${nomeDoAmigo}`;
        listaDeAmigos.innerHTML += `<a onclick="removerAmigo('${nomeDoAmigo}')" href="#" id="${nomeDoAmigo}" class="form__link">, ${nomeDoAmigo}</a>`;
    }
    document.getElementById('nome-amigo').value = '';
    arrayAmigos.push(nomeDoAmigoBack);
    console.log(arrayAmigos);
    numeroDeAmigos++;
}

function sortear () {
    let i = 0;
    let numerosSorteados = [];
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
        let nomesListaSorteio = `${arrayAmigos[i]} --> ${arrayAmigos[numerosSorteados[i]]}`;
        listaSorteio.innerHTML += `<p>${nomesListaSorteio}</p>`;
    }

}

function reiniciar () {
    arrayAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    numeroDeAmigos = 0;
    listaSorteio.textContent = '';
}

function removerAmigo (nome) {
    let amigoRemovido = document.getElementById(`${nome}`);
    amigoRemovido.remove();
    arrayAmigos = arrayAmigos.filter(function(amigo) {
        return amigo !== nome;
    })
    numeroDeAmigos--
    console.log(arrayAmigos);
}