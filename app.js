const lsAmigo = document.getElementById('amigo'); 
const listaAmigos = [];
const ulAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById("resultado");


//añadir en la lista de amigos un nombre//
function agregarAmigo ( ) {
    if(lsAmigo.value === "") {
        alert ("debes ingresar un nombre")
    }
    listaAmigos.push(lsAmigo.value);
    ulAmigos.innerHTML += `<li>${lsAmigo.value} </li>`;
}

function sortearAmigo() {
    const random = Math.floor((Math.random () * listaAmigos.length));
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

